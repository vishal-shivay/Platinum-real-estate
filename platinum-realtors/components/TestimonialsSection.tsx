"use client";

const customers = [
  { img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&q=80", name: "", height: "160px", width: "130px" },
  { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80", name: "", height: "200px", width: "150px" },
  { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80", name: "Mr. Rajat Sood", height: "260px", width: "180px", featured: true },
  { img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80", name: "", height: "200px", width: "150px" },
  { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80", name: "", height: "160px", width: "130px" },
];

export default function TestimonialsSection() {
  return (
    <>
      <style>{`
        .testimonials {
          padding: 60px 40px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          background-color: #fff;
        }

        .testimonials-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 160px;
          font-weight: 900;
          color: rgba(200, 16, 46, 0.06);
          white-space: nowrap;
          pointer-events: none;
          letter-spacing: 10px;
          font-family: 'Playfair Display', serif;
          user-select: none;
        }

        .testimonials-heading {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 600;
          color: #c8102e;
          margin-bottom: 40px;
          position: relative;
          z-index: 1;
        }

        .testimonials-row {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 16px;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        .testimonials-card {
          text-align: center;
          flex-shrink: 0;
        }

        .testimonials-card img {
          object-fit: cover;
          display: block;
        }

        .testimonials-card-name {
          font-size: 11px;
          color: #fff;
          background-color: rgba(0,0,0,0.4);
          padding: 3px 6px;
          margin-top: -22px;
          position: relative;
          z-index: 2;
        }

        .testimonials-footer {
          font-family: 'Playfair Display', serif;
          font-size: 15px;
          color: #333;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .testimonials-watermark {
            font-size: 80px;
          }
          .testimonials-row {
            gap: 8px;
          }
        }

        @media (max-width: 480px) {
          .testimonials {
            padding: 40px 16px 30px;
          }
          .testimonials-watermark {
            font-size: 50px;
          }
          .testimonials-row {
            gap: 6px;
          }
          .testimonials-heading {
            font-size: 20px;
          }
        }
      `}</style>

      <section className="testimonials">
        <div className="testimonials-watermark">PLATINUM</div>

        <h2 className="testimonials-heading">Thousands of Satisfied Customers</h2>

        <div className="testimonials-row">
          {customers.map((c, i) => (
            <div className="testimonials-card" key={i}>
              <img
                src={c.img}
                alt={c.name || `Customer ${i + 1}`}
                style={{ width: c.width, height: c.height }}
              />
              {c.name && (
                <p className="testimonials-card-name">{c.name}</p>
              )}
            </div>
          ))}
        </div>

        <p className="testimonials-footer">
          Hundreds of Happy<br />clients
        </p>
      </section>
    </>
  );
}