"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const brands = [
  { name: "Siemens", logo: "/clients/client1.png" },
  { name: "Rockwell Automation", logo: "/clients/client2.png" },
  { name: "Honeywell", logo: "/clients/client3.png" },
  { name: "Delta", logo: "/clients/client4.png" },
  { name: "Omron", logo: "/clients/client5.png" },
  { name: "Mitsubishi Electric", logo: "/clients/mercedes.png" },
  { name: "Fanuc", logo: "/clients/client7.png" },
  { name: "Endress+Hauser", logo: "/clients/client8.png" },
  { name: "Schneider Electric", logo: "/clients/client9.png" },
  { name: "ABB", logo: "/clients/client10.png" },
  { name: "Yokogawa", logo: "/clients/client11.png" },
  { name: "Krohne", logo: "/clients/client12.png" },
  { name: "Abbott", logo: "/clients/client13.png" },
  { name: "ADM", logo: "/clients/client14.png" },
  { name: "Artistic Denim Mills", logo: "/clients/client15.png" },
  { name: "Alkaram", logo: "/clients/client16.png" },
  { name: "Archroma", logo: "/clients/client17.png" },
  { name: "Brookes", logo: "/clients/client18.png" },
  { name: "Candyland", logo: "/clients/client19.png" },
  { name: "Clariant", logo: "/clients/client20.png" },
  // { name: "English Biscuit Manufacturers", logo: "/clients/client21.png" },
  { name: "GSK", logo: "/clients/client22.png" },
  { name: "Gul Ahmed", logo: "/clients/client23.png" },
  { name: "Hilal", logo: "/clients/client24.png" },
  { name: "Kasim Textile", logo: "/clients/client25.png" },
  { name: "KCCI", logo: "/clients/client26.png" },
  { name: "KE", logo: "/clients/client27.png" },
  { name: "Lucky Core", logo: "/clients/client28.png" },
  { name: "Master Textile", logo: "/clients/client29.png" },
  { name: "Mehran", logo: "/clients/client30.png" },
  { name: "Mekotex", logo: "/clients/client31.png" },
  { name: "Naveena", logo: "/clients/client32.png" },
  { name: "Nishat", logo: "/clients/client33.png" },
  { name: "National Refinery", logo: "/clients/client34.png" },
  { name: "Nestle", logo: "/clients/client35.png" },
  { name: "Oil & Gas Development", logo: "/clients/client36.png" },
  { name: "Gatron", logo: "/clients/client37.png" },
  { name: "P&G", logo: "/clients/client38.png" },
  { name: "Parco", logo: "/clients/client39.png" },
  { name: "PCICL", logo: "/clients/client40.png" },
  // { name: "Popular", logo: "/clients/client41.png" },
  { name: "Popular Group", logo: "/clients/client42.png" },
  { name: "PSEB", logo: "/clients/client43.png" },
  { name: "R&M", logo: "/clients/client44.png" },
  { name: "Sanofi", logo: "/clients/client45.png" },
  { name: "Scada Industries", logo: "/clients/client46.png" },
  { name: "Shell", logo: "/clients/client47.png" },
  { name: "Tapal", logo: "/clients/client48.png" },
  { name: "Tapal Energy", logo: "/clients/client49.png" },
  { name: "Unilever", logo: "/clients/client50.png" },
  { name: "Union Fabrics", logo: "/clients/client51.png" },
  { name: "US Denim", logo: "/clients/client52.png" },
  { name: "Yunus Textile", logo: "/clients/client53.png" },
  { name: "FOTTCO", logo: "/clients/client54 .png" },
  { name: "FTTL", logo: "/clients/client55.png" },
  { name: "AGP", logo: "/clients/client56.png" },
     { name: "KIA", logo: "/clients/client57.png" },
       { name: "ToYOTA", logo: "/clients/client58.png" },
        { name: "DAWN", logo: "/clients/client59.png" },
];

// Adjust spacing between logos here (pixels)
const LOGO_GAP = 80;
// Speed: pixels per second — lower = slower
const SPEED_PX_PER_SEC = 80;

