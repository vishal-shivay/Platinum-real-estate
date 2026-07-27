"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "residential",
    index: "I",
    title: "Residential",
    count: " ",
    badgeNumber: "120+",
    badgeLabel: "Properties",
    desc: "Residential properties offer a premium lifestyle featuring modern high-rise apartments and luxury independent floors.",
    image: "/images/service.jpg",
    href: "/residential",
  },
  {
    id: "commercial",
    index: "II",
    title: "Commercial",
    count: "",
    badgeNumber: "100+",
    badgeLabel: "Properties",
    desc: "Commercial properties offer high-yielding real estate opportunities across premium retail spaces, modern office complexes, and dedicated IT parks.",
    image: "/images/second-service.png",
    href: "/commercial",
  },
];

/* Fires once a card enters the viewport, used to trigger the staggered reveal. */
function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function ServiceCard({
  service,
  delay,
}: {
  service: (typeof services)[number];
  delay: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, px: 50, py: 50 });
  const [hovering, setHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;
    // deeper tilt range for a stronger 3D effect
    const ry = ((x / rect.width) - 0.5) * 26; // rotateY
    const rx = ((y / rect.height) - 0.5) * -26; // rotateX
    setTilt({ rx, ry, px, py });
    setCursorPos({ x, y });
  }, []);

  const handleLeave = () => {
    setHovering(false);
    setTilt({ rx: 0, ry: 0, px: 50, py: 50 });
  };

  return (
    <div
      ref={ref}
      className={`service-card${inView ? " in-view" : ""}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      <div
        ref={frameRef}
        className="service-frame"
        onMouseEnter={() => setHovering(true)}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${hovering ? 1.03 : 1})`,
        }}
      >
        <div
          className="service-frame-img"
          style={{
            transform: `scale(1.24) translate(${(tilt.py - 50) * -0.18}%, ${(tilt.rx) * -0.7}%)`,
          }}
        >
          <Image src={service.image} alt={service.title} fill style={{ objectFit: "cover" }} />
        </div>

        <div className="service-frame-veil" />

        {/* viewfinder brackets */}
        <span className="bracket bracket-tl" />
        <span className="bracket bracket-tr" />
        <span className="bracket bracket-bl" />
        <span className="bracket bracket-br" />

        <div className="service-index">{service.index}</div>

        <div
          className={`service-badge${inView ? " in-view" : ""}`}
          style={{ transitionDelay: inView ? `${delay + 260}ms` : "0ms" }}
        >
          <span className="service-badge-number">{service.badgeNumber}</span>
          <span className="service-badge-label">{service.badgeLabel}</span>
        </div>

        <div
          className={`service-cursor${hovering ? " active" : ""}`}
          style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px) translate(-50%, -50%)` }}
        >
          <span className="service-cursor-ring" />
          <span className="service-cursor-label">View</span>
        </div>
      </div>

      <div className="service-body">
        <div className="service-body-top">
          <h3 className="service-title">{service.title}</h3>
          <span className="service-count">{service.count}</span>
        </div>
        <p className="service-desc">{service.desc}</p>
        <Link href={service.href} className="service-cta">
          <span>Explore Properties</span>
          {/* <svg className="service-cta-arrow" width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path d="M11.5 1L17 6M17 6L11.5 11M17 6H0" stroke="currentColor" strokeWidth="1.4" />
          </svg> */}
        </Link>
      </div>
    </div>
  );
}

export default function OurServices() {
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>(0.3);

  return (
    <>
      <style>{`
        :root {
          --ink: #14120F;
          --ivory: #F8F4EC;
          --brass: #A6803D;
          --brass-light: #D9BE85;
          --wine: #591A22;
          --stone: #716B62;
          --accent-red: #E31E24;
        }

        .services {
          position: relative;
          padding: 120px 0 130px;
          background: #F0F0F0;
          overflow: hidden;
        }

        .services-head {
          position: relative;
          text-align: center;
          margin-bottom: 76px;
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.9s cubic-bezier(.16,1,.3,1), transform 0.9s cubic-bezier(.16,1,.3,1);
        }
        .services-head.in-view { opacity: 1; transform: translateY(0); }

        .services-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 700;
          font-size: clamp(32px, 4vw, 44px);
          color: var(--accent-red);
          letter-spacing: -0.01em;
          margin-bottom: 14px;
        }

        .services-subheading {
          font-family: "Montserrat", sans-serif;
          font-size: 14.5px; color: var(--stone);
          max-width: 460px; margin: 0 auto;
          letter-spacing: 0.01em; line-height: 1.7;
        }

        .services-underline {
          display: block;
          width: 56px;
          height: 2px;
          background: var(--accent-red);
          margin: 22px auto 0;
          border-radius: 2px;
        }

        .services-grid {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          padding: 0 56px;
          max-width: 1360px;
          margin: 0 auto;
        }

        .service-card {
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(46px);
          transition: opacity 1s cubic-bezier(.16,1,.3,1), transform 1s cubic-bezier(.16,1,.3,1);
        }
        .service-card.in-view { opacity: 1; transform: translateY(0); }

        .service-frame {
          position: relative;
          width: 100%; height: 460px;
          border-radius: 2px;
          overflow: hidden;
          cursor: none;
          transform-style: preserve-3d;
          transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease;
          box-shadow: 0 24px 50px -22px rgba(20,18,15,0.28);
        }
        .service-frame:hover {
          box-shadow: 0 34px 70px -20px rgba(20,18,15,0.4);
        }

        .service-frame-img {
          position: absolute; inset: 0;
          transition: transform 0.5s cubic-bezier(.22,1,.36,1), filter 0.6s ease;
          filter: grayscale(65%) brightness(0.92) contrast(1.02);
        }
        .service-frame:hover .service-frame-img {
          filter: grayscale(0%) brightness(1.02) contrast(1.03);
        }

        .service-frame-veil {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(180deg, rgba(20,18,15,0.05) 0%, rgba(20,18,15,0.02) 40%, rgba(20,18,15,0.55) 100%);
          transition: opacity 0.5s ease;
        }
        .service-frame:hover .service-frame-veil { opacity: 0.7; }

        /* viewfinder brackets */
        .bracket {
          position: absolute; z-index: 2;
          width: 26px; height: 26px;
          border-color: var(--brass-light);
          opacity: 0; transition: opacity 0.4s ease, transform 0.5s cubic-bezier(.22,1,.36,1);
        }
        .bracket-tl { top: 16px; left: 16px; border-top: 1.5px solid; border-left: 1.5px solid; transform: translate(6px,6px); }
        .bracket-tr { top: 16px; right: 16px; border-top: 1.5px solid; border-right: 1.5px solid; transform: translate(-6px,6px); }
        .bracket-bl { bottom: 16px; left: 16px; border-bottom: 1.5px solid; border-left: 1.5px solid; transform: translate(6px,-6px); }
        .bracket-br { bottom: 16px; right: 16px; border-bottom: 1.5px solid; border-right: 1.5px solid; transform: translate(-6px,-6px); }
        .service-frame:hover .bracket { opacity: 1; transform: translate(0,0); }

        .service-index {
          position: absolute; top: 18px; left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          font-family: 'Playfair Display', serif;
          font-style: italic; font-size: 13px; letter-spacing: 0.1em;
          color: rgba(248,244,236,0.75);
          opacity: 0; transition: opacity 0.4s ease;
        }
        .service-frame:hover .service-index { opacity: 1; }

        /* properties count badge */
        .service-badge {
          position: absolute;
          top: 20px; right: 20px;
          z-index: 3;
          display: flex; flex-direction: column; align-items: center;
          gap: 3px;
          padding: 14px 22px;
          background: rgba(20,18,15,0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(217,190,133,0.25);
          border-radius: 3px;
          opacity: 0;
          transform: translateY(-18px) scale(0.92);
          transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1), background 0.35s ease, box-shadow 0.35s ease;
        }
        .service-badge.in-view {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .service-frame:hover .service-badge {
          transform: translateY(-4px) scale(1.04);
          background: rgba(89,26,34,0.65);
          box-shadow: 0 12px 26px -10px rgba(20,18,15,0.5);
        }
        .service-badge-number {
          font-family: 'Playfair Display', serif;
          font-weight: 600; font-size: 20px;
          color: var(--ivory);
          line-height: 1;
        }
        .service-badge-label {
          font-family: "Montserrat", sans-serif;
          font-size: 9.5px; font-weight: 600; letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--brass-light);
        }

        /* custom cursor */
        .service-cursor {
          position: absolute; top: 0; left: 0; z-index: 4;
          width: 92px; height: 92px;
          display: flex; align-items: center; justify-content: center;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .service-cursor.active { opacity: 1; }
        .service-cursor-ring {
          position: absolute; inset: 0;
          border-radius: 50%;
          background: conic-gradient(from 0deg, var(--brass-light), var(--brass), var(--brass-light));
          animation: spin-slow 6s linear infinite;
          -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px));
          mask: radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px));
        }
        .service-cursor-label {
          position: relative;
          font-family: "Montserrat", sans-serif;
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--ivory);
        }
        @keyframes spin-slow { to { transform: rotate(360deg); } }

        .service-body { padding: 30px 4px 0; flex: 1; }
        .service-body-top {
          display: flex; justify-content: space-between; align-items: baseline;
          margin-bottom: 12px; padding-bottom: 16px;
          border-bottom: 1px solid rgba(20,18,15,0.1);
        }
        .service-title {
          font-family: "Playfair Display", serif;
          font-weight: 500; font-size: 23px; color: var(--ink);
          letter-spacing: -0.01em;
        }
        .service-count {
          font-family: "Montserrat", sans-serif;
          font-size: 11.5px; font-weight: 600; letter-spacing: 0.06em;
          color: var(--brass);
        }
        .service-desc {
          font-family: "Montserrat", sans-serif;
          font-size: 13.5px; color: #1A3041;
          line-height: 1.75; margin-bottom: 26px;
          max-width: 46ch;
        }

        .service-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: #D7172A; color:white;
          padding: 13px 26px;
          font-family: "Montserrat", sans-serif;
          font-size: 12px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; text-decoration: none;
          border-radius: 1px;
          transition: background 0.3s ease, color 0.3s ease, letter-spacing 0.3s ease;
        }
        .service-cta-arrow { transition: transform 0.35s cubic-bezier(.22,1,.36,1); }
        .service-cta:hover {
          background: var(--wine); color: var(--ivory);
        }
        .service-cta:hover .service-cta-arrow { transform: translateX(5px); }

        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr; gap: 44px; padding: 0 28px; }
          .service-frame { height: 360px; }
        }
        @media (max-width: 480px) {
          .services { padding: 90px 0 90px; }
          .services-grid { padding: 0 20px; gap: 36px; }
          .service-frame { height: 260px; }
          .services-head { margin-bottom: 52px; }
        }

        @media (hover: none) {
          .service-cursor, .bracket, .service-index { display: none; }
          .service-frame { cursor: pointer; }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-card, .services-head, .service-frame, .service-frame-img,
          .service-cursor-ring, .bracket, .service-cta-arrow, .service-badge {
            transition: none !important; animation: none !important;
          }
        }
      `}</style>

      <section className="services">
        <div ref={headRef} className={`services-head${headInView ? " in-view" : ""}`}>
          <h2 className="services-heading">Our Services</h2>
          <p className="services-subheading">
            Comprehensive real estate solutions tailored to your unique needs
          </p>
          <span className="services-underline" />
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={i * 140} />
          ))}
        </div>
      </section>
    </>
  );
}