export type NewsPost = {
  id: number
  title: string
  description: string
  date: string
  image: string
}

export const NEWS_POSTS: NewsPost[] = [
  {
    id: 1,
    title: 'Project Completion: Textile Plant Automation',
    description: 'Successfully commissioned end-to-end automation with live production monitoring and reporting.',
    date: '2026-03-10',
    image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&h=500&fit=crop',
  },
  {
    id: 2,
    title: 'Company Update: New Lahore Engineering Desk',
    description: 'Expanded regional operations to improve turnaround time for enterprise clients in Punjab.',
    date: '2026-02-22',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
  },
  {
    id: 3,
    title: 'Announcement: AI-driven Process Diagnostics',
    description: 'Introduced predictive diagnostics for reducing downtime and improving maintenance planning.',
    date: '2026-01-30',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
  },
]
