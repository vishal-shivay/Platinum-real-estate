"use client";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <>
      <style>{`
        .wcu-section {
          background-color: #f5f5f3;
          padding: 60px 60px 0px;
        }
        .wcu-grid {
          display: flex;
          gap: 40px;
          align-items: center;
          max-width: 1300px;
          margin: 0 auto;
        }
        .wcu-img-col {
          flex: 1 1 45%;
          min-width: 0;
        }
        .wcu-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 32px;
          font-weight: 700;
          color: #c8102e;
          margin: 0 0 20px 0;
          text-align: center;
        }
        .wcu-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3.5;
          overflow: hidden;
        }
        .wcu-img {
          object-fit: cover;
        }
        .wcu-text-col {
          flex: 1 1 55%;
          min-width: 0;
          display: flex;
          justify-content: center;
        }
        .wcu-text {
          font-family: Georgia, 'Playfair Display', 'Times New Roman', serif;
          font-size: 16.5px;
          color: #43536b;
          line-height: 1.3;
          text-align: center;
          max-width: 460px;
        }
        .wcu-text p { margin: 0; }

        @media (max-width: 1024px) {
          .wcu-section { padding: 50px 40px 60px; }
          .wcu-grid { gap: 40px; }
          .wcu-text { max-width: 400px; }
        }

        @media (max-width: 768px) {
          .wcu-section { padding: 40px 24px 50px; }
          .wcu-grid { flex-direction: column; gap: 30px; align-items: center; }
          .wcu-img-col, .wcu-text-col { flex: 1 1 100%; width: 100%; }
          .wcu-heading { font-size: 26px; margin-bottom: 20px; }
          .wcu-img-wrap { aspect-ratio: 16 / 10; }
          .wcu-text { font-size: 14px; line-height: 1.3; max-width: 480px; }
        }

        @media (max-width: 480px) {
          .wcu-section { padding: 32px 18px 40px; }
          .wcu-heading { font-size: 22px; margin-bottom: 16px; }
          .wcu-img-wrap { aspect-ratio: 4 / 3; }
          .wcu-text { font-size: 13px; line-height: 1.3; max-width: 100%; }
        }
      `}</style>

      <section className="wcu-section">
        <div className="wcu-grid">
          <div className="wcu-img-col">
            <h2 className="wcu-heading">Our Approach</h2>
            <div className="wcu-img-wrap">
              <Image
                src="/images/why-choose-us.jpg"
                alt="Luxury interior"
                fill
                className="wcu-img"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>
          <div className="wcu-text-col">
            <div className="wcu-text">
              <p>
                Extensive experience in financial analysis and risk assessment<br />
                Expert guidance for apartments, plots, and villas<br />
                Strong market presence in Mohali, Zirakpur, and Panchkula<br />
                Access to premium and high-growth investment opportunities<br />
                Transparent and ethical business practices<br />
                Personalized property consultation based on individual goals<br />
                End-to-end assistance from property selection to final transaction<br />
                <br />
                Our mission is simple: to help our clients make smart real estate
                decisions that create long-term value and financial growth.
                Whether you are searching for your dream home, planning your
                next investment, or exploring opportunities in emerging markets
                like Dholera, Platinum Realtors is committed to delivering trusted
                advice, professional service, and complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}