"use client";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}


function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a4 4 0 0 1 2-3z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}


function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 12s0-3.5-.45-5.2a2.6 2.6 0 0 0-1.84-1.84C18 4.5 12 4.5 12 4.5s-6 0-7.71.46A2.6 2.6 0 0 0 2.45 6.8C2 8.5 2 12 2 12s0 3.5.45 5.2a2.6 2.6 0 0 0 1.84 1.84C6 19.5 12 19.5 12 19.5s6 0 7.71-.46a2.6 2.6 0 0 0 1.84-1.84C22 15.5 22 12 22 12Z" />
      <path d="M10 9L15 12L10 15V9Z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function ContactInfo() {
  return (
    <>
      <style>{`
        .contact-info {
          position: relative;
          z-index: 2;
          overflow: visible;
          background: #fff;
        }
        .contact-info__inner {
          position: relative;
          z-index: 2;
          padding: 72px 81px 88px;
          max-width: 1320px;
          margin: 0 auto;
        }
        .contact-info__grid {
          display: grid;
          grid-template-columns: minmax(280px, 42%) 1fr;
          gap: 24px;
          align-items: stretch;
        }
        .contact-info__text {
          padding-top: 4px;
        }
        .contact-info__label {
          font-size: 13px;
          font-weight: 400;
          letter-spacing: normal;
          text-transform: none;
          color: #9ca3af;
          margin: 0 0 10px;
        }
        .contact-info__heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 3.2vw, 40px);
          font-weight: 600;
          color: #1a2a3a;
          margin: 0 0 10px;
          line-height: 1.2;
        }
        .contact-info__underline {
          width: 144px;
          height: 2px;
          background: #D7172A;
          margin-bottom: 22px;
        }
        .contact-info__body {
          font-size: 14px;
          line-height: 1.7;
          color: #6b7280;
          max-width: 400px;
          margin: 0 0 32px;
        }
        .contact-info__body-line {
          display: block;
        }
        @media (max-width: 480px) {
          .contact-info__body-line {
            display: inline;
          }
        }
        .contact-info__details {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }
        .contact-info__detail {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14px;
          color: #374151;
        }
        .contact-info__detail svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: #1A3041;
        }
        .contact-info__social-rule {
          width: 50%;
          height: 1px;
          background: linear-gradient(90deg, rgba(215,23,42,0) 0%, #D7172A 50%, rgba(215,23,42,0) 100%);
          margin: 8px 0 22px;
        }
        .contact-info__social-label {
          font-size: 14px;
          font-weight: 600;
          color: #1A3041;
          margin: 0 0 12px;
        }
        .contact-info__socials {
          display: flex;
          gap: 12px;
        }
        .contact-info__social {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid #d1d5db;
          color: #1A3041;
          transition: border-color 0.2s, color 0.2s;
        }
        .contact-info__social:hover {
          border-color: #D7172A;
          color: #D7172A;
        }

        .contact-info__collage-col {
          position: relative;
          min-height: 500px;
          align-self: stretch;
        }
        .contact-info__collage {
          position: absolute;
          top: -80px;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          min-height: 520px;
        }
        .contact-info__arch {
          position: absolute;
      
       
          border:3px solid  #D7172A;
          border-bottom:none;
          background: #ffffff00;
          box-sizing: border-box;

          display:flex;justify-content:center;
          
        
        }
      

        /* Back — largest bedroom, top-right, bleeds into hero */
        .contact-info__arch--large {
          --arch-w: 280px;
          width: var(--arch-w);
          height: 410px;
          right: 0;
          top: -70px;
          z-index: 1;
          border-radius: calc(var(--arch-w) / 2) calc(var(--arch-w) / 2) 0 0;
          border: 3px solid #a3a0a0;

        }

        /* Middle — living room, overlaps lower-left of large */
        .contact-info__arch--medium {
          --arch-w: 232px;
          width: var(--arch-w);
          height: 292px;
          left: 22%;
          top: 82px;
          z-index: 2;
          border-radius: calc(var(--arch-w) / 2) calc(var(--arch-w) / 2) 0 0;
        }

        /* Front — smallest niche, bottom-aligned, overlaps medium */
        .contact-info__arch--small {
          --arch-w: 162px;
          width: var(--arch-w);
          height: 205px;
          left: 0;
          bottom: 7%;
          z-index: 3;
          border-radius: calc(var(--arch-w) / 2) calc(var(--arch-w) / 2) 0 0;
          box-sizing:border:box;
       
        }



          .contact-info__arch img {
          display: block;
          width: 108%;
          height: 100%;
          object-fit: cover;
             max-width: none !important;

             border-radius:200px 200px 00 0;
             transform:translate(0 , 6px)
           
        }

        @media (max-width: 1100px) {
          .contact-info__collage {
            top: -70px;
            min-height: 480px;
          }
          .contact-info__arch--large {
            --arch-w: 248px;
            height: 370px;
            top: -62px;
          }
          .contact-info__arch--medium {
            --arch-w: 206px;
            height: 262px;
            left: 16%;
            top: 74px;
          }
          .contact-info__arch--small {
            --arch-w: 144px;
            height: 184px;
          }
        }

        @media (max-width: 1024px) {
          .contact-info__inner { padding: 64px 40px 72px; }
        }

        @media (max-width: 768px) {
          .contact-info__inner { padding: 56px 20px 64px; }
          .contact-info__grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .contact-info__collage-col {
            min-height: 400px;
            margin-top: 32px;
          }
          .contact-info__collage {
            position: relative;
            top: 0;
            width: 100%;
            max-width: 100%;
              height: 400px;
            min-height: 400px;
          
            margin: 0 auto;
          }
          .contact-info__arch--large {
            --arch-w: 210px;
            height: 340px;
            top: -100px;
            right: 0;
          }
          .contact-info__arch--medium {
            --arch-w: 174px;
            height: 242px;
            left: 30%;
            top: 64px;
          }
          .contact-info__arch--small {
            --arch-w: 122px;
            height: 170px;
            left: 0;
            bottom: 0;
          }
        }


            @media (max-width: 500px) {
            
             .contact-info__arch--medium {
            --arch-w: 174px;
            height: 242px;
            left: 14%;
            top:120px;
          
          }



            .contact-info__arch--large {
            --arch-w: 210px;
            height: 340px;
            top: 0;
            right: 0;
          }
         
          .contact-info__arch--small {
            --arch-w: 122px;
            height: 170px;
            left: 0;
            bottom: 0;
          }
            }
      `}</style>

      <section className="contact-info">
        <div className="contact-info__inner">
          <div className="contact-info__grid">
            <div className="contact-info__text">
              <p className="contact-info__label">Contact us</p>
              <h2 className="contact-info__heading">Get in Touch with Us</h2>
              <div className="contact-info__underline" />
              <p className="contact-info__body">
                <span className="contact-info__body-line">Whether you&apos;re searching for your next home or </span>
                <span className="contact-info__body-line">exploring investment opportunities, our team is ready </span>
                <span className="contact-info__body-line">to help you every step of the way.</span>
              </p>

              <div className="contact-info__details">
                <div className="contact-info__detail">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+91-9518478179</span>
                </div>
                <div className="contact-info__detail">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="2,4 12,13 22,4" />
                  </svg>
                  <span>platinumrealtors569@gmail.com</span>
                </div>
                <div className="contact-info__detail">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>
                    Shop No. 8, Bindra Complex,<br />
                    Jagadhri Gate, Patti Mehar,<br />
                    Ambala, Haryana 134003
                  </span>
                </div>
              </div>

              <div className="contact-info__social-rule" />
              <p className="contact-info__social-label">Follow Us:</p>
           <div className="contact-info__socials">
  <a
    href="https://www.instagram.com/platinum_realtors1/"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-info__social"
    aria-label="Instagram"
  >
    <InstagramIcon width={14} height={14} />
  </a>

  <a
    href="https://www.facebook.com/PlatinumRealtors/"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-info__social"
    aria-label="Facebook"
  >
    <FacebookIcon width={14} height={14} />
  </a>

  <a
    href="https://www.linkedin.com/company/111548274/"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-info__social"
    aria-label="LinkedIn"
  >
    <LinkedInIcon width={14} height={14} />
  </a>

  <a
    href="https://www.youtube.com/@PlatinumRealtors01"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-info__social"
    aria-label="YouTube"
  >
    <YouTubeIcon width={14} height={14} />
  </a>
</div>
            </div>

            <div className="contact-info__collage-col">
              <div className="contact-info__collage">
                <div className="contact-info__arch contact-info__arch--large">
                  <img
                    src="/images/contact-large.jpg"
                    alt="Luxury bedroom interior"
                  />
                </div>
                <div className="contact-info__arch contact-info__arch--medium">
                  <img
                    src="/images/contact-medium.jpg"
                    alt="Interior with gallery wall"
                  />
                </div>
                <div className="contact-info__arch contact-info__arch--small">
                  <img
                    src="/images/contact-small.jpg"
                    alt="Decorative interior niche"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}