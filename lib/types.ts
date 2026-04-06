// lib/types.ts
export interface Service {
  _id: string
  title: string
  slug: { current: string }
  shortDescription: string
  fullDescription: string
  icon: string
  image?: {
    asset: {
      _ref: string
      url: string
    }
    alt: string
  }
  features: string[]
  order: number
}

export interface TeamMember {
  _id: string
  name: string
  role: string
  bio: string
  image?: {
    asset: {
      _ref: string
      url: string
    }
    alt: string
  }
  order: number
}

export interface SiteSettings {
  phone: string
  phone2: string
  email: string
  whatsapp: string
  address_karachi: string
  address_lahore: string
  social_fb: string
  social_ig: string
  social_li: string
}

export interface ContactFormData {
  name: string
  company: string
  phone: string
  email: string
  service: string
  message: string
}

export interface NavItem {
  label: string
  href: string
}