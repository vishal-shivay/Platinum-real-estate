"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "residential",
    title: "Residential",
    count: "120+ Properties",
    desc: "Residential properties offer a premium lifestyle featuring modern high-rise apartments and luxury independent floors.",
    image: "/images/service.jpg",
    href: "/residential",
    bodyClass: "serviceone",
  },
  {
    id: "commercial",
    title: "Commercial",
    count: "100+ Properties",
    desc: "Commercial properties offer high-yielding real estate opportunities across premium retail spaces, modern office complexes, and dedicated IT parks.",
    image: "/images/second-service.png",
    href: "/commercial",
    bodyClass: "servicetwo",
  },
];

export default function OurServices() {
  // ---- custom "View" cursor state (scoped to service card images only) ----
  const [cursorCardId, setCursorCardId] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorCardId(id);
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleCardMouseLeave = () => setCursorCardId(null);

  return (
    <>
      <style>{`
        .services { padding: 60px 0 0; background-color: #fff; }
        .services-heading { font-family: 'Playfair Display', Georgia, serif; font-size: 32px; font-weight: 700; color: #c8102e; text-align: center; margin-bottom: 10px; }
        .services-subheading { text-align: center; margin-bottom: 50px; }
        .services-subheading p { font-size: 13px; color: #555; text-align: center; margin-bottom: 8px; letter-spacing: 0.01em; font-family:Montserrat; }
        .services-subheading-line { width: 40px; height: 2px; background-color: #c8102e; margin: 0 auto; }
        .services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 90px; padding: 0 50px; }
        .service-card { display: flex; flex-direction: column; }
        .service-card-img-wrap {
          position: relative; width: 100%; height: 410px; overflow: hidden;
          cursor: none; /* default arrow hidden — replaced by the custom View cursor below */
        }
        .service-card-img-wrap img {
          transition: transform 0.5s ease, filter 0.5s ease;
          filter: grayscale(70%) brightness(0.95);
          transform: scale(1);
        }
        .service-card-img-wrap:hover img {
          filter: grayscale(0%) brightness(1);
          transform: scale(1.08);
        }

        /* ---------- Custom "View" cursor (image area only) ---------- */
        .service-view-cursor {
          position: absolute; top: 0; left: 0; z-index: 4;
          width: 88px; height: 88px; border-radius: 50%;
          background: rgba(200,16,46,0.92);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase; color: #fff;
          pointer-events: none;
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
          transition: transform 0.28s cubic-bezier(.25,.8,.35,1), opacity 0.28s ease;
        }
        .service-view-cursor::before {
          content: ''; position: absolute; inset: -1px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.4);
        }
        .service-view-cursor.active { transform: translate(-50%, -50%) scale(1); opacity: 1; }

        .service-card-body { padding: 24px 28px 32px; flex: 1;}



.serviceone{
background: linear-gradient(
  to bottom,
 #FAEEEE 30%,
  #FFFFFF 44%,
  #FFFFFF 63%,
  #F6F6F6 78%,
  #A87A7A 100%
); 
}


.servicetwo{
background: linear-gradient(
  to right,
  #FAEEEE 30%,
  #FFFFFF 44%,
  #FFFFFF 63%,
  #F6F6F6 78%,
  #A87A7A 100%
);
}
   
        .service-card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
        .service-card-title { font-size: 20px; font-weight: 400; color: #1a1a2e; font-family: "Playfair Display"; }
        .service-card-count { font-size: 14px; font-weight: 700; color: #1a1a2e; }
        .service-card-desc { font-size: 13px; color: #555; line-height: 1.7; margin-bottom: 20px; font-family:"Montserrat"; }
        .service-card-btn {
          display: inline-block;
          background-color: #c8102e; color: #fff; border: none; padding: 10px 24px;
          font-size: 13px; cursor: pointer; letter-spacing: 0.02em; font-family:"Montserrat";
          text-decoration: none; transition: background-color 0.2s ease;
        }
        .service-card-btn:hover { background-color: #a50d26; }
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr; gap: 24px; padding: 0 24px; }
          .service-card-img-wrap { height: 300px; }
        }
        @media (max-width: 480px) {
          .services-grid { gap: 16px; padding: 0 16px; }
          .service-card-img-wrap { height: 220px; }
          .service-card-body { padding: 18px 20px 24px; }
        }

        /* Touch devices have no real cursor to follow — never show the dot there */
        @media (hover: none) {
          .service-view-cursor { display: none; }
          .service-card-img-wrap { cursor: pointer; }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-card-img-wrap img, .service-view-cursor {
            transition: none !important;
          }
        }
      `}</style>

      <section className="services">
        <h2 className="services-heading">Our Services</h2>
        <div className="services-subheading">
          <p>Comprehensive real estate solutions tailored to your unique needs</p>
          <div className="services-subheading-line" />
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.id}>
              <div
                className="service-card-img-wrap"
                onMouseMove={(e) => handleCardMouseMove(e, s.id)}
                onMouseLeave={handleCardMouseLeave}
              >
                <Image src={s.image} alt={s.title} fill style={{ objectFit: "cover" }} />
                <div
                  className={`service-view-cursor${cursorCardId === s.id ? " active" : ""}`}
                  style={{
                    transform: `translate(${cursorPos.x}px, ${cursorPos.y}px) translate(-50%, -50%) scale(${cursorCardId === s.id ? 1 : 0})`,
                  }}
                >
                  View
                </div>
              </div>
              <div className={`service-card-body ${s.bodyClass}`}>
                <div className="service-card-header">
                  <span className="service-card-title">{s.title}</span>
                  <span className="service-card-count">{s.count}</span>
                </div>
                <p className="service-card-desc">{s.desc}</p>
                <Link href={s.href} className="service-card-btn">
                  Explore Properties
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}