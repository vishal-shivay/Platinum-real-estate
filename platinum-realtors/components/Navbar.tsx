"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../images/platinum-logo.png";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        :root {
          --red: #D7172A;
          --white: #ffffff;
        }

        .navbar-wrapper {
          position: absolute;
          top: 53px;
          left: 81px;
          right: 81px;
          z-index: 1000;
        }

        .navbar {
          height: 100px;
          background: rgba(26, 48, 65, 0.15);
          border: 1px solid var(--red);
          display: flex;
          align-items: center;
          backdrop-filter: blur(4px);
        }

        .navbar .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0 40px;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
        }

        .navbar-logo-img-wrap {
          position: relative;
          height: 72px;
          width: 120px;
        }

        .navbar-menu {
          display: flex;
          align-items: center;
          gap: 36px;
        }

        .navbar-menu a {
          font-size: 14px;
          font-weight: 400;
          color: var(--white);
          padding: 6px 14px;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .navbar-menu a.active {
          border: 1px solid var(--red);
          border-radius: 3px;
          color: var(--white);
        }

        .navbar-menu a:hover {
          color: var(--red);
        }

        .navbar-contact-btn {
          background: var(--red);
          color: var(--white);
          font-size: 14px;
          font-weight: 500;
          padding: 9px 24px;
          border-radius: 3px;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
          display: inline-block;
        }

        .navbar-contact-btn:hover {
          background: #b5121f;
          transform: translateY(-1px);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--white);
          border-radius: 2px;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          background: rgba(26, 48, 65, 0.97);
          border: 1px solid var(--red);
          border-top: none;
          padding: 16px 20px;
          gap: 4px;
        }

        .mobile-menu.open {
          display: flex;
        }

        .mobile-menu a {
          font-size: 14px;
          font-weight: 400;
          color: var(--white);
          padding: 12px 14px;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          transition: color 0.2s;
        }

        .mobile-menu a:last-child {
          border-bottom: none;
        }

        .mobile-menu a.active {
          color: var(--red);
        }

        .mobile-menu a:hover {
          color: var(--red);
        }

        .mobile-contact-btn {
          margin-top: 8px;
          background: var(--red);
          color: var(--white) !important;
          font-size: 14px;
          font-weight: 500;
          padding: 11px 24px !important;
          border-radius: 3px;
          text-align: center;
          text-decoration: none;
          display: block;
          border-bottom: none !important;
        }

        @media (max-width: 1024px) {
          .navbar-wrapper {
            left: 40px;
            right: 40px;
          }
          .navbar .container {
            padding: 0 20px;
          }
          .navbar-menu {
            gap: 20px;
          }
          .navbar-logo-img-wrap {
            height: 62px;
            width: 104px;
          }
        }

        @media (max-width: 768px) {
          .navbar-wrapper {
            left: 20px;
            right: 20px;
            top: 20px;
          }
          .navbar {
            height: 80px;
          }
          .navbar-menu {
            gap: 12px;
          }
          .navbar-menu a {
            font-size: 13px;
            padding: 5px 10px;
          }
          .navbar-contact-btn {
            padding: 8px 16px;
            font-size: 13px;
          }
          .navbar-logo-img-wrap {
            height: 56px;
            width: 94px;
          }
        }

        @media (max-width: 480px) {
          .navbar-wrapper {
            left: 12px;
            right: 12px;
            top: 12px;
          }
          .navbar {
            height: 70px;
          }
          .navbar .container {
            padding: 0 16px;
          }
          .navbar-menu {
            display: none;
          }
          .navbar-contact-btn {
            display: none;
          }
          .hamburger {
            display: flex;
          }
          .navbar-logo-img-wrap {
            height: 48px;
            width: 80px;
          }
        }
      `}</style>

      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-logo">
              <div className="navbar-logo-img-wrap">
                <Image
                  src={Logo}
                  alt="Platinum Realtors"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <div className="navbar-menu">
              <Link href="/" className={pathname === "/" ? "active" : ""}>
                Home
              </Link>
              <Link href="/about" className={pathname === "/about" ? "active" : ""}>
                About Us
              </Link>
              <Link href="/projects" className={pathname === "/projects" ? "active" : ""}>
                Projects
              </Link>
            </div>

            <Link href="/contact" className="navbar-contact-btn">
              Contact
            </Link>

            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <Link href="/" className={pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className={pathname === "/about" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/projects" className={pathname === "/projects" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link href="/contact" className="mobile-contact-btn" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}