"use client";
import Image from "next/image";

export default function OurMission() {
  return (
    <>
      <style>{`
        .om-section {
          background-color: #f5f5f3;
          padding: 60px 60px 80px;
        }
        .om-grid {
          display: flex;
          gap: 70px;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }
        .om-text-col {
          flex: 1 1 55%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .om-text {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 15px;
          color: #43536b;
          line-height: 1.5;
          text-align: center;
          margin: 0;
          max-width: 560px;
        }
        .om-img-col {
          flex: 1 1 45%;
          min-width: 0;
        }
        .om-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 32px;
          font-weight: 700;
          color: #c8102e;
          text-align: center;
          margin: 0 0 28px 0;
        }
        .om-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3.5;
          overflow: hidden;
        }
        .om-img {
          object-fit: cover;
        }

        @media (max-width: 1024px) {
          .om-section { padding: 50px 40px 60px; }
          .om-grid { gap: 40px; }
          .om-text { font-size: 14px; max-width: 460px; }
        }

        @media (max-width: 768px) {
          .om-section { padding: 40px 24px 50px; }
          .om-grid { flex-direction: column; gap: 30px; }
          .om-text-col, .om-img-col { flex: 1 1 100%; width: 100%; }
          .om-img-col { order: -1; }
          .om-heading { font-size: 26px; margin-bottom: 20px; }
          .om-img-wrap { aspect-ratio: 16 / 10; }
          .om-text { max-width: 100%; font-size: 14px; line-height: 1.85; }
        }

        @media (max-width: 480px) {
          .om-section { padding: 32px 18px 40px; }
          .om-heading { font-size: 22px; margin-bottom: 16px; }
          .om-img-wrap { aspect-ratio: 4 / 3; }
          .om-text { font-size: 13px; line-height: 1.8; }
        }
      `}</style>

      <section className="om-section">
        <div className="om-grid">
          <div className="om-text-col">
            <p className="om-text">
              Our mission is to simplify property ownership for families and
              business owners alike by matching your diverse real estate
              aspirations with deep, data-driven local insights. Whether you
              are looking for a commercial storefront to scale your business
              or a residential home to plant your roots, we eliminate the
              guesswork through total transparency and responsive
              guidance. By bridging the gap between commercial growth
              and residential comfort, our trusted expertise ensures every
              transaction builds lasting financial security.
            </p>
          </div>
          <div className="om-img-col">
            <h2 className="om-heading">Our Mission</h2>
            <div className="om-img-wrap">
              <Image
                src="/images/our-mission.jpg"
                alt="Mission - living space"
                fill
                className="om-img"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}