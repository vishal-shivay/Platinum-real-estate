import Image from "next/image";
import footerBg from "../images/footer-bg.png";
import platinumLogo from "../images/platinum-logo.png";

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${footerBg.src})`,
      }}
    >
      <div className="footer-content">
        <div className="col col-1">
          <div className="logo-wrapper">
            <Image
              src={platinumLogo}
              alt="Platinum Logo"
              width={200}
              height={80}
              priority
            />
          </div>

          <p className="description">
            We're your trusted partner in real estate. With 20 years of
            experience in Punjab Real Estate, our team of experts is dedicated
            to providing personalised service and achieving the best possible
            results.
          </p>

          <div className="social-icons">
            <Image
              src="/instagram-icon.png"
              alt="Instagram"
              width={24}
              height={24}
            />
            <Image
              src="/facebook-icon.png"
              alt="Facebook"
              width={24}
              height={24}
            />
            <Image src="/x-icon.png" alt="X" width={24} height={24} />
          </div>
        </div>

        <div className="col col-2">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Projects</li>
          </ul>
        </div>

        <div className="col col-3">
          <h3>Our Services</h3>
          <ul>
            <li>Residential Properties</li>
            <li>Commercial Properties</li>
          </ul>
        </div>

        <div className="col col-4">
          <h3>Contact</h3>
          <ul className="contact-list">
            <li>
              abc Building, CP-67, Mohali,<br />
              Sahibzada Ajit Singh Nagar,<br />
              Punjab 140306
            </li>
            <li className="contact-item">
              <span className="contact-icon">✉</span>
              platinumrealors@gmail.com
            </li>
            <li className="contact-item">
              <span className="contact-icon">📞</span>
              +91**********
            </li>
          </ul>
        </div>
      </div>

      <div className="divider"></div>

      <div className="copyright">
        <p>© 2026 Platinum. All rights reserved.</p>
      </div>

      <style>{`
        .footer {
          position: relative;
          width: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 80px 40px;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          gap: 40px;
        }

        .col {
          display: flex;
          flex-direction: column;
        }

        .col-1 {
          flex: 0 0 280px;
        }

        .col-2,
        .col-3 {
          flex: 0 0 160px;
        }

        .col-4 {
          flex: 0 0 220px;
        }

        .logo-wrapper {
          margin-bottom: 20px;
        }

        .description {
          font-size: 14px;
          line-height: 1.6;
          color: #fff;
          margin: 0 0 20px 0;
          font-weight: 300;
          opacity: 0.9;
        }

        .social-icons {
          display: flex;
          gap: 15px;
          margin-top: 5px;
        }

        .social-icons img {
          cursor: pointer;
          filter: brightness(0) invert(1);
          opacity: 0.8;
          transition: opacity 0.3s;
        }

        .social-icons img:hover {
          opacity: 1;
        }

        .col h3 {
          color: #c0392b;
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 20px 0;
          letter-spacing: 0.5px;
        }

        .col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .col ul li {
          color: #fff;
          font-size: 14px;
          font-weight: 300;
          margin-bottom: 12px;
          opacity: 0.8;
          cursor: pointer;
          transition: opacity 0.3s;
        }

        .col ul li:hover {
          opacity: 1;
        }

        .contact-list li {
          line-height: 1.6;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .contact-icon {
          font-size: 14px;
          opacity: 1;
        }

        .divider {
          width: 100%;
          max-width: 1200px;
          margin: 30px auto 20px;
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
        }

        .copyright {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
        }

        .copyright p {
          color: #fff;
          font-size: 13px;
          font-weight: 300;
          opacity: 0.7;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .footer {
            padding: 60px 40px 40px;
          }

          .footer-content {
            flex-wrap: wrap;
            gap: 40px;
          }

          .col-1 {
            flex: 0 0 100%;
          }

          .col-2,
          .col-3,
          .col-4 {
            flex: 1 1 calc(33.33% - 30px);
            min-width: 0;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 40px 20px 30px;
          }

          .footer-content {
            flex-direction: column;
            gap: 30px;
          }

          .col-1,
          .col-2,
          .col-3,
          .col-4 {
            flex: 0 0 100%;
          }
        }
      `}</style>
    </footer>
  );
}