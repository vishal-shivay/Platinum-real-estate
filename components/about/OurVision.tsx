"use client";
import Image from "next/image";

export default function OurVision() {
  return (
    <>
      <style>{`
        .ov-section {
          background-color: #f5f5f3;
          padding: 60px 60px 80px;
        }
        .ov-grid {
          display: flex;
          gap: 0px;
          align-items: center;
          max-width: 1300px;
          margin: 0 auto;
        }
        .ov-img-col {
          flex: 1 1 45%;
          min-width: 0;
        }
        .ov-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 32px;
          font-weight: 700;
          color: #c8102e;
          margin: 0 0 28px 0;
          text-align: center;
        }
        .ov-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3.5;
          overflow: hidden;
        }
        .ov-img {
          object-fit: cover;
        }
        .ov-text-col {
          flex: 1 1 55%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ov-text {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 15px;
          color: #43536b;
          line-height: 1.5;
          text-align: center;
          margin: 0;
          max-width: 560px;
        }

        @media (max-width: 1024px) {
          .ov-section { padding: 50px 40px 60px; }
          .ov-grid { gap: 40px; }
          .ov-text { font-size: 14px; max-width: 460px; }
        }

        @media (max-width: 768px) {
          .ov-section { padding: 40px 24px 50px; }
          .ov-grid { flex-direction: column; gap: 30px; }
          .ov-img-col, .ov-text-col { flex: 1 1 100%; width: 100%; }
          .ov-heading { font-size: 26px; margin-bottom: 20px; }
          .ov-img-wrap { aspect-ratio: 16 / 10; }
          .ov-text { max-width: 100%; font-size: 14px; line-height: 1.85; }
        }

        @media (max-width: 480px) {
          .ov-section { padding: 32px 18px 40px; }
          .ov-heading { font-size: 22px; margin-bottom: 16px; }
          .ov-img-wrap { aspect-ratio: 4 / 3; }
          .ov-text { font-size: 13px; line-height: 1.8; }
        }
      `}</style>

      <section className="ov-section">
        <div className="ov-grid">
          <div className="ov-img-col">
            <h2 className="ov-heading">Our Vision</h2>
            <div className="ov-img-wrap">
              <Image
                src="/images/our-vision.jpg"
                alt="Vision - corridor"
                fill
                className="ov-img"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>
          <div className="ov-text-col">
            <p className="ov-text">
              Our vision is to become the premier real estate anchor where
              commercial ambition and residential comfort seamlessly
              connect to build thriving local communities. We envision a
              future where finding the perfect workspace or a dream family
              home is entirely stress-free, driven by cutting-edge market data
              and a legacy of absolute trust. By continuously elevating the
              standards of real estate service, we aim to empower our clients
              to build generational wealth and secure their futures across
              both personal and professional landscapes. Through our
              forward-thinking approach, we don't just facilitate transactions;
              we cultivate the very spaces where businesses prosper and
              families flourish for generations to come.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}