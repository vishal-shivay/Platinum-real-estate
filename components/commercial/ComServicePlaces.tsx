"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    location: "Mohali",
    name: "RGI Grand Carnival",
    description: "RGI Grand Carnival is a premium commercial high-street project located on Airport Road in Aerocity, Mohali [rgigrandcarnival.com]. Developed by RGI Infra, the under-construction complex features a mix of double-height showrooms, modern office spaces, and a massive food court area. It offers premium amenities like ample parking, high-speed lifts, and excellent connectivity to the international airport.",
    images: ["", "", "", ""],
    theme: "dark",
    bgImage: "/images/com1-bg.png",
  },
  {
    id: 2,
    location: "",
    name: "Homeland Global Park",
    description: "Homeland Global Park is a premier commercial mega-development strategically located on Airport Road in Mohali. This destination blends high-street retail stores, executive office spaces, and upscale serviced residences into a single integrated hub. It creates a vibrant business and lifestyle ecosystem designed to serve corporate professionals and premium shoppers.",
    images: ["", "", "", ""],
    theme: "light",
    bgImage: null,
  },
  {
    id: 3,
    location: "",
    name: "Mohali Citi Centre",
    description: "Mohali Citi Centre is a premium commercial development featuring modern retail shops, spacious showrooms, and professional office suites along the prominent International Airport Road. This high-traffic hub delivers excellent visibility, spacious layouts with maximum usable area, and direct connectivity to major transit routes. It serves as an ideal location for business owners and investors looking to establish a presence in a rapidly growing commercial area.",
    images: ["", "", "", ""],
    theme: "dark",
    bgImage: "/images/com1-bg.png",
  },
  {
    id: 4,
    location: "Zirakpur",
    name: "The Silicon Courtyard",
    description: "The Silicon Courtyard redefines commercial real estate in Ambala by blending a vibrant high-street retail experience with corporate office spaces. Driven by heavy highway traffic and a captive upscale clientele, it serves as a central hub for entertainment, dining, and business. Investing here secures a spot in the region's fast-growing commercial corridor with high growth potential.",
    images: ["", "", "", ""],
    theme: "light",
    bgImage: null,
  },
  {
    id: 5,
    location: "",
    name: "High Street Market",
    description: "High Street Market in Zirakpur stands out as a thriving business hotspot that ensures maximum visibility and excellent connectivity for investors. The project boasts modern infrastructure, wide frontage, and ample vehicle parking to deliver a seamless shopping experience. It remains a top choice for brands aiming to establish a strong presence in a high-growth region.",
    images: ["", "", "", ""],
    theme: "dark",
    bgImage: "/images/com1-bg.png",
  },
];

