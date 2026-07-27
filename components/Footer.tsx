"use client";
import Image from "next/image";

import Link from "next/link";
export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(/images/footer-bg.png)`,
      }}
    >
      <div className="footer-top-space"></div>
      <div className="footer-content">
        <div className="col col-1">
          <div className="logo-wrapper">
            <Image src="/images/platinum-logo.png" alt="Platinum Logo" width={130} height={65} priority />
          </div>
          <p className="description">
            We're your trusted partner in real estate. With 20 years of experience in Punjab Real Estate, our team of experts is dedicated to providing personalised service and achieving the best possible results.
          </p>
          <div className="social-icons">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/platinum_realtors1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ cursor: "pointer" }}
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/PlatinumRealtors/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ cursor: "pointer" }}
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/111548274/admin/page-posts/published/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="white"
                style={{ cursor: "pointer" }}
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4V24h-4V8zm7 0h3.83v2.19h.05c.53-1.01 1.83-2.19 3.77-2.19 4.03 0 4.78 2.65 4.78 6.09V24h-4v-7.02c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.69 1.82-2.69 3.7V24h-4V8z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@PlatinumRealtors01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ cursor: "pointer" }}
              >
                <path
                  d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 9L15 12L10 15V9Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

          </div>
        </div>

        <div className="col col-2">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/">Projects</Link>
            </li>
          </ul>
        </div>

        <div className="col col-3">
          <h3>Our Services</h3>


          <ul>
            <li>
              <Link href="/residential">
                Residential Properties
              </Link>
            </li>
            <li>
              <Link href="/commercial">
                Commercial Properties
              </Link>
            </li>
          </ul>
        </div>

        <div className="col col-4">
          <h3>Contact</h3>
          <ul className="contact-list">
            <li className="address">Shop No. 8, Bindra Complex,
              Jagadhri Gate, Patti Mehar,
              Ambala, Haryana 134003</li>
            <li className="contact-item" >
              <span className="contact-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2,4 12,13 22,4" />
                </svg>
              </span>
              platinumrealtors569@gmail.com
            </li>
            <li className="contact-item">
              <span className="contact-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              +91-9518478179
            </li>
          </ul>
        </div>
      </div>

      <div className="divider"></div>
      <div className="copyright">
        <p>© {new Date().getFullYear()} Platinum Realtors. All rights reserved.</p>
      </div>

      <style>{`
        .footer {  font-family:Montserrat; background:rgb(26,48,68); position: relative; width: 100%; min-height: 350px; background-size: cover; background-position: center -120px; background-repeat: no-repeat; padding: 0 80px 40px; box-sizing: border-box; }
        .footer-top-space { height: 310px; }
        .footer-content { display: flex; justify-content: space-between; align-items: flex-start; max-width: 1400px; width: 100%; margin: 80px auto 0px; gap: 20px; }
        .col { display: flex; flex-direction: column; }
        .col-1 { flex: 0 0 240px; }
        .col-2 { flex: 0 0 150px; padding-top: 4px; }
        .col-3 { flex: 0 0 210px; padding-top: 4px; }
        .col-4 { flex: 0 0 260px; padding-top: 4px; display: flex; flex-direction: column; align-items: flex-start; }
        .logo-wrapper { margin-bottom: 18px; }
        .description { color: #ffffff; font-size: 13px; line-height: 1.65; margin: 0 0 18px; max-width: 240px; }
        .social-icons { display: flex; gap: 14px; align-items: center; }
        .social-icons svg { transition: opacity 0.25s ease; }
        .social-icons svg:hover { opacity: 0.65; }
        .col h3 { color: #e53935; font-size: 20px; font-weight: 700; margin: 0 0 22px; letter-spacing: 0.01em; }
        .col ul { list-style: none; padding: 0; margin: 0; }
        .col-2 ul li, .col-3 ul li { color: #ffffff; font-size: 15px; font-weight: 500; line-height: 1.4; margin-bottom: 18px; cursor: pointer; transition: color 0.2s ease; }
        .col-2 ul li:hover, .col-3 ul li:hover { color: #e53935; }
        .contact-list { width: 100%; display: flex; flex-direction: column; }
        .contact-list li { color: #ffffff; font-size: 14px; line-height: 1.55; cursor: default; }
        .address { text-align: left; margin-bottom: 24px; font-size: 14px; font-weight: 500; width: 100%; display: block; }
        .contact-item { text-align:right; display: flex; align-items: center; gap: 10px; margin-bottom: 12px; font-size: 14px; width: 100%; padding-left: 0; }
        .contact-icon { display: flex; align-items: center; flex-shrink: 0; }
        .divider { width: 100%; max-width: 1400px; height: 1px; background: rgba(255, 255, 255, 0.2); margin: 30px auto 0; }
        .copyright { max-width: 1400px; width: 100%; margin: 18px auto 0; }
        .copyright p { color: rgba(255, 255, 255, 0.6); font-size: 13px; margin: 0; text-align: center; }
        @media (max-width: 1024px) {
          .footer { padding: 0 40px 40px; }
          .footer-top-space { height: 250px; }
          .footer-content { flex-wrap: wrap; gap: 36px; }
          .col-1 { flex: 0 0 100%; }
          .description { max-width: 100%; }
          .col-2, .col-3, .col-4 { flex: 1 1 180px; }
          .col-4 { align-items: flex-start; }
          .address { text-align: left; }
        }
        @media (max-width: 768px) {
          .footer { padding: 0 20px 30px; }
          .footer-top-space { height: 150px; }
          .footer-content { flex-direction: column; gap: 28px; }
          .col-1, .col-2, .col-3, .col-4 { flex: 0 0 100%; }
          .col-4 { align-items: flex-start; }
          .address { text-align: left; }
          .contact-item { padding-left: 0; }
          .description { max-width: 100%; }
        }
      `}</style>
    </footer>
  );
}