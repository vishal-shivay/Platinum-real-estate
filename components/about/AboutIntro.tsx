"use client";
import Image from "next/image";

// Positions below are % of the collage box (base design: 660 × 700)
const IMAGES = [
  { id: 1, src: "/images/a1.jpg", alt: "Marble room",     top: 0,  left: 24.2, width: 53.0, height: 32.6 },
  { id: 2, src: "/images/a2.jpg", alt: "Living room",     top: 19.3, left: 60.6, width: 37.9, height: 28.6 },
  { id: 3, src: "/images/a3.png", alt: "Dark kitchen",    top: 38.7, left: 23.2, width: 51.5, height: 25.1 },
  { id: 4, src: "/images/a4.jpg", alt: "Flowers kitchen", top: 57.4, left: 36.9, width: 49.6, height: 27.0 },
  { id: 5, src: "/images/a5.jpg", alt: "White kitchen",   top: 72.4, left: 70.6, width: 37.9, height: 25.0 },
];

export default function AboutSection() {
  return (
    <>
      <style>{`
        .about-section {
          position: relative;
          width: 100%;
          min-height: 780px;
          display: flex;
          flex-direction: row;
          overflow: hidden;
          font-family: Georgia, serif;
        }
        .about-bg-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        .about-bg {
         
          object-position: center;
        }
        .about-collage {
          position: relative;
          width: 52%;
          flex-shrink: 0;
          align-self: center;
          z-index: 2;
        }
        .collage-ratio {
          position: relative;
          width: 100%;
          padding-top: 106%; /* 700 / 660 aspect ratio */
          transform: translate(-80px, -15px); 
        }
        .c-img-wrap {
          position: absolute;
          overflow: hidden;
          top: var(--top);
          left: var(--left);
          width: var(--width);
          height: var(--height);
        }
        .c-img { object-fit: cover; }

        .about-panels {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 86px;
          padding: 44px 34px 44px 20px;
          position: relative;
          z-index: 2;
          margin-top:100px;
        }
        .about-panel {
          width: 90%;
          background: rgba(26,24,24,0.90);
          border: 1px solid rgba(200,169,110,0.22);
          padding: 22px 26px;
          text-align: center;
        }
        .about-panel p { font-family: Montserrat, sans-serif; margin: 0; font-size: 15.9px; color: #b5b0a6; line-height: 1.85; }
        .panel-big-red { font-size: 28px; font-weight: 700; color: #D7172A; font-family: "Playfair Display", serif; line-height: 1.1; display: inline; }
        .panel-big-red-sm { font-family: "Playfair Display", serif; font-size: 28px; font-weight: 700; color: #D7172A; line-height: 1.1; display: inline; }

        @media (max-width: 1024px) and (min-width: 481px) {
          .about-section { min-height: 0; flex-direction: column; }
          .about-collage { width: 100%; max-width: 480px; margin: 0 auto; }
          .about-panels { width: 100%; padding: 32px 28px; gap: 20px; }
          .about-panel { width: 100%; }
        }
        @media (max-width: 480px) {
          .about-section { min-height: 0; flex-direction: column; }
          .about-collage { width: 100%; max-width: 360px; margin: 0 auto; }
          .about-panels { width: 100%; padding: 20px 16px 24px; gap: 16px; }
          .about-panel { width: 100%; padding: 18px 16px; }
          .about-panel p { font-size: 12px; line-height: 1.75; }
          .panel-big-red { font-size: 16px; }
          .panel-big-red-sm { font-size: 14px; }
        }
      `}</style>

      <section className="about-section">
        <div className="about-bg-wrap">
          <Image
            src="/images/bg.png"
            alt=""
            fill
            className="about-bg"
            priority={false}
          />
        </div>

        <div className="about-collage">
          <div className="collage-ratio">
            {IMAGES.map((img) => (
              <div
                key={img.id}
                className="c-img-wrap"
                style={{
                  "--top": `${img.top}%`,
                  "--left": `${img.left}%`,
                  "--width": `${img.width}%`,
                  "--height": `${img.height}%`,
                } as React.CSSProperties}
              >
                <Image src={img.src} alt={img.alt} fill className="c-img" sizes="30vw" />
              </div>
            ))}
          </div>
        </div>

        <div className="about-panels">
          <div className="about-panel">
            <p>
              At <span className="panel-big-red">Platinum Realtors,</span> we help buyers, sellers, and investors navigate the real estate market with confidence. Our experienced team is dedicated to providing personalized solutions, market expertise, and exceptional service at every step.
              <br /><br />
              Whether you're searching for your dream home or a <span className="panel-big-red">valuable investment</span> opportunity, we are committed to making your property journey seamless, transparent, and rewarding.
            </p>
          </div>
          <div className="about-panel">
            <p>
              Our commitment to transparency, integrity, and client satisfaction has earned us the trust of homeowners, buyers, sellers, and investors alike. Whether you're looking for your
              <span className="panel-big-red-sm"> dream home, or a commercial space,</span> we strive to deliver exceptional service, valuable insights, and lasting relationships built on trust and professionalism.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}