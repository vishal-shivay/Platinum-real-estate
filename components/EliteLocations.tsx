"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

// NOTE: expanded from 3 to 6 sample locations — with 3 items and 3 visible
// slots the original slider had nothing to slide between. Swap for real data;
// everything below works for any count >= 1.
const locationData = [
  { id: 1, name: "Mohali", pin: "", coords: "", image: "/images/mohali.jpg" },
  { id: 2, name: "Zirakpur", pin: "", coords: "", image: "/images/zirkpur.jpg" },
  { id: 3, name: "Dholera", pin: "", coords: "", image: "/images/dholera.jpg", href: "/dholera" },
  { id: 4, name: "Mohali", pin: "", coords: "", image: "/images/mohali.jpg" },
  { id: 5, name: "Zirakpur", pin: "", coords: "", image: "/images/zirkpur.jpg" },

  // { id: 4, name: "Chandigarh", pin: "PIN-04", coords: "30.7333° N", image: "/images/mohali.jpg" },
  // { id: 5, name: "New Chandigarh", pin: "PIN-05", coords: "30.7891° N", image: "/images/zirkpur.jpg" },
  // { id: 6, name: "Panchkula", pin: "PIN-06", coords: "30.6942° N", image: "/images/dholera.jpg" },
];

const AUTOPLAY_MS = 5000;

