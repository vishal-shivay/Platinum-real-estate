"use client";

export default function OurMission() {
  return (
    <>
      <style>{`
        .om-section {
          background-color: #f5f5f3;
          padding: 20px 60px 70px;
        }

        .om-heading {
          font-family: 'Playfair Display', serif;
          font-size: 30px;
          font-weight: 700;
          color: #c8102e;
          text-align: right;
          margin: 0 0 30px 0;
        }

        .om-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: start;
        }

        .om-text {
          font-size: 13px;
          color: #333;
          line-height: 1.85;
          padding-top: 10px;
          margin: 0;
        }

        .om-img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          display: block;
        }
      `}</style>

      <section className="om-section">
        <h2 className="om-heading">Our Mission</h2>

        <div className="om-grid">
          <p className="om-text">
            Our mission is to simplify property ownership for families and business owners
            alike by matching your diverse real estate aspirations with deep, data-driven
            local insights. Whether you are looking for a commercial storefront to scale
            your business or a residential home to plant your roots, we eliminate the
            guesswork through total transparency and responsive guidance. By bridging the
            gap between commercial growth and residential comfort, our trusted expertise
            ensures every transaction builds lasting financial security.
          </p>

          <img
            src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=700&q=80"
            alt="Mission - living space"
            className="om-img"
          />
        </div>
      </section>
    </>
  );
}