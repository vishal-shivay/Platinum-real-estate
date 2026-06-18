"use client";

const IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&q=80",
    alt: "Marble room",
    top: 18, left: 160, width: 350, height: 200,
  },
 
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=500&q=80",
    alt: "Living room",
    top: 128, left: 400, width: 250, height: 200,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80",
    alt: "Dark kitchen",
    top: 278, left: 158, width: 300, height: 148,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&q=80",
    alt: "Flowers kitchen",
    top: 395, left: 270, width: 255, height: 175,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=500&q=80",
    alt: "White kitchen",
    top: 500, left:450, width: 275, height: 175,
  },
];

export default function AboutSection() {
  return (
    <>
      <style>{`
        .about-section {
          position: relative;
          width: 100%;
          height: 750px;
          background-color: #1b1a1a;
          display: flex;
          flex-direction: row;
          overflow: hidden;
          font-family: 'Georgia', serif;
        }

        .about-collage {
          position: relative;
          width: 52%;
          flex-shrink: 0;
          height: 100%;
        }

        /* Each image reads its own CSS variables */
        .c-img {
          position: absolute;
          object-fit: cover;
          display: block;
          top:    var(--top);
          left:   var(--left);
          width:  var(--width);
          height: var(--height);
        }

        .collage-line {
          position: absolute;
          top: 18px;
          left: 444px;
          width: 1px;
          height: 295px;
          background: linear-gradient(to bottom, #c8a96e 70%, transparent);
        }

        .collage-arc {
          position: absolute;
          bottom: 48px;
          left: -8px;
          width: 185px;
          height: 65px;
          border-bottom: 1px solid rgba(200,169,110,0.32);
          border-right:  1px solid rgba(200,169,110,0.12);
          border-radius: 0 0 36px 0;
          pointer-events: none;
        }

        .about-panels {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 26px;
          padding: 44px 34px 44px 20px;
          position: relative;
          z-index: 2;
        }

        .about-panel {
          background: rgba(26,24,24,0.90);
          border: 1px solid rgba(200,169,110,0.22);
          padding: 22px 26px;
          text-align: center;
        }

        .about-panel p {
          margin: 0;
          font-size: 12.5px;
          color: #b5b0a6;
          line-height: 1.85;
          font-family: Arial, sans-serif;
        }

        .panel-brand {
          font-family: 'Georgia', serif;
          font-weight: 700;
          color: #c0392b;
          font-style: italic;
        }

        .panel-big-red {
          font-family: 'Georgia', serif;
          font-size: 20px;
          font-weight: 700;
          color: #c0392b;
          font-style: italic;
          line-height: 1.1;
          display: inline;
        }

        .panel-big-red-sm {
          font-family: 'Georgia', serif;
          font-size: 17px;
          font-weight: 700;
          color: #c0392b;
          font-style: italic;
          line-height: 1.15;
          display: inline;
        }

        .prism-wrap {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 175px;
          height: 290px;
          pointer-events: none;
        }

        .prism {
          position: absolute;
          border: 1px solid rgba(200,169,110,0.38);
          background: linear-gradient(135deg, rgba(180,140,60,0.07), transparent);
        }

        .prism--lg {
          width: 80px; height: 130px;
          bottom: 22px; right: 26px;
          transform: rotate(14deg) skewY(-6deg);
        }

        .prism--md {
          width: 48px; height: 76px;
          bottom: 85px; right: 98px;
          transform: rotate(14deg) skewY(-6deg);
          border-color: rgba(200,169,110,0.22);
        }

        .prism--sm {
          width: 30px; height: 48px;
          bottom: 168px; right: 55px;
          transform: rotate(14deg) skewY(-6deg);
          border-color: rgba(200,169,110,0.13);
        }
      `}</style>

      <section className="about-section">
        <div className="about-collage">
          <div className="collage-line" />
          <div className="collage-arc" />

          {IMAGES.map((img) => (
            <img
              key={img.id}
              className="c-img"
              src={img.src}
              alt={img.alt}
              style={{
                "--top":    `${img.top}px`,
                "--left":   `${img.left}px`,
                "--width":  `${img.width}px`,
                "--height": `${img.height}px`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        <div className="about-panels">
          <div className="about-panel">
            <p>
              At <span className="panel-brand">Platinum Realtors,</span> we help buyers, sellers, and
              investors navigate the real estate market with confidence. Our experienced team is
              dedicated to providing personalized solutions, market expertise, and exceptional
              service at every step.
            </p>
            <br />
            <p>
              Whether you're searching for your dream home or a{" "}
              <span className="panel-big-red">valuable<br />investment</span>{" "}
              opportunity, we are committed to making your property journey seamless,
              transparent, and rewarding.
            </p>
          </div>

          <div className="about-panel">
            <p>
              Our commitment to transparency, integrity, and client satisfaction has earned us
              the trust of homeowners, buyers, sellers, and investors alike. Whether you're
              looking for your
            </p>
            <br />
            <p>
              <span className="panel-big-red-sm">dream home, or a commercial space,</span>{" "}
              We strive to deliver exceptional service, valuable insights, and lasting
              relationships built on trust and professionalism.
            </p>
          </div>

          <div className="prism-wrap">
            <div className="prism prism--lg" />
            <div className="prism prism--md" />
            <div className="prism prism--sm" />
          </div>
        </div>
      </section>
    </>
  );
}