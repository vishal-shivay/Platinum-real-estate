import Image from "next/image";
import heroBg from "../images/hero-bg.jpg";

export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&family=Poppins:wght@400;500&display=swap');

        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 1;
        }

        .hero-inner {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 146px 20px 120px;
        }

        .hero-inner h1 {
          font-family: 'Montserrat', sans-serif;
          font-size: 87px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
          letter-spacing: 0;
          margin-bottom: 16px;
        }

        .hero-inner p {
          font-family: 'Montserrat', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);
        }

        .hero-search-bar {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          width: 95%;
          max-width: 1100px;
          display: flex;
          align-items: flex-end;
          gap: 12px;
        }

        .search-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .search-group label {
          font-size: 11px;
          font-weight: 500;
          color: #ffffff;
          padding-left: 2px;
          font-family: 'Poppins', sans-serif;
        }

        .search-select-wrap {
          position: relative;
        }

        .search-select-wrap::after {
          content: '▾';
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 11px;
          color: white;
          pointer-events: none;
        }

        .search-select-wrap select {
          height: 40px;
          padding: 0 30px 0 12px;
          border: 2px solid #D7172A;
          border-radius: 4px;
          font-size: 13px;
          font-family: 'Poppins', sans-serif;
          color: #fff;
          background-color: rgba(0, 0, 0, 0.4);
          min-width: 140px;
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
        }

        .search-select-wrap select:focus {
          outline: 1px solid #D7172A;
        }

        .search-find-btn {
          height: 40px;
          padding: 0 22px;
          background: #D7172A;
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
          font-family: 'Poppins', sans-serif;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          align-self: flex-end;
          transition: background 0.2s;
        }

        .search-find-btn:hover {
          background: #b5121f;
        }

        @media (max-width: 1024px) {
          .hero-inner h1 { font-size: 60px; }
        }

        @media (max-width: 768px) {
          .hero-inner h1 { font-size: 42px; }
          .hero-search-bar { flex-wrap: wrap; }
        }

        @media (max-width: 480px) {
          .hero-inner h1 { font-size: 30px; }
          .hero-search-bar {
            flex-direction: column;
            align-items: stretch;
            width: 90%;
          }
          .search-select-wrap select {
            min-width: 100%;
            width: 100%;
          }
          .search-find-btn { width: 100%; }
        }
      `}</style>

      <section className="hero">
        <Image
          src={heroBg}
          alt="Hero Background"
          priority
          fill
          style={{ objectFit: "cover", objectPosition: "center center" }}
        />

        <div className="hero-overlay" />

        <div className="hero-inner">
          <h1>
            Elevate Lifestyle<br />
            Luxury Meets Comfort
          </h1>
          <p>Explore a wide range of properties</p>
        </div>

        <div className="hero-search-bar">
          <div className="search-group">
            <label>Location</label>
            <div className="search-select-wrap">
              <select>
                <option>Mohali</option>
                <option>Zirakpur</option>
                <option>Dholera</option>
              </select>
            </div>
          </div>

          <div className="search-group">
            <label>Property</label>
            <div className="search-select-wrap">
              <select>
                <option>House</option>
                <option>Apartment</option>
                <option>Commercial</option>
              </select>
            </div>
          </div>

          <div className="search-group">
            <label>Price Range</label>
            <div className="search-select-wrap">
              <select>
                <option>Rs 5.9Lac – Rs 1.2 Cr</option>
                <option>Rs 1.2 Cr – Rs 3 Cr</option>
                <option>Rs 3 Cr+</option>
              </select>
            </div>
          </div>

          <button className="search-find-btn">Find Now</button>
        </div>
      </section>
    </>
  );
}