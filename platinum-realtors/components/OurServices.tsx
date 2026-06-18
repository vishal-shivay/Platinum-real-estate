"use client";
import Image from "next/image";
import service from "../images/service.jpg";
import serviceTwo from "../images/second-service.png";

export default function OurServices() {
  return (
    <>
      <style>{`
        .services {
          padding: 60px 0 0;
          background-color: #fff;
        }

        .services-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 32px;
          font-weight: 700;
          color: #c8102e;
          text-align: center;
          margin-bottom: 10px;
          font-style: italic;
        }

        .services-subheading {
          text-align: center;
          margin-bottom: 50px;
        }

        .services-subheading p {
          font-size: 13px;
          color: #555;
          text-align: center;
          margin-bottom: 8px;
          letter-spacing: 0.01em;
        }

        .services-subheading-line {
          width: 40px;
          height: 2px;
          background-color: #c8102e;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          padding: 0 50px;
        }

        .service-card {
          display: flex;
          flex-direction: column;
        }

        .service-card-img-wrap {
          position: relative;
          width: 100%;
          height: 410px;
        }

        .service-card-body {
          padding: 24px 28px 32px;
          background-color: #f5f5f5;
          flex: 1;
        }

        .service-card-body.commercial {
          background: linear-gradient(135deg, #f5f5f5 0%, #f8e0e4 100%);
        }

        .service-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .service-card-title {
          font-size: 20px;
          font-weight: 400;
          color: #1a1a2e;
          font-family: Georgia, serif;
        }

        .service-card-count {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a2e;
        }

        .service-card-desc {
          font-size: 13px;
          color: #555;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .service-card-btn {
          background-color: #c8102e;
          color: #fff;
          border: none;
          padding: 10px 24px;
          font-size: 13px;
          cursor: pointer;
          letter-spacing: 0.02em;
        }

        .service-card-btn:hover {
          background-color: #a50d26;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            padding: 0 24px;
          }
          .service-card-img-wrap {
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .services-grid {
            padding: 0 16px;
          }
          .service-card-img-wrap {
            height: 220px;
          }
          .service-card-body {
            padding: 18px 20px 24px;
          }
        }
      `}</style>

      <section className="services">
        <h2 className="services-heading">Our Services</h2>
        <div className="services-subheading">
          <p>Comprehensive real estate solutions tailored to your unique needs</p>
          <div className="services-subheading-line" />
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-card-img-wrap">
              <Image
                src={service}
                alt="Residential"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="service-card-body">
              <div className="service-card-header">
                <span className="service-card-title">Residential</span>
                <span className="service-card-count">120+ Properties</span>
              </div>
              <p className="service-card-desc">
                Residential properties offer a premium lifestyle featuring modern high-rise
                apartments and luxury independent floors.
              </p>
              <button className="service-card-btn">Explore Properties</button>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card-img-wrap">
              <Image
                src={serviceTwo}
                alt="Commercial"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="service-card-body commercial">
              <div className="service-card-header">
                <span className="service-card-title">Commercial</span>
                <span className="service-card-count">100+ Properties</span>
              </div>
              <p className="service-card-desc">
                Commercial properties offer high-yielding real estate opportunities across
                premium retail spaces, modern office complexes, and dedicated IT parks.
              </p>
              <button className="service-card-btn">Explore Properties</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}