import { IconBriefcase, IconMapPin } from '../ui/Icons'
import { SectionLabel } from './SectionLabel'
import { experience } from '../../data/experience'

type ExperienceProps = {
  light: boolean
}

export function Experience({ light }: ExperienceProps) {
  return (
    <section id="experience" style={{ padding: '120px 32px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ background: light ? 'rgba(241,245,249,0.5)' : 'rgba(255,255,255,0.015)', position: 'absolute', inset: 0 }} />
      <div
        style={{
          position: 'absolute',
          width: 400,
          height: 400,
          top: 0,
          right: 0,
          background: 'radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)',
        }}
      />
      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 70 }} className="reveal">
          <SectionLabel>Work History</SectionLabel>
          <h2
            style={{
              fontFamily: 'Poppins',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              color: light ? '#0f172a' : '#f8fafc',
            }}
          >
            Professional <span style={{ background: 'linear-gradient(135deg, #6c63ff, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Experience
            </span>
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 24, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, #6c63ff, #3b82f6, transparent)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {experience.map((item, index) => (
              <div
                key={item.role}
                className="reveal"
                style={{ paddingLeft: 64, position: 'relative', transitionDelay: `${index * 120}ms` }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: 16,
                    top: 24,
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    background: item.current ? 'linear-gradient(135deg, #6c63ff, #3b82f6)' : 'rgba(108,99,255,0.3)',
                    border: '3px solid rgba(108,99,255,0.5)',
                    boxShadow: item.current ? '0 0 20px rgba(108,99,255,0.5)' : 'none',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item.current && (
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'white', animation: 'pulse 2s ease infinite' }} />
                  )}
                </div>
                <div className="glass" style={{ borderRadius: 20, padding: '28px 28px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10, marginBottom: 12 }}>
                    <div>
                      <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.1rem', color: light ? '#0f172a' : '#f1f5f9', marginBottom: 4 }}>
                        {item.role}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6c63ff', fontFamily: 'Inter', fontWeight: 600, fontSize: '0.9rem' }}>
                        <IconBriefcase size={15} /> {item.company}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: '#64748b', marginBottom: 4 }}>{item.period}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'flex-end', fontFamily: 'Inter', fontSize: '0.78rem', color: '#475569' }}>
                        <IconMapPin size={12} /> {item.location}
                      </div>
                      {item.current && (
                        <span style={{ display: 'inline-block', padding: '2px 10px', borderRadius: 99, background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', fontSize: '0.7rem', fontWeight: 700, fontFamily: 'Inter', marginTop: 6 }}>
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 16, fontFamily: 'Inter' }}>{item.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    {item.tags.map(tag => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.5); } }`}</style>
    </section>
  )
}
