"use client";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 4,
    location: "Mohali",
    name: "The Medallion Aurum",
    description: "The interiors of The Medallion Aurum in Mohali feature ultra-luxury living spaces with expansive layouts and double-height lobbies. They showcase premium modular kitchens, high-end false ceiling designs, and floor-to-ceiling windows that maximize natural light. Every detail is crafted with top-tier finishes to provide a sophisticated, modern lifestyle.",
    images: ["/images/Premium-apartments-in-Mohali 1.jpeg", "/images/Premium-apartments-in-Mohali 2.jpeg", "/images/Premium-apartments-in-Mohali 3.jpeg", "/images/Premium-apartments-in-Mohali 4.jpeg", "/images/Premium-apartments-in-Mohali 5.jpeg", "/images/Premium-apartments-in-Mohali 6.jpeg"],
    theme: "red",
    bgImage: "/images/noble-bg.png",
    rera: "PBRERA-SAS81-PR0866",
  },
  {
    id: 7,
    location: "",
    name: "The Medallion",
    description: "The interiors feature an open-concept layout with premium marble flooring, custom false ceilings, and layered ambient lighting. Each room is styled with plush, neutral-toned contemporary furniture complemented by rich wood and metallic wall accents. Oversized floor-to-ceiling windows complete the space, filling the apartments with natural light.",
    images: ["/images/Medallion1.jpeg", "/images/Medallion2.jpeg", "/images/Medallion3.jpeg", "/images/Medallion4.jpeg", "/images/Medallion5.jpeg", "/images/Medallion6.jpeg"],
    theme: "dark",
    bgImage: "/images/affinity-bg.png",
    rera: "PBRERA-SAS81-PR0685",
  },
  {
    id: 9,
    location: "",
    name: "Noble Aurellia",
    description: "Noble Aurellia in Sector 88, Mohali, features luxury apartments with high-end interior finishes like open-concept living rooms and false ceilings with recessed track lighting. The master bedrooms are designed with rich wooden wall paneling and floor-to-ceiling windows that open directly into private balconies.",
    images: ["/images/Noble1.jpeg", "/images/Noble2.jpeg", "/images/Noble3.jpeg", "/images/Noble6.jpeg", "/images/Noble5.jpeg", "/images/Noble4.jpeg"],
    theme: "red",
    bgImage: "/images/noble-bg.png",
    rera: "PBRERA-SAS81-PR1136",
  },
  {
    id: 12,
    location: "",
    name: "Atulyam The Bliss",
    description: "Atulyam The Bliss in Sector 88, Mohali, offers ultra-luxury apartments featuring expansive living areas, premium marble flooring, and state-of-the-art modular kitchens. The interiors are designed with wide glass balconies and high-end finishes to maximize natural light and elegant ventilation.",
    images: ["/images/Bliss1.jpeg", "/images/Bliss2.jpeg", "/images/Bliss3.jpeg", "/images/Bliss4.jpeg", "/images/Bliss5.jpeg", "/images/Bliss6.jpeg"],
    theme: "dark",
    bgImage: "/images/affinity-bg.png",
    rera: "PBRERA-SAS81-PR0863",
  },
  {
    id: 13,
    location: "",
    name: "Noble Magnollia",
    description: "Noble Magnollia , Mohali offers ultra-luxury 4+1 BHK apartments featuring expansive living spaces, premium marble accents, and elegant false ceilings [1]. The interiors blend modern, neutral-toned styling with expansive floor-to-ceiling glass windows and custom modular fittings. These high-definition visuals showcase the grand layouts of the master bedrooms, designer bathrooms, and broad balconies.",
    images: ["/images/Magnollia1.jpeg", "/images/Magnollia2.jpeg", "/images/Magnollia3.jpeg", "/images/Magnollia4.jpeg", "/images/Magnollia5.jpeg", "/images/Magnollia6.jpeg"],
    theme: "red",
    bgImage: "/images/noble-bg.png",
    rera: "PBRERA-SAS81-PR1294",
  },
  {
    id: 14,
    location: "Zirakpur",
    name: "Green Lotus Utsav",
    description: "Green Lotus Utsav is an eco-luxury residential complex located on the Airport Road in Zirakpur. The project features sustainable apartments and premium penthouses designed with green building standards to promote healthier living. It provides upscale community spaces, fitness facilities, and dedicated wellness areas for its residents.",
    images: ["/images/Lotus1.jpeg", "/images/Lotus2.jpeg", "/images/Lotus3.jpeg", "/images/Lotus4.jpeg"],
    theme: "dark",
    bgImage: "/images/affinity-bg.png",
    rera: "PBRERA-SAS79-PR0425",
  },
  {
    id: 15,
    location: "",
    name: "The Suman Marvelous",
    description: "The Suman Marvelous is a premium high-rise residential development located on VIP Junction Road in Zirakpur. Developed by Suman Divine Homes, this gated community features corner apartments designed with multiple balconies to ensure optimal natural light. It offers luxury living spaces coupled with ready-to-use recreational club facilities, a swimming pool, and an elevated ground level to prevent water logging",
    images: ["/images/Luxury-apartments-in-Zirakpur 29.jpeg", "/images/Luxury-apartments-in-Zirakpur 30.jpeg", "/images/Luxury-apartments-in-Zirakpur 31.jpeg", "/images/Luxury-apartments-in-Zirakpur 32.jpeg", "/images/Luxury-apartments-in-Zirakpur 33.jpeg", "/images/Luxury-apartments-in-Zirakpur 34.jpeg"],
    theme: "red",
    bgImage: "/images/noble-bg.png",
    rera: "PBRERA-SAS79-PR0893",
  },
  {
    id: 17,
    location: "",
    name: "Escon Primera",
    description: "Escon Primera is a premium residential development strategically positioned on the wide Airport Road in Zirakpur. Developed by Malwa Projects using earthquake-resistant Mivan construction technology, the gated high-rise community features thoughtfully planned apartments emphasizing natural light and cross-ventilation. Residents enjoy upscale lifestyle privileges, including expansive podium parks, a multi-tier security system, and a massive luxury clubhouse equipped with recreational sports arenas.",
    images: ["/images/Luxury-flats-in-Zirakpur 38.jpeg", "/images/Luxury-flats-in-Zirakpur 36.jpeg", "/images/Luxury-flats-in-Zirakpur 37.jpeg", "/images/Luxury-flats-in-Zirakpur 40.jpeg", "/images/Luxury-flats-in-Zirakpur 39.jpeg", "/images/Luxury-flats-in-Zirakpur 35.jpeg"],
    theme: "dark",
    bgImage: "/images/affinity-bg.png",
    rera: "PBRERA-SAS79-PR0529 for Phase 1 and PBRERA-SAS79-PR0852 for Phase 2",
  },
  {
    id: 18,
    location: "",
    name: "Ananta Aspire",
    description: "The Ananta Aspire is a luxury high-rise residential project strategically located on the Chandigarh-Patiala Highway in Zirakpur. Developed by Svastiga Infra using advanced Mivan construction technology, this smart-home community features a unique dual-core tower design with only two park-facing apartments per floor to guarantee maximum privacy and cross-ventilation. The gated complex incorporates fully automated voice-controlled systems, EV charging stations, a rooftop infinity pool, and a dedicated multi-sport arena.",
    images: ["/images/Luxury-flats-in-Zirakpur 41.jpeg", "/images/Luxury-flats-in-Zirakpur 42.jpeg", "/images/Luxury-flats-in-Zirakpur 43.jpeg", "/images/Luxury-flats-in-Zirakpur 44.jpeg", "/images/Luxury-flats-in-Zirakpur 45.jpeg", "/images/Luxury-flats-in-Zirakpur 46.jpeg"],
    theme: "red",
    bgImage: "/images/noble-bg.png",
    rera: "PBRERA-SAS79-PR0777",
  },
  {
    id: 19,
    location: "",
    name: "Highland Luxuria",
    description: "Highland Luxuria is an exclusive, low-density residential community developed by Highland Park Homes on High Ground Road in Zirakpur. Departing from typical high-rises, this gated development features independent, neo-classical luxury villas designed with premium finishes and generous multi-floor layouts. The secure complex prioritizes resident privacy and features beautifully landscaped themed gardens, broad internal roads, and dedicated play areas for children.",
    images: ["/images/Premium-apartments-in-Zirakpur 47.jpeg", "/images/Premium-apartments-in-Zirakpur 48.jpeg", "/images/Premium-apartments-in-Zirakpur 49.jpeg", "/images/Premium-apartments-in-Zirakpur 50.jpeg", "/images/Premium-apartments-in-Zirakpur 51.jpeg", "/images/Premium-apartments-in-Zirakpur 52.jpeg"],
    theme: "dark",
    bgImage: "/images/affinity-bg.png",
    rera: "PBRERA-SAS79-PR0931",
  },
  {
    id: 20,
    location: "",
    name: "Golden Era Homes",
    description: "Golden Era Homes is a RERA-approved residential township developed by ABS Infra Developers on Nagla Road, just off the Chandigarh-Ambala Highway in Zirakpur. This gated society features four-side open apartments designed to maximize natural light and ensure excellent cross-ventilation across both low-rise and high-rise structures.",
    images: ["/images/Luxury-flats-in-Zirakpur 65.jpeg", "/images/Luxury-flats-in-Zirakpur 66.jpeg", "/images/Luxury-flats-in-Zirakpur 67.jpeg", "/images/Luxury-flats-in-Zirakpur 68.jpeg", "/images/Luxury-flats-in-Zirakpur 69.jpeg", "/images/Luxury-flats-in-Zirakpur 70.jpeg"],
    theme: "red",
    bgImage: "/images/noble-bg.png",
    rera: "PBRERA-SAS79-PR0996",
  },
  {
    id: 21,
    location: "",
    name: "The Zirk",
    description: "The Zirk is an upscale, high-rise residential community developed by Urban Nest Projects LLP on High Ground Road in Zirakpur. Engineered with advanced Mivan construction technology, the gated society features multi-aspect apartments designed for optimal cross-ventilation, abundant daylight, and maximum privacy. It boasts extensive green open areas, a multi-tier security network, and a grand clubhouse complete with a wellness center, sports courts, and an in-house mini-theatre.",
    images: ["/images/Premium-flats-in-Zirakpur 59.jpeg", "/images/Premium-flats-in-Zirakpur 60.jpeg", "/images/Premium-flats-in-Zirakpur 61.jpeg", "/images/Premium-flats-in-Zirakpur 62.jpeg", "/images/Premium-flats-in-Zirakpur 63.jpeg", "/images/Premium-flats-in-Zirakpur 64.jpeg"],
    theme: "dark",
    bgImage: "/images/affinity-bg.png",
    rera: "PBRERA-SAS79-PR0817",
  },
  {
    id: 22,
    location: "",
    name: "Vamana Arvindam",
    description: "Vamana Arvindam is an ultra-luxury, under-construction residential township strategically positioned right on the Patiala Highway in Zirakpur. Developed by Vamana Group using advanced Mivan construction technology, this gated community features dual-core open floors that maximize cross-ventilation, natural light, and privacy. The premium complex offers an expansive green footprint and an upscale lifestyle anchored by a massive grand clubhouse, fully loaded modular kitchens, integrated home automation, and comprehensive multi-tier security systems.",
    images: ["/images/Arvindam1.jpg", "/images/Arvindam2.jpg", "/images/Arvindam3.jpg", "/images/Arvindam4.jpg", "/images/Arvindam5.jpg", "/images/Arvindam6.jpg"],
    theme: "red",
    bgImage: "/images/noble-bg.png",
    rera: "PBRERA-SAS79-PR1018",
  },
  {
    id: 24,
    location: "",
    name: "Skyline Elevate",
    description: "Skyline Elevate is an IGBC Gold Pre-Certified luxury residential high-rise project developed by Skyline Developers right on the PR-7 International Airport Road in Zirakpur. The gated community features an IIT-vetted, earthquake-resistant structure with corner apartments that offer multi-side open balconies for abundant daylight and natural ventilation. It provides upscale community lifestyle amenities, including a lavish recreation clubhouse, a swimming pool with a kids' splash area, fully air-conditioned spaces, and advanced multi-tier security systems.",
    images: ["/images/Premium-flats-in-Zirakpur 53.jpeg", "/images/Premium-flats-in-Zirakpur 54.jpeg", "/images/Premium-flats-in-Zirakpur 55.jpeg", "/images/Premium-flats-in-Zirakpur 56.jpeg", "/images/Premium-flats-in-Zirakpur 57.jpeg", "/images/Premium-flats-in-Zirakpur 58.jpeg"],
    theme: "dark",
    bgImage: "/images/affinity-bg.png",
    rera: "PBRERA-SAS79-PR0868",
  },
  {
    id: 25,
    location: "",
    name: "Vintage Greens",
    description: "Vintage Greens is an under-construction, RERA-approved luxury residential township developed by Vintage Buildtech strategically located on the PR-7 International Airport Road in Zirakpur. Built using advanced Mivan construction technology, the gated society features high-rise dual-core towers configured with only a couple of multi-aspect apartments per floor to maximize cross-ventilation, natural light, and privacy.",
    images: ["/images/Vintage1.png", "/images/Vintage2.jpg", "/images/Vintage3.jpg", "/images/Vintage4.jpg", "/images/Vintage5.jpg", "/images/Vintage6.jpg"],
    theme: "red",
    bgImage: "/images/noble-bg.png",
    rera: "PBRERA-SAS79-PR1181",
  },
  {
    id: 27,
    location: "",
    name: "Stellar Heights",
    description: "Stellar Heights is an under-construction, RERA-approved premium residential township developed by Stellarbilt LLP in the highly sought-after Kishanpura and Peer Muchalla locality of Zirakpur. Strategically situated right at the edge of Sector 20, Panchkula, this secure gated community features spacious, modern apartments set amid lush themed gardens and tranquil water bodies.",
    images: ["/images/Luxury-apartments-in-Zirakpur 71.jpeg", "/images/Luxury-apartments-in-Zirakpur 72.jpeg", "/images/Luxury-apartments-in-Zirakpur 73.jpeg", "/images/Luxury-apartments-in-Zirakpur 74.jpeg", "/images/Luxury-apartments-in-Zirakpur 75.jpeg", "/images/Luxury-apartments-in-Zirakpur 76.jpeg"],
    theme: "dark",
    bgImage: "/images/affinity-bg.png",
    rera: "PBRERA-SAS79-PR1218",
  },
  {
    id: 31,
    location: "",
    name: "El Spazia Elite Spanish Homes",
    description: "el spazia- El Spazia Elite Spanish Homes is a luxury residential society located directly on the PR7 International Airport Road in Zirakpur, Punjab. It features Spanish-themed architectural designs and sits right next to the Chandigarh-Ambala Expressway for seamless commuting. The property offers prime connectivity to Chandigarh International Airport alongside popular nearby retail and dining hubs.",
    images: ["/images/Spazia1.jpeg", "/images/Spazia2.jpeg", "/images/Spazia3.jpeg", "/images/Spazia4.jpeg", "/images/Spazia5.jpeg", "/images/Spazia6.jpeg"],
    theme: "red",
    bgImage: "/images/noble-bg.png",
    rera: "",
  },
  {
    id: 32,
    location: "",
    name: "Gulnaar Serene",
    description: "Gulnaar Serene is an exclusively residential enclave offering ultra-spacious, 2-side-open 3+1 BHK luxury floors across 5 acres. The low-density project limits development to just 152 total units, guaranteeing high privacy with only two flats per floor. Families enjoy peaceful, private living centered around a 1.5-acre green park completely free from commercial or retail disruptions.",
    images: ["/images/Serene1.jpeg", "/images/Serene2.jpeg", "/images/Serene3.jpeg", "/images/Serene4.jpeg", "/images/Serene5.jpeg", "/images/Serene6.jpeg"],
    theme: "dark",
    bgImage: "/images/affinity-bg.png",
    rera: "",
  },
  {
    id: 33,
    location: "",
    name: "Northview Homez",
    description: "Northview Homez is a premium residential project located right on the Ambala-Chandigarh Highway in Zirakpur, Punjab, situated close to the local McDonald's. The development features modern 3 BHK apartments and sky villas built using earthquake-resistant Mivan technology. It offers residents excellent highway connectivity alongside upscale amenities like a private clubhouse, gym, and landscaped green spaces.",
    images: ["/images/Homez1.jpeg", "/images/Homez2.jpeg", "/images/Homez3.jpeg", "/images/Homez4.jpeg", "/images/Homez5.jpeg", "/images/Homez6.jpeg"],
    theme: "red",
    bgImage: "/images/noble-bg.png",
    rera: "",
  },
];

// Splits a location name into individually animated letter spans
function AnimatedLocationText({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="rp-letter"
          style={{ "--i": i } as React.CSSProperties}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}

/* ---------------------------------------------------------------------- */
/* Renders the OUTGOING photo itself dissolving into particles in place.  */
/* The real image is drawn to an offscreen canvas and sampled into a grid */
/* of 1000+ tiny dots, each colored from the actual pixel it came from.   */
/* All dots start exactly where their piece of the photo was, then drift  */
/* a short distance and fade together, in sync and eased — a smooth      */
/* "turning to dust" dissolve rather than chunks flying around.           */
/* ---------------------------------------------------------------------- */
const BURST_DURATION = 1400; // ms

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function ParticleBurst({
  src,
  boxRef,
  targetParticleCount,
  onDone,
}: {
  src: string;
  boxRef: { current: HTMLDivElement | null };
  targetParticleCount: number;
  onDone: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    let raf = 0;

    const canvas = canvasRef.current;
    const box = boxRef.current;
    if (!canvas || !box) {
      onDone();
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      onDone();
      return;
    }

    const rect = box.getBoundingClientRect();
    const W = Math.max(1, Math.round(rect.width));
    const H = Math.max(1, Math.round(rect.height));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const img = new window.Image();
    img.decoding = "async";

    const run = () => {
      if (cancelled) return;

      // Replicate CSS object-fit: cover so the sampled pixels line up with
      // what was actually visible in the box.
      const imgRatio = img.naturalWidth / img.naturalHeight || 1;
      const boxRatio = W / H;
      let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
      if (imgRatio > boxRatio) {
        sw = img.naturalHeight * boxRatio;
        sx = (img.naturalWidth - sw) / 2;
      } else {
        sh = img.naturalWidth / boxRatio;
        sy = (img.naturalHeight - sh) / 2;
      }

      // Sample pixels at a small offscreen resolution — plenty for color
      // sampling and much cheaper than reading getImageData at full size.
      const sampleCanvas = document.createElement("canvas");
      sampleCanvas.width = W;
      sampleCanvas.height = H;
      const sampleCtx = sampleCanvas.getContext("2d");
      if (!sampleCtx) {
        onDone();
        return;
      }

      let pixels: Uint8ClampedArray | null = null;
      try {
        sampleCtx.drawImage(img, sx, sy, sw, sh, 0, 0, W, H);
        pixels = sampleCtx.getImageData(0, 0, W, H).data;
      } catch {
        pixels = null; // fall back to plain red particles if sampling fails
      }

      // Grid spacing chosen so we land on ~targetParticleCount dots.
      const step = Math.max(3, Math.round(Math.sqrt((W * H) / targetParticleCount)));
      const dotRadius = Math.max(1.1, step * 0.42);

      type Particle = { x: number; y: number; angle: number; dist: number; color: string };
      const particles: Particle[] = [];
      for (let y = 0; y < H; y += step) {
        for (let x = 0; x < W; x += step) {
          let color = "#999999";
          if (pixels) {
            const idx = (Math.min(y, H - 1) * W + Math.min(x, W - 1)) * 4;
            const r = pixels[idx];
            const g = pixels[idx + 1];
            const b = pixels[idx + 2];
            color = `rgb(${r},${g},${b})`;
          }
          particles.push({
            x: x + step / 2,
            y: y + step / 2,
            angle: Math.random() * Math.PI * 2,
            // short, gentle drift — enough to read as "coming apart" without
            // looking like debris being thrown
            dist: 12 + Math.random() * 34,
            color,
          });
        }
      }

      ctx.clearRect(0, 0, W, H);
      let start: number | null = null;

      const frame = (ts: number) => {
        if (start === null) start = ts;
        const elapsed = ts - start;
        const t = Math.min(elapsed / BURST_DURATION, 1);
        const eased = easeOutCubic(t);

        ctx.clearRect(0, 0, W, H);
        ctx.globalAlpha = 1 - eased;

        for (const p of particles) {
          const x = p.x + Math.cos(p.angle) * p.dist * eased;
          const y = p.y + Math.sin(p.angle) * p.dist * eased - eased * 6; // slight drift upward, like dust
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(x, y, Math.max(0.4, dotRadius * (1 - eased * 0.35)), 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;

        if (t < 1) {
          raf = requestAnimationFrame(frame);
        } else {
          onDone();
        }
      };

      raf = requestAnimationFrame(frame);
    };

    if (img.complete && img.naturalWidth > 0) {
      run();
    } else {
      img.onload = run;
      img.onerror = () => onDone();
    }
    img.src = src;

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="rp-burst-canvas"
      aria-hidden="true"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export default function ResServicePlaces() {
  const [indices, setIndices] = useState<number[]>(projects.map(() => 0));
  const [transitioning, setTransitioning] = useState<Record<number, boolean>>({});
  const [isMobile, setIsMobile] = useState(false);
  const locationRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Remembers, per project, which "start" index was showing right before an
  // arrow click — so while the burst plays we keep sampling the photo that's
  // actually leaving, instead of the new one indices[] has already moved to.
  const outgoingStartRef = useRef<Record<number, number>>({});
  // DOM node for each image box, keyed "pi-boxIndex", so the burst can read
  // its real on-screen size and line pixel sampling up correctly.
  const boxRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Every project belongs to whichever location was last declared above it
  // (only the first project of each city group sets `location`). This carries
  // that group forward so every card — not just the header one — knows which
  // city section on /residential it should deep-link to.
  const projectGroupLocation = useMemo(() => {
    let current = "";
    return projects.map((p) => {
      if (p.location) current = p.location;
      return current;
    });
  }, []);

  const applyIndexChange = useCallback((pi: number, dir: "prev" | "next") => {
    setIndices((prevIndices) =>
      prevIndices.map((ci, i) => {
        if (i !== pi) return ci;
        const len = projects[pi].images.length;
        return dir === "prev" ? (ci === 0 ? len - 1 : ci - 1) : ci === len - 1 ? 0 : ci + 1;
      })
    );
  }, []);

  // Triggered by the arrow buttons. Instead of swapping the image straight
  // away, we first show a burst of red particles over the visible image(s),
  // and only swap the underlying photo once the burst has faded out.
  const changeImage = useCallback(
    (pi: number, dir: "prev" | "next") => {
      if (transitioning[pi]) return; // ignore clicks mid-animation
      outgoingStartRef.current[pi] = indices[pi];
      setTransitioning((t) => ({ ...t, [pi]: true }));
      applyIndexChange(pi, dir);
    },
    [transitioning, indices, applyIndexChange]
  );

  const endTransition = useCallback((pi: number) => {
    setTransitioning((t) => ({ ...t, [pi]: false }));
  }, []);

  // Scroll-triggered reveal animation for the main location headings
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.35 }
    );

    locationRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .rp-section { background: #ffffff; padding: 60px 0 20px; }
        .rp-project { width: 90%; margin: 0 auto 18px; padding: 0 18px; text-align: center; }

        /* ===== UPGRADED 3D LOCATION HEADING ===== */
        .rp-location {
          position: relative;
          display: inline-block;
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 34px;
          font-family: 'Playfair Display', serif;
          letter-spacing: 1px;
          perspective: 1200px;
          transform-style: preserve-3d;
          overflow: visible;
        }

        .rp-location::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -10px;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #d71920, #ffb703, #d71920);
          background-size: 200% 100%;
          transform: translateX(-50%);
          box-shadow: 0 0 14px rgba(215,25,32,0.75), 0 0 28px rgba(255,183,3,0.45);
          transition: width 1s cubic-bezier(0.16,1,0.3,1) 0.7s;
          border-radius: 2px;
        }

        .rp-location.in-view::after {
          width: 90px;
          animation: rp-underline-shimmer 2.4s linear infinite 1.6s;
        }

        /* traveling spark along the underline */
        .rp-spark {
          position: absolute;
          left: 50%;
          bottom: -11px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #fff5d6;
          box-shadow: 0 0 10px 4px rgba(255,183,3,0.95), 0 0 22px 8px rgba(215,25,32,0.55);
          opacity: 0;
          transform: translate(-50%, 0);
          pointer-events: none;
        }

        .rp-location.in-view .rp-spark {
          animation: rp-spark-travel 1.5s cubic-bezier(0.5,0,0.5,1) 1.5s 1;
        }

        /* Each letter starts flipped back in 3D space, tilted, blurred, and dropped above */
        .rp-letter {
          display: inline-block;
          transform-style: preserve-3d;
          opacity: 0;
          transform: translateY(-70px) rotateX(-110deg) rotateY(25deg) scale(0.3) skewX(6deg);
          filter: blur(12px);
          background: linear-gradient(90deg, #7a0d12, #d71920, #ff5252, #ffb703, #ff5252, #d71920, #7a0d12);
          background-size: 400% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: #d71920;
          transition: opacity 0.55s ease, transform 0.95s cubic-bezier(0.34,1.56,0.64,1), filter 0.75s ease;
          transition-delay: calc(var(--i) * 50ms);
        }

        .rp-location.in-view .rp-letter {
          opacity: 1;
          transform: translateY(0) rotateX(0deg) rotateY(0deg) scale(1) skewX(0deg);
          filter: blur(0);
          animation:
            rp-gradient-move 4.5s linear infinite calc(var(--i) * 50ms),
            rp-glow-pulse 2.6s ease-in-out infinite calc(var(--i) * 50ms + 0.9s),
            rp-letter-float 3.4s ease-in-out infinite calc(var(--i) * 90ms + 1.4s);
        }

        @keyframes rp-gradient-move {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }

        @keyframes rp-glow-pulse {
          0%, 100% {
            text-shadow:
              1px 1px 0 rgba(168,15,22,0.45),
              2px 2px 0 rgba(168,15,22,0.35),
              3px 3px 4px rgba(0,0,0,0.3),
              0 0 14px rgba(215,25,32,0.35), 0 0 28px rgba(255,183,3,0.15);
          }
          50% {
            text-shadow:
              1px 1px 0 rgba(168,15,22,0.6),
              2px 2px 0 rgba(168,15,22,0.5),
              3px 3px 6px rgba(0,0,0,0.4),
              0 0 28px rgba(215,25,32,0.7), 0 0 52px rgba(255,183,3,0.45);
          }
        }

        @keyframes rp-letter-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @keyframes rp-underline-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        @keyframes rp-spark-travel {
          0%   { transform: translate(calc(-50% - 45px), 0) scale(0.4); opacity: 0; }
          12%  { opacity: 1; }
          50%  { transform: translate(-50%, 0) scale(1.4); }
          88%  { opacity: 1; }
          100% { transform: translate(calc(-50% + 45px), 0) scale(0.4); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .rp-letter { transition: opacity 0.4s ease; transform: none !important; animation: none !important; filter: none !important; }
          .rp-spark, .rp-location.in-view::after { animation: none !important; }
        }
        /* ===== END LOCATION HEADING ===== */

        .rp-card { position: relative; height: 500px; overflow: hidden; background-size: cover; background-position: center; background-repeat: no-repeat; }
        .rp-overlay { position: absolute; inset: 0; }
        .rp-card.dark .rp-overlay { background: rgba(0,0,0,.40); }
        .rp-card.red .rp-overlay { background: rgba(0,0,0,.38); }
        .rp-content { position: relative; z-index: 2; width: 100%; height: 100%; padding: 18px 20px 30px; display: flex; flex-direction: column; align-items: center; }
        .rp-title { color: #fff; font-family: Playfair Display; font-size: 32px; font-weight: 700; margin-top: 6px; margin-bottom: 18px; text-align: center; line-height: 1; }
        .rp-description { color: #efefef; width: 94%; margin: 0 auto; text-align: left; font-size: 15px; line-height: 1.35; font-weight: 400; margin-bottom: 42px; }
        .rp-slider { width: 100%; display: flex; align-items: center; justify-content: space-between; }
        .rp-arrow {
          width: 44px; height: 44px; border: none; background: none;
          cursor: pointer; display: flex; justify-content: center; align-items: center;
          transition: transform .25s ease, opacity .2s ease; user-select: none; padding: 0;
          flex-shrink: 0;
        }
        .rp-arrow:hover { transform: scale(1.15); }
        .rp-arrow:active { transform: scale(0.95); }
        .rp-arrow .rp-tri {
          width: 0; height: 0;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-left: 22px solid #df1b27;
        }
        .rp-arrow.rp-arrow-prev .rp-tri { transform: rotate(180deg); }
        @media (max-width: 768px) {
          .rp-arrow .rp-tri { border-top-width: 11px; border-bottom-width: 11px; border-left-width: 16px; }
        }
        .rp-images { width: 100%; display: flex; justify-content: center; gap: 18px; }
        .rp-image-box { position: relative; width: 238px; height: 182px;border-right: 2px solid #df1b27;  border-left: 2px solid #df1b27; overflow: hidden; flex-shrink: 0; }
        .rp-image-box img { transition: .35s; }
        .rp-image-box:hover img { transform: scale(1.05); }

        /* image fades out while the particle burst plays, then the swapped
           photo fades back in once the burst finishes */
        .rp-image-fade { transition: opacity 0.28s ease; }
        .rp-image-fade.rp-hidden { opacity: 0; }

        .rp-burst-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 4;
          pointer-events: none;
        }

        /* ---------- Link to /residential's Mohali / Zirakpur section ---------- */
        .rp-location-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 26px;
          background: #d71920;
          color: #fff;
          text-decoration: none;
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 12px 24px;
          border-radius: 2px;
          transition: background 0.25s ease, transform 0.2s ease;
        }
        .rp-location-btn:hover { background: #ff2d3f; transform: translateY(-1px); }
        .rp-location-btn:active { transform: translateY(0); }

        /* ---------- RERA registration number, bottom-left of each card ---------- */
        .rp-rera {
          position: absolute;
          right: 20px;
          top: 14px;
          z-index: 5;
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: rgba(255, 255, 255, 0.92);
          text-transform: uppercase;
          background: rgba(0, 0, 0, 0.45);
          padding: 5px 10px;
          border-radius: 3px;
        }

        @media(max-width:1200px){ .rp-card{ height:auto; padding-bottom:40px; } .rp-images{ flex-wrap:wrap; } }
        @media(max-width:992px){ .rp-location{ font-size:38px; } .rp-title{ font-size:28px; } .rp-description{ font-size:14px; width:95%; } .rp-image-box{ width:210px; height:160px; } }
        @media(max-width:768px){
          .rp-project { width: 100%; margin: 0 auto 0px; padding: 0 0px;  }
        .rp-location{ font-size:32px; }
        .rp-card{ padding-bottom:30px; }
         /* keep the slider as a row so arrows sit on the left/right of the
            image grid instead of stacking above/below it */
         .rp-slider{ flex-direction:row; align-items:center; gap:8px; }
          .rp-arrow{ font-size:30px; }
           .rp-images{ width:100%; justify-content:center; gap:0; }
            /* Mobile: show one photo at a time instead of a 2x2 grid.
               The prev/next buttons already rotate the "start" state value, so
               hiding everything but the first box naturally shows the
               current image the arrows point to. */
            .rp-image-box{ width:100%; height:240px; }
            .rp-image-box:not(:first-child){ display:none; }
            .rp-description{ text-align:center; width:100%; } 
            .rp-rera{ right:10px; top:10px; font-size:9px; padding:4px 8px; }
            }
        @media(max-width:480px){
          .rp-image-box{ width:100%; height:220px; }
          .rp-location{ font-size:26px; }
          .rp-title{ font-size:24px; }
          .rp-description{ font-size:13px; line-height:1.6; }
        }
      `}</style>

      <section className="rp-section">
        {projects.map((project, pi) => {
          const start = indices[pi];
          const visibleImages = [0, 1, 2, 3].map((i) => project.images[(start + i) % project.images.length]);
          const isBursting = !!transitioning[pi];
          const outgoingStart = outgoingStartRef.current[pi] ?? start;
          const outgoingImages = [0, 1, 2, 3].map((i) => project.images[(outgoingStart + i) % project.images.length]);

          return (
            <div className="rp-project" key={project.id} id={project.location}>
              {project.location && (
                <div
                  className="rp-location"
                  data-text={project.location}
                  ref={(el) => { locationRefs.current[pi] = el; }}
                >
                  <AnimatedLocationText text={project.location} />
                  <span className="rp-spark" />
                </div>
              )}
              <div className={`rp-card ${project.theme}`} style={{ backgroundImage: `url(${project.bgImage})` }}>
                <div className="rp-overlay" />
                <div className="rp-content">
                  <h2 className="rp-title">{project.name}</h2>
                  <p className="rp-description">{project.description}</p>
                  <div className="rp-slider">
                    <button className="rp-arrow rp-arrow-prev" onClick={() => changeImage(pi, "prev")} aria-label="Previous images">
                      <span className="rp-tri" />
                    </button>
                    <div className="rp-images">
                      {visibleImages.map((img, index) => {
                        // On mobile only the first box is ever visible, so it
                        // gets the full 1000+ particle burst. On desktop all
                        // four boxes are visible at once, so each gets a
                        // slightly lighter burst to keep things from getting
                        // too busy while still clearly reading as the photo
                        // breaking apart.
                        const shouldBurst = isBursting && (isMobile ? index === 0 : true);
                        const targetParticleCount = isMobile ? 900 : 320;
                        const boxKey = `${pi}-${index}`;

                        return (
                          <div
                            className="rp-image-box"
                            key={index}
                            ref={(el) => { boxRefs.current[boxKey] = el; }}
                          >
                            <Image
                              src={img}
                              alt={`${project.name}-${index}`}
                              fill
                              sizes="300px"
                              style={{ objectFit: "cover" }}
                              className={`rp-image-fade ${shouldBurst ? "rp-hidden" : ""}`}
                            />
                            {shouldBurst && (
                              <ParticleBurst
                                src={outgoingImages[index]}
                                boxRef={{ current: boxRefs.current[boxKey] }}
                                targetParticleCount={targetParticleCount}
                                onDone={() => {
                                  // only the first box's burst needs to end
                                  // the shared transition state for this card
                                  if (index === 0) endTransition(pi);
                                }}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <button className="rp-arrow rp-arrow-next" onClick={() => changeImage(pi, "next")} aria-label="Next images">
                      <span className="rp-tri" />
                    </button>
                  </div>

                </div>
                {project.rera && (
                  <div className="rp-rera">RERA No: {project.rera}</div>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}