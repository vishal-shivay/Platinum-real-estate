import Image from "next/image";
import aboutImg from "../../images/dholera.jpg";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="image-column">
          <div className="image-shape">
            <Image
              src={aboutImg}
              alt="About Me"
              fill
              priority
              className="about-image"
            />
          </div>
        </div>

        <div className="content-column">
          <h2>About Me</h2>

          <p>
            Welcome to Platinum Realtors - your trusted partner in real estate
            investments and property solutions.
          </p>

          <p>
            Founded by Ravi Sehgal, Platinum Realtors is built on a strong
            foundation of professionalism, integrity, and customer-centric
            service. With over 12 years of experience in the banking sector,
            specializing in Sales and Risk Analysis, Ravi brings a unique
            financial perspective to real estate.
          </p>

          <p>
            For the past 2 years, Ravi has been actively serving the real estate
            market across Mohali, Zirakpur and Panchkula, assisting homebuyers,
            investors and families in finding the right properties.
          </p>

          <p>
            At Platinum Realtors, we understand that purchasing a property is
            more than just a transaction — it is a significant financial and
            emotional decision.
          </p>

          <p>
            In addition to our strong presence in the Tricity region, we also
            offer carefully selected plotting opportunities in Dholera.
          </p>

          <h4>
            Platinum Realtors – Turning Dreams into Addresses
          </h4>
        </div>

      </div>

      <style>{`
        .about-section {
          background: #000;
          padding: 100px 60px;
        }

        .about-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 100px;
        }

        .image-column {
          flex-shrink: 0;
        }

        .image-shape {
          position: relative;
          width: 300px;
          height: 450px;
          border: 3px solid #d6001c;
          border-radius: 250px 250px 0 0;
          background: #111;
        }

        .about-image {
          object-fit: cover;
 border-radius: 250px 250px 0 0;
          transform:translate(-60px, -70px);

          transform-origin: center;
        }

        .content-column {
          max-width: 650px;
          text-align: center;
        }

        .content-column h2 {
          color: #d6001c;
          font-size: 52px;
          margin-bottom: 40px;
          font-family: Georgia, serif;
        }

        .content-column p {
          color: #fff;
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .content-column h4 {
          color: #d6001c;
          margin-top: 40px;
          font-size: 24px;
          font-family: Georgia, serif;
        }

        @media (max-width: 1100px) {
          .about-container {
            flex-direction: column;
          }

          .image-shape {
            width: 420px;
            height: 560px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 60px 20px;
          }

          .image-shape {
            width: 100%;
            max-width: 350px;
            height: 500px;
          }

          .content-column h2 {
            font-size: 40px;
          }

          .content-column p {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}