// Splits a location name into individually animated letter spans
function AnimatedLocationText({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="rp-letter"
          style={{ "--i": i } as React.CSSProperties}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}

export default function ComServicePlaces() {
  const [indices, setIndices] = useState<number[]>(projects.map(() => 0));
  const locationRefs = useRef<(HTMLDivElement | null)[]>([]);

  const prev = (pi: number) => setIndices((prev) => prev.map((ci, i) => i === pi ? (ci === 0 ? projects[pi].images.length - 1 : ci - 1) : ci));
  const next = (pi: number) => setIndices((prev) => prev.map((ci, i) => i === pi ? (ci === projects[pi].images.length - 1 ? 0 : ci + 1) : ci));

  // Scroll-triggered reveal animation for the main location headings
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.35 }
    );

    locationRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .rp-section { background: #ffffff; padding: 60px 0 20px; }
        .rp-project { width: 90%;  margin: 0 auto 18px; padding: 0 18px; text-align: center; }

        /* ===== UPGRADED 3D LOCATION HEADING (same as residential) ===== */
        .rp-location {
          position: relative;
          display: inline-block;
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 34px;
          margin-top: 0px;
          font-family: 'Playfair Display', serif;
          letter-spacing: 1px;
          perspective: 1200px;
          transform-style: preserve-3d;
          overflow: visible;
        }

        .rp-location::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -10px;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #d71920, #ffb703, #d71920);
          background-size: 200% 100%;
          transform: translateX(-50%);
          box-shadow: 0 0 14px rgba(215,25,32,0.75), 0 0 28px rgba(255,183,3,0.45);
          transition: width 1s cubic-bezier(0.16,1,0.3,1) 0.7s;
          border-radius: 2px;
        }

        .rp-location.in-view::after {
          width: 90px;
          animation: rp-underline-shimmer 2.4s linear infinite 1.6s;
        }

        /* traveling spark along the underline */
        .rp-spark {
          position: absolute;
          left: 50%;
          bottom: -11px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #fff5d6;
          box-shadow: 0 0 10px 4px rgba(255,183,3,0.95), 0 0 22px 8px rgba(215,25,32,0.55);
          opacity: 0;
          transform: translate(-50%, 0);
          pointer-events: none;
        }

        .rp-location.in-view .rp-spark {
          animation: rp-spark-travel 1.5s cubic-bezier(0.5,0,0.5,1) 1.5s 1;
        }

        /* Each letter starts flipped back in 3D space, tilted, blurred, and dropped above */
        .rp-letter {
          display: inline-block;
          transform-style: preserve-3d;
          opacity: 0;
          transform: translateY(-70px) rotateX(-110deg) rotateY(25deg) scale(0.3) skewX(6deg);
          filter: blur(12px);
          background: linear-gradient(90deg, #7a0d12, #d71920, #ff5252, #ffb703, #ff5252, #d71920, #7a0d12);
          background-size: 400% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: #d71920;
          transition: opacity 0.55s ease, transform 0.95s cubic-bezier(0.34,1.56,0.64,1), filter 0.75s ease;
          transition-delay: calc(var(--i) * 50ms);
        }

        .rp-location.in-view .rp-letter {
          opacity: 1;
          transform: translateY(0) rotateX(0deg) rotateY(0deg) scale(1) skewX(0deg);
          filter: blur(0);
          animation:
            rp-gradient-move 4.5s linear infinite calc(var(--i) * 50ms),
            rp-glow-pulse 2.6s ease-in-out infinite calc(var(--i) * 50ms + 0.9s),
            rp-letter-float 3.4s ease-in-out infinite calc(var(--i) * 90ms + 1.4s);
        }

        @keyframes rp-gradient-move {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }

        @keyframes rp-glow-pulse {
          0%, 100% {
            text-shadow:
              1px 1px 0 rgba(168,15,22,0.45),
              2px 2px 0 rgba(168,15,22,0.35),
              3px 3px 4px rgba(0,0,0,0.3),
              0 0 14px rgba(215,25,32,0.35), 0 0 28px rgba(255,183,3,0.15);
          }
          50% {
            text-shadow:
              1px 1px 0 rgba(168,15,22,0.6),
              2px 2px 0 rgba(168,15,22,0.5),
              3px 3px 6px rgba(0,0,0,0.4),
              0 0 28px rgba(215,25,32,0.7), 0 0 52px rgba(255,183,3,0.45);
          }
        }

        @keyframes rp-letter-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @keyframes rp-underline-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        @keyframes rp-spark-travel {
          0%   { transform: translate(calc(-50% - 45px), 0) scale(0.4); opacity: 0; }
          12%  { opacity: 1; }
          50%  { transform: translate(-50%, 0) scale(1.4); }
          88%  { opacity: 1; }
          100% { transform: translate(calc(-50% + 45px), 0) scale(0.4); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .rp-letter { transition: opacity 0.4s ease; transform: none !important; animation: none !important; filter: none !important; }
          .rp-spark, .rp-location.in-view::after { animation: none !important; }
        }
        /* ===== END LOCATION HEADING ===== */

        .rp-card { position: relative; height: 500px; overflow: hidden; background-size: cover; background-position: center; background-repeat: no-repeat; }
        .rp-overlay { position: absolute; inset: 0; }
        .rp-card.dark .rp-overlay { background: rgba(0,0,0,.40); }
        .rp-card.red .rp-overlay { background: rgba(0,0,0,.38); }
        .rp-card.light { background: #ffffff; height: auto; min-height: 380px; }
        .rp-card.light .rp-overlay { background: linear-gradient(to right, rgba(255,182,210,0.55) 0%, transparent 18%), linear-gradient(to left, rgba(180,210,255,0.55) 0%, transparent 18%); pointer-events: none; }
        .rp-content { position: relative; z-index: 2; width: 100%; height: 100%; padding: 18px 20px 30px; display: flex; flex-direction: column; align-items: center; }
        .rp-title { color: #fff; font-family: Playfair Display; font-size: 32px; font-weight: 700; margin-top: 6px; margin-bottom: 18px; text-align: center; line-height: 1; }
        .rp-card.light .rp-title { color: #1a1a1a; position: relative; padding-bottom: 10px; }
        .rp-card.light .rp-title::after { content: ""; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 60px; height: 3px; background: #d71920; border-radius: 2px; }
        .rp-description { color: #efefef; width: 94%; margin: 0 auto; text-align: left; font-size: 15px; line-height: 1.35; font-weight: 400; margin-bottom: 42px; }
        .rp-card.light .rp-description { color: #333333; line-height: 1.65; margin-bottom: 32px; }
        .rp-slider { width: 100%; display: flex; align-items: center; justify-content: space-between; }

        /* ===== SAME TRIANGLE ARROWS AS CODE 1 ===== */
        .rp-arrow {
          width: 44px; height: 44px; border: none; background: none;
          cursor: pointer; display: flex; justify-content: center; align-items: center;
          transition: transform .25s ease, opacity .2s ease; user-select: none; padding: 0;
          flex-shrink: 0;
        }
        .rp-arrow:hover { transform: scale(1.15); }
        .rp-arrow:active { transform: scale(0.95); }
        .rp-arrow .rp-tri {
          width: 0; height: 0;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-left: 22px solid #df1b27;
        }
        .rp-arrow.rp-arrow-prev .rp-tri { transform: rotate(180deg); }
        @media (max-width: 768px) {
          .rp-arrow .rp-tri { border-top-width: 11px; border-bottom-width: 11px; border-left-width: 16px; }
        }
        /* ===== END ARROWS ===== */

        .rp-images { width: 90%; display: flex; justify-content: center; gap: 18px; }
        .rp-image-box { position: relative; width: 238px; height: 182px; border-left: 2px solid #df1b27; border-right: 2px solid #df1b27; overflow: hidden; flex-shrink: 0; background: #e9e9e9; }
        .rp-image-box img { transition: .35s; }
        .rp-image-box:hover img { transform: scale(1.05); }
        @media(max-width:1200px){ .rp-card{ height:auto; padding-bottom:40px; } .rp-images{ flex-wrap:wrap; } }
        @media(max-width:992px){ .rp-title{ font-size:28px; } .rp-description{ font-size:14px; width:95%; } .rp-image-box{ width:210px; height:160px; } }
        @media(max-width:768px){
          .rp-location{ font-size:32px; }
          .rp-card{ padding-bottom:30px; }
          /* keep the slider as a row so arrows sit on the left/right of the
             image grid instead of stacking above/below it */
          .rp-slider{ flex-direction:row; align-items:center; gap:8px; }
          .rp-images{ width:100%; justify-content:center; gap:14px; }
          .rp-image-box{ width:46%; height:170px; }
          .rp-description{ text-align:center; width:100%; }
        }
        @media(max-width:480px){
       
        .rp-project { width: 100%;  margin: 0 auto 0px; padding: 0 0px; }
        
        .rp-location{ font-size:26px; } .rp-title{ font-size:24px; } .rp-description{ font-size:13px; line-height:1.6; }
         .rp-image-box{ width:46%; height:130px; }
          
          
          }
      `}</style>

      <section className="rp-section">
        {projects.map((project, pi) => {
          const start = indices[pi];
          const visibleImages = [0, 1, 2, 3].map(i => project.images[(start + i) % project.images.length]);
          const bgStyle = project.bgImage ? { backgroundImage: `url(${project.bgImage})` } : {};

          return (
            <div className="rp-project" key={project.id}>
              {project.location && (
                <div
                  className="rp-location"
                  data-text={project.location}
                  ref={(el) => { locationRefs.current[pi] = el; }}
                  style={project.location === "Zirakpur" ? { marginTop: "100px" } : undefined}
                >
                  <AnimatedLocationText text={project.location} />
                  <span className="rp-spark" />
                </div>
              )}
              <div className={`rp-card ${project.theme}`} style={bgStyle}>
                <div className="rp-overlay" />
                <div className="rp-content">
                  <h2 className="rp-title">{project.name}</h2>
                  <p className="rp-description">{project.description}</p>
                  <div className="rp-slider">
                    <button className="rp-arrow rp-arrow-prev" onClick={() => prev(pi)} aria-label="Previous images">
                      <span className="rp-tri" />
                    </button>
                    <div className="rp-images">
                      {visibleImages.map((img, index) => (
                        <div className="rp-image-box" key={index}>
                          {img ? (
                            <Image src={img} alt={`${project.name}-${index}`} fill sizes="300px" style={{ objectFit: "cover" }} />
                          ) : null}
                        </div>
                      ))}
                    </div>
                    <button className="rp-arrow rp-arrow-next" onClick={() => next(pi)} aria-label="Next images">
                      <span className="rp-tri" />
                    </button>
                  </div>
                </div>
              </div> 
            </div>
          );
        })}
      </section>
    </>
  );
}