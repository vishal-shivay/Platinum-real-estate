import { connectDB } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import { notFound } from "next/navigation";
import { after } from "next/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import InquiryForm from "./InquiryForm";

// Cache the rendered page for 60s instead of hitting the DB on every request.
// The view-count write happens separately (see `after` below) so it never
// blocks or bypasses this cache.
export const revalidate = 60;

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

  return (
    <>
      <Navbar />
      <div style={styles.page}>
        <article style={styles.container}>
          <Link href="/blog" style={styles.backLink}>
            &larr; Back to all posts
          </Link>

          <span style={styles.category}>{post.category}</span>
          <h1 style={styles.title}>{post.title}</h1>
          <div style={styles.accentLine} />

          {post.featuredImage && (
            <div style={styles.imageWrap}>
              <Image
                src={post.featuredImage}
                alt={post.title}
                width={760}
                height={420}
                priority
                style={styles.image}
              />
            </div>
          )}

          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={styles.content}
            className="post-body"
          />

          <div style={styles.inquiryBox}>
            <h3 style={styles.inquiryTitle}>Interested in this? Talk to us.</h3>
            <InquiryForm sourcePostSlug={post.slug} />
          </div>
        </article>
      </div>
      <Footer />
      <style jsx global>{`
        .post-body p {
          margin: 0 0 20px 0;
        }
        .post-body p:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    background: "linear-gradient(180deg, #0a0a0a 0%, #120606 100%)",
    minHeight: "100vh",
    padding: "220px 0 64px",
  },
  container: { maxWidth: 760, margin: "0 auto", padding: "0 24px" },
  backLink: {
    display: "inline-block",
    color: "#d99a9a",
    fontSize: 14,
    textDecoration: "none",
    marginBottom: 28,
    padding: "8px 0",
  },
  category: {
    display: "block",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    color: "#d99a9a",
    marginBottom: 10,
  },
  title: { fontFamily: "Georgia, serif", fontSize: 38, color: "#f5f0e8", margin: "0 0 16px", lineHeight: 1.25 },
  accentLine: {
    width: 60,
    height: 3,
    background: "linear-gradient(90deg, #7a0e0e, #c9302c)",
    marginBottom: 32,
    borderRadius: 2,
  },
  imageWrap: {
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 36,
    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
  },
  image: { width: "100%", display: "block" },
  content: {
    lineHeight: 1.8,
    fontSize: 17,
    color: "#e5ded6",
  },
  inquiryBox: {
    marginTop: 56,
    padding: 28,
    background: "linear-gradient(135deg, rgba(122,14,14,0.35), rgba(20,4,4,0.6))",
    border: "1px solid rgba(201,48,44,0.35)",
    borderRadius: 14,
  },
  inquiryTitle: { fontFamily: "Georgia, serif", color: "#f5f0e8", marginTop: 0, fontSize: 22 },
};