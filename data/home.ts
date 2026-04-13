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
  { title: 'Automation Services', desc: 'Complete PLC/DCS automation for industrial plants, modernization & upgrades.' },
  { title: 'BMS Integration', desc: 'Customized Building Management Systems for optimal mechanical & electrical control.' },
  { title: 'EPC Contracts', desc: 'Full Engineering, Procurement & Construction for large-scale complex projects.' },
  { title: 'Mechanical Engineering', desc: 'In-house fabrication from raw material to cutting, forming, welding & assembly.' },
  { title: 'Software Development', desc: 'Web-based Machine Monitoring, OEE Data Logging, WMS & ERP (SAP/Oracle).' },
  { title: 'Process Monitoring', desc: 'Solutions for Textile, Denim, Carpet Industries — Web Tensions & Weft Controls.' },
  { title: 'Instrumentation', desc: 'Precision calibration & instrumentation for industrial measurement & control.' },
  { title: 'Dosing Systems', desc: 'Customised chemical dosing systems for Chemical & Dyes industries.' },
] as const

export const HOME_STATS = [
  { label: 'Years Experience', value: '25+' },
  { label: 'Projects Done', value: '2000+' },
] as const
