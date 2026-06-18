"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import mohali from "../images/mohali.jpg";
import zirkpur from "../images/zirkpur.jpg";
import dholera from "../images/dholera.jpg";

const locationData: { id: number; name: string; image: StaticImageData | string }[] = [
  { id: 1, name: "Mohali",      image: mohali   },
  { id: 2, name: "Zirakpur",    image: zirkpur  },
  { id: 3, name: "Dholera",     image: dholera  },
];

export default function Locations() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? locationData.length - visibleCount : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev >= locationData.length - visibleCount ? 0 : prev + 1
    );
  };

  const visibleCards = locationData.slice(startIndex, startIndex + visibleCount);

  return (
    <>
      <style>{`
        .locations {
          padding: 64px 0 70px;
          background: #fff;
          position: relative;
        }

        .locations .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 10px;
        }

        .section-heading h2 {
          font-size: 26px;
          font-weight: 600;
          color: #D7172A;
          display: inline-block;
          position: relative;
          padding-bottom: 10px;
        }

        .section-desc {
          text-align: center;
          font-size: 13px;
          color: #555;
          max-width: 520px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }

        .section-desc::after {
          content: '';
          display: block;
          width: 20%;
          height: 2px;
          background: #D7172A;
          margin: 8px auto 0;
        }

        .locations-slider-wrap {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0;
        }

        .locations-arrow {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 22px;
          color: #D7172A;
          padding: 8px 12px;
          flex-shrink: 0;
          z-index: 2;
          transition: transform 0.15s;
        }

        .locations-arrow:hover {
          transform: scale(1.15);
        }

        .locations-cards {
          display: flex;
          gap: 20px;
          flex: 1;
          overflow: hidden;
          justify-content: center;
        }

        .location-card {
          background: #ffffff;
          overflow: hidden;
          flex: 1;
          min-width: 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        }

        .location-card-img-wrap {
          position: relative;
          width: 100%;
          height: 280px;
        }

        .location-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          background: #ffffff;
        }

        .location-card-footer span {
          font-size: 15px;
          font-weight: 500;
          color: #000;
        }

        .explore-btn {
          background: #D7172A;
          color: #ffffff;
          font-size: 13px;
          font-weight: 500;
          font-family: 'Poppins', sans-serif;
          padding: 6px 16px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }

        .explore-btn:hover {
          background: #e01030;
        }

        @media (max-width: 1024px) {
          .location-card-img-wrap { height: 220px; }
          .locations-cards { gap: 16px; }
        }

        @media (max-width: 768px) {
          .locations-cards { gap: 10px; }
          .location-card-img-wrap { height: 180px; }
          .location-card-footer { padding: 10px 12px; }
          .location-card-footer span { font-size: 13px; }
          .explore-btn { font-size: 11px; padding: 5px 10px; }
          .locations-arrow { font-size: 18px; padding: 6px 8px; }
        }

        @media (max-width: 480px) {
          .locations-cards {
            flex-direction: column;
            align-items: center;
          }
          .location-card {
            width: 100%;
          }
          .location-card-img-wrap { height: 200px; }
          .location-card-footer span { font-size: 14px; }
          .explore-btn { font-size: 12px; padding: 6px 14px; }
        }
      `}</style>

      <section className="locations">
        <div className="container">
          <div className="section-heading">
            <h2>Elite Locations</h2>
          </div>
          <p className="section-desc">
            From commercial spaces to dream homes, we offer comprehensive real
            estate services tailored to your needs.
          </p>

          <div className="locations-slider-wrap">
            <button className="locations-arrow" onClick={handlePrev} aria-label="Previous">
              &#10094;
            </button>

            <div className="locations-cards">
              {visibleCards.map((loc) => (
                <div className="location-card" key={loc.id}>
                  <div className="location-card-img-wrap">
                    <Image
                      src={loc.image}
                      alt={loc.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="location-card-footer">
                    <span>{loc.name}</span>
                    <button className="explore-btn">Explore</button>
                  </div>
                </div>
              ))}
            </div>

            <button className="locations-arrow" onClick={handleNext} aria-label="Next">
              &#10095;
            </button>
          </div>
        </div>
      </section>
    </>
  );
}