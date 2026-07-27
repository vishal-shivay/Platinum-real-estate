"use client";

import { useState } from "react";
import Image from "next/image";

const carouselImages = [
  "/dholera/interior-1.jg",

];

type PlotSize = {
  size: string;
  highlight?: boolean;
};

type PropertyGroup = {
  label: string;
  sectionTitle?: string;
  sectionIntro?: string;
  sizes: PlotSize[];
};

const propertyGroups: PropertyGroup[] = [
  {
    label: "Dholera",
    sectionTitle: "Residential Properties",
    sectionIntro:
      'Secure 100% RERA-approved, NA-cleared residential plots within master-planned gated communities featuring "plug-and-play" underground utilities and 40% dedicated green spaces. Strategically positioned near the Ahmedabad Expressway and high-tech semiconductor zones, these secure-title layouts offer the perfect blend of premium lifestyle amenities and high-yield capital appreciation.',
    sizes: [
      { size: "203 Sq. Yds." },
      { size: "111 Sq. Yds." },
      { size: "225 Sq. Yds.", highlight: true },
    ],
  },
  {
    label: "Dholera SIR",
    sizes: [
      { size: "588 Sq. Yds." },
      { size: "1900 Sq. Yds.", highlight: true },
    ],
  },
  {
    label: "Dholera SIR",
    sectionTitle: "Industrial Properties",
    sectionIntro:
      "Large-format industrial plots in Dholera Special Investment Region designed for manufacturing, logistics, and commercial enterprise with world-class infrastructure.",
    sizes: [
      { size: "1200 Sq. Yds.", highlight: true },
      { size: "4000 Sq. Yds." },
    ],
  },
];

