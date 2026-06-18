"use client";

export default function NewsletterSection() {
  return (
    <>
      <style>{`
        .newsletter {
          padding: 60px 40px;
          text-align: center;
          background-color: #fff;
          position: relative;
          overflow: hidden;
        }

        .newsletter-bird {
          position: absolute;
          top: 10px;
          right: 80px;
          font-size: 80px;
          opacity: 0.08;
          pointer-events: none;
          transform: rotate(-10deg);
        }

        .newsletter-heading {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 600;
          color: #c8102e;
          margin-bottom: 8px;
        }

        .newsletter-desc {
          font-size: 13px;
          color: #666;
          margin-bottom: 24px;
        }

        .newsletter-form {
          display: flex;
          justify-content: center;
          gap: 0;
          max-width: 400px;
          margin: 0 auto 10px;
        }

        .newsletter-input {
          flex: 1;
          padding: 10px 16px;
          font-size: 13px;
          border: 1px solid #ddd;
          outline: none;
        }

        .newsletter-btn {
          background-color: #c8102e;
          color: #fff;
          border: none;
          padding: 10px 20px;
          font-size: 13px;
          cursor: pointer;
          white-space: nowrap;
        }

        .newsletter-btn:hover {
          background-color: #a50d26;
        }

        .newsletter-privacy {
          font-size: 11px;
          color: #aaa;
        }

        @media (max-width: 480px) {
          .newsletter {
            padding: 40px 16px;
          }
          .newsletter-form {
            flex-direction: column;
            max-width: 100%;
          }
          .newsletter-btn {
            width: 100%;
            padding: 10px;
          }
          .newsletter-heading {
            font-size: 22px;
          }
        }
      `}</style>

      <section className="newsletter">
        <div className="newsletter-bird">🕊</div>

        <h2 className="newsletter-heading">Stay updated with latest properties</h2>
        <p className="newsletter-desc">Get exclusive property alerts delivered to your inbox</p>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            className="newsletter-input"
          />
          <button className="newsletter-btn">Submit</button>
        </div>

        <p className="newsletter-privacy">We respect your privacy</p>
      </section>
    </>
  );
}