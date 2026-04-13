export type JobLevel = 'Intern / Trainee' | 'Junior' | 'Mid-level' | 'Senior' | 'Lead / Manager'

export type JobRole = {
  title: string
  description: string
  level: JobLevel
}

export type Department = {
  name: string
  roles: JobRole[]
}

export const CAREER_DEPARTMENTS: Department[] = [
  {
    name: 'IT Department',
    roles: [
      { title: 'IT Support Intern', description: 'Assist with hardware/software support and user onboarding.', level: 'Intern / Trainee' },
      { title: 'Junior Web Developer', description: 'Support internal web tools and customer-facing portal improvements.', level: 'Junior' },
      { title: 'Senior Full-Stack Engineer', description: 'Lead architecture for industrial monitoring applications.', level: 'Senior' },
    ],
  },
  {
    name: 'Electrical Department',
    roles: [
      { title: 'Electrical Design Trainee', description: 'Support panel drawings and wiring documentation.', level: 'Intern / Trainee' },
      { title: 'Electrical Engineer', description: 'Design and validate control systems for automation projects.', level: 'Mid-level' },
      { title: 'Lead Electrical Manager', description: 'Oversee technical delivery, quality, and team coordination.', level: 'Lead / Manager' },
    ],
  },
  {
    name: 'CAD Department',
    roles: [
      { title: 'CAD Drafting Intern', description: 'Prepare and revise CAD drawings under supervision.', level: 'Intern / Trainee' },
      { title: 'CAD Design Engineer', description: 'Develop and optimize fabrication and assembly drawings.', level: 'Mid-level' },
    ],
  },
  {
    name: 'AI Department',
    roles: [
      { title: 'AI Research Trainee', description: 'Support model experimentation for predictive maintenance use-cases.', level: 'Intern / Trainee' },
      { title: 'Machine Learning Engineer', description: 'Deploy practical AI models for industrial process analytics.', level: 'Senior' },
    ],
  },
  {
    name: 'Electronics Department',
    roles: [
      { title: 'Electronics Lab Intern', description: 'Assist testing and calibration workflows in lab operations.', level: 'Intern / Trainee' },
      { title: 'Electronics Engineer', description: 'Build and maintain instrumentation and control assemblies.', level: 'Mid-level' },
    ],
  },
  {
    name: 'Mechanical Department',
    roles: [
      { title: 'Mechanical Trainee', description: 'Support fabrication planning and documentation updates.', level: 'Intern / Trainee' },
      { title: 'Mechanical Design Engineer', description: 'Design mechanical systems aligned with production constraints.', level: 'Mid-level' },
      { title: 'Senior Mechanical Engineer', description: 'Drive quality, performance, and project execution.', level: 'Senior' },
    ],
  },
  {
    name: 'Accounts Department',
    roles: [
      { title: 'Accounts Assistant', description: 'Support invoicing, reconciliation, and reporting workflows.', level: 'Junior' },
      { title: 'Finance Executive', description: 'Handle budgeting, compliance, and monthly financial reporting.', level: 'Mid-level' },
    ],
  },
]
