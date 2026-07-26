"use client";
import { useState } from "react";
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
    location: "Zirkpur",
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

export default function ComServicePlaces() {
  const [indices, setIndices] = useState<number[]>(projects.map(() => 0));

  const prev = (pi: number) => setIndices((prev) => prev.map((ci, i) => i === pi ? (ci === 0 ? projects[pi].images.length - 1 : ci - 1) : ci));
  const next = (pi: number) => setIndices((prev) => prev.map((ci, i) => i === pi ? (ci === projects[pi].images.length - 1 ? 0 : ci + 1) : ci));

  return (
    <>
      <style>{`
        .rp-section { background: #ffffff; padding: 60px 0 20px; }
        .rp-project { width: 90%;  margin: 0 auto 18px; padding: 0 18px; }
        .rp-location { color: #d71920; font-size: 32px; font-weight: 700; margin-bottom: 24px; font-family: Playfair Display;margin-top:0px;}
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
        .rp-arrow { width: 44px; height: 44px; border: none; background: none; color: #e21828; font-size: 42px; cursor: pointer; display: flex; justify-content: center; align-items: center; transition: .25s; user-select: none; }
        .rp-arrow:hover { transform: scale(1.15); }
        .rp-images { width: 90%; display: flex; justify-content: center; gap: 18px; }
        .rp-image-box { position: relative; width: 238px; height: 182px; border-left: 2px solid #df1b27; border-right: 2px solid #df1b27; overflow: hidden; flex-shrink: 0; background: #e9e9e9; }
        .rp-image-box img { transition: .35s; }
        .rp-image-box:hover img { transform: scale(1.05); }
        @media(max-width:1200px){ .rp-card{ height:auto; padding-bottom:40px; } .rp-images{ flex-wrap:wrap; } }
        @media(max-width:992px){ .rp-title{ font-size:28px; } .rp-description{ font-size:14px; width:95%; } .rp-image-box{ width:210px; height:160px; } }
        @media(max-width:768px){ .rp-card{ padding-bottom:30px; } .rp-slider{ flex-direction:column; gap:20px; } .rp-arrow{ font-size:36px; } .rp-images{ width:100%; justify-content:center; gap:14px; } .rp-image-box{ width:46%; height:170px; } .rp-description{ text-align:center; width:100%; } }
        @media(max-width:480px){
       
        .rp-project { width: 100%;  margin: 0 auto 0px; padding: 0 0px; }
        
        .rp-location{ font-size:18px; } .rp-title{ font-size:24px; } .rp-description{ font-size:13px; line-height:1.6; }
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
                  style={project.location === "Zirkpur" ? { marginTop: "100px" } : undefined}
                >
                  {project.location}
                </div>
              )}
              <div className={`rp-card ${project.theme}`} style={bgStyle}>
                <div className="rp-overlay" />
                <div className="rp-content">
                  <h2 className="rp-title">{project.name}</h2>
                  <p className="rp-description">{project.description}</p>
                  <div className="rp-slider">
                    <button className="rp-arrow" onClick={() => prev(pi)}>&#10094;</button>
                    <div className="rp-images">
                      {visibleImages.map((img, index) => (
                        <div className="rp-image-box" key={index}>
                          {img ? (
                            <Image src={img} alt={`${project.name}-${index}`} fill sizes="300px" style={{ objectFit: "cover" }} />
                          ) : null}
                        </div>
                      ))}
                    </div>
                    <button className="rp-arrow" onClick={() => next(pi)}>&#10095;</button>
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