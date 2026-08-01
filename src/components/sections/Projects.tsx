import { useEffect, useState } from 'react'
import { SectionLabel } from './SectionLabel'
import { projects } from '../../data/projects'
import { IconGithub, IconExternalLink } from '../ui/Icons'

type ProjectsProps = {
  light: boolean
}

const categories = ['All', 'Web', 'AI/ML', 'Mobile', 'UI/UX'] as const

type Category = (typeof categories)[number]

export function Projects({ light }: ProjectsProps) {
  const [filter, setFilter] = useState<Category>('All')
  const filteredProjects = projects.filter(project => filter === 'All' || project.category === filter)

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    els.forEach(el => el.classList.add('visible'))
  }, [filter])

  return (
    <section id="projects" style={{ padding: '120px 32px', maxWidth: 1440, margin: '0 auto', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          width: 500,
          height: 500,
          top: 0,
          right: 0,
          background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
        }}
      />
      <div style={{ textAlign: 'center', marginBottom: 60 }} className="reveal">
        <SectionLabel>Featured Work</SectionLabel>
        <h2
          style={{
            fontFamily: 'Poppins',
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            color: light ? '#0f172a' : '#f8fafc',
            marginBottom: 14,
          }}
        >
          <span style={{ background: 'linear-gradient(135deg, #6c63ff, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Projects
          </span>{' '}
          That Define My Journey
        </h2>
        <p style={{ color: '#64748b', maxWidth: 480, margin: '0 auto', fontFamily: 'Inter', lineHeight: 1.7 }}>
          Real projects showcasing my frontend development, AI, mobile, and UI/UX design experience.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 50, flexWrap: 'wrap' }} className="reveal">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            style={{
              padding: '8px 22px',
              borderRadius: 99,
              border: filter === category ? '1px solid rgba(108,99,255,0.5)' : '1px solid rgba(255,255,255,0.08)',
              background: filter === category ? 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(59,130,246,0.1))' : 'rgba(255,255,255,0.03)',
              color: filter === category ? '#a78bfa' : '#64748b',
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 28 }}>
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="glass project-card reveal" style={{ borderRadius: 24, overflow: 'hidden', transitionDelay: `${index * 80}ms` }}>
            <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                onMouseEnter={e => {
                  const target = e.currentTarget as HTMLImageElement
                  target.style.transform = 'scale(1.06)'
                }}
                onMouseLeave={e => {
                  const target = e.currentTarget as HTMLImageElement
                  target.style.transform = 'scale(1)'
                }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(15,23,42,0.8))' }} />
              <div
                style={{
                  position: 'absolute',
                  top: 14,
                  left: 14,
                  padding: '4px 12px',
                  borderRadius: 99,
                  background: `${project.color}22`,
                  border: `1px solid ${project.color}55`,
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: project.color,
                  fontFamily: 'JetBrains Mono, monospace',
                  letterSpacing: '0.05em',
                }}
              >
                {project.category}
              </div>
            </div>
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.05rem', color: light ? '#0f172a' : '#f1f5f9', marginBottom: 10, lineHeight: 1.4 }}>
                {project.name}
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.86rem', lineHeight: 1.7, marginBottom: 18, fontFamily: 'Inter' }}>
                {project.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 22 }}>
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      padding: '3px 10px',
                      borderRadius: 6,
                      background: 'rgba(108,99,255,0.1)',
                      border: '1px solid rgba(108,99,255,0.2)',
                      color: '#a78bfa',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                    style={{
                      flex: 1,
                      borderRadius: 10,
                      padding: '9px 16px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 7,
                      fontFamily: 'Inter',
                      textDecoration: 'none',
                    }}
                  >
                    <IconGithub size={14} /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    style={{
                      flex: 1,
                      borderRadius: 10,
                      padding: '9px 16px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 7,
                      fontFamily: 'Inter',
                      textDecoration: 'none',
                    }}
                  >
                    Live Demo <IconExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
