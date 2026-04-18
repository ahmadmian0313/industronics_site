
// lib/constants.ts
export const COMPANY = {
  name: 'Industronics Engineering',
  tagline: 'Engineering the Future of Industrial Automation',
  established: 1999,
  experience: '25+ years',
  clients: '500+',
  phone1: '+92 337 890 8848',
  phone2: '+92 337 890 8857',
  email: 'info@industronics.uk',
  whatsapp: '+923378908848',
  offices: {
    karachi: {
      address: 'R8-8/1-2, National Highway N-5, Landhi Industrial Area',
      city: 'Karachi',
    },
    lahore: {
      address: '12-Ali Homes, Mian Jan Muhammad Road',
      city: 'Lahore',
    },
  },
  certifications: [
    'ISO Certified',
    'UKAS Accredited',
    'PEC Member',
    'PSEB Member',
    'USGBC Member',
    'KCCI Member',
  ],
  social: {
    facebook: 'https://facebook.com/industronics',
    instagram: 'https://instagram.com/industronics',
    linkedin: 'https://linkedin.com/company/industronics',
  },
} as const

export const SERVICES = [
  {
    id: 1,
    title: 'Industrial Automation',
    slug: 'industrial-automation',
    shortDescription: 'PLC, HMI, SCADA & OEE systems for complete automation control',
    fullDescription: 'We deliver comprehensive industrial automation solutions including Programmable Logic Controllers (PLC), Human-Machine Interfaces (HMI), Supervisory Control and Data Acquisition (SCADA) systems, and Overall Equipment Effectiveness (OEE) monitoring. Our automation systems optimize production efficiency, reduce downtime, and provide real-time operational insights.',
    icon: 'Factory',
    features: [
      'PLC Programming & Integration',
      'HMI/SCADA Development',
      'OEE Monitoring Systems',
      'Process Control Optimization',
      'Remote Monitoring Solutions',
      'Predictive Maintenance Systems',
    ],
  },
  {
    id: 2,
    title: 'BMS Integration',
    slug: 'bms-integration',
    shortDescription: 'Building Management Systems for smart facility control',
    fullDescription: 'Our Building Management Systems (BMS) integrate HVAC, lighting, security, and energy systems into a unified platform. We design intelligent building solutions that reduce operational costs while enhancing occupant comfort and safety.',
    icon: 'Building2',
    features: [
      'HVAC Control Systems',
      'Energy Management',
      'Lighting Automation',
      'Security Integration',
      'Fire Safety Systems',
      'Smart Building Analytics',
    ],
  },
  {
    id: 3,
    title: 'EPC Contracts',
    slug: 'epc-contracts',
    shortDescription: 'Turnkey project delivery from concept to commissioning',
    fullDescription: 'We provide complete Engineering, Procurement, and Construction (EPC) services for industrial projects. From initial design through final commissioning, we manage every aspect to deliver turnkey solutions on time and within budget.',
    icon: 'FileCheck',
    features: [
      'Project Engineering',
      'Procurement Management',
      'Construction Supervision',
      'Commissioning & Testing',
      'Documentation & Handover',
      'Post-Project Support',
    ],
  },
  {
    id: 4,
    title: 'Instrumentation & Calibration',
    slug: 'instrumentation-calibration',
    shortDescription: 'High-accuracy measurement and calibration services',
    fullDescription: 'Our instrumentation and calibration services ensure precise measurement and control across your operations. We provide certified calibration services for all types of industrial instruments, maintaining compliance with international standards.',
    icon: 'Gauge',
    features: [
      'Process Instrumentation',
      'Calibration Services',
      'Sensor Installation',
      'Loop Checking',
      'Documentation & Certificates',
      'NIST Traceable Standards',
    ],
  },
  {
    id: 5,
    title: 'Software Development',
    slug: 'software-development',
    shortDescription: 'WMS, OEE, ERP-integrated software solutions',
    fullDescription: 'We develop custom industrial software solutions including Warehouse Management Systems (WMS), OEE tracking software, and ERP-integrated applications. Our software bridges the gap between operational technology and business systems.',
    icon: 'Code2',
    features: [
      'Warehouse Management Systems',
      'OEE Tracking Software',
      'ERP Integration',
      'Custom Reporting Tools',
      'Mobile Applications',
      'Cloud-Based Solutions',
    ],
  },
  {
    id: 6,
    title: 'Industry 4.0',
    slug: 'industry-4-0',
    shortDescription: 'Digital Twin, IoT, CAD/CAM technologies',
    fullDescription: 'Transform your operations with Industry 4.0 technologies. We implement Digital Twins, IoT sensor networks, and CAD/CAM integration to create connected, intelligent manufacturing environments that drive innovation and efficiency.',
    icon: 'Cpu',
    features: [
      'Digital Twin Development',
      'IoT Sensor Networks',
      'CAD/CAM Integration',
      'Predictive Analytics',
      'Machine Learning Models',
      'Cyber-Physical Systems',
    ],
  },
  {
    id: 7,
    title: 'Machine Sourcing',
    slug: 'machine-sourcing',
    shortDescription: 'Global industrial machinery procurement',
    fullDescription: 'We source high-quality industrial machinery from trusted global manufacturers. Our sourcing services include vendor selection, quality verification, logistics management, and installation support.',
    icon: 'Truck',
    features: [
      'Global Vendor Network',
      'Quality Verification',
      'Logistics Management',
      'Installation Support',
      'Warranty Management',
      'Spare Parts Sourcing',
    ],
  },
  {
    id: 8,
    title: 'Mechanical Fabrication',
    slug: 'mechanical-fabrication',
    shortDescription: 'End-to-end fabrication work for industrial needs',
    fullDescription: 'Our mechanical fabrication services deliver custom solutions for industrial applications. From design to installation, we handle structural steel work, piping systems, and custom machinery components.',
    icon: 'Wrench',
    features: [
      'Structural Fabrication',
      'Piping Systems',
      'Custom Machinery Parts',
      'Welding Services',
      'Installation & Erection',
      'Quality Testing',
    ],
  },
] as const

