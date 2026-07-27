"use client";
import Image from "next/image";

export default function DholeraEcosystem() {
  return (
    <>
      <style>{`
        .dh-eco { background: #fff; padding: 60px 40px 80px; }
        .dh-eco-inner { max-width: 1240px; margin: 0 auto; }
        .dh-eco-heading { text-align: center; font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 40px); font-weight: 700; color: #1a1a1a; margin: 0 0 12px; }

        .dh-eco-underline {
          width: 220px;
          height: 2px;
          margin: 0 auto 48px;
          background: linear-gradient(
            to right,
            transparent 0%,
            #D7172A 35%,
            #D7172A 65%,
            transparent 100%
          );
        }

        .dh-eco-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: stretch; }
        .dh-eco-card { position: relative; min-height: 380px; border: 1px solid #eee; overflow: hidden; background: #fafafa; }
        .dh-eco-card img { transition: transform 0.4s; }
        .dh-eco-card:hover img { transform: scale(1.03); }

        /* Text overlays for the right-hand (city render) card. Both sit
           INSIDE the card's own box (top/bottom values keep them within its
           padding), with NO transform pushing them past the edges -- that
           was what put the title outside the image last time. */
        .dh-eco-overlay-top {
          position: absolute;
          top: 20px;
          right: 24px;
          left: 24px;
          z-index: 2;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: clamp(12px, 1.1vw, 14px);
          font-weight: 500;
          line-height: 1.4;
          text-align: right;
          text-shadow: 0 1px 4px rgba(0,0,0,.7);
        }

        .dh-eco-overlay-bottom {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
          padding: 32px 24px 22px;
          background: linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,.35) 60%, rgba(0,0,0,0));
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: clamp(12px, 1.1vw, 14px);
          font-weight: 400;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .dh-eco { padding: 40px 20px 60px; }
          .dh-eco-grid { grid-template-columns: 1fr; }
          .dh-eco-card { min-height: 280px; }
        }
      `}</style>

      <section className="dh-eco">
        <div className="dh-eco-inner">
          <h2 className="dh-eco-heading">Dholera Growth Ecosystem</h2>
          <div className="dh-eco-underline" />
          <div className="dh-eco-grid">
            <div className="dh-eco-card">
              <Image src="/map.jpg" alt="Master Plan Dholera SIR" fill style={{ objectFit: "contain" }} sizes="50vw" />
            </div>
            <div className="dh-eco-card">
              <Image src="/building.jpg" alt="Dholera City Infrastructure" fill style={{ objectFit: "cover" }} sizes="50vw" />
              <div className="dh-eco-overlay-top">
                Designed for a life
                <br />
                well lived
              </div>
              <div className="dh-eco-overlay-bottom">
                Dholera SIR is India's premier greenfield smart city, featuring
                world-class "plug-and-play" underground infrastructure and
                100% RERA-approved plots.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}