"use client";
import Image from "next/image";

const features = [
  "Expert market\nknowledge\nand insights",
  "Personalized\nproperty\nmatching",
  "Transparent\npricing and\nprocess",
  "End-to-end\nsupport and\nassistance",
  "Verified and\npremium\nlistings",
];



export default function WhyUs() {
  return (
    <>
      <style>{`
        .why-us { padding: 60px 40px 0; background-color: #fff; }
        .why-us-heading { font-family: 'Playfair Display', serif; font-size: 32px; font-weight: 600; color: #c8102e; text-align: center; margin-bottom: 10px; }
        .why-us-desc { font-size: 13px; color: #555; text-align: center; margin-bottom: 6px; font-family: "Montserrat"; }
        .why-us-desc-two { font-size: 13px; color: #555; text-align: center; margin-bottom: 50px; }
        .why-us-cards {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 44px;
        }
        .why-us-card {
          position: relative;
          width: 250px;
        }
        .why-us-card-img {
          position: relative;
          width: 100%;
          aspect-ratio: 5 / 8;
        }
        .why-us-card span {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
          font-size: 20px;
          line-height: 1.3;
          white-space: pre-line;
          font-family: "Montserrat";
          padding: 0 22px;
        }
        @media (max-width: 992px) {
          .why-us-card { width: 130px; }
        }
        @media (max-width: 768px) {
          .why-us { padding: 60px 24px 0; }
          .why-us-cards { gap: 18px; }
          .why-us-card { width: 40%; max-width: 160px; }
        }
        @media (max-width: 480px) {
          .why-us { padding: 60px 16px 0; }
          .why-us-cards { gap: 14px; }
          .why-us-card { width: 45%; max-width: 140px; }
        }
      `}</style>

      <section className="why-us">
        <h2 className="why-us-heading">Why Choose Us?</h2>
        <p className="why-us-desc"></p>
        <p className="why-us-desc-two">Our commitment to excellence and customer satisfaction sets us apart. <br />
          With over 15 years of experience in the real estate industry, we've helped <br /> thousands of clients find their perfect property.</p>
        <div className="why-us-cards">
          {features.map((feat, i) => (
            <div className="why-us-card" key={i}>
              <div className="why-us-card-img">
                <Image src="/images/card-bg.png" alt="" fill style={{ objectFit: "contain" }} />
                <span>{feat}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}