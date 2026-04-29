// ============================================================
// servicesData.ts
// Central data file — add / remove sectors here ONLY
// Each sector auto-renders on the Services page
// ============================================================

export interface ServiceSector {
  id: number
  slug: string
  icon: string           // emoji or icon identifier
  title: string
  shortDesc: string      // shown on card (max ~105 chars)
  details: string[]      // bullet points for expanded view
  industries: string[]   // industries served
  category: string       // section grouping label
  image: string          // image URL or path
}

export const SERVICES_DATA: ServiceSector[] = [
  // ── SECTION A: Core Engineering ──────────────────────────
  {
    id: 1,
    slug: 'industrial-automation',
    icon: '⚙️',
    category: 'Core Engineering',
    title: 'Industrial Automation Engineering',
    shortDesc:
      'Complete PLC/DCS programming, HMI/SCADA development, and control system design for full process automation.',
    details: [
      'PLC / DCS programming & commissioning',
      'HMI / SCADA development & deployment',
      'Control system design & architecture',
      'Process automation & loop tuning',
      'Remote monitoring & control integration',
    ],
    industries: ['Textile', 'Cement', 'Chemical', 'Oil & Gas', 'Food Industry'],
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80',
  },
  {
    id: 2,
    slug: 'epc',
    icon: '🏗️',
    category: 'Core Engineering',
    title: 'EPC (Engineering, Procurement & Construction)',
    shortDesc:
      'Turnkey project execution from design to commissioning — full industrial plant setup under one roof.',
    details: [
      'Turnkey project execution end-to-end',
      'Design → supply → installation → commissioning',
      'Industrial plant & facility setup',
      'Project management & scheduling',
      'Quality assurance & compliance',
    ],
    industries: ['Power Plants', 'Cement', 'Sugar', 'Chemical', 'Oil & Gas'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
  {
    id: 3,
    slug: 'system-integration',
    icon: '🔗',
    category: 'Core Engineering',
    title: 'System Integration Services',
    shortDesc:
      'PLC + SCADA integration, machine-to-cloud connectivity, and factory-wide multi-system communication.',
    details: [
      'PLC + SCADA seamless integration',
      'Machine-to-cloud connectivity solutions',
      'Multi-system & protocol communication',
      'Factory-wide integration architecture',
      'Legacy system modernisation',
    ],
    industries: ['Textile', 'Automobile', 'Food Industry', 'Power Plants'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },

  // ── SECTION B: Electrical & Control ──────────────────────
  {
    id: 4,
    slug: 'electrical-engineering',
    icon: '⚡',
    category: 'Electrical & Control Systems',
    title: 'Electrical Engineering Services',
    shortDesc:
      'MCC/PCC panels, switchgear design, control panels, and full power distribution system engineering.',
    details: [
      'MCC / PCC panel design & manufacturing',
      'Switchgear design & selection',
      'Control panel fabrication',
      'Power distribution system design',
      'Load flow & protection studies',
    ],
    industries: ['Cement', 'Sugar', 'Textile', 'Chemical', 'Oil & Gas'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
  },
  {
    id: 5,
    slug: 'instrumentation-calibration',
    icon: '🎛️',
    category: 'Electrical & Control Systems',
    title: 'Instrumentation & Calibration Services',
    shortDesc:
      'Field instrumentation setup, sensor calibration, accuracy testing, and process measurement systems.',
    details: [
      'Field instrumentation installation & setup',
      'Sensor & transmitter calibration',
      'Accuracy testing & certification',
      'Process measurement system design',
      'Loop checking & documentation',
    ],
    industries: ['Oil & Gas', 'Chemical', 'Pharmaceutical', 'Power Plants'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
  },
  {
    id: 6,
    slug: 'bms',
    icon: '🏢',
    category: 'Electrical & Control Systems',
    title: 'Building Management System (BMS) Integration',
    shortDesc:
      'HVAC control, electrical monitoring, energy optimisation, and full smart building automation.',
    details: [
      'HVAC control & monitoring',
      'Electrical load monitoring',
      'Energy optimisation strategies',
      'Smart building automation integration',
      'Fire & security system integration',
    ],
    industries: ['Commercial Buildings', 'Hospitals', 'Data Centers', 'Factories'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },

  // ── SECTION C: Mechanical & Fabrication ──────────────────
  {
    id: 7,
    slug: 'mechanical-fabrication',
    icon: '🔧',
    category: 'Mechanical & Fabrication',
    title: 'Mechanical Fabrication & Engineering',
    shortDesc:
      'Machine fabrication, structural design, welding & assembly, and custom industrial machinery solutions.',
    details: [
      'Custom industrial machine fabrication',
      'Structural design & analysis',
      'Welding, cutting & assembly',
      'Custom industrial machinery manufacturing',
      'Reverse engineering & retrofitting',
    ],
    industries: ['Textile', 'Cement', 'Food Industry', 'Sugar', 'Chemical'],
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80',
  },
  {
    id: 8,
    slug: 'machine-sourcing',
    icon: '🚢',
    category: 'Mechanical & Fabrication',
    title: 'Machine Sourcing & Procurement',
    shortDesc:
      'Industrial machine sourcing, import/export coordination, equipment selection, and vendor management.',
    details: [
      'Industrial machine & equipment sourcing',
      'Import / export coordination',
      'Equipment selection & specification',
      'Vendor evaluation & management',
      'Procurement logistics & documentation',
    ],
    industries: ['Textile', 'Food Industry', 'Pharmaceutical', 'Chemical'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  },

  // ── SECTION D: Software & Digital ────────────────────────
  {
    id: 9,
    slug: 'software-development',
    icon: '💻',
    category: 'Software & Digital Systems',
    title: 'Industrial Software Development',
    shortDesc:
      'Industrial dashboards, ERP integration, SCADA customisation, and web-based monitoring systems.',
    details: [
      'Industrial dashboard development',
      'ERP system integration',
      'SCADA software customisation',
      'Web-based plant monitoring systems',
      'Mobile apps for remote control',
    ],
    industries: ['Textile', 'Food Industry', 'Power Plants', 'Oil & Gas'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
  },
  {
    id: 10,
    slug: 'industry-40',
    icon: '🤖',
    category: 'Software & Digital Systems',
    title: 'Industry 4.0 & Smart Factory Implementation',
    shortDesc:
      'IoT integration, real-time monitoring, predictive maintenance systems, and data-driven manufacturing.',
    details: [
      'IoT device & sensor integration',
      'Real-time production monitoring',
      'Predictive maintenance systems',
      'Data-driven manufacturing analytics',
      'Digital twin implementation',
    ],
    industries: ['Automobile', 'Electronics', 'Food Industry', 'Textile'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
  },

  // ── SECTION E: Process & Optimization ────────────────────
  {
    id: 11,
    slug: 'process-engineering',
    icon: '📊',
    category: 'Process & Optimization',
    title: 'Process Control & Optimization Engineering',
    shortDesc:
      'Plant efficiency improvement, production optimisation, downtime reduction, and quality control automation.',
    details: [
      'Plant efficiency analysis & improvement',
      'Production optimisation strategies',
      'Downtime reduction systems',
      'Quality control automation',
      'Energy efficiency programmes',
    ],
    industries: ['Chemical', 'Cement', 'Sugar', 'Oil & Gas', 'Power Plants'],
    image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&q=80',
  },
  {
    id: 12,
    slug: 'maintenance-support',
    icon: '🛠️',
    category: 'Process & Optimization',
    title: 'Maintenance & After-Sales Support',
    shortDesc:
      'AMC contracts, troubleshooting, system upgrades, and dedicated on-site technical support services.',
    details: [
      'Annual Maintenance Contracts (AMC)',
      'Rapid troubleshooting & fault diagnosis',
      'System upgrades & modernisation',
      'On-site technical support',
      '24/7 emergency response services',
    ],
    industries: ['All Industrial Sectors'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
  },

  // ── SECTION F: Consultancy ────────────────────────────────
  {
    id: 13,
    slug: 'industrial-consultancy',
    icon: '📋',
    category: 'Consultancy',
    title: 'Industrial Engineering Consultancy',
    shortDesc:
      'Plant design consultancy, process improvement advisory, feasibility studies, and technical audits.',
    details: [
      'Plant design & layout consultancy',
      'Process improvement advisory',
      'Feasibility studies & ROI analysis',
      'Technical audits & assessments',
      'Regulatory compliance guidance',
    ],
    industries: ['All Industrial Sectors'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  },
]

// ── Category order for rendering ─────────────────────────────
export const CATEGORY_ORDER = [
  'Core Engineering',
  'Electrical & Control Systems',
  'Mechanical & Fabrication',
  'Software & Digital Systems',
  'Process & Optimization',
  'Consultancy',
]