export default function Locations() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // ---- custom "View" cursor state (scoped to location card images only) ----
  const [cursorCardId, setCursorCardId] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const maxIndex = Math.max(locationData.length - visibleCount, 0);

  useEffect(() => {
    const computeCount = () => {
      const w = window.innerWidth;
      if (w <= 640) setVisibleCount(1);
      else if (w <= 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    computeCount();
    window.addEventListener("resize", computeCount);
    return () => window.removeEventListener("resize", computeCount);
  }, []);

  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(locationData.length - visibleCount, 0)));
  }, [visibleCount]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const goTo = useCallback(
    (next: number) => {
      const span = maxIndex + 1;
      setIndex(((next % span) + span) % span);
    },
    [maxIndex]
  );

  const handlePrev = () => goTo(index - 1);
  const handleNext = () => goTo(index + 1);

  useEffect(() => {
    if (isPaused || maxIndex === 0) return;
    const t = setInterval(() => goTo(index + 1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [index, isPaused, maxIndex, goTo]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x, y });
  };

  // Tracks pointer position relative to the hovered card's image wrap only —
  // other cards never see updates, so this stays cheap even with many slides.
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorCardId(id);
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleCardMouseLeave = () => setCursorCardId(null);

  const slidePercent = 100 / visibleCount;

  return (
    <>
      <style>{`
        .locations {
          position: relative;
          padding: 110px 0 96px;
          background: #0B0C0E;
          overflow: hidden;
          isolation: isolate;
        }

        /* ---------- Background ---------- */
        .locations-glow {
          position: absolute; z-index: 0; pointer-events: none;
          width: 640px; height: 640px; border-radius: 50%;
          background: radial-gradient(circle, rgba(215,23,42,0.16) 0%, rgba(215,23,42,0) 70%);
          top: 10%; left: 50%; transform: translateX(-50%);
          transition: opacity 0.6s ease;
        }
        .locations-vignette {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background: radial-gradient(ellipse 90% 70% at 50% 0%, rgba(11,12,14,0) 0%, #0B0C0E 78%);
        }

        .locations .container { position: relative; z-index: 2; max-width: 1240px; margin: 0 auto; padding: 0 24px; }

        /* ---------- Heading ---------- */
        .section-heading { margin-bottom: 8px; opacity: 0; transform: translateY(18px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .locations.is-visible .section-heading { opacity: 1; transform: translateY(0); }
        .section-top-row { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; flex-wrap: wrap; margin-bottom: 22px; }
        .section-desc {
          font-size: 14px; color: #9A9C9F; max-width: 380px; text-align: right;
          line-height: 1.7; font-family: "Montserrat", sans-serif; font-weight: 400;
        }
        .section-heading h2 {
          font-size: clamp(38px, 6vw, 68px); font-weight: 700; color: #F4EFE6;
          font-family: "Playfair-Display", serif; line-height: 1.02; margin: 0;
        }
        .section-heading h2 em { color: #D7172A; font-style: italic; }
        .section-rule { display: flex; align-items: center; gap: 14px; margin-top: 22px; }
        .section-rule .line { height: 1px; flex: 1; background: linear-gradient(90deg, rgba(215,23,42,0.7), rgba(244,239,230,0.06)); }

        /* ---------- Slider shell ---------- */
        .locations-stage { display: flex; align-items: center; gap: 22px; margin-top: 56px; }
        .locations-index-ghost {
          font-family: "Playfair-Display", serif; font-style: italic; font-weight: 700;
          font-size: clamp(70px, 9vw, 150px); line-height: 1; color: transparent;
          -webkit-text-stroke: 1px rgba(215,23,42,0.35); flex-shrink: 0; width: 130px;
          user-select: none; display: none;
        }
        @media (min-width: 1200px) { .locations-index-ghost { display: block; } }

        .locations-viewport { flex: 1; overflow: hidden; }
        .locations-track { display: flex; transition: transform 0.7s cubic-bezier(.65,0,.35,1); will-change: transform; }

        .locations-arrow {
          background: transparent; border: none; cursor: pointer;
          width: 40px; height: 40px; flex-shrink: 0; padding: 0;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .locations-arrow .tri {
          width: 0; height: 0;
          border-top: 11px solid transparent;
          border-bottom: 11px solid transparent;
          border-left: 16px solid #D7172A;
          transition: border-left-color 0.2s ease;
        }
        .locations-arrow.prev .tri { transform: rotate(180deg); }
        .locations-arrow:hover .tri { border-left-color: #ff4d5e; }
        .locations-arrow:hover { transform: scale(1.15); }
        .locations-arrow:active { transform: scale(0.95); }
        .locations-arrow:disabled { opacity: 0.25; cursor: not-allowed; }
        .locations-arrow:disabled:hover { transform: none; }
        .locations-arrow:disabled:hover .tri { border-left-color: #D7172A; }

        /* ---------- Card ---------- */
        .location-slide { flex-shrink: 0; padding: 0 12px; box-sizing: border-box; }
        .location-card {
          position: relative; background: #141518; overflow: hidden; border-radius: 2px;
          border: 1px solid rgba(244,239,230,0.08);
          opacity: 0; transform: translateY(26px); transition: opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease;
          transition-delay: var(--reveal-delay, 0s);
        }
        .locations.is-visible .location-card { opacity: 1; transform: translateY(0); }
        .location-card:hover { border-color: rgba(215,23,42,0.5); }

        .location-card-img-wrap {
          position: relative; width: 100%; height: 320px; overflow: hidden; background: #1c1d21;
          cursor: none; /* default arrow hidden — replaced by the custom View cursor below */
        }
        .location-card-img-wrap img {
          filter: grayscale(0.85) contrast(1.05) brightness(0.75);
          transform: scale(1.02);
          transition: filter 0.7s ease, transform 0.9s cubic-bezier(.25,.8,.35,1);
        }
        .location-card:hover .location-card-img-wrap img { filter: grayscale(0) contrast(1) brightness(0.92); transform: scale(1.1); }
        .location-card-img-wrap::before {
          content: ''; position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(180deg, rgba(11,12,14,0.1) 0%, rgba(11,12,14,0.85) 100%);
        }

        /* ---------- Custom "View" cursor (image area only) ---------- */
        .card-view-cursor {
          position: absolute; top: 0; left: 0; z-index: 4;
          width: 88px; height: 88px; border-radius: 50%;
          background: rgba(215,23,42,0.92);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase; color: #F4EFE6;
          pointer-events: none;
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
          transition: transform 0.28s cubic-bezier(.25,.8,.35,1), opacity 0.28s ease;
        }
        .card-view-cursor::before {
          content: ''; position: absolute; inset: -1px; border-radius: 50%;
          border: 1px solid rgba(244,239,230,0.35);
        }
        .card-view-cursor.active { transform: translate(-50%, -50%) scale(1); opacity: 1; }

        .location-card-meta {
          position: absolute; top: 16px; left: 16px; right: 16px; z-index: 2;
          display: flex; justify-content: space-between; align-items: flex-start;
          font-family: 'Montserrat', monospace; font-size: 10px; letter-spacing: 1.5px; color: rgba(244,239,230,0.75);
        }
       
        .location-card-meta .coords { opacity: 0.7; }

        .location-card-footer { position: relative; z-index: 2; padding: 20px 20px 22px; background:white;}
        .location-card-footer .name {
          display: block; font-size: 25px; font-weight: 500; color: #1A3041;
          font-family: "Playfair-Display", serif; margin-bottom: 14px;
        }

        /* ---------- Explore button (solid red, matches reference) ---------- */
        .explore-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #FFFFFF;
          text-decoration: none;
          cursor: pointer;
          background: #D7172A;
          border: none;
          border-radius: 2px;
          padding: 12px 22px;
          transition: background 0.25s ease, transform 0.2s ease;
        }
        .explore-link:hover {
          background: #ff2d3f;
          transform: translateY(-1px);
        }
        .explore-link:active {
          transform: translateY(0);
        }

        /* ---------- Progress ---------- */
        .locations-progress { display: flex; align-items: center; gap: 16px; margin-top: 44px; padding-left: 0; }
        @media (min-width: 1200px) { .locations-progress { padding-left: 152px; } }
        .locations-progress-track { flex: 1; height: 1px; background: rgba(244,239,230,0.1); position: relative; max-width: 260px; }
        .locations-progress-fill { position: absolute; left: 0; top: -1px; height: 3px; background: #D7172A; width: 0; }
        .locations-progress-fill.animate { animation: fillBar 5000ms linear forwards; }
        .locations-progress-fill.paused { animation-play-state: paused; }
        @keyframes fillBar { from { width: 0%; } to { width: 100%; } }
        .locations-count { font-family: 'Montserrat', monospace; font-size: 11px; letter-spacing: 2px; color: #6E7175; }
        .locations-count b { color: #F4EFE6; }

        @media (max-width: 1024px) {
          .location-card-img-wrap { height: 260px; }
          .locations { padding: 84px 0 76px; }
          .section-top-row { flex-direction: column; align-items: flex-start; }
          .section-desc { text-align: left; max-width: 100%; }
        }
        @media (max-width: 640px) {
          .locations-arrow { width: 32px; height: 32px; }
          .locations-arrow .tri { border-top-width: 8px; border-bottom-width: 8px; border-left-width: 12px; }
          .location-card-img-wrap { height: 220px; }
          .location-card-footer .name { font-size: 20px; }
          .locations-stage { gap: 12px; }
        }

        /* Touch devices have no real cursor to follow — never show the dot there */
        @media (hover: none) {
          .card-view-cursor { display: none; }
          .location-card-img-wrap { cursor: pointer; }
        }

        @media (prefers-reduced-motion: reduce) {
          .location-card, .location-card-img-wrap img,
          .section-heading, .locations-progress-fill, .card-view-cursor {
            animation: none !important; transition: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`locations${isVisible ? " is-visible" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setTilt({ x: 0, y: 0 }); }}
        onMouseMove={handleMouseMove}
      >
        <div
          className="locations-glow"
          style={{ transform: `translate(calc(-50% + ${tilt.x * 18}px), ${tilt.y * 18}px)` }}
        />

        <div className="locations-vignette" />

        <div className="container">
          <div className="section-heading">
            <div className="section-top-row">
              <div>
                <h2>Elite <em>Locations</em></h2>
              </div>
              <p className="section-desc">
                From commercial spaces to dream homes — comprehensive real
                estate services across the region&apos;s most promising addresses.
              </p>
            </div>
            <div className="section-rule">
              <span className="line" />
            </div>
          </div>

          <div className="locations-stage">
            <div className="locations-index-ghost">{String(index + 1).padStart(2, "0")}</div>

            <button className="locations-arrow prev" onClick={handlePrev} disabled={maxIndex === 0} aria-label="Previous locations">
              <span className="tri" />
            </button>

            <div className="locations-viewport">
              <div className="locations-track" style={{ transform: `translateX(-${index * slidePercent}%)` }}>
                {locationData.map((loc, i) => (
                  <div className="location-slide" key={loc.id} style={{ width: `${slidePercent}%` }}>
                    <div
                      className="location-card"
                      style={{ "--reveal-delay": `${(i % visibleCount) * 0.1}s` } as React.CSSProperties}
                    >
                      <div
                        className="location-card-img-wrap"
                        onMouseMove={(e) => handleCardMouseMove(e, loc.id)}
                        onMouseLeave={handleCardMouseLeave}
                      >
                        <div className="location-card-meta">
                          <span className="pin">{loc.pin}</span>
                          <span className="coords">{loc.coords}</span>
                        </div>
                        <Image src={loc.image} alt={loc.name} fill style={{ objectFit: "cover" }} />
                        <div
                          className={`card-view-cursor${cursorCardId === loc.id ? " active" : ""}`}
                          style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px) translate(-50%, -50%) scale(${cursorCardId === loc.id ? 1 : 0})` }}
                        >
                          View
                        </div>
                      </div>
                      <div className="location-card-footer">
                        <span className="name">{loc.name}</span>
                        <Link href={loc.href || `/residential#${loc.name}`} className="explore-link">
                          Explore
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="locations-arrow next" onClick={handleNext} disabled={maxIndex === 0} aria-label="Next locations">
              <span className="tri" />
            </button>
          </div>

          {maxIndex > 0 && (
            <div className="locations-progress">
              <span className="locations-count"><b>{String(index + 1).padStart(2, "0")}</b> / {String(maxIndex + 1).padStart(2, "0")}</span>
              <div className="locations-progress-track">
                <div key={`${index}-${isPaused}`} className={`locations-progress-fill animate${isPaused ? " paused" : ""}`} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}