"use client";
import Image from "next/image";

export default function AboutHero() {
  return (
    <>
      <style>{`
       
       
.about-hero {
  width: 100%;
  min-height: 100vh;

  background-image: url("/images/aboutheader.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

        .about-hero__img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; }
        .about-hero__overlay { position: absolute; inset: 0; background-color: rgba(10, 10, 20, 0.5); }
        .about-hero__content { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; padding: 80px 24px 24px; }
        .about-hero__title { font-size: clamp(28px, 5vw, 52px); font-weight: 700; color: #fff; letter-spacing: 1px; text-align: center; line-height: 1.2; word-break: break-word; margin: 0; }
        @media (max-width: 480px) {
         .about-hero{height:100vh;}
         .about-hero__content { padding: 70px 16px 16px; }

         
           
           }




        @media (min-width: 481px) and (max-width: 768px) {  .about-hero__content { padding: 76px 32px 24px; } }
        @media (min-width: 769px) and (max-width: 1024px) {  .about-hero__content { padding: 80px 48px 24px; } }
        @media (min-width: 1025px) {  .about-hero__content { padding: 80px 64px 24px; } }
        @media (max-height: 500px) and (orientation: landscape) {  .about-hero__content { padding: 60px 32px 16px; } }
      `}</style>

      <section className="about-hero">
        {/* <img
          src="images/aboutheader.jpeg"     alt="Luxury dining room"
          className="about-hero__img"
        /> */}

       {/* <Image
  src="/images/aboutheader.jpeg"
  alt="Photo"
    width={1000}
  height={500}
  style={{
    width: "100%",
      height: "100%",
    display: "block",
  }} 

/> */}
        {/* <div className="about-hero__overlay" /> */}
        <div className="about-hero__content">
          <h1 className="about-hero__title">About Us</h1>
        </div>
      </section>
    </>
  );
}