function StripeCluster() {
  const bars = 5;

  return (
    <div className="dh-stripe-cluster" aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="dh-stripe-bar"
          style={{
            left: `${(i / (bars - 1)) * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

function PlotCarousel({
  images,
  startIndex,
}: {
  images: string[];
  startIndex: number;
}) {
  const [index, setIndex] = useState(startIndex);

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const visible = [0, 1, 2, 3].map(
    (i) => images[(index + i) % images.length]
  );

  return (
    <div className="dh-carousel">

  <button
  className="dh-arrow dh-arrow-left"
  onClick={prev}
  aria-label="Previous"
>
  <span className="dh-arrow-triangle dh-arrow-triangle-left" />
</button>

      <div className="dh-images-wrapper">

        <div className="dh-images">

          {visible.map((img, i) => (
            <div className="dh-image-card" key={i}>
              <Image
                src={img}
                alt={`Property ${i + 1}`}
                fill
                sizes="(max-width:768px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}

        </div>

      </div>

     <button
  className="dh-arrow dh-arrow-right"
  onClick={next}
  aria-label="Next"
>
  <span className="dh-arrow-triangle dh-arrow-triangle-right" />
</button>

    </div>
  );
}

export default function DholeraProperties() {
  let carouselOffset = 0;

  return (
    <>
      <style>{`
      /* ===========================
   GLOBAL
=========================== */

*{
  box-sizing:border-box;
}


/* ===========================
   MAIN SECTION
=========================== */

.dh-props{
  width:100%;
  overflow:hidden;
  background:#fff;
  padding:clamp(1.5rem,3vw,3rem) 0;
}


.dh-props-inner{
  width:min(94%,1400px);
  margin:auto;
}


/* ===========================
   SECTION TITLE
=========================== */

.dh-section-title{
  text-align:center;
  font-family:"Playfair Display",serif;
  font-size:clamp(1.6rem,3vw,2.3rem);
  font-weight:700;
  color:#1a1a1a;
  margin:1rem 0 .4rem;
}


.dh-section-underline{
  width:min(90%, 420px);
  height:3px;
  margin:0 auto 1.4rem;
  background:linear-gradient(
    to right,
    transparent 0%,
    #1A3041 30%,
    #1A3041 70%,
    transparent 100%
  );
  filter: drop-shadow(0 1px 2px rgba(26,48,65,0.35));
}


.dh-section-intro{
  width:min(95%,1060px);
  margin:0 auto 1.8rem;
  text-align:center;
  color:#555;
  line-height:1.7;
  font-size:clamp(.9rem,1vw,1rem);
}

/* ===========================
   LABEL
=========================== */

.dh-group-label-row{
  display:flex;
  align-items:center;
  gap:.8rem;
  margin:1.8rem 0 1rem;
  transform: translate(-64px, 110px);
}


.dh-group-label{
  position:relative;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:7rem;
  background:#D7172A;
  color:#fff;
  padding:.75rem .2rem 1.9rem;
  font-family:"Playfair Display",serif;
  font-size:clamp(.95rem,1.4vw,1.15rem);
  font-weight:700;
  text-align:center;
}

.dh-group-label::after{
  content:"";
  position:absolute;
  left:1.8rem;
  bottom:.7rem;
  width:1.6rem;
  height:2px;
  background:#fff;
}


.dh-group-arrow-new{
  position:relative;
  display:inline-block;
  color:#D7172A;
  font-size:2.5rem;
  transform: translate(0px, -20px);
}


/* ===========================
   PLOT BLOCK
=========================== */


.dh-plot-block{

  position:relative;

  margin-bottom:2.5rem;

}



/* ===========================
   PLOT SIZE
=========================== */


.dh-plot-size{

  text-align:center;

  font-family:"Playfair Display",serif;

  font-size:clamp(1.3rem,2.6vw,1.85rem);

  font-weight:700;

  margin-bottom:1.3rem;

  position:relative;

  z-index:10;

}


.dh-plot-size::after{

  content:"";

  width:2.7rem;

  height:2px;

  background:#D7172A;

  position:absolute;

  left:50%;

  bottom:-.4rem;

  transform:translateX(-50%);

}



/* ===========================
   CAROUSEL
=========================== */


.dh-carousel{

  width:100%;

  display:flex;

  align-items:center;

  gap:clamp(.5rem,1vw,.9rem);

}


/* arrows */


.dh-arrow{

  border:none;

  background:none;

  cursor:pointer;

  flex-shrink:0;

  position:relative;

  z-index:20;

}


.dh-arrow:hover{

  opacity:.6;

}


.dh-arrow-triangle{
  display:inline-block;
  width:0;
  height:0;
}

.dh-arrow-triangle-left{
  border-top:clamp(.4rem,1.1vw,.55rem) solid transparent;
  border-bottom:clamp(.4rem,1.1vw,.55rem) solid transparent;
  border-right:clamp(.5rem,1.3vw,.65rem) solid #1A3041;
}

.dh-arrow-triangle-right{
  border-top:clamp(.4rem,1.1vw,.55rem) solid transparent;
  border-bottom:clamp(.4rem,1.1vw,.55rem) solid transparent;
  border-left:clamp(.5rem,1.3vw,.65rem) solid #1A3041;
}


/* ===========================
   IMAGE AREA
=========================== */


.dh-images-wrapper{

  flex:1;

  display:flex;

  justify-content:flex-end;

  padding-left:clamp(1rem,3vw,2.5rem);

}



.dh-images{

  width:100%;

  display:flex;

  gap:clamp(.25rem,.7vw,.55rem);

  position:relative;

  overflow:visible;

}


/* cards */


.dh-image-card{

  position:relative;

  flex:1 1 25%;

  aspect-ratio:4/3;

  overflow:hidden;

  z-index:5;

}


.dh-image-card img{

  transition:.35s;

}


.dh-image-card:hover img{

  transform:scale(1.05);

}



/* ===========================
   STRIPES
   CONNECTED TO SCREEN EDGE
=========================== */


.dh-stripes{

  position:absolute;

  top:-85px;

  bottom:0;

  right:calc(-50vw + 50%);

  width:clamp(5rem,10vw,8rem);

  overflow:hidden;

  pointer-events:none;

  z-index:1;

}


/* stripe container */


.dh-stripe-cluster{

  position:absolute;

  inset:0;

}


/* individual bars */


.dh-stripe-bar{

  position:absolute;

  top:-35%;

  bottom:-35%;

  width:clamp(4px,.55vw,7px);

  background:#D71920;

  transform:rotate(65deg);

}



/* ===========================
   KEEP IMAGES ABOVE STRIPES
=========================== */


.dh-images{

  z-index:5;

}


.dh-image-card{

  z-index:5;

}



/* ===========================
   TABLET
=========================== */


@media(max-width:992px){


.dh-images-wrapper{

  padding-left:1rem;

}


.dh-stripes{

  width:5rem;

}


.dh-group-label-row{

  transform: translate(-32px, 60px);

}


}



/* ===========================
   MOBILE
=========================== */


@media(max-width:768px){


.dh-carousel{

  align-items:flex-start;

}


.dh-images{

  flex-wrap:wrap;

}


.dh-image-card{

  flex:1 1 calc(50% - .5rem);

  aspect-ratio:4/3;

}


.dh-stripes{

  width:4rem;

}


.dh-arrow-triangle-left{
  border-top:.4rem solid transparent;
  border-bottom:.4rem solid transparent;
  border-right:.5rem solid #1A3041;
}

.dh-arrow-triangle-right{
  border-top:.4rem solid transparent;
  border-bottom:.4rem solid transparent;
  border-left:.5rem solid #1A3041;
}


.dh-group-label-row{

  transform: translate(0px, 20px);

}


}




/* ===========================
   SMALL MOBILE
=========================== */


@media(max-width:480px){


.dh-group-label{

  padding:.55rem 1rem .9rem;

  font-size:.85rem;

}


.dh-group-label::after{

  left:1rem;

  width:1.2rem;

}


.dh-images-wrapper{

  padding-left:.4rem;

}


.dh-carousel{

  gap:.45rem;

}


.dh-stripes{

  width:3.5rem;

}


.dh-arrow-triangle-left{
  border-top:.32rem solid transparent;
  border-bottom:.32rem solid transparent;
  border-right:.4rem solid #1A3041;
}

.dh-arrow-triangle-right{
  border-top:.32rem solid transparent;
  border-bottom:.32rem solid transparent;
  border-left:.4rem solid #1A3041;
}


.dh-group-label-row{

  transform: translate(0px, 12px);

}


}
      `}</style>


      <section className="dh-props" id="properties">

        <div className="dh-props-inner">


          {propertyGroups.map((group, gi) => (

            <div key={gi}>


              {group.sectionTitle && (

                <>

                  <h2 className="dh-section-title">
                    {group.sectionTitle}
                  </h2>


                  <div className="dh-section-underline" />


                  {group.sectionIntro && (

                    <p className="dh-section-intro">
                      {group.sectionIntro}
                    </p>

                  )}

                </>

              )}




              <div className="dh-group-label-row">


                <span className="dh-group-label">

                  {group.label}

                </span>



              <span className="dh-group-arrow-new">

                  &#8594;

                </span>


              </div>





              {group.sizes.map((plot, pi) => {


                const startIdx = carouselOffset;

                carouselOffset++;




                return (

                  <div
                    className="dh-plot-block"
                    key={pi}
                  >



                    {/* RIGHT SIDE DECORATIVE STRIPES */}

                    <div className="dh-stripes">

                      <StripeCluster />

                    </div>





                    <h3
                      className={`dh-plot-size ${
                        plot.highlight ? "highlight" : ""
                      }`}
                    >

                      {plot.size}

                    </h3>






                    <PlotCarousel

                      images={carouselImages}

                      startIndex={
                        startIdx % carouselImages.length
                      }

                    />



                  </div>

                );

              })}



            </div>

          ))}



        </div>

      </section>


    </>

  );

}