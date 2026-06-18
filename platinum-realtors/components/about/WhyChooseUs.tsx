"use client";

export default function WhyChooseUs() {
  return (
    <>
      <style>{`
        .wcu-section {
          background-color: #f5f5f3;
          padding: 60px 60px 70px;
        }

        .wcu-heading {
          font-family: 'Playfair Display', serif;
          font-size: 30px;
          font-weight: 700;
          color: #c8102e;
          margin: 0 0 30px 0;
        }

        .wcu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: start;
        }

        .wcu-img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          display: block;
        }

        .wcu-text {
          padding-top: 10px;
          font-size: 13px;
          color: #333;
          line-height: 1.9;
          text-align: center;
        }

        .wcu-text p {
          margin: 0 0 4px 0;
        }

        .wcu-text .wcu-spacer {
          margin-top: 14px;
        }
      `}</style>

      <section className="wcu-section">
        <h2 className="wcu-heading">Why Choose Us?</h2>

        <div className="wcu-grid">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&q=80"
            alt="Luxury interior"
            className="wcu-img"
          />

          <div className="wcu-text">
            <p>Extensive experience in financial analysis and risk assessment</p>
            <p>Expert guidance for apartments, plots, and villas</p>
            <p>Strong market presence in Mohali, Zirakpur, and Panchkula</p>
            <p>Access to premium and high-growth investment opportunities</p>
            <p>Transparent and ethical business practices</p>
            <p>Personalized property consultation based on individual goals</p>
            <p>End-to-end assistance from property selection to final transaction</p>
            <p className="wcu-spacer">
              Our mission is simple: to help our clients make smart real estate
              decisions that create long-term value and financial growth.
              Whether you are searching for your dream home, planning your
              next investment, or exploring opportunities in emerging markets
              like Dholera, Platinum Realtors is committed to delivering trusted
              advice, professional service, and complete peace of mind.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}