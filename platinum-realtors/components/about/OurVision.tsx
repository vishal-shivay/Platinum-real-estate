"use client";

export default function OurVision() {
  return (
    <>
      <style>{`
        .ov-section {
          background-color: #f5f5f3;
          padding: 20px 60px 70px;
        }

        .ov-heading {
          font-family: 'Playfair Display', serif;
          font-size: 30px;
          font-weight: 700;
          color: #c8102e;
          margin: 0 0 30px 0;
        }

        .ov-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: start;
        }

        .ov-img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          display: block;
        }

        .ov-text {
          font-size: 13px;
          color: #333;
          line-height: 1.85;
          text-align: center;
          padding-top: 10px;
          margin: 0;
        }
      `}</style>

      <section className="ov-section">
        <h2 className="ov-heading">Our Vision</h2>

        <div className="ov-grid">
          <img
            src="https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=700&q=80"
            alt="Vision - corridor"
            className="ov-img"
          />

          <p className="ov-text">
            Our vision is to become the premier real estate anchor where commercial ambition
            and residential comfort seamlessly connect to build thriving local communities.
            We envision a future where finding the perfect workspace or a dream family home
            is entirely stress-free, driven by cutting-edge market data and a legacy of
            absolute trust. By continuously elevating the standards of real estate service,
            we aim to empower our clients to build generational wealth and secure their
            futures across both personal and professional landscapes. Through our
            forward-thinking approach, we don't just facilitate transactions; we cultivate
            the very spaces where businesses prosper and families flourish for generations
            to come.
          </p>
        </div>
      </section>
    </>
  );
}