import { connectDB } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import { notFound } from "next/navigation";
import { after } from "next/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import InquiryForm from "./InquiryForm";

// Cache the rendered page for 60s instead of hitting the DB on every request.
// The view-count write happens separately (see `after` below) so it never
// blocks or bypasses this cache.
export const revalidate = 60;

function estimateReadTime(html: string) {
  const text = html.replace(/<[^>]*>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  await connectDB();

  // Read-only query — fetch only the fields this page actually renders,
  // and no $inc write here, so this can be served from cache.
  const post = await BlogPost.findOne({ slug, status: "published" })
    .select("title slug category featuredImage content publishedAt")
    .lean();

  if (!post) notFound();

  // Fire the view-count increment after the response has been sent,
  // so it never adds latency to the page load itself.
  after(async () => {
    await BlogPost.updateOne({ _id: post._id }, { $inc: { viewCount: 1 } });
  });

  const readMins = estimateReadTime(post.content);

  return (
    <>
      <Navbar />
      <div style={styles.page}>
        <div id="scroll-progress" suppressHydrationWarning />
        <div id="cursor-glow" suppressHydrationWarning />
        <div id="bg-scene" aria-hidden="true" suppressHydrationWarning>
          <span className="orb orb-a" />
          <span className="orb orb-b" />
          <span className="orb orb-c" />
          <div className="grid-plane" />
        </div>

        <article style={styles.container}>
          {/* suppressHydrationWarning: script adds "js-reveal"/"in-view" to this
              node's className after hydration, outside React's control. */}
          <div className="reveal" suppressHydrationWarning>
            <span style={styles.category}>{post.category}</span>
            <h1 style={styles.title} className="shimmer-title">
              {post.title}
            </h1>

            <div style={styles.metaRow}>
              {post.publishedAt && (
                <span style={styles.metaItem}>{formatDate(post.publishedAt)}</span>
              )}
              <span style={styles.metaDot}>&bull;</span>
              <span style={styles.metaItem}>{readMins} min read</span>
            </div>

            <div style={styles.accentLine} />
          </div>

          {post.featuredImage && (
            <figure id="tilt-card" className="reveal" suppressHydrationWarning>
              <Image
                src={post.featuredImage}
                alt={post.title}
                width={760}
                height={420}
                priority
                id="tilt-image"
              />
              <div id="tilt-glare" suppressHydrationWarning />
            </figure>
          )}

          {/* No `reveal` class here on purpose — the article text must always be visible,
              regardless of whether the decorative JS runs. */}
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="post-body"
          />

          <div style={styles.bottomNav}>
            <Link href="/blog" style={styles.backButton}>
              &larr; Back to all posts
            </Link>
          </div>

          <div style={styles.inquiryBox} className="reveal" suppressHydrationWarning>
            <span style={styles.inquiryEyebrow}>Have a project in mind?</span>
            <h3 style={styles.inquiryTitle}>Interested in this? Talk to us.</h3>
            <InquiryForm sourcePostSlug={post.slug} />
          </div>
        </article>
      </div>
      <Footer />

      <style>{`
        #scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          width: 0%;
          background: linear-gradient(90deg, #d9b46a, #c9302c);
          z-index: 100;
        }

        #cursor-glow {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(217,180,106,0.10), transparent 40%);
        }

        #bg-scene {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
          transform: translate3d(calc(var(--px, 0) * 26px), calc(var(--py, 0) * 26px), 0);
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.55;
          mix-blend-mode: screen;
          will-change: transform;
        }
        .orb-a {
          width: 560px; height: 560px; top: -180px; left: -120px;
          background: radial-gradient(circle at 30% 30%, #c9302c, transparent 70%);
          animation: driftA 22s ease-in-out infinite;
        }
        .orb-b {
          width: 460px; height: 460px; top: 30%; right: -140px;
          background: radial-gradient(circle at 40% 40%, #d9b46a, transparent 70%);
          animation: driftB 26s ease-in-out infinite;
        }
        .orb-c {
          width: 640px; height: 640px; bottom: -240px; left: 20%;
          background: radial-gradient(circle at 50% 50%, #7a0e0e, transparent 72%);
          animation: driftC 30s ease-in-out infinite;
        }
        .grid-plane {
          position: absolute;
          inset: -50% -20%;
          background-image:
            linear-gradient(rgba(217,180,106,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(217,180,106,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: rotateX(62deg) translateZ(-200px);
          opacity: 0.35;
          mask-image: radial-gradient(ellipse at 50% 20%, black, transparent 65%);
        }
        @keyframes driftA {
          0%, 100% { transform: translate3d(0,0,0) rotate(0deg) scale(1); }
          50% { transform: translate3d(60px,90px,80px) rotate(20deg) scale(1.15); }
        }
        @keyframes driftB {
          0%, 100% { transform: translate3d(0,0,0) rotate(0deg) scale(1); }
          50% { transform: translate3d(-70px,-50px,60px) rotate(-16deg) scale(1.1); }
        }
        @keyframes driftC {
          0%, 100% { transform: translate3d(0,0,0) rotate(0deg) scale(1); }
          50% { transform: translate3d(40px,-70px,100px) rotate(12deg) scale(1.08); }
        }

        .shimmer-title {
          background: linear-gradient(100deg, #f5f0e8 40%, #d9b46a 50%, #f5f0e8 60%);
          background-size: 220% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 6s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Reveal animation is opt-in via JS (adds .js-reveal), and force-visible
           after 1.2s no matter what, so a JS failure can never hide content. */
        .reveal.js-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .reveal.js-reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes forceVisible {
          to { opacity: 1; transform: none; }
        }
        .reveal.js-reveal:not(.in-view) {
          animation: forceVisible 0.01s 1.2s forwards;
        }

        #tilt-card {
          position: relative;
          margin: 0 0 48px;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(217,180,106,0.15);
          box-shadow: 0 24px 60px rgba(0,0,0,0.55);
          transition: transform 0.15s ease-out;
          will-change: transform;
        }
        #tilt-image { width: 100%; display: block; }
        #tilt-glare { position: absolute; inset: 0; pointer-events: none; mix-blend-mode: overlay; }

        @media (prefers-reduced-motion: reduce) {
          .orb, .grid-plane, .shimmer-title { animation: none !important; }
          .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
        }

        .post-body {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 18px;
          line-height: 1.9;
          color: #e5ded6;
          letter-spacing: 0.1px;
        }
        .post-body > p:first-of-type::first-letter {
          font-family: Georgia, serif;
          float: left;
          font-size: 64px;
          line-height: 52px;
          padding: 8px 10px 0 0;
          color: #d9b46a;
          font-weight: 700;
        }
        .post-body p { margin: 0 0 26px; }
        .post-body h2 {
          font-family: Georgia, serif;
          font-size: 27px;
          color: #f5f0e8;
          margin: 52px 0 20px;
          line-height: 1.35;
        }
        .post-body h3 {
          font-family: Georgia, serif;
          font-size: 21px;
          color: #f0e6da;
          margin: 40px 0 16px;
          line-height: 1.4;
        }
        .post-body h2 + p, .post-body h3 + p { margin-top: 0; }
        .post-body a {
          color: #d9b46a;
          text-decoration: underline;
          text-decoration-color: rgba(217,180,106,0.4);
          text-underline-offset: 3px;
        }
        .post-body a:hover { text-decoration-color: #d9b46a; }
        .post-body strong { color: #f5f0e8; font-weight: 700; }
        .post-body ul, .post-body ol { margin: 0 0 26px; padding-left: 26px; }
        .post-body li { margin-bottom: 12px; padding-left: 4px; }
        .post-body li::marker { color: #c9302c; }
        .post-body blockquote {
          margin: 40px 0;
          padding: 4px 0 4px 26px;
          border-left: 3px solid #c9302c;
          font-style: italic;
          font-size: 21px;
          line-height: 1.6;
          color: #f0e6da;
        }
        .post-body img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 36px 0;
          box-shadow: 0 16px 40px rgba(0,0,0,0.45);
        }
        .post-body code {
          background: rgba(217,180,106,0.12);
          color: #d9b46a;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 15px;
        }
        .post-body pre {
          background: rgba(0,0,0,0.35);
          border: 1px solid rgba(217,180,106,0.2);
          border-radius: 10px;
          padding: 20px;
          overflow-x: auto;
          margin: 32px 0;
        }
        .post-body hr {
          border: none;
          border-top: 1px solid rgba(245,240,232,0.12);
          margin: 48px 0;
        }

        @media (max-width: 640px) {
          .post-body { font-size: 16.5px; line-height: 1.8; }
          .post-body h2 { font-size: 23px; margin: 40px 0 16px; }
          .post-body h3 { font-size: 19px; margin: 32px 0 14px; }
          .post-body blockquote { font-size: 18px; padding-left: 18px; }
          .post-body > p:first-of-type::first-letter { font-size: 48px; line-height: 40px; }
          .orb { filter: blur(50px); opacity: 0.4; }
        }
      `}</style>

      <Script
        id="blog-post-fx"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              var scene = document.getElementById('bg-scene');
              var glow = document.getElementById('cursor-glow');
              var progress = document.getElementById('scroll-progress');
              var tiltCard = document.getElementById('tilt-card');
              var tiltGlare = document.getElementById('tilt-glare');
              var revealEls = document.querySelectorAll('.reveal');

              var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

              var px = 0, py = 0, tx = 0, ty = 0, raf = null;

              function onMouseMove(e) {
                tx = (e.clientX / window.innerWidth - 0.5) * 2;
                ty = (e.clientY / window.innerHeight - 0.5) * 2;
                if (glow) {
                  glow.style.setProperty('--gx', e.clientX + 'px');
                  glow.style.setProperty('--gy', e.clientY + 'px');
                }
              }

              function tick() {
                px += (tx - px) * 0.06;
                py += (ty - py) * 0.06;
                if (scene) {
                  scene.style.setProperty('--px', px.toFixed(3));
                  scene.style.setProperty('--py', py.toFixed(3));
                }
                raf = requestAnimationFrame(tick);
              }

              function onScroll() {
                var el = document.documentElement;
                var scrollable = el.scrollHeight - el.clientHeight;
                var pct = scrollable > 0 ? (el.scrollTop / scrollable) * 100 : 0;
                if (progress) progress.style.width = pct + '%';
              }

              if (tiltCard) {
                tiltCard.addEventListener('mousemove', function (e) {
                  var rect = tiltCard.getBoundingClientRect();
                  var pxr = (e.clientX - rect.left) / rect.width;
                  var pyr = (e.clientY - rect.top) / rect.height;
                  var rotateY = (pxr - 0.5) * 14;
                  var rotateX = (0.5 - pyr) * 14;
                  tiltCard.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.015,1.015,1.015)';
                  if (tiltGlare) {
                    tiltGlare.style.background = 'radial-gradient(circle at ' + (pxr * 100) + '% ' + (pyr * 100) + '%, rgba(255,255,255,0.22), transparent 60%)';
                  }
                });
                tiltCard.addEventListener('mouseleave', function () {
                  tiltCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
                  if (tiltGlare) tiltGlare.style.background = 'transparent';
                });
              }

              // Everything below mutates a className or style that React also renders,
              // so it's deferred until after hydration has fully committed to avoid
              // React re-diffing against a node it no longer recognizes.
              setTimeout(function () {
                if (!prefersReduced && 'IntersectionObserver' in window) {
                  revealEls.forEach(function (el) { el.classList.add('js-reveal'); });

                  var observer = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                      if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                      }
                    });
                  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

                  revealEls.forEach(function (el) { observer.observe(el); });
                }

                if (!prefersReduced) {
                  window.addEventListener('mousemove', onMouseMove);
                  raf = requestAnimationFrame(tick);
                }
                window.addEventListener('scroll', onScroll, { passive: true });
                onScroll();
              }, 0);
            })();
          `,
        }}
      />
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    position: "relative",
    background: "linear-gradient(180deg, #0a0a0a 0%, #120606 100%)",
    minHeight: "100vh",
    padding: "220px 0 64px",
    overflow: "hidden",
  },
  container: { position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto", padding: "0 24px" },
  category: {
    display: "block", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em",
    color: "#d9b46a", fontWeight: 600, marginBottom: 14,
  },
  title: { fontFamily: "Georgia, serif", fontSize: 42, margin: "0 0 18px", lineHeight: 1.22 },
  metaRow: { display: "flex", alignItems: "center", gap: 10, marginBottom: 28, fontSize: 14, color: "#a89a90" },
  metaItem: { color: "#a89a90" },
  metaDot: { color: "#7a0e0e" },
  accentLine: {
    width: 60, height: 3,
    background: "linear-gradient(90deg, #d9b46a, #c9302c)",
    marginBottom: 44, borderRadius: 2,
  },
  bottomNav: { display: "flex", justifyContent: "center", margin: "48px 0" },
  backButton: {
    display: "inline-block", padding: "14px 32px", borderRadius: 999,
    border: "1px solid rgba(217,180,106,0.35)", color: "#f5f0e8", fontSize: 14,
    letterSpacing: "0.03em", textDecoration: "none",
    background: "linear-gradient(135deg, rgba(122,14,14,0.4), rgba(20,4,4,0.5))",
  },
  inquiryBox: {
    marginTop: 8, padding: "32px 28px",
    background: "linear-gradient(135deg, rgba(122,14,14,0.35), rgba(20,4,4,0.6))",
    border: "1px solid rgba(201,48,44,0.35)", borderRadius: 14,
  },
  inquiryEyebrow: { display: "block", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "#d9b46a", fontWeight: 600, marginBottom: 10 },
  inquiryTitle: { fontFamily: "Georgia, serif", color: "#f5f0e8", marginTop: 0, marginBottom: 20, fontSize: 23 },
};