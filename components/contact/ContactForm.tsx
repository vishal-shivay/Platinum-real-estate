"use client";
import Image from "next/image";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const name = [form.firstName, form.lastName].filter(Boolean).join(" ").trim();
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name || form.firstName || form.lastName,
        email: form.email,
        phone: form.phone,
        message: form.message,
        sourceType: "contact",
      }),
    });

    setStatus(res.ok ? "sent" : "error");
  };

  return (
    <>
      <style>{`
        .contact-form-section {
          position: relative;
          overflow: hidden;
          padding: 80px 81px;
        }
        .contact-form-section__bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .contact-form-section__overlay {
          position: absolute;
          inset: 0;
       
        }
        .contact-form-section__glow {
          position: absolute;
          bottom: -80px;
          right: -80px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(215, 23, 42, 0.25) 0%, transparent 70%);
          pointer-events: none;
        }
        .contact-form-section__inner {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          
          max-width: 1400px;
          margin: 0 auto;
        }

        .outerbox{
       
        
        border: 2px solid;
  border-image: linear-gradient(
    to right,
    white 0%,
    #D7172A 50%,
    white 100%
  ) 1;

  background: transparent;}


        .contact-form-section__quote {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 500;
          color: #fff;
          line-height: 1.25;
          margin: 0 0 16px;
        }
        .contact-form-section__quote-line {
          width: 200px;
          height: 2px;
           background:#D7172A
        }
        .contact-form__header-line {
          width: 202px;
          height: 2px;
          background: #D7172A;

            background: linear-gradient(
    to right,
    #ffffff 0%,
    #ffffff 15%,
    #D7172A 50%,
    #ffffff 85%,
    #ffffff 100%
  );
          
          margin:auto;
          margin-bottom: 40px;
        }
        .contact-form__header {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 8px;
          font-weight: 400;
          text-align:center;
        }
        .contact-form__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }
        .contact-form__field label {
          display: block;
          font-size: 13px;
          color: #fff;
          margin-bottom: 6px;
          font-weight: 400;
        }
        .contact-form__field input,
        .contact-form__field textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.25);
        
          padding: 10px 14px;
          font-size: 14px;
          color: #fff;
          outline: none;
        font-family:Montserrat;
          transition: border-color 0.2s;
          height:100% !important;
           
        }
        .contact-form__field input::placeholder,
        .contact-form__field textarea::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }
        .contact-form__field input:focus,
        .contact-form__field textarea:focus {
          border-color: #D7172A;
        }
        .contact-form__field textarea {
          resize: none;
          display: block;
            min-height:120px;
         
        }
        .contact-form__submit {
          margin-top: 8px;
          background: #D7172A;
          color: #fff;
          border: none;
          padding: 11px 32px;
          font-size: 14px;
          font-weight: 500;
          border-radius: 2px;
          cursor: pointer;
          transition: background 0.2s;
               font-family:Montserrat;

        }
        .contact-form__submit:hover:not(:disabled) {
          background: #b5121f;
        }
        .contact-form__submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .contact-form__status {
          margin-top: 12px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.85);
          background:green;
          padding:10px;
          
        }
        .contact-form__status--error {
          color: #fca5a5;
        }
        @media (max-width: 1024px) {
          .contact-form-section { padding: 64px 40px; }
          .contact-form-section__inner { gap: 48px; }
        }
        @media (max-width: 768px) {
          .contact-form-section { padding: 56px 20px; }
          .contact-form-section__inner {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .contact-form__row { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="contact-form-section">
        <img
          src="/images/contact-bg.jpeg"
          alt=""
          className="contact-form-section__bg"
          aria-hidden="true"
        />
        <div className="contact-form-section__overlay" />
        <div className="contact-form-section__glow" />

        <div className="contact-form-section__inner">
          <div>
            <h2 className="contact-form-section__quote">
              Let&apos;s begin the <br />conversation.
            </h2>
            <div className="contact-form-section__quote-line" />
          </div>

          {status === "sent" ? (
            <p className="contact-form__status">
              Thank you — we&apos;ll get back to you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="contact-form__header">
                How can we help you reach your goals?
              </p>
              <div className="contact-form__header-line" />


              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="firstName">First Name</label>
                  <div className="outerbox">
                  <input
                    id="firstName"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  /></div>
                </div>
                <div className="contact-form__field">
                  <label htmlFor="lastName">Last Name</label>
                   <div className="outerbox">
                  <input
                    id="lastName"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                  /></div>
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="email">Email</label>
                   <div className="outerbox">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  /></div>
                </div>
                <div className="contact-form__field">
                  <label htmlFor="phone">Phone</label>
                   <div className="outerbox">
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                  /></div>
                </div>
              </div>

              <div className="contact-form__field">
                <label htmlFor="message">Message</label>
                 <div className="outerbox">
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  
                /></div>
              </div>

              <button
                type="submit"
                className="contact-form__submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Submitting..." : "Submit"}
              </button>

              {status === "error" && (
                <p className="contact-form__status contact-form__status--error">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </section>
    </>
  );
}
