"use client";
import Image from "next/image";

export default function DholeraEcosystem() {
const bottomText = `Dholera SIR is India's premier greenfield
smart city, featuring world-class "plug-
and-play" underground infrastructure
and 100% RERA-approved plots.`;
  return (
    <>
      <style>{`
      .dh-eco-split-text {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 0;
  transform: translateY(50%);
  font-family: 'Inter', sans-serif;
  font-size: clamp(13px, 1.15vw, 15px);
  font-weight: 400;
  line-height: 1.6;
  margin: 0;
  z-index: 2;

  white-space: pre-line;
}
        .dh-eco { background: #fff; padding: 50px 40px 80px; }
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

        /* Outer card: NO overflow hidden here -- this is what lets the
           split text bleed past the image box and onto the white page. */
        .dh-eco-card { position: relative; min-height: 380px; }

        .dh-eco-card-left { border: 1px solid #eee; overflow: hidden; background: #fafafa; }
        .dh-eco-card-left img { transition: transform 0.4s; }
        .dh-eco-card-left:hover img { transform: scale(1.03); }

        /* The "frame" is the actual visible black box -- image + border +
           overflow:hidden live here, NOT on the outer card. */
        .dh-eco-frame {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border: 1px solid #eee;
          background: #000;
        }
        .dh-eco-frame img { transition: transform 0.4s; }
        .dh-eco-card:hover .dh-eco-frame img { transform: scale(1.03); }

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

        /* Faint gradient behind the white half of the split text, purely
           for legibility against the diagram artwork. */
        .dh-eco-frame-scrim {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 45%;
          background: linear-gradient(to top, rgba(0,0,0,.7), rgba(0,0,0,0));
          z-index: 1;
          pointer-events: none;
        }

        /* Both split-text layers share identical position/size/typography
           so they line up exactly. bottom:0 + translateY(50%) centers the
           block on the frame's bottom edge -- half above, half below. */
        .dh-eco-split-text {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 0;
          transform: translateY(50%);
          font-family: 'Inter', sans-serif;
          font-size: clamp(13px, 1.15vw, 15px);
          font-weight: 400;
          line-height: 1.6;
          margin: 0;
          z-index: 2;
        }

        /* Lives INSIDE the frame -> frame's overflow:hidden clips off its
           bottom half automatically, leaving only the top half (over the
           image) visible. */
        .dh-eco-split-text.is-white {
          color: #fff;
        }

        /* Lives OUTSIDE the frame (direct child of the card) -> not
           clipped by the frame, so we clip its own top half away with
           clip-path, leaving only the bottom half (on the white page). */
        .dh-eco-split-text.is-dark {
          color: #4a4a4a;
          clip-path: inset(50% 0 0 0);
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
            <div className="dh-eco-card dh-eco-card-left">
              <Image src="/map.jpg" alt="Master Plan Dholera SIR" fill style={{ objectFit: "contain" }} sizes="50vw" />
            </div>

            <div className="dh-eco-card">
              <div className="dh-eco-frame">
                <Image src="/building.jpg" alt="Dholera City Infrastructure" fill style={{ objectFit: "cover" }} sizes="50vw" />
                <div className="dh-eco-frame-scrim" />
                <div className="dh-eco-overlay-top">
                  Designed for a life
                  <br />
                  well lived
                </div>
                <p className="dh-eco-split-text is-white">{bottomText}</p>
              </div>
              <p className="dh-eco-split-text is-dark">{bottomText}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}