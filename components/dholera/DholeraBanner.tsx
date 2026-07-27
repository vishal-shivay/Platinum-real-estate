"use client";

import Image from "next/image";

export default function DholeraBanner() {
  return (
    <>
      <style>{`

/* =====================================
   MAIN BANNER
===================================== */

.dh-banner{
  width:calc(100% - 80px);
  margin:20px auto;
  background:#1a3041;
  overflow:hidden;
  position:relative;
}

.dh-banner-inner{
  position:relative;
  max-width:1400px;
  min-height:300px;
  margin:auto;
  display:flex;
  flex-wrap:nowrap;
  align-items:flex-start;
  gap:35px;
  padding:0 40px;
}

/* =====================================
   RED BACKGROUND BLOCK
===================================== */


.dh-banner-wedge{
  position:absolute;
  left:-30px;
  top:24px;
  bottom:24px;
  width:34%;
  background:#D7172A;
  z-index:0;
}
  

/* tablet */
@media(max-width:1100px){
  .dh-banner-wedge{
    width:40%;
  }
}

/* mobile */
@media(max-width:768px){
  .dh-banner-wedge{
    width:100%;
    left:0;
    top:16px;
    bottom:auto;
    height:230px;
  }
}


/* =====================================
   LEFT GROUP (image + text stacked)
   Positioned with margin-left tied to the
   wedge's % width via calc(), so it always
   straddles the red/dark boundary no matter
   the viewport width within a breakpoint.
===================================== */

.dh-banner-left-group{
  position:relative;
  z-index:3;
  display:flex;
  flex-direction:column;
  flex-shrink:0;
  margin-left:calc(34% - 110px);
  margin-top:-22px;
  padding-top:40px;
}

.dh-banner-plot-card{
  width:220px;
  aspect-ratio:4/3;
  background:white;
  padding:10px;
  box-shadow:0 18px 40px rgba(0,0,0,.35);
}

.dh-banner-plot-img-wrap{
  position:relative;  
  width:100%;
  height:100%;
  overflow:hidden;
}

.dh-banner-text{
  color:white;
  opacity:.92;
  font-size:clamp(11px,1vw,13px);
  line-height:1.6;
  max-width:300px;
  margin:16px 0 0 100px;
}

/* =====================================
   RIGHT IMAGE SECTION
===================================== */

.dh-banner-right{
  position:relative;
  z-index:2;
  flex:0 0 auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  align-self:center;
  margin-left:auto;
  padding:25px 0;
}

.dh-banner-right-img-wrap{
  position:relative;
  
  width:clamp(320px,28vw,280px);
  aspect-ratio:1/1;
  box-shadow:0 15px 35px rgba(0,0,0,.35);
  transform:none;
  transition:.3s ease;
}

.dh-banner-right-img-wrap:hover{
  transform:scale(1.03);
}

.dh-banner-right-line{
  width:60%;
  height:2px;
  background:rgba(255,255,255,.45);
  margin-top:18px;
}

/* =====================================
   LARGE DESKTOP
===================================== */

@media(min-width:1200px){
  .dh-banner-inner{
    padding-left:50px;
    padding-right:50px;
  }
}

/* =====================================
   TABLET  (wedge width becomes 40%)
===================================== */

@media(max-width:1100px){
  .dh-banner-inner{
    gap:25px;
    padding:0 30px;
  }

  .dh-banner-wedge{
    width:40%;
  }

  .dh-banner-left-group{
    margin-left:calc(40% - 95px);
  }

  .dh-banner-plot-card{
    width:190px;
  }

  .dh-banner-text{
    margin-left:75px;
  }
}

/* =====================================
   MOBILE  (stacked, wedge full width)
===================================== */

@media(max-width:768px){
  .dh-banner{
    width:calc(100% - 30px);
    margin:15px auto;
  }

  .dh-banner-inner{
    flex-direction:column;
    align-items:center;
    gap:30px;
    padding:40px 20px;
  }

  .dh-banner-wedge{
    width:100%;
    height:230px;
  }

  .dh-banner-left-group{
    margin-left:0;
    margin-top:15px;
    padding-top:0;
    align-items:center;
  }

  .dh-banner-plot-card{
    width:200px;
  }

  .dh-banner-text{
    margin-left:0;
    max-width:330px;
    text-align:center;
  }

  .dh-banner-right{
    margin-left:0;
    padding-bottom:35px;
  }
}

/* =====================================
   SMALL MOBILE
===================================== */

@media(max-width:480px){
  .dh-banner{
    width:calc(100% - 20px);
  }

  .dh-banner-inner{
    padding:30px 15px;
  }

  .dh-banner-plot-card{
    width:170px;
  }

  .dh-banner-right-img-wrap{
    width:180px;
  }
}

`}</style>

      <section className="dh-banner">
        <div className="dh-banner-inner">

          {/* Red background block */}
          <div className="dh-banner-wedge" aria-hidden="true" />

          {/* Left group: image + text stacked */}
          <div className="dh-banner-left-group">
            <div className="dh-banner-plot-card">
              <div className="dh-banner-plot-img-wrap">
                <Image
                  src="/dholera/banner-left.jpg"
                  alt="Dholera Plot Layout"
                  fill
                  sizes="220px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <p className="dh-banner-text">
              Mangalam Gateway Dholera offers a smart investment opportunity in
              the heart of India&apos;s fastest-growing smart city. Secure your
              future with premium plots in a location built for tomorrow.
            </p>
          </div>

          {/* Right image */}
          <div className="dh-banner-right">
            <div className="dh-banner-right-img-wrap">
              <Image
                src="/dholera/banner-right.jpg"
                alt="Mangalam Aero Vista Navagam"
                fill
                sizes="240px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="dh-banner-right-line" />
          </div>

        </div>
      </section>
    </>
  );
}