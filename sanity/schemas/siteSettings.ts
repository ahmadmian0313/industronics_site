// sanity/schemas/siteSettings.ts
import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'phone', title: 'Primary Phone', type: 'string' }),
    defineField({ name: 'phone2', title: 'Secondary Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp', type: 'string' }),
    defineField({ name: 'address_karachi', title: 'Karachi Address', type: 'text' }),
    defineField({ name: 'address_lahore', title: 'Lahore Address', type: 'text' }),
    defineField({ name: 'social_fb', title: 'Facebook URL', type: 'string' }),
    defineField({ name: 'social_ig', title: 'Instagram URL', type: 'string' }),
    defineField({ name: 'social_li', title: 'LinkedIn URL', type: 'string' }),
  ],
})