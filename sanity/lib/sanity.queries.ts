// sanity/lib/sanity.queries.ts
import { groq } from 'next-sanity'
import { client } from './sanity.client'

export async function getServices() {
  return client.fetch(`
    *[_type == "service"] | order(order asc) {
      _id,
      title,
      slug,
      shortDescription,
      fullDescription,
      icon,
      image,
      features,
      order
    }
  `)
}

export async function getServiceBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "service" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      shortDescription,
      fullDescription,
      icon,
      image,
      features,
      order
    }
  `,
    { slug }
  )
}

export async function getTeamMembers() {
  return client.fetch(`
    *[_type == "teamMember"] | order(order asc) {
      _id,
      name,
      role,
      bio,
      image,
      order
    }
  `)
}

export async function getSiteSettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0] {
      phone,
      phone2,
      email,
      whatsapp,
      address_karachi,
      address_lahore,
      social_fb,
      social_ig,
      social_li
    }
  `)
}