const BrandSection = () => {
  const singleSetRef = useRef<HTMLDivElement>(null);
  const [singleWidth, setSingleWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (singleSetRef.current) {
        setSingleWidth(singleSetRef.current.offsetWidth);
      }
    };

    // Measure after images may have loaded
    measure();
    const timer = setTimeout(measure, 500);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const duration = singleWidth > 0 ? singleWidth / SPEED_PX_PER_SEC : 80;

  return (
    <>
      <style>{`
 

        @keyframes marquee-smooth {
          from { transform: translateX(0px); }
          to   { transform: translateX(var(--marquee-offset)); }
        }

        .brand-marquee-outer {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .brand-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
        }

        .brand-marquee-track:hover {
          animation-play-state: paused !important;
        }

        .brand-logo-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-right: ${LOGO_GAP}px;
        }

        .brand-logo-item img {
          height: 50px;
          width: auto;
          /*
           * LOGO COLOR OPTIONS — uncomment the one you want:
           *
           * White logos (on dark background):
           *   filter: brightness(0) invert(1);
           *
           * Black logos (on light background):
           *   filter: brightness(0);
           *
           * Original colors:
           *   filter: none;
           */
          filter: brightness(0) invert(0);
          opacity: 0.85;
          transition: opacity 0.3s ease;
        }

        .brand-logo-item img:hover {
          opacity: 1;
        }

        .brand-fade-left {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 120px;
          /* Change this color to match your BOX background */
          background: linear-gradient(to right, #eeeeee, transparent);
          z-index: 2;
          pointer-events: none;
        }

        .brand-fade-right {
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 120px;
          /* Change this color to match your BOX background */
          background: linear-gradient(to left, #ffffff, transparent);
          z-index: 2;
          pointer-events: none;
        }
      `}
      </style>

      {/*
       * ═══════════════════════════════════════════════════════════
       * PAGE BACKGROUND — this outer div has NO background set.
       * It inherits from the parent/page. Your page background stays
       * exactly as it is. Only the inner box has its own background.
       * ═══════════════════════════════════════════════════════════
       */}
 <div style={{
    padding: "40px 20px",
    overflow: "hidden",
    position: "relative",
    // Background Image Settings
   backgroundImage: "url('bgb.jpg')",
    backgroundSize: "cover",      // Image ko poore div par phailane ke liye
    backgroundPosition: "center", // Image ko center karne ke liye
    backgroundRepeat: "no-repeat" // Image repeat na ho
}}>

        <div style={{ maxWidth: "1900px", margin: "0 auto", position: "relative", zIndex: 25 }}>

          {/*
           * ┌──────────────────────────────────────────────────────┐
           * │  LOGO BOX BACKGROUND — change ONLY this one value:   │
           * │                                                        │
           * │  background: "#000000"   ← pure black (current)      │
           * │  background: "#0d1117"   ← very dark navy            │
           * │  background: "#ffffff"   ← white (use black logos)   │
           * │  background: "#f5f5f5"   ← light grey                │
           * │                                                        │
           * │  If you change to a light color:                      │
           * │   1. Change heading color to #000000                  │
           * │   2. Change logo filter to brightness(0)              │
           * │   3. Change fade gradient color to match this bg      │
           * └──────────────────────────────────────────────────────┘
           */}
          <div style={{
            background: "linear-gradient(#e7e3e3 100%, #e2e2e2 100%,  #000000 10% #e7e3e3 100%, #e2e2e2 100%,  #000000 10% )",
            borderRadius: "30px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            padding: "60px 40px",
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}>

            {/*
             * HEADING COLOR:
             * Dark box  → color: "#ffffff"  (current — white)
             * Light box → color: "#000000"  (black)
             */}
            <h2 style={{
              color: "#000000",
              fontSize: "29px",
              fontWeight: "700",
              marginBottom: "50px",
              letterSpacing: "0.5px",
            }}>
              The world&apos;s leading brands are powered by{" "}
              <span style={{ color: "#000000" }}>Industronics</span>
            </h2>

            {/* Marquee container */}
            <div className="brand-marquee-outer">
              <div className="brand-fade-left" />
              <div className="brand-fade-right" />

              <div
                className="brand-marquee-track"
                style={singleWidth > 0 ? {
                  ["--marquee-offset" as string]: `-${singleWidth}px`,
                  animation: `marquee-smooth ${duration}s linear infinite`,
                } : {
                  // Hide until measured to prevent flash
                  visibility: "hidden",
                }}
              >
                {/*
                 * COPY 1 — wrapped in its own div so we can measure its
                 * exact pixel width with singleSetRef. This is the key to
                 * zero-jerk looping.
                 */}
                <div
                  ref={singleSetRef}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {brands.map((brand, index) => (
                    <div key={`copy1-${index}`} className="brand-logo-item">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={120}
                        height={50}
                        style={{ height: "50px", width: "auto" }}
                      />
                    </div>
                  ))}
                </div>

                {/*
                 * COPY 2 — identical clone. When copy-1 scrolls fully off
                 * screen to the left, copy-2 is now at position 0.
                 * The animation resets from -singleWidth back to 0px.
                 * The eye sees NO difference — perfect illusion.
                 */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  {brands.map((brand, index) => (
                    <div key={`copy2-${index}`} className="brand-logo-item">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={120}
                        height={50}
                        style={{ height: "50px", width: "auto" }}
                      />
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Subtle teal grid — purely decorative */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none",
          backgroundImage: "linear-gradient(#167d82 1px, transparent 1px), linear-gradient(90deg, #167d82 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }} />
      </div>
    </>
  );
};

export default BrandSection;
