"use client";

import Image from "next/image";

export default function DholeraPlots() {
  return (
    <>
      <style>{`
        .dh-plots{
          position:relative;
          background:#fff;
          padding:0 clamp(16px, 4vw, 40px) 0px;
          z-index:20;
          isolation:isolate;
        }

        .dh-plots-inner{
        width:90%;
          margin:0 auto;

          /* Fluid layout: heading and card-grid wrap naturally as space runs
             out, instead of snapping between fixed breakpoints. This is what
             makes it actually responsive at ANY width, not just the exact
             widths a media query was written for. */
          display:flex;
          flex-wrap:wrap;
          align-items:flex-start;
          gap:32px;
        }

        /* LEFT RED BOX */
        .dh-plots-heading{
          transform:translateY(-46px);
          background:#D7172A;
          color:#fff;
          font-family:'Playfair Display',serif;
          font-size:clamp(24px, 2.4vw, 36px);
          font-weight:700;
          line-height:1.2;
          padding:clamp(20px, 2.5vw, 30px) clamp(18px, 2vw, 26px);
          min-height:clamp(100px, 12vw, 160px);
          flex:1 1 220px;
          max-width:280px;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          text-align:center;
          box-shadow:0 10px 24px rgba(0,0,0,.15);
          position:relative;
          z-index:5;
        }

        .dh-plots-heading-line{
          display:block;
          width:100px;
          height:3px;
          background:#fff;
          margin-top:14px;
          border-radius:2px;
          margin-right:80px
        }

        /* CARD GRID — auto-fit means columns are created/collapsed
           automatically based on available width; no manual breakpoints
           needed for this part at all. */
        .dh-plots-grid{
          flex:3 1 480px;
          display:grid;
          grid-template-columns:repeat(auto-fit, minmax(230px, 1fr));
          gap:clamp(20px, 3vw, 40px);
        }

        .dh-plot-card{
          background:#fff;
          border:none;
          overflow:visible;
          text-align:center;
          box-shadow:0 14px 40px rgba(0,0,0,.10);
          transform:translateY(-46px);
        }

        .dh-plot-image{
          position:relative;
          width:100%;
          height:0;
          padding-bottom:78%; /* keeps a consistent aspect ratio at any width */
          background:#fff;
          z-index:2;
          overflow:hidden;
        }

        .dh-plot-image img{
          object-fit:contain !important;
        
        }

       .dh-plot-body{
  width:100%;
  margin:0;
  background:#fff;

  border:3px solid transparent;
  border-image: linear-gradient(
    90deg,
    #1A3041 0%,
    #FFFFFF 35.1%,
    #FFFFFF 61.06%,
    #D7172A 100%
  ) 1;

  padding:12px 20px;
  box-shadow:0 4px 10px rgba(0,0,0,.06);
  position:relative;
  z-index:1;
}

        .dh-plot-title{
          margin:0;
          font-family:'Playfair Display',serif;
          font-size:clamp(15px, 1.6vw, 18px);
          font-weight:700;
          color:#24354c;
          line-height:1.3;
        }

        .dh-plot-desc{ display:none; }
        .dh-plot-underline{ display:none; }

        .dh-plot-card:hover .dh-plot-image{
          transform:translateY(-6px);
          transition:.35s;
        }
        .dh-plot-card:hover{
          box-shadow:0 22px 50px rgba(0,0,0,.16);
        }

        /* Overlap amount is the one thing that genuinely needs to shrink at
           smaller screens (a fixed hero height means a fixed pixel overlap
           becomes proportionally huge on short/narrow viewports). */
        @media (max-width:768px){
          .dh-plots-heading{ max-width:100%; flex-basis:100%; transform:translateY(-20px);}
          .dh-plots-heading-line{margin-right:0px;}
          .dh-plot-card{ transform:translateY(-20px); }
        }
      `}</style>

      <section className="dh-plots">
        <div className="dh-plots-inner">

          {/* Left Heading */}
          <h2 className="dh-plots-heading">
            <span className="dh-plots-heading-text">
              Find Your
              <br />
              Perfect Plot
            </span>
            <span className="dh-plots-heading-line" />
          </h2>

          {/* Cards */}
          <div className="dh-plots-grid">

            {/* Residential */}
            <div className="dh-plot-card">
              <div className="dh-plot-image">
                <Image
                  src="/Rectangle 4691.jpg"
                  alt="Residential Properties"
                  fill
                  sizes="(max-width:100%) "
                  style={{ objectFit: "contain",  }}
                />
              </div>

              <div className="dh-plot-body">
                <h3 className="dh-plot-title">Residential Properties</h3>
              </div>
            </div>

            {/* Industrial */}
            <div className="dh-plot-card">
              <div className="dh-plot-image">
                <Image
                  src="/Rectangle 4625.jpeg"
                  alt="Industrial Properties"
                  fill
                  sizes="(max-width: 100%)"
                  style={{ objectFit: "contain",  }}
                />
              </div>

              <div className="dh-plot-body">
                <h3 className="dh-plot-title">Industrial Properties</h3>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}