export const SOLUTIONS = [
  'Flow Metering',
  'Energy Monitoring',
  'Warehouse Management',
  'SCADA & OEE',
  'pH Monitoring',
  'Chemical Dosing',
  'Web Tension Control',
  'Humidity Control',
  'Switch Gear & Panels',
  'Process Monitoring',
  'AS/RS Systems',
  'Weft Straightener',
    'Flow Metering',
  'Energy Monitoring',
  'Warehouse Management',
  'SCADA & OEE',
  'pH Monitoring',
  'Chemical Dosing',
  'Web Tension Control',
  'Humidity Control',
  'Switch Gear & Panels',
  'Process Monitoring',
  'AS/RS Systems',
  'Weft Straightener',
  
] as const

export const STATS = [
  { label: 'Years Experience', value: 25, suffix: '+' },
  { label: 'Clients Served', value: 500, suffix: '+' },
  { label: 'Solutions Delivered', value: 20, suffix: '+' },
  { label: 'Office Locations', value: 2, suffix: '' },
] as const

export const WHY_US_REASONS = [
  {
    number: '01',
    title: 'Proven Expertise',
    description: 'Over 25 years of experience in industrial automation and engineering solutions across diverse sectors.',
  },
  {
    number: '02',
    title: 'Certified Quality',
    description: 'ISO certified and UKAS accredited with memberships in PEC, PSEB, USGBC, and KCCI.',
  },
  {
    number: '03',
    title: 'End-to-End Solutions',
    description: 'From consultation to implementation and support, we deliver complete turnkey projects.',
  },
  {
    number: '04',
    title: 'Innovation First',
    description: 'Leading adopter of Industry 4.0 technologies including IoT, Digital Twin, and smart automation.',
  },
] as const

export const CORE_VALUES = [
  {
    title: 'Excellence',
    description: 'Delivering superior quality in every project we undertake.',
    icon: 'Star',
  },
  {
    title: 'Innovation',
    description: 'Embracing cutting-edge technologies to drive progress.',
    icon: 'Lightbulb',
  },
  {
    title: 'Integrity',
    description: 'Building trust through transparent and ethical practices.',
    icon: 'Shield',
  },
  {
    title: 'Partnership',
    description: 'Working collaboratively for mutual success with our clients.',
    icon: 'Handshake',
  },
] as const