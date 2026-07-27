"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Normalizes "/about/" -> "/about" so trailing-slash routing doesn't break active-state checks
const normalize = (path: string) => {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
};

export default function Navbar() {
  const rawPathname = usePathname();
  const pathname = normalize(rawPathname || "/");
  const [menuOpen, setMenuOpen] = useState(false);
  const [propertiesOpen, setPropertiesOpen] = useState(false);
  const [mobilePropertiesOpen, setMobilePropertiesOpen] = useState(false);

  const isPropertiesActive = pathname === "/commercial" || pathname === "/residential";

  let closeTimer: ReturnType<typeof setTimeout>;

  const handleMouseEnter = () => {
    clearTimeout(closeTimer);
    setPropertiesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer = setTimeout(() => {
      setPropertiesOpen(false);
    }, 200);
  };

  return (
    <>
      <style>{`
        :root { --red: #D7172A; --white: #ffffff; }
        .navbar-wrapper { position: fixed; top: 20px; left: 81px; right: 81px; z-index: 1000; }
        .navbar {   height: 100px; background: rgba(26, 48, 65, 0.15);  ;display: flex; align-items: center; backdrop-filter: blur(4px); }
        .navbar .container { display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 0 40px; }
        .navbar-logo { display: flex; align-items: center; flex-shrink: 0; }
        .navbar-logo-img-wrap { position: relative; height: 72px; width: 120px; }
        .navbar-menu { display: flex; align-items: center; gap: 36px; }
        .navbar-menu a {font-family:Montserrat; font-size: 14px; font-weight: 400; color: var(--white); padding: 6px 14px; text-decoration: none; transition: all 0.25s ease; white-space: nowrap; box-sizing: border-box; }
        .navbar-menu a.active { border: 1px solid var(--red); color: var(--white); }
        .navbar-menu a:hover { color: var(--red); }
        .dropdown { position: relative; }
        .dropdown-trigger { font-size: 14px; font-weight: 400; color: var(--white); padding: 6px 14px; text-decoration: none; transition: all 0.25s ease; cursor: pointer; background: none; border: none; display: flex; align-items: center; gap: 6px; white-space: nowrap; box-sizing: border-box; }
        .dropdown-trigger.active { border: 1px solid var(--red); border-radius: 3px; }
        .dropdown-trigger:hover { color: var(--red); }
        .dropdown-trigger svg { transition: transform 0.25s ease; }
        .dropdown-trigger.open svg { transform: rotate(180deg); }
        .dropdown-menu { position: absolute; top: calc(100% + 8px); left: 0; background: rgba(26, 48, 65, 0.97); border: 1px solid var(--red); min-width: 160px; flex-direction: column; opacity: 0; visibility: hidden; transform: translateY(-6px); transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease; display: flex; }
        .dropdown-menu.open { opacity: 1; visibility: visible; transform: translateY(0); }
        .dropdown-menu a { font-size: 14px; color: var(--white); padding: 12px 18px; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.08); transition: color 0.2s, background 0.2s; white-space: nowrap; box-sizing: border-box; }
        .dropdown-menu a:last-child { border-bottom: none; }
        .dropdown-menu a:hover { color: var(--red); background: rgba(255,255,255,0.05); }
        .dropdown-menu a.active { color: var(--red); }
        .navbar-contact-btn {   font-family:Montserrat;background: var(--red); color: var(--white); font-size: 14px; font-weight: 500; padding: 9px 24px; border-radius: 0px; border: none; cursor: pointer; transition: all 0.25s ease; text-decoration: none; display: inline-block; white-space: nowrap; flex-shrink: 0; }
        .navbar-contact-btn:hover { background: #b5121f; transform: translateY(-1px); }
        .hamburger { display: none; flex-direction: column; justify-content: center; gap: 5px; background: none; border: none; cursor: pointer; padding: 6px; flex-shrink: 0; }
        .hamburger span { display: block; width: 24px; height: 2px; background: var(--white); border-radius: 2px; transition: transform 0.25s ease, opacity 0.25s ease; }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
        .mobile-menu { display: none; flex-direction: column; background: rgba(26, 48, 65, 0.97); border: 1px solid var(--red); border-top: none; padding: 16px 20px; gap: 4px; box-sizing: border-box; }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          font-family:Montserrat;
          font-size: 14px;
          font-weight: 400;
          color: var(--white);
          padding: 12px 14px;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          outline: 1px solid transparent;
          outline-offset: -1px;
          box-sizing: border-box;
          width: 100%;
          transition: color 0.25s ease, outline-color 0.25s ease;
        }
        .mobile-menu a:last-child { border-bottom: none; }
        .mobile-menu a.active,
        .mobile-menu a:hover {
          color: var(--red);
          outline-color: var(--red);
        }
        .mobile-properties-trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: none;
          outline: 1px solid transparent;
          outline-offset: -1px;
          font-family: Montserrat;
          font-size: 14px;
          font-weight: 400;
          color: var(--white);
          padding: 12px 14px;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          cursor: pointer;
          box-sizing: border-box;
          transition: color 0.25s ease, outline-color 0.25s ease;
        }
        .mobile-properties-trigger:hover,
        .mobile-properties-trigger.active {
          color: var(--red);
          outline-color: var(--red);
        }
        .mobile-properties-trigger svg { transition: transform 0.25s ease; flex-shrink: 0; }
        .mobile-properties-trigger.open svg { transform: rotate(180deg); }
        .mobile-sub {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.25s ease;
        }
        .mobile-sub.open { max-height: 200px; opacity: 1; }
        .mobile-sub a { padding-left: 28px !important; font-size: 13px !important; color: rgba(255,255,255,0.75) !important; }
        .mobile-contact-btn { margin-top: 8px; background: var(--red); color: var(--white) !important; font-size: 14px; font-weight: 500; padding: 12px 24px !important; border-radius: 3px; text-align: center; text-decoration: none; display: block; border-bottom: none !important; transition: background 0.2s; }
        .mobile-contact-btn:hover { background: #b5121f; color: var(--white) !important; }
        @media (max-width: 1024px) {
          .navbar-wrapper { left: 40px; right: 40px; top: 36px; }
          .navbar .container { padding: 0 24px; }
          .navbar-menu { gap: 18px; }
          .navbar-menu a, .dropdown-trigger { font-size: 13px; padding: 5px 10px; }
          .navbar-logo-img-wrap { height: 62px; width: 104px; }
          .navbar-contact-btn { padding: 8px 18px; font-size: 13px; }
        }
        @media (max-width: 768px) {
          .navbar-wrapper { left: 20px; right: 20px; top: 20px; }
          .navbar { height: 72px; }
          .navbar .container { padding: 0 20px; }
          .navbar-menu { display: none; }
          .navbar-contact-btn { display: none; }
          .hamburger { display: flex; }
          .navbar-logo-img-wrap { height: 54px; width: 90px; }
        }
        @media (max-width: 599px) {
          .navbar-wrapper { left: 12px; right: 12px; top: 12px; }
          .navbar { height: 64px; }
          .navbar .container { padding: 0 16px; }
          .navbar-logo-img-wrap { height: 46px; width: 78px; }
        }
        @media (max-width: 360px) {
          .navbar-wrapper { left: 8px; right: 8px; top: 8px; }
          .navbar { height: 58px; }
          .navbar .container { padding: 0 12px; }
          .navbar-logo-img-wrap { height: 40px; width: 68px; }
          .mobile-menu { padding: 12px 14px; }
        }
      `}</style>

      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-logo">
              <div className="navbar-logo-img-wrap">
                <Image
                  src="/images/platinum-logo.png"
                  alt="Platinum Realtors"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <div className="navbar-menu">
              <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
              <Link href="/about" className={pathname === "/about" ? "active" : ""}>About Us</Link>
              <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button className={`dropdown-trigger ${isPropertiesActive ? "active" : ""} ${propertiesOpen ? "open" : ""}`}>
                  Properties
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
                <div className={`dropdown-menu ${propertiesOpen ? "open" : ""}`}>
                  <Link href="/commercial" className={pathname === "/commercial" ? "active" : ""}>Commercial</Link>
                  <Link href="/residential" className={pathname === "/residential" ? "active" : ""}>Residential</Link>
                </div>
              </div>
              <Link href="/dholera" className={pathname === "/dholera" ? "active" : ""}>Dholera</Link>
              <Link href="/blog" className={pathname === "/blog" ? "active" : ""}>Blog</Link>
              <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact Us</Link>
            </div>

            <Link href="/contact" className="navbar-contact-btn">Contact</Link>

            <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
              <span /><span /><span />
            </button>
          </div>
        </nav>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <Link href="/" className={pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className={pathname === "/about" ? "active" : ""} onClick={() => setMenuOpen(false)}>About Us</Link>

          <button
            className={`mobile-properties-trigger ${isPropertiesActive ? "active" : ""} ${mobilePropertiesOpen ? "open" : ""}`}
            onClick={() => setMobilePropertiesOpen(!mobilePropertiesOpen)}
            aria-expanded={mobilePropertiesOpen}
          >
            Properties
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <div className={`mobile-sub ${mobilePropertiesOpen ? "open" : ""}`}>
            <Link href="/commercial" className={pathname === "/commercial" ? "active" : ""} onClick={() => setMenuOpen(false)}>Commercial</Link>
            <Link href="/residential" className={pathname === "/residential" ? "active" : ""} onClick={() => setMenuOpen(false)}>Residential</Link>
          </div>

          <Link href="/dholera" className={pathname === "/dholera" ? "active" : ""} onClick={() => setMenuOpen(false)}>Dholera</Link>
          <Link href="/blog" className={pathname === "/blog" ? "active" : ""} onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/contact" className={pathname === "/contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <Link href="/contact" className="mobile-contact-btn" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </>
  );
}