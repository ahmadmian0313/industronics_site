// constants/index.ts

export const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'SERVICES', href: '#services' },
  { label: 'SOLUTIONS', href: '#solutions' },
  { label: 'PRODUCTS', href: '#products' },
  { label: 'CAREERS', href: '#careers' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'CONTACT US', href: '#contact' },
];

export const SITE_DATA = {
  hero: {
    badge: "EPC CONTRACTS",
    title: "Engineering Procurement",
    description: "End-to-End EPC Contracts for Large-Scale Industrial Projects",
    stats: [
      { label: "YEARS EXPERIENCE", value: "25+" },
      { label: "PROJECTS DONE", value: "2,000+" }
    ]
  },
  footer: {
    description: "Engineering the Future of Industrial Automation. Established in 1999, we deliver cutting-edge industrial automation solutions across diverse sectors.",
    contact: {
      phone: "+92 337 890 8848",
      email: "info@industronics.pk",
      locations: [
        { city: "Karachi", address: "Plot B/1-2, National Highway N-5, Landhi Industrial Area" },
        { city: "Lahore", address: "12-Ali Homes, Mian Jan Muhammad Road" }
      ]
    }
  }
};
export const HERO_SLIDES = [
  {
      tag: 'Industrial Automation',
      title: ['Industrial', 'Automation'],
      image: 'Hero_slides_Home/eng.png', 
      subtitle: 'Next-Gen PLC, SCADA & DCS Solutions for Modern Industry',
    },
    {
      tag: 'BMS Integration',
      title: ['Building', 'Management'],
      image: 'Hero_slides_Home/03.png', 
      subtitle: 'Intelligent BMS Solutions for Energy Efficiency & Control',
    },
    {
      tag: 'EPC Contracts',
      title: ['Engineering', 'Procurement'],
      image: 'Hero_slides_Home/02.png', 
      subtitle: 'End-to-End EPC Contracts for Large-Scale Industrial Projects',
    },
];

export const SERVICES = [
  { title: "Automation Services", desc: "Complete PLC/DCS automation for industrial plants, modernization & upgrades." },
  { title: "BMS Integration", desc: "Customized Building Management Systems for optimal mechanical & electrical control." },
  { title: "EPC Contracts", desc: "Full Engineering, Procurement & Construction for large-scale complex projects." },
  { title: "Mechanical Engineering", desc: "In-house fabrication from raw material to cutting, forming, welding & assembly." },
  { title: "Software Development", desc: "Web-based Machine Monitoring, OEE Data Logging, WMS & ERP (SAP/Oracle)." },
  { title: "Process Monitoring", desc: "Solutions for Textile, Denim, Carpet Industries — Web Tensions & Weft Controls." },
  { title: "Instrumentation", desc: "Precision calibration & instrumentation for industrial measurement & control." },
  { title: "Dosing Systems", desc: "Customised chemical dosing systems for Chemical & Dyes industries." }
];

export const BRANDS = [
  { name: "Honeywell", logo: "/brands/honeywell.png" },
  { name: "Delta", logo: "/brands/delta.png" },
  { name: "Omron", logo: "/brands/omron.png" },
  { name: "Mitsubishi", logo: "/brands/mitsubishi.png" },
  { name: "Fanuc", logo: "/brands/fanuc.png" }
];