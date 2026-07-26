"use client";
import Image from "next/image";
import { useEffect, useMemo, useState, useCallback } from "react";

const customers = [
  { img: "/images/first.jpg",  name: "Mr. Karan Mehta" },
  { img: "/images/second.jpg", name: " Ms. Anjali Verma" },
  { img: "/images/third.jpg",  name: "Mr. Rajat Sood" },
  { img: "/images/fourth.jpg", name: "Ms. Priyanshu Nair" },
  { img: "/images/fifth.jpg",  name: "Mr. Devansh Rao" },
];

const AUTO_ROTATE_MS = 3500;

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % customers.length);
    }, AUTO_ROTATE_MS);
    return () => clearInterval(timer);
  }, []);

  const total = customers.length;

  const slots = useMemo(
    () =>
      Array.from({ length: total }, (_, slot) => {
        const sourceIndex = (activeIndex + (slot - 2) + total) % total;
        return { ...customers[sourceIndex], sourceIndex, slot };
      }),
    [activeIndex, total]
  );

  const handleSelect = useCallback((sourceIndex: number) => {
    setActiveIndex(sourceIndex);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&display=swap');

        .ts-section {
          padding: 64px 60px 56px;
          text-align: center;
          position: relative;
          overflow: hidden;
          background-color: #ffffff;
          font-family: 'Playfair Display', serif;
        }
        .ts-watermark {
          position: absolute;
          top: 60px;
          left: 51%;
          transform: translateX(-50%);
          font-size: 190px;
          font-weight: 900;
          color: rgba(210, 30, 60, 0.07);
          white-space: nowrap;
          pointer-events: none;
          letter-spacing: 18px;
          font-family: 'Playfair Display', serif;
          user-select: none;
          line-height: 1;
          z-index: 0;
        }
        .ts-heading {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 700;
          color: #c8102e;
          margin: 0 0 44px 0;
          position: relative;
          z-index: 1;
          letter-spacing: 0.01em;
        }

        /* Stage: fixed-height positioning context. No flex, no reflow — ever. */
        .ts-row {
          position: relative;
          width: 100%;
          height: var(--stage-h, 420px);
          padding: 20px 0;
          margin-bottom: 24px;
          z-index: 1;

          /* Base (unscaled) card box + offsets/scales for each slot (desktop / ≥1000px) */
          --base-w: 170px;
          --base-h: 230px;

          --tx-0: -547px; --scx-0: 1;       --scy-0: 1;
          --tx-1: -316px; --scx-1: 1.5294;  --scy-1: 1.3043;
          --tx-2: 0px;    --scx-2: 2.0;     --scy-2: 1.8261;
          --tx-3: 316px;  --scx-3: 1.5294;  --scy-3: 1.3043;
          --tx-4: 547px;  --scx-4: 1;       --scy-4: 1;
        }

        /* Every card shares the exact same box geometry — only its transform differs.
           GPU-accelerated, layout-free, buttery smooth. */
        .ts-card {
          position: absolute;
          top: 50%;
          left: 50%;
          width: var(--base-w);
          height: var(--base-h);
          border: 1px solid rgba(180, 20, 40, 0.55);
          overflow: hidden;
          cursor: pointer;
          transform-origin: center center;
          will-change: transform;
          backface-visibility: hidden;
          transition:
            transform 0.6s cubic-bezier(.22,.61,.36,1),
            box-shadow 0.4s ease,
            border-color 0.4s ease;
        }
        .ts-row .ts-card[data-slot="0"] { transform: translate(-50%, -50%) translateX(var(--tx-0)) scale(var(--scx-0), var(--scy-0)) translateZ(0); z-index: 2; }
        .ts-row .ts-card[data-slot="1"] { transform: translate(-50%, -50%) translateX(var(--tx-1)) scale(var(--scx-1), var(--scy-1)) translateZ(0); z-index: 3; }
        .ts-row .ts-card[data-slot="2"] { transform: translate(-50%, -50%) translateX(var(--tx-2)) scale(var(--scx-2), var(--scy-2)) translateZ(0); z-index: 5; }
        .ts-row .ts-card[data-slot="3"] { transform: translate(-50%, -50%) translateX(var(--tx-3)) scale(var(--scx-3), var(--scy-3)) translateZ(0); z-index: 3; }
        .ts-row .ts-card[data-slot="4"] { transform: translate(-50%, -50%) translateX(var(--tx-4)) scale(var(--scx-4), var(--scy-4)) translateZ(0); z-index: 2; }

        .ts-card--active {
          border-color: #c8102e;
          box-shadow: 0 10px 30px rgba(0,0,0,0.16);
        }

        .ts-card-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(20, 20, 20, 0.52);
          color: #fff;
          font-family: 'Playfair Display', serif;
          font-size: 11px;
          font-weight: 400;
          padding: 5px 8px 6px;
          text-align: left;
          letter-spacing: 0.02em;
          transform: translateY(100%);
          transition: transform 0.4s ease;
          text-align:center;
        }
        .ts-card:hover .ts-card-label,
        .ts-card--active .ts-card-label { transform: translateY(0); }

        .ts-footer {
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          font-weight: 400;
          color: #1a1a1a;
          line-height: 1.5;
          position: relative;
          z-index: 1;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .ts-section { padding: 56px 32px 48px; }
          .ts-watermark { font-size: 150px; letter-spacing: 12px; }
        }

        @media (max-width: 1000px) {
          .ts-section { padding: 48px 20px 44px; }
          .ts-watermark { font-size: 110px; letter-spacing: 8px; top: 50px; }
          .ts-heading { font-size: 20px; margin-bottom: 32px; }
          .ts-footer { font-size: 14px; }

          .ts-row {
            --stage-h: 226px;
            --base-w: 110px;
            --base-h: 136px;

            --tx-0: -287px; --scx-0: 1;      --scy-0: 1;
            --tx-1: -158px; --scx-1: 1.1636; --scy-1: 1.2647;
            --tx-2: 0px;    --scx-2: 1.5273; --scy-2: 1.6618;
            --tx-3: 158px;  --scx-3: 1.1636; --scy-3: 1.2647;
            --tx-4: 287px;  --scx-4: 1;      --scy-4: 1;
          }
        }

        @media (max-width: 599px) {
          .ts-section { padding: 44px 16px 40px; }
          .ts-watermark { font-size: 76px; letter-spacing: 5px; top: 40px; }
          .ts-heading { font-size: 18px; margin-bottom: 28px; }
          .ts-card-label { font-size: 9px; padding: 4px 6px 5px; }
          .ts-footer { font-size: 13px; }

          .ts-row {
            --stage-h: 176px;
            --base-w: 82px;
            --base-h: 106px;

            --tx-0: -223px; --scx-0: 1;      --scy-0: 1;
            --tx-1: -124px; --scx-1: 1.2195; --scy-1: 1.2642;
            --tx-2: 0px;    --scx-2: 1.6098; --scy-2: 1.6604;
            --tx-3: 124px;  --scx-3: 1.2195; --scy-3: 1.2642;
            --tx-4: 223px;  --scx-4: 1;      --scy-4: 1;
          }
        }

        @media (max-width: 380px) {
          .ts-section { padding: 32px 10px 28px; }
          .ts-watermark { font-size: 56px; letter-spacing: 3px; }
          .ts-heading { font-size: 16px; margin-bottom: 24px; }
          .ts-card-label { font-size: 8px; padding: 3px 5px 4px; }
          .ts-footer { font-size: 12px; }

          .ts-row {
            --stage-h: 138px;
            --base-w: 64px;
            --base-h: 84px;

            --tx-0: -173px; --scx-0: 1;      --scy-0: 1;
            --tx-1: -96px;  --scx-1: 1.2188; --scy-1: 1.2619;
            --tx-2: 0px;    --scx-2: 1.5938; --scy-2: 1.6429;
            --tx-3: 96px;   --scx-3: 1.2188; --scy-3: 1.2619;
            --tx-4: 173px;  --scx-4: 1;      --scy-4: 1;
          }
        }
      `}</style>

      <section className="ts-section">
        <div className="ts-watermark" aria-hidden="true">PLATINUM</div>
        <h2 className="ts-heading">Thousands of Satisfied Customers</h2>
        <div className="ts-row">
          {slots.map(({ img, name, sourceIndex, slot }) => {
            const isActive = slot === 2;
            return (
              <div
                key={sourceIndex}
                data-slot={slot}
                className={`ts-card${isActive ? " ts-card--active" : ""}`}
                onClick={() => handleSelect(sourceIndex)}
              >
                <Image
                  src={img}
                  alt={name || `Customer ${sourceIndex + 1}`}
                  fill
                  sizes="(max-width: 380px) 102px, (max-width: 599px) 132px, (max-width: 1000px) 168px, 340px"
                  style={{ objectFit: "cover" }}
                />
                {name && <span className="ts-card-label">{name}</span>}
              </div>
            );
          })}
        </div>
        <p className="ts-footer">Hundreds of Happy<br />clients</p>
      </section>
    </>
  );
}