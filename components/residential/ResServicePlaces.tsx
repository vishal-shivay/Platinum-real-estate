"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  // {
  //   id: 1,
  //   location: "Mohali",
  //   name: "Affinity Belgravia",
  //   description: "A testament to rarity & redefined taste, each residence at Affinity Belgravia is meticulously crafted for those who value exclusivity - with expansive floor plans, & every essential amenity required for elevated living. These remarkable homes are not just an address, but rather a symbol of distinction. Designed to create a lasting impression of luxury, Affinity Belgravia will undoubtedly capture admiration for years to come.",
  //   images: ["/images/affinity1.jpg", "/images/affinity2.jpg", "/images/affinity3.jpg", "/images/affinity4.jpg"],
  //   theme: "dark",
  //   bgImage: "/images/affinity-bg.png",
  // },
  // {
  //   id: 2,
  //   location: "",
  //   name: "Noble Callista",
  //   description: "Experience luxury redefined at Noble Callista, Mohali, where spacious premium apartments feature exquisite marble flooring and elegant gold-accented interiors. Large floor-to-ceiling windows and boutique-style finishes flood every room with natural light, seamlessly blending modern sophistication with ultimate comfort.",
  //   images: ["/images/noble1.png", "/images/noble2.jpg", "/images/noble3.png", "/images/noble4.jpg"],
  //   theme: "red",
  //   bgImage: "/images/noble-bg.png",
  // },

  // {    id: 3,
  //   location: "",
  //   name: "The Medallion Nova",
  //   description: "The Medallion Nova in Sector 66, Mohali, is a premium residential development featuring ultra-luxury high-rise apartments designed with modern architecture and spacious balconies. The gated community offers a resort-style living experience with beautifully landscaped central lawns, swimming pools, and dedicated club amenities. Its strategic location near Airport Road ensures excellent connectivity while providing top-tier comfort and 24/7 security.",
  //   images: ["/images/affinity1.jpg", "/images/affinity2.jpg", "/images/affinity3.jpg", "/images/affinity4.jpg"],
  //   theme: "dark",
  //   bgImage: "/images/affinity-bg.png",
  // },
  {
    id: 4,
    location: "Mohali",
    name: "The Medallion Aurum",
    description: "The interiors of The Medallion Aurum in Mohali feature ultra-luxury living spaces with expansive layouts and double-height lobbies. They showcase premium modular kitchens, high-end false ceiling designs, and floor-to-ceiling windows that maximize natural light. Every detail is crafted with top-tier finishes to provide a sophisticated, modern lifestyle.",
    images: ["/images/Premium-apartments-in-Mohali 1.jpeg", "/images/Premium-apartments-in-Mohali 2.jpeg", "/images/Premium-apartments-in-Mohali 3.jpeg", "/images/Premium-apartments-in-Mohali 4.jpeg", "/images/Premium-apartments-in-Mohali 5.jpeg", "/images/Premium-apartments-in-Mohali 6.jpeg"],
    theme: "red",
    bgImage: "/images/noble-bg.png",
  },
  //  {
  //   id: 5,
  //   location: "",
  //   name: "Homeland Regalia",
  //   description: "Homeland Regalia offers ultra-luxury 3, 4, and 5 BHK residences featuring expansive floor-to-ceiling glass windows and premium marble finishes. The interiors combine modern minimalist aesthetics with grand statement elements like custom accent paneling and designer lighting.",
  //   images: ["/images/affinity1.jpg", "/images/affinity2.jpg", "/images/affinity3.jpg", "/images/affinity4.jpg"],
  //   theme: "dark",
  //   bgImage: "/images/affinity-bg.png",
  // },
  // {
  //   id: 6,
  //   location: "",
  //   name: "Marbella Royce",
  //   description: "Marbella Royce offers ultra-luxury 4 BHK and 5 BHK apartments featuring grand living spaces, integrated bars, and premium modular kitchens. The interiors showcase sophisticated high-end finishes, including floor-to-ceiling glass windows, custom marble dining settings, and modern warm lighting panels.",
  //   images: ["/images/noble1.png", "/images/noble2.jpg", "/images/noble3.png", "/images/noble4.jpg"],
  //   theme: "red",
  //   bgImage: "/images/noble-bg.png",
  // },

  {    id: 7,
    location: "",
    name: "The Medallion",
    description: "The interiors feature an open-concept layout with premium marble flooring, custom false ceilings, and layered ambient lighting. Each room is styled with plush, neutral-toned contemporary furniture complemented by rich wood and metallic wall accents. Oversized floor-to-ceiling windows complete the space, filling the apartments with natural light.",
    images: ["/images/Medallion1.jpeg", "/images/Medallion2.jpeg", "/images/Medallion3.jpeg", "/images/Medallion4.jpeg", "/images/Medallion5.jpeg", "/images/Medallion6.jpeg"],
    theme: "dark",
    bgImage: "/images/affinity-bg.png",
  },
  // {
  //   id: 8,
  //   location: "",
  //   name: "Joy Grand",
  //   description: "Joy Grand in Sector 88, Mohali offers ultra-luxury 3 and 4 BHK apartments featuring expansive, open-concept living spaces and high-end modern finishes. The interiors boast premium marble or wooden flooring, stylish false ceilings with ambient lighting, and extra-wide balconies that offer panoramic city views.",
  //   images: ["/images/noble1.png", "/images/noble2.jpg", "/images/noble3.png", "/images/noble4.jpg"],
  //   theme: "red",
  //   bgImage: "/images/noble-bg.png",
  // },
   {
    id: 9,
    location: "",
    name: "Noble Aurellia",
    description: "Noble Aurellia in Sector 88, Mohali, features luxury apartments with high-end interior finishes like open-concept living rooms and false ceilings with recessed track lighting. The master bedrooms are designed with rich wooden wall paneling and floor-to-ceiling windows that open directly into private balconies.",
    images: ["/images/Noble1.jpeg", "/images/Noble2.jpeg", "/images/Noble3.jpeg", "/images/Noble6.jpeg", "/images/Noble5.jpeg", "/images/Noble4.jpeg"],
    theme: "red",
    bgImage: "/images/noble-bg.png",
  },
 
  // {
  //   id: 10,
  //   location: "",
  //   name: "Horizon Belmond",
  //   description: "Horizon Belmond features ultra-luxurious, modern interiors designed with premium marble flooring, rich woodwork, and stylish false ceilings. The apartments offer spacious living layouts, large French windows for maximum natural light, and elegant designer bedrooms. Every space reflects sophisticated craftsmanship, providing a perfect blend of comfort and grand, upscale living.",
  //   images: ["/images/noble1.png", "/images/noble2.jpg", "/images/noble3.png", "/images/noble4.jpg"],
  //   theme: "red",
  //   bgImage: "/images/noble-bg.png",
  // },

  // {    id: 11,
  //   location: "",
  //   name: "JLPL Falcon View",
  //   description: "These luxury apartments feature expansive living spaces accented by premium imported marble and laminated wooden flooring. Modern modular kitchens and floor-to-ceiling windows elevate the contemporary, upscale design. The open-concept layouts maximize natural light to create a bright, sophisticated ambiance throughout the home.",
  //   images: ["/images/affinity1.jpg", "/images/affinity2.jpg", "/images/affinity3.jpg", "/images/affinity4.jpg"],
  //   theme: "dark",
  //   bgImage: "/images/affinity-bg.png",
  // },
    {
    id: 12,
    location: "",
    name: "Atulyam The Bliss",
    description: "Atulyam The Bliss in Sector 88, Mohali, offers ultra-luxury apartments featuring expansive living areas, premium marble flooring, and state-of-the-art modular kitchens. The interiors are designed with wide glass balconies and high-end finishes to maximize natural light and elegant ventilation.",
    images: ["/images/Bliss1.jpeg", "/images/Bliss2.jpeg", "/images/Bliss3.jpeg", "/images/Bliss4.jpeg", "/images/Bliss5.jpeg",  "/images/Bliss6.jpeg"],
    theme: "dark",
    bgImage: "/images/affinity-bg.png",
  },
 
    {    id: 13,
    location: "",
    name: "Noble Magnollia",
    description: "Noble Magnollia , Mohali offers ultra-luxury 4+1 BHK apartments featuring expansive living spaces, premium marble accents, and elegant false ceilings [1]. The interiors blend modern, neutral-toned styling with expansive floor-to-ceiling glass windows and custom modular fittings. These high-definition visuals showcase the grand layouts of the master bedrooms, designer bathrooms, and broad balconies.",
    images: ["/images/Magnollia1.jpeg", "/images/Magnollia2.jpeg", "/images/Magnollia3.jpeg", "/images/Magnollia4.jpeg", "/images/Magnollia5.jpeg", "/images/Magnollia6.jpeg"],
    theme: "red",
    bgImage: "/images/noble-bg.png",
  },
  {
    id: 14,
    location: "Zirakpur",
    name: "Green Lotus Utsav",
    description: "Green Lotus Utsav is an eco-luxury residential complex located on the Airport Road in Zirakpur. The project features sustainable apartments and premium penthouses designed with green building standards to promote healthier living. It provides upscale community spaces, fitness facilities, and dedicated wellness areas for its residents.",
    images: ["/images/Lotus1.jpeg", "/images/Lotus2.jpeg", "/images/Lotus3.jpeg", "/images/Lotus4.jpeg"],
    theme: "dark",
    bgImage: "/images/affinity-bg.png",
  },

  {    id: 15,
    location: "",
    name: "The Suman Marvelous",
    description: "The Suman Marvelous is a premium high-rise residential development located on VIP Junction Road in Zirakpur. Developed by Suman Divine Homes, this gated community features corner apartments designed with multiple balconies to ensure optimal natural light. It offers luxury living spaces coupled with ready-to-use recreational club facilities, a swimming pool, and an elevated ground level to prevent water logging",
    images: ["/images/Luxury-apartments-in-Zirakpur 29.jpeg", "/images/Luxury-apartments-in-Zirakpur 30.jpeg", "/images/Luxury-apartments-in-Zirakpur 31.jpeg", "/images/Luxury-apartments-in-Zirakpur 32.jpeg", "/images/Luxury-apartments-in-Zirakpur 33.jpeg", "/images/Luxury-apartments-in-Zirakpur 34.jpeg"],
    theme: "red",
    bgImage: "/images/noble-bg.png",
  },
  // {
  //   id: 16,
  //   location: "",
  //   name: "Atlantis Grand",
  //   description: "Atlantis Grand is an upcoming premium residential high-rise project situated on High Ground Road near the Chandigarh-Patiala Highway in Zirakpur. Developed by Krishna Builders, it features a dual-core and quad-core layout configuration that ensures enhanced privacy with fewer apartments sharing each floor. The gated community is engineered with earthquake-resistant Mivan technology and offers modern lifestyle amenities including a luxury clubhouse, swimming pool, and a three-tier security system.",
  //   images: ["/images/noble1.png", "/images/noble2.jpg", "/images/noble3.png", "/images/noble4.jpg"],
  //   theme: "red",
  //   bgImage: "/images/noble-bg.png",
  // },
   {
    id: 17,
    location: "",
    name: "Escon Primera",
    description: "Escon Primera is a premium residential development strategically positioned on the wide Airport Road in Zirakpur. Developed by Malwa Projects using earthquake-resistant Mivan construction technology, the gated high-rise community features thoughtfully planned apartments emphasizing natural light and cross-ventilation. Residents enjoy upscale lifestyle privileges, including expansive podium parks, a multi-tier security system, and a massive luxury clubhouse equipped with recreational sports arenas.",
    images: ["/images/Luxury-flats-in-Zirakpur 38.jpeg", "/images/Luxury-flats-in-Zirakpur 36.jpeg", "/images/Luxury-flats-in-Zirakpur 37.jpeg", "/images/Luxury-flats-in-Zirakpur 40.jpeg", "/images/Luxury-flats-in-Zirakpur 39.jpeg", "/images/Luxury-flats-in-Zirakpur 35.jpeg"],
    theme: "dark",
    bgImage: "/images/affinity-bg.png",
  },
  {
    id: 18,
    location: "",
    name: "Ananta Aspire",
    description: "The Ananta Aspire is a luxury high-rise residential project strategically located on the Chandigarh-Patiala Highway in Zirakpur. Developed by Svastiga Infra using advanced Mivan construction technology, this smart-home community features a unique dual-core tower design with only two park-facing apartments per floor to guarantee maximum privacy and cross-ventilation. The gated complex incorporates fully automated voice-controlled systems, EV charging stations, a rooftop infinity pool, and a dedicated multi-sport arena.",
    images: ["/images/Luxury-flats-in-Zirakpur 41.jpeg", "/images/Luxury-flats-in-Zirakpur 42.jpeg", "/images/Luxury-flats-in-Zirakpur 43.jpeg", "/images/Luxury-flats-in-Zirakpur 44.jpeg", "/images/Luxury-flats-in-Zirakpur 45.jpeg", "/images/Luxury-flats-in-Zirakpur 46.jpeg"],
    theme: "red",
    bgImage: "/images/noble-bg.png",
  },

  {    id: 19,
    location: "",
    name: "Highland Luxuria",
    description: "Highland Luxuria is an exclusive, low-density residential community developed by Highland Park Homes on High Ground Road in Zirakpur. Departing from typical high-rises, this gated development features independent, neo-classical luxury villas designed with premium finishes and generous multi-floor layouts. The secure complex prioritizes resident privacy and features beautifully landscaped themed gardens, broad internal roads, and dedicated play areas for children.",
    images: ["/images/Premium-apartments-in-Zirakpur 47.jpeg", "/images/Premium-apartments-in-Zirakpur 48.jpeg", "/images/Premium-apartments-in-Zirakpur 49.jpeg", "/images/Premium-apartments-in-Zirakpur 50.jpeg", "/images/Premium-apartments-in-Zirakpur 51.jpeg", "/images/Premium-apartments-in-Zirakpur 52.jpeg"],
    theme: "dark",
    bgImage: "/images/affinity-bg.png",
  },
  {
    id: 20,
    location: "",
    name: "Golden Era Homes",
    description: "Golden Era Homes is a RERA-approved residential township developed by ABS Infra Developers on Nagla Road, just off the Chandigarh-Ambala Highway in Zirakpur. This gated society features four-side open apartments designed to maximize natural light and ensure excellent cross-ventilation across both low-rise and high-rise structures.",
    images: ["/images/Luxury-flats-in-Zirakpur 65.jpeg", "/images/Luxury-flats-in-Zirakpur 66.jpeg", "/images/Luxury-flats-in-Zirakpur 67.jpeg", "/images/Luxury-flats-in-Zirakpur 68.jpeg", "/images/Luxury-flats-in-Zirakpur 69.jpeg", "/images/Luxury-flats-in-Zirakpur 70.jpeg"],
    theme: "red",
    bgImage: "/images/noble-bg.png",
  },
   {
    id: 21,
    location: "",
    name: "The Zirk",
    description: "The Zirk is an upscale, high-rise residential community developed by Urban Nest Projects LLP on High Ground Road in Zirakpur. Engineered with advanced Mivan construction technology, the gated society features multi-aspect apartments designed for optimal cross-ventilation, abundant daylight, and maximum privacy. It boasts extensive green open areas, a multi-tier security network, and a grand clubhouse complete with a wellness center, sports courts, and an in-house mini-theatre.",
    images: ["/images/Premium-flats-in-Zirakpur 59.jpeg", "/images/Premium-flats-in-Zirakpur 60.jpeg", "/images/Premium-flats-in-Zirakpur 61.jpeg", "/images/Premium-flats-in-Zirakpur 62.jpeg", "/images/Premium-flats-in-Zirakpur 63.jpeg", "/images/Premium-flats-in-Zirakpur 64.jpeg"],
    theme: "dark",
    bgImage: "/images/affinity-bg.png",
  },
  {
    id: 22,
    location: "",
    name: "Vamana Arvindam",
    description: "Vamana Arvindam is an ultra-luxury, under-construction residential township strategically positioned right on the Patiala Highway in Zirakpur. Developed by Vamana Group using advanced Mivan construction technology, this gated community features dual-core open floors that maximize cross-ventilation, natural light, and privacy. The premium complex offers an expansive green footprint and an upscale lifestyle anchored by a massive grand clubhouse, fully loaded modular kitchens, integrated home automation, and comprehensive multi-tier security systems.",
    images: ["/images/Arvindam1.jpg", "/images/Arvindam2.jpg", "/images/Arvindam3.jpg", "/images/Arvindam4.jpg", "/images/Arvindam5.jpg", "/images/Arvindam6.jpg"],
    theme: "red",
    bgImage: "/images/noble-bg.png",
  },

  // {    id: 23,
  //   location: "",
  //   name: "Uptown Skylla",
  //   description: "Uptown Skylla is an IGBC Gold Certified premium residential project developed by Artique Infratech right on the PR-7 International Airport Road in Zirakpur. Built using advanced Mivan construction technology, this mixed-use development features highly ventilated luxury apartments and penthouses complete with private balconies that offer expansive skyline views. The gated township boasts a massive recreation clubhouse, themed central courtyard gardens, and a dedicated half-kilometer unhindered walking track.",
  //   images: ["/images/affinity1.jpg", "/images/affinity2.jpg", "/images/affinity3.jpg", "/images/affinity4.jpg"],
  //   theme: "dark",
  //   bgImage: "/images/affinity-bg.png",
  // },
  {
    id: 24,
    location: "",
    name: "Skyline Elevate",
    description: "Skyline Elevate is an IGBC Gold Pre-Certified luxury residential high-rise project developed by Skyline Developers right on the PR-7 International Airport Road in Zirakpur. The gated community features an IIT-vetted, earthquake-resistant structure with corner apartments that offer multi-side open balconies for abundant daylight and natural ventilation. It provides upscale community lifestyle amenities, including a lavish recreation clubhouse, a swimming pool with a kids' splash area, fully air-conditioned spaces, and advanced multi-tier security systems.",
    images: ["/images/Premium-flats-in-Zirakpur 53.jpeg", "/images/Premium-flats-in-Zirakpur 54.jpeg", "/images/Premium-flats-in-Zirakpur 55.jpeg", "/images/Premium-flats-in-Zirakpur 56.jpeg", "/images/Premium-flats-in-Zirakpur 57.jpeg", "/images/Premium-flats-in-Zirakpur 58.jpeg"],
    theme: "dark",
    bgImage: "/images/affinity-bg.png",
  },
    {    id: 25,
    location: "",
    name: "Vintage Greens",
    description: "Vintage Greens is an under-construction, RERA-approved luxury residential township developed by Vintage Buildtech strategically located on the PR-7 International Airport Road in Zirakpur. Built using advanced Mivan construction technology, the gated society features high-rise dual-core towers configured with only a couple of multi-aspect apartments per floor to maximize cross-ventilation, natural light, and privacy.",
    images: ["/images/Vintage1.png", "/images/Vintage2.jpg", "/images/Vintage3.jpg", "/images/Vintage4.jpg", "/images/Vintage5.jpg", "/images/Vintage6.jpg"],
    theme: "red",
    bgImage: "/images/noble-bg.png",
  },
  // {
  //   id: 26,
  //   location: "",
  //   name: "Genesis Heights",
  //   description: "Genesis Heights is an upcoming luxury residential high-rise township developed by the STJ Group, strategically located right on the Chandigarh-Ambala Highway in Zirakpur. Engineered with advanced Mivan construction technology, this premium gated community features dual entry points providing seamless access to both the national highway and the PR-7 Airport Road.",
  //   images: ["/images/noble1.png", "/images/noble2.jpg", "/images/noble3.png", "/images/noble4.jpg"],
  //   theme: "red",
  //   bgImage: "/images/noble-bg.png",
  // },
    {    id: 27,
    location: "",
    name: "Stellar Heights",
    description: "Stellar Heights is an under-construction, RERA-approved premium residential township developed by Stellarbilt LLP in the highly sought-after Kishanpura and Peer Muchalla locality of Zirakpur. Strategically situated right at the edge of Sector 20, Panchkula, this secure gated community features spacious, modern apartments set amid lush themed gardens and tranquil water bodies.",
    images: ["/images/Luxury-apartments-in-Zirakpur 71.jpeg", "/images/Luxury-apartments-in-Zirakpur 72.jpeg", "/images/Luxury-apartments-in-Zirakpur 73.jpeg", "/images/Luxury-apartments-in-Zirakpur 74.jpeg", "/images/Luxury-apartments-in-Zirakpur 75.jpeg", "/images/Luxury-apartments-in-Zirakpur 76.jpeg"],
    theme: "dark",
    bgImage: "/images/affinity-bg.png",
  },
  //   {
  //   id: 28,
  //   location: "",
  //   name: "Rosero Elena",
  //   description: "Rosero Elena is an ongoing, RERA-approved luxury residential high-rise project developed by Rosero Infra LLP at Singhpura Chowk in Zirakpur. Engineered with advanced, earthquake-resistant Mivan construction technology, the gated development features dual-core towers configured with only two multi-aspect apartments per floor to guarantee maximum privacy and cross-ventilation.",
  //   images: ["/images/noble1.png", "/images/noble2.jpg", "/images/noble3.png", "/images/noble4.jpg"],
  //   theme: "red",
  //   bgImage: "/images/noble-bg.png",
  // },



  //   {
  //   id: 29,
  //   location: "Dholera",
  //   name: "Dholera",
  //   description: "Dholera's residential sector offers smart villas and plotted townships equipped with advanced, eco-friendly infrastructure. These projects feature legal RERA compliance and excellent connectivity via the upcoming Ahmedabad-Dholera Expressway. Investing early provides a high-growth opportunity in India's first planned greenfield smart city",
  //   images: ["/images/noble1.png", "/images/noble2.jpg", "/images/noble3.png", "/images/noble4.jpg"],
  //   theme: "red",
  //   bgImage: "/images/noble-bg.png",
  // },
  //  {    id: 30,
  //   location: "",
  //   name: "Dholera SIR",
  //   description: "Dholera Special Investment Region is an expansive greenfield industrial smart city created as a joint venture between the national and state governments. Situated at a distance from the main state hub, the region features dedicated zones for industries and housing integrated with advanced internet-connected utility networks and automated systems for waste management.",
  //   images: ["/images/affinity1.jpg", "/images/affinity2.jpg", "/images/affinity3.jpg", "/images/affinity4.jpg"],
  //   theme: "dark",
  //   bgImage: "/images/affinity-bg.png",
  // },
    {    id: 31,
    location: "",
    name: "El Spazia Elite Spanish Homes",
    description: "el spazia- El Spazia Elite Spanish Homes is a luxury residential society located directly on the PR7 International Airport Road in Zirakpur, Punjab. It features Spanish-themed architectural designs and sits right next to the Chandigarh-Ambala Expressway for seamless commuting. The property offers prime connectivity to Chandigarh International Airport alongside popular nearby retail and dining hubs.",
    images: ["/images/Spazia1.jpeg","/images/Spazia2.jpeg", "/images/Spazia3.jpeg", "/images/Spazia4.jpeg", "/images/Spazia5.jpeg", "/images/Spazia6.jpeg",  ],
    theme: "red",
    bgImage: "/images/noble-bg.png",
  },
    {    id: 32,
    location: "",
    name: "Gulnaar Serene",
    description: "Gulnaar Serene is an exclusively residential enclave offering ultra-spacious, 2-side-open 3+1 BHK luxury floors across 5 acres. The low-density project limits development to just 152 total units, guaranteeing high privacy with only two flats per floor. Families enjoy peaceful, private living centered around a 1.5-acre green park completely free from commercial or retail disruptions.",
    images: ["/images/Serene1.jpeg","/images/Serene2.jpeg","/images/Serene3.jpeg","/images/Serene4.jpeg","/images/Serene5.jpeg","/images/Serene6.jpeg" ],
    theme: "dark",
    bgImage: "/images/affinity-bg.png",
  },
    {    id: 33,
    location: "",
    name: "Northview Homez",
    description: "Northview Homez is a premium residential project located right on the Ambala-Chandigarh Highway in Zirakpur, Punjab, situated close to the local McDonald's. The development features modern 3 BHK apartments and sky villas built using earthquake-resistant Mivan technology. It offers residents excellent highway connectivity alongside upscale amenities like a private clubhouse, gym, and landscaped green spaces.",
    images: ["/images/Homez1.jpeg", "/images/Homez2.jpeg","/images/Homez3.jpeg","/images/Homez4.jpeg","/images/Homez5.jpeg","/images/Homez6.jpeg" ],
    theme: "red",
    bgImage: "/images/noble-bg.png",
  }
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

