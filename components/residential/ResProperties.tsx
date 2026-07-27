"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const cities = [
  {
    name: "Mohali",
    tag: "Established",
    line: "Where the city already runs on its own momentum.",
    image: "/images/mohali.jpg",
    href: "/residential#Mohali",
  },
  {
    name: "Zirakpur",
    tag: "Emerging",
    line: "Growth you can watch happen, block by block.",
    image: "/images/zirkpur.jpg",
    href: "/residential#Zirakpur",
  },
  {
    name: "Dholera",
    tag: "Future Smart City",
    line: "Built from a blank map into India's next skyline.",
    image: "/images/dholera.jpg",
    href: "/dholera",
  },
];

export default function CityShowcase() {
  // ---- custom "View" cursor state (scoped to each city panel only) ----
  const [cursorCityId, setCursorCityId] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handlePanelMouseMove = (e: React.MouseEvent<HTMLAnchorElement>, name: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorCityId(name);
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handlePanelMouseLeave = () => setCursorCityId(null);

  return (
    <>
      <style>{`
        .city-showcase {
          background: #10151C;
          padding: 96px 40px 100px;
        }
        .city-showcase-head {
          max-width: 1400px;
          margin: 0 auto 52px;
          text-align: center;
        }
        .city-showcase-eyebrow {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #C9A227;
          margin: 0 0 16px;
        }
        .city-showcase-title {
          position: relative;
          display: inline-block;
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 3.2vw, 44px);
          font-weight: 600;
          color: #F5F1E8;
          margin: 0;
          line-height: 1.2;
          max-width: 100%;
          text-align: center;
          padding-bottom: 22px;
        }
        .city-showcase-title::after {
          content: '';
          position: absolute;
          left: 33%;
          bottom: 0;
          width: 30%;
          height: 2px;
          background: #D7172A;
        }

        .city-accordion {
          display: flex;
          height: 560px;
          gap: 6px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .city-panel {
          position: relative;
          display: block;
          flex: 1 1 0%;
          overflow: hidden;
          cursor: none; /* default arrow hidden — replaced by the custom View cursor below */
          text-decoration: none;
          color: inherit;
          transition: flex 0.7s cubic-bezier(0.22, 1, 0.36, 1), filter 0.6s ease;
        }
        .city-panel:hover {
          flex: 2.6 1 0%;
        }
        .city-accordion:has(.city-panel:hover) .city-panel:not(:hover) {
          filter: brightness(0.5) saturate(0.85);
        }

        .city-panel-img {
          transition: transform 1.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .city-panel:hover .city-panel-img {
          transform: scale(1.06);
        }

        .city-panel-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            0deg,
            rgba(6, 8, 11, 0.92) 0%,
            rgba(6, 8, 11, 0.35) 46%,
            rgba(6, 8, 11, 0.1) 70%
          );
        }

        /* ---------- Custom "View" cursor (panel area only) ---------- */
        .city-panel-cursor {
          position: absolute; top: 0; left: 0; z-index: 5;
          width: 88px; height: 88px; border-radius: 50%;
          background: rgba(215,23,42,0.92);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Playfair Display', serif; font-size: 11px; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase; color: #F5F1E8;
          pointer-events: none;
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
          transition: transform 0.28s cubic-bezier(.25,.8,.35,1), opacity 0.28s ease;
        }
        .city-panel-cursor::before {
          content: ''; position: absolute; inset: -1px; border-radius: 50%;
          border: 1px solid rgba(245,241,232,0.35);
        }
        .city-panel-cursor.active { transform: translate(-50%, -50%) scale(1); opacity: 1; }

        .city-panel-index {
          position: absolute;
          top: 26px;
          left: 26px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: rgba(245, 241, 232, 0.55);
        }

        .city-panel-vertical {
          position: absolute;
          left: 28px;
          bottom: 28px;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 600;
          color: #F5F1E8;
          letter-spacing: 0.04em;
          opacity: 1;
          transition: opacity 0.3s ease;
          white-space: nowrap;
        }
        .city-panel:hover .city-panel-vertical {
          opacity: 0;
        }

        .city-panel-expanded {
          position: absolute;
          left: 32px;
          right: 32px;
          bottom: 30px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.5s ease 0.08s, transform 0.5s ease 0.08s;
        }
        .city-panel:hover .city-panel-expanded {
          opacity: 1;
          transform: translateY(0);
        }

        .city-panel-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #1A3041;
          margin: 0 0 10px;
        }
        .city-panel-name {
          font-family: 'Playfair Display', serif;
          font-size: 34px;
          font-weight: 600;
          color: #F5F1E8;
          margin: 0 0 10px;
          line-height: 1.15;
          white-space: nowrap;
        }
        .city-panel-rule {
          width: 30px;
          height: 2px;
          background: #D7172A;
          margin-bottom: 14px;
        }
        .city-panel-line {
          font-size: 13.5px;
          color: rgba(245, 241, 232, 0.78);
          line-height: 1.55;
          max-width: 260px;
        }

        @media (max-width: 900px) {
          .city-panel-line { display: none; }
        }

        @media (max-width: 768px) {
          .city-showcase { padding: 64px 20px 72px; }
          .city-showcase-head { margin-bottom: 34px; }
          .city-accordion {
            flex-direction: column;
            height: auto;
            gap: 14px;
          }
          .city-panel, .city-panel:hover {
            flex: none;
            height: 220px;
          }
          .city-accordion:has(.city-panel:hover) .city-panel:not(:hover) {
            filter: none;
          }
          .city-panel-img, .city-panel:hover .city-panel-img {
            transform: none;
          }
          .city-panel-vertical { display: none; }
          .city-panel-expanded {
            opacity: 1;
            transform: none;
          }
          .city-panel-line { display: block; max-width: 100%; }
        }

        /* Touch devices have no real cursor to follow — never show the dot there */
        @media (hover: none) {
          .city-panel-cursor { display: none; }
          .city-panel { cursor: pointer; }
        }

        @media (prefers-reduced-motion: reduce) {
          .city-panel, .city-panel-img, .city-panel-vertical,
          .city-panel-expanded, .city-panel-cursor {
            transition: none !important;
          }
        }
      `}</style>

      <div className="city-showcase">
        <div className="city-showcase-head">
          {/* <p className="city-showcase-eyebrow">Where We Build</p> */}
          <h2 className="city-showcase-title">
           Properties in Prime Locations
          </h2>
        </div>

        <div className="city-accordion">
          {cities.map((city, i) => (
            <Link
              href={city.href}
              className="city-panel"
              key={city.name}
              onMouseMove={(e) => handlePanelMouseMove(e, city.name)}
              onMouseLeave={handlePanelMouseLeave}
            >
              <Image
                src={city.image}
                alt={city.name}
                fill
                className="city-panel-img"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <div className="city-panel-scrim" />

              <span className="city-panel-index">0{i + 1}</span>

              <span className="city-panel-vertical">{city.name}</span>

              <div className="city-panel-expanded">
                <span className="city-panel-tag">{city.tag}</span>
                <h3 className="city-panel-name">{city.name}</h3>
                <div className="city-panel-rule" />
                <p className="city-panel-line">{city.line}</p>
              </div>

             <div
  className={`city-panel-cursor${cursorCityId === city.name ? " active" : ""}`}
  style={{
    transform: `translate(${cursorPos.x}px, ${cursorPos.y}px) translate(-50%, -50%) scale(${cursorCityId === city.name ? 1 : 0})`,
  }}
>
  View
</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}