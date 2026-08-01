export type NavLink = string

export type Skill = {
  name: string
  level: number
  color: string
  icon: string
}

export type SkillGroup = {
  [group: string]: Skill[]
}

export type Project = {
  id: number
  name: string
  desc: string
  tags: string[]
  image: string
  category: string
  color: string
  featured: boolean
  github?: string
  demo?: string
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  location: string
  desc: string
  tags: string[]
  current: boolean
}

export type EducationItem = {
  degree: string
  institution: string
  period: string
  location: string
  gpa: string
  highlights: string[]
}

export type Certificate = {
  name: string
  issuer: string
  date: string
  duration?: string
  year?: string
  color: string
  icon: string
  credential: string
}

export type HighlightCard = {
  icon: string
  title: string
  desc: string
}

export type ContactItem = {
  label: string
  value: string
  href: string
  color: string
  iconKey: 'email' | 'linkedin' | 'github' | 'location'
}
