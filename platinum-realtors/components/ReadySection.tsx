"use client";

export default function ReadySection() {
  return (
    <>
      <style>{`
        .ready-section {
          padding: 50px 40px;
          text-align: center;
          background-color: #fff;
          border: 1px solid #D7172A;
          margin: 40px;
        }

        .ready-heading {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 600;
          color: #c8102e;
          margin-bottom: 8px;
        }

        .ready-desc {
          font-size: 13px;
          color: #555;
          margin-bottom: 16px;
        }

        .ready-contact {
          display: flex;
          justify-content: center;
          gap: 32px;
          margin-bottom: 20px;
          font-size: 13px;
          color: #444;
        }

        .ready-btn {
          background-color: #c8102e;
          color: #fff;
          border: none;
          padding: 10px 28px;
          font-size: 14px;
          cursor: pointer;
        }

        .ready-btn:hover {
          background-color: #a50d26;
        }

        @media (max-width: 768px) {
          .ready-section {
            margin: 24px;
            padding: 40px 24px;
          }
          .ready-contact {
            gap: 16px;
          }
        }

        @media (max-width: 480px) {
          .ready-section {
            margin: 16px;
            padding: 32px 16px;
          }
          .ready-contact {
            flex-direction: column;
            gap: 8px;
          }
          .ready-heading {
            font-size: 22px;
          }
        }
      `}</style>

      <section className="ready-section">
        <h2 className="ready-heading">Ready to Find your perfect property?</h2>
        <p className="ready-desc">
          Get in touch with our expert team today and let us help you find your dream space
        </p>
        <div className="ready-contact">
          <span>📞 +91**********</span>
          <span>✉️ info@platinum.com</span>
        </div>
        <button className="ready-btn">Schedule a consultation</button>
      </section>
    </>
  );
}