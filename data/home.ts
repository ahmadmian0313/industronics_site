export type HomeSlide = {
  tag: string
  title: [string, string]
  image: string
  subtitle: string
}

export const HOME_SLIDES: HomeSlide[] = [
  {
    tag: 'Industrial Automation',
    title: ['Industrial', 'Automation'],
    image: '/eng.png',
    subtitle: 'Next-Gen PLC, SCADA & DCS Solutions for Modern Industry',
  },
  {
    tag: 'BMS Integration',
    title: ['Building', 'Management'],
    image: '/03.png',
    subtitle: 'Intelligent BMS Solutions for Energy Efficiency & Control',
  },
  {
    tag: 'EPC Contracts',
    title: ['Engineering', 'Procurement'],
    image: '/02.png',
    subtitle: 'End-to-End EPC Contracts for Large-Scale Industrial Projects',
  },
]

export const HOME_SERVICES = [
  {
title: "Automation Services",
desc: "Delivering advanced industrial automation solutions to enhance efficiency and productivity.",
image: "/Home_service/core1.png"
},
{
title: "BMS Integration",
desc: "Smart building management systems for optimized energy usage and control.",
image: "/Home_service/core2.png"
},
{
title: "EPC Contracts",
desc: "End-to-end engineering, procurement, and construction services for complex projects.",
image: "/Home_service/core3.jpg "
},
{
title: "Mechanical Engineering",
desc: "Expert mechanical design and fabrication services tailored to your needs.",
image: "/Home_service/core4.png"
},
{
title: "Software Development",
desc: "Custom software solutions and data management systems for modern businesses.",
image: "/Home_service/core5.png"
},
{
title: "Process Monitoring",
desc: "Real-time monitoring systems for specific industrial processes and quality control.",
image: "/Home_service/core6.png"
},
{
title: "Instrumentation",
desc: "Precise measurement and calibration services for industrial instruments.",
image: "/Home_service/core7.png"
},
{
title: "Dosing Systems",
desc: "Accurate chemical dosing systems designed for the chemical industry.",
image: "/Home_service/core8.png"
}
] as const

export const HOME_STATS = [
  { label: 'Years Experience', value: '25+' },
  { label: 'Projects Done', value: '260+' },
  { label: 'Engineers', value: '55+' },
] as const
