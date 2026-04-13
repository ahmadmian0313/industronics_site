export type TeamMember = {
  name: string
  role: string
  bio?: string
  image: string
}

export const BOARD_CEO: TeamMember = {
  name: 'Aamir Siddiqui',
  role: 'Chief Executive Officer',
  bio: 'Leads strategic direction and long-term growth for engineering and automation excellence.',
  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=640&h=640&fit=crop',
}

export const BOARD_DIRECTORS: TeamMember[] = [
  {
    name: 'Sara Malik',
    role: 'General Manager',
    bio: 'Drives cross-functional performance and enterprise operations.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=640&h=640&fit=crop',
  },
  {
    name: 'Usman Rehman',
    role: 'Technical Director',
    bio: 'Oversees engineering quality, delivery standards, and innovation.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=640&h=640&fit=crop',
  },
]

export const DEPARTMENT_HEADS: TeamMember[] = [
  {
    name: 'Hina Aslam',
    role: 'Head of IT',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=640&h=640&fit=crop',
  },
  {
    name: 'Farhan Iqbal',
    role: 'Head of Electrical',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=640&h=640&fit=crop',
  },
  {
    name: 'Noman Ali',
    role: 'Head of Mechanical',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=640&h=640&fit=crop',
  },
]

export const MANAGEMENT_GROUPS: Record<string, TeamMember[]> = {
  'Senior Team': [
    BOARD_CEO,
    {
      name: 'Areeba Khan',
      role: 'Senior Operations Manager',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=640&h=640&fit=crop',
    },
  ],
  'Junior Team': [
    {
      name: 'Ali Hassan',
      role: 'Junior Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&h=640&fit=crop',
    },
    {
      name: 'Mahnoor Fatima',
      role: 'Junior Coordinator',
      image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=640&h=640&fit=crop',
    },
  ],
  Trainees: [
    {
      name: 'Zain Ahmad',
      role: 'Engineering Trainee',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=640&h=640&fit=crop',
    },
  ],
  Interns: [
    {
      name: 'Mariam Noor',
      role: 'IT Intern',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=640&h=640&fit=crop',
    },
  ],
}
