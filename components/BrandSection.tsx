"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image'

const brands = [
  { name: "Siemens", logo: "/clients/1.png" },
  { name: "ABB", logo: "/clients/2.png" },
  { name: "Schneider", logo: "/clients/3.png" },
  { name: "Honeywell", logo: "/clients/4.png" },
  { name: "Mitsubishi", logo: "/clients/5.png" },
    { name: "Siemens", logo: "/clients/6.png" },
      { name: "Siemens", logo: "/clients/7.png" },
        { name: "Siemens", logo: "/clients/8.png" },
          { name: "Siemens", logo: "/clients/9.png" },
            { name: "Siemens", logo: "/clients/10.png" },
             { name: "Siemens", logo: "/clients/11.png" },
 { name: "Siemens", logo: "/clients/12.png" },
];

const BrandSection = () => {
  return (
    <div style={{ 
      backgroundColor: "#00000023", 
      padding: "40px 20px", 
      overflow: "hidden", 
      position: "relative" 
    }}>
      
      <div style={{ maxWidth: "1900px", margin: "0 auto", position: "relative", zIndex: 25 }}>
        
        {/* Glass Container */}
        <div style={{
          background: "linear-gradient(135deg, #ffffff 70%,  #e7e3e3 100%, #ffffff 100%)'",
          backdropFilter: "blur(15px)",
          borderRadius: "30px",
          border: "1px solid rgb(255, 255, 255)",
          padding: "60px 40px",
          textAlign: "center",
          boxShadow: "0 20px 40px rgb(255, 255, 255)"
        }}>
          
          {/* Heading */}
          <h2 style={{ 
            color: "white", 
            fontSize: "29px", 
            fontWeight: "600", 
            marginBottom: "50px",
            letterSpacing: "0.5px"
          }}>
            The world's leading brands are powered by <span style={{ color: " #1a9499 65%," }}>Industronics</span>
          </h2>

          {/* Scrolling Area */}
          <div style={{ 
            position: "relative", 
            display: "flex", 
            alignItems: "center", 
            overflow: "hidden",
            width: "99%" 
          }}>
            
            {/* Fade Overlays */}
            <div style={{
              position: "absolute", left: 0, top: 0, bottom: 0, width: "100px",
              background: "linear-gradient(to right, rgba(255,255,255,0.05), transparent)",
              zIndex: 2, pointerEvents: "none"
            }}></div>
            <div style={{
              position: "absolute", right: 0, top: 0, bottom: 0, width: "100px",
              background: "linear-gradient(to left, rgba(255,255,255,0.05), transparent)",
              zIndex: 2, pointerEvents: "none"
            }}></div>

            {/* Animation Container */}
            <motion.div
              style={{ display: "flex", alignItems: "center", gap: "80px" }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Double the list for Infinite effect */}
              {[...brands, ...brands, ...brands].map((brand, index) => (
                <div key={index} style={{ flexShrink: 0 }}>
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={120}
                    height={50}
                    style={{
                      height: "50px",
                      width: "auto",
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Background Subtle Grid Lines */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none",
        backgroundImage: "linear-gradient(#167d82 1px, transparent 1px), linear-gradient(90deg, #167d82 1px, transparent 1px)",
        backgroundSize: "50px 50px"
      }}></div>
    </div>
  );
};

export default BrandSection;