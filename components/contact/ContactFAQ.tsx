"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "Are all your properties legally verified?",
    answer:
      "Yes. Every property undergoes a thorough verification process to ensure clear ownership, valid\ndocumentation, and compliance with applicable\nregulations.",
  },
  {
    question: "Do you assist with financing or home loans?",
    answer:
      "We work with trusted banking partners and can guide you through loan eligibility, documentation, and the application process to help you secure financing that fits your budget.",
  },
  {
    question: "How long does the buying process usually take?",
    answer:
      "Timelines vary by property type and documentation, but most residential purchases are completed within 4–8 weeks once due diligence and financing are in place.",
  },
  {
    question: "Do you provide assistance with legal documentation?",
    answer:
      "Yes. Our team coordinates with legal experts to handle sale agreements, title checks, registration, and all paperwork required for a smooth, compliant transaction.",
  },
  {
    question: "What payment options are available?",
    answer:
      "We accept standard payment methods including bank transfers, cheques, and structured instalment plans for select projects. Payment schedules are discussed transparently before you commit.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="13"
      height="11"
      viewBox="0 0 13 11"
      fill="none"
      aria-hidden="true"
      style={{
        flexShrink: 0,
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.25s ease",
      }}
    >
      {/* Solid triangle, apex up by default; rotates 180deg to point down when open */}
      <polygon points="6.5,0 13,10.5 0,10.5" fill="#D7172A" />
    </svg>
  );
}

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <style>{`
        .contact-faq {
          background: #fff;
          padding: 80px 81px 88px;
        }
        .contact-faq__grid {
          display: grid;
          grid-template-columns: minmax(260px, 360px) 1fr;
          gap: 48px;
          align-items: start;
          max-width: 1280px;
          margin: 0 auto;
        }
        .contact-faq__heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 3.5vw, 42px);
          font-weight: 600;
          color: #1a2a3a;
          line-height: 1.2;
          margin: 0 0 12px;
        }
        .contact-faq__underline {
          width: 148px;
          height: 2px;
          background: #f0b8bc;
          margin-bottom: 20px;
        }
        .contact-faq__subtitle {
          font-size: 14px;
          line-height: 1.7;
          color: #6b7280;
          margin: 0;
          max-width: 300px;
        }
        .contact-faq__panel {
          position: relative;
          background: #000;
          padding: 22px 28px;
        }
        .contact-faq__list {
          position: relative;
          padding-bottom: 12px;
        }
        .contact-faq__list::before {
          content: "";
          position: absolute;
          left: 38px;
          top: 15px;
          bottom: 0;
          width: 46px;
          margin-left: -23px;
          border-radius: 999px;
          background: linear-gradient(180deg, #fce8ea 0%, #ef4a5a 38%, #c4121f 72%, #6e0a12 100%);
          z-index: 0;
          pointer-events: none;
        }
        .contact-faq__row {
          display: grid;
          grid-template-columns: 76px 1fr;
          align-items: start;
          position: relative;
          z-index: 1;
        }
        .contact-faq__num {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          padding-top: 15px;
          position: relative;
          z-index: 1;
        }
        .contact-faq__num span {
          width: 30px;
          height: 30px;
          min-width: 30px;
          min-height: 30px;
          aspect-ratio: 1;
          border-radius: 50%;
          background: #fff;
          color: #1a1a1a;
          font-size: 13px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top:20px;
        }
        .contact-faq__body {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-right: 4px;
        }
        .contact-faq__row:last-child .contact-faq__body {
          border-bottom: none;
        }
        .contact-faq__trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
            font-family:Montserrat;
        }
        .contact-faq__question {
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          line-height: 1.45;
        
        }
        .contact-faq__answer {
          font-size: 12px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.5);
          padding: 0 24px 14px 0;
          margin: 0;
          white-space: pre-line;
         
        }
        @media (max-width: 1024px) {
          .contact-faq { padding: 64px 40px 72px; }
        }
        @media (max-width: 768px) {
          .contact-faq { padding: 56px 20px 64px; }
          .contact-faq__grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .contact-faq__subtitle { max-width: none; }
          .contact-faq__panel { padding: 18px 16px; }
          .contact-faq__list::before {
            left: 30px;
            width: 38px;
            margin-left: -19px;
          }
          .contact-faq__row {
            grid-template-columns: 60px 1fr;
          }
          .contact-faq__answer {
            white-space: normal;
          }
        }
      `}</style>

      <section className="contact-faq">
        <div className="contact-faq__grid">
          <div>
            <h2 className="contact-faq__heading">
              Frequently asked
              <br />
              Questions
            </h2>
            <div className="contact-faq__underline" />
            <p className="contact-faq__subtitle">
              Everything you need to know before finding your perfect property.
            </p>
          </div>

          <div className="contact-faq__panel">
            <div className="contact-faq__list">
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={i} className="contact-faq__row">
                    <div className="contact-faq__num">
                      <span>{i + 1}</span>
                    </div>
                    <div className="contact-faq__body">
                      <button
                        type="button"
                        className="contact-faq__trigger"
                        onClick={() => setOpenIndex(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                      >
                        <span className="contact-faq__question">{item.question}</span>
                        <ChevronIcon open={isOpen} />
                      </button>
                      {isOpen && (
                        <p className="contact-faq__answer">{item.answer}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}