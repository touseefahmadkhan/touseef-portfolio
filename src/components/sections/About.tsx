import { IconCheck, IconArrowRight } from '../ui/Icons'
import { SectionLabel } from './SectionLabel'
import { aboutHighlights } from '../../data/about'

type AboutProps = {
  light: boolean
}

const learningItems = [
  'React',
  'Large Language Models (LLMs)',
  'Natural Language Processing (NLP)',
  'Machine Learning',
]

export function About({ light }: AboutProps) {
  return (
    <section id="about" style={{ padding: '120px 32px', position: 'relative', maxWidth: 1440, margin: '0 auto' }}>
      <div
        style={{
          position: 'absolute',
          width: 400,
          height: 400,
          top: '10%',
          right: -100,
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
        }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="about-grid">
        <div className="reveal-left">
          <SectionLabel>About Me</SectionLabel>
          <h2
            style={{
              fontFamily: 'Poppins',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              lineHeight: 1.2,
              marginBottom: 20,
              color: light ? '#0f172a' : '#f8fafc',
            }}
          >
            Frontend Developer &
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AI Enthusiast
            </span>
          </h2>
          <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: 20, fontFamily: 'Inter' }}>
            I'm Touseef Ahmad, a BSCS student passionate about building modern web applications and exploring Artificial Intelligence. I enjoy creating responsive, user-friendly interfaces and solving real-world problems through technology.
          </p>
          <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: 32, fontFamily: 'Inter' }}>
            I work with Vue.js, React, Tailwind CSS, JavaScript and Git. I also enjoy learning Artificial Intelligence and Machine Learning by building practical projects.
          </p>
          <div style={{ background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: 14, padding: '18px 22px', marginBottom: 28 }}>
            <div style={{ fontSize: '0.78rem', fontFamily: 'JetBrains Mono, monospace', color: '#6c63ff', fontWeight: 600, marginBottom: 10, letterSpacing: '0.06em' }}>
              // currently_learning
            </div>
            {learningItems.map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0', color: '#94a3b8', fontSize: '0.9rem', fontFamily: 'Inter' }}>
                <span style={{ color: '#6c63ff' }}>
                  <IconCheck />
                </span>
                {item}
              </div>
            ))}
          </div>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: '#a78bfa',
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'gap 0.2s',
            }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLElement).style.gap = '12px'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLElement).style.gap = '8px'
            }}
          >
            Let's work together <IconArrowRight size={16} />
          </a>
        </div>

        <div className="reveal-right" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {aboutHighlights.map(highlight => (
            <div key={highlight.title} className="glass skill-card" style={{ borderRadius: 18, padding: '24px 20px' }}>
              <div style={{ fontSize: '2rem', marginBottom: 12 }}>{highlight.icon}</div>
              <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '0.95rem', color: light ? '#0f172a' : '#f1f5f9', marginBottom: 6 }}>
                {highlight.title}
              </div>
              <div style={{ fontFamily: 'Inter', fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6 }}>
                {highlight.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}
