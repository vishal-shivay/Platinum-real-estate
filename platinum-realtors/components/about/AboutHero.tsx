"use client";

export default function AboutHero() {
  return (
    <>
      <style>{`
        .about-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .about-hero__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .about-hero__overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(10, 10, 20, 0.5);
        }
        .about-hero__content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 80px;
        }
        .about-hero__title {
          font-family: 'Playfair Display', serif;
          font-size: 52px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 1px;
        }
      `}</style>

      <section className="about-hero">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80"
          alt="Luxury dining room"
          className="about-hero__img"
        />
        <div className="about-hero__overlay" />
        <div className="about-hero__content">
          <h1 className="about-hero__title">About Us</h1>
        </div>
      </section>
    </>
  );
}