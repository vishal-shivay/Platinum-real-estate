export default function ContactMap() {
  return (
    <>
      <style>{`
        .contact-map {
          width: 100%;
          height: 380px;
          background: white;
          margin: 20px 0;
          padding: 0 51px 40px;
          box-sizing: border-box;
        }
        .contact-map iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }
        @media (max-width: 1024px) {
          .contact-map { padding: 0 40px; }
        }
        @media (max-width: 768px) {
          .contact-map { height: 300px; padding: 0 20px; }
        }
      `}</style>

      <section className="contact-map" aria-label="Office location map">
        <iframe
          title="Platinum Realtors office location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6883.693158133813!2d76.76682899274263!3d30.383714149017667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc9805704c12d%3A0x2d91ffcad753b096!2sPlatinum%20Realtors!5e0!3m2!1sen!2sin!4v1784091357570!5m2!1sen!2sin"
          allowFullScreen
        />




           </section>
    </>
  );
}