export default function ResServicePlaces() {
  const [indices, setIndices] = useState<number[]>(projects.map(() => 0));
  const locationRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const prev = (pi: number) => setIndices((prev) => prev.map((ci, i) => i === pi ? (ci === 0 ? projects[pi].images.length - 1 : ci - 1) : ci));
  const next = (pi: number) => setIndices((prev) => prev.map((ci, i) => i === pi ? (ci === projects[pi].images.length - 1 ? 0 : ci + 1) : ci));

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

        @media(max-width:1200px){ .rp-card{ height:auto; padding-bottom:40px; } .rp-images{ flex-wrap:wrap; } }
        @media(max-width:992px){ .rp-location{ font-size:38px; } .rp-title{ font-size:28px; } .rp-description{ font-size:14px; width:95%; } .rp-image-box{ width:210px; height:160px; } }
        @media(max-width:768px){
          .rp-project { width: 100%; margin: 0 auto 0px; padding: 0 0px;  }
        .rp-location{ font-size:32px; }
        .rp-card{ padding-bottom:30px; }
         /* FIX: keep the slider as a row so arrows sit on the left/right of the
            image grid instead of stacking above/below it (was flex-direction:column) */
         .rp-slider{ flex-direction:row; align-items:center; gap:8px; }
          .rp-arrow{ font-size:30px; }
           .rp-images{ width:100%; justify-content:center; gap:14px; }
            .rp-image-box{ width:46%; height:180px; } 
            .rp-description{ text-align:center; width:100%; } 
            }
        @media(max-width:480px){.rp-image-box{ width:46%; height:130px; }  .rp-location{ font-size:26px; } .rp-title{ font-size:24px; } .rp-description{ font-size:13px; line-height:1.6; }  }
      `}</style>

      <section className="rp-section">
        {projects.map((project, pi) => {
          const start = indices[pi];
          const visibleImages = [0,1,2,3].map(i => project.images[(start + i) % project.images.length]);
          const groupLocation = projectGroupLocation[pi];

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
                    <button className="rp-arrow rp-arrow-prev" onClick={() => prev(pi)} aria-label="Previous images">
                      <span className="rp-tri" />
                    </button>
                    <div className="rp-images">
                      {visibleImages.map((img, index) => (
                        <div className="rp-image-box" key={index}>
                          <Image src={img} alt={`${project.name}-${index}`} fill sizes="300px" style={{ objectFit: "cover" }} />
                        </div>
                      ))}
                    </div>
                    <button className="rp-arrow rp-arrow-next" onClick={() => next(pi)} aria-label="Next images">
                      <span className="rp-tri" />
                    </button>
                  </div>
               
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}