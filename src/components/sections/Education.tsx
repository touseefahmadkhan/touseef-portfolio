import { IconGraduationCap, IconCheck } from '../ui/Icons'
import { SectionLabel } from './SectionLabel'
import { education } from '../../data/education'

type EducationProps = {
  light: boolean
}

export function Education({ light }: EducationProps) {
  return (
    <section id="education" style={{ padding: '120px 32px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 36 }} className="reveal">
        <SectionLabel>Education</SectionLabel>
        <h2
          style={{
            fontFamily: 'Poppins',
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            color: light ? '#0f172a' : '#f8fafc',
            marginBottom: 10,
          }}
        >
          Academic Background
        </h2>
        <p style={{ color: '#64748b', maxWidth: 720, margin: '0 auto', fontFamily: 'Inter', lineHeight: 1.7 }}>
          My educational journey and the foundation that shaped my passion for technology and software development.
        </p>
      </div>

      <div className="reveal" style={{ position: 'relative', paddingLeft: 28, marginTop: 30 }}>
        <div style={{ position: 'absolute', left: 18, top: 0, bottom: 0, width: 4, background: 'linear-gradient(180deg, rgba(108,99,255,0.25), transparent)', borderRadius: 4 }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {education.map((item, idx) => {
            const isCurrent = /current/i.test(item.period) || /current/i.test(item.degree)
            return (
              <div key={item.degree} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, rgba(108,99,255,0.12), rgba(59,130,246,0.07))', border: '1px solid rgba(108,99,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6c63ff' }}>
                    <IconGraduationCap size={20} />
                  </div>
                </div>

                <div style={{ flex: 1 }}>
                  <div className="gradient-border" style={{ padding: '18px 20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                      <div>
                        <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.05rem', color: light ? '#0f172a' : '#f1f5f9', margin: 0 }}>
                          {item.degree}
                        </h3>
                        <div style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '0.9rem', color: '#6c63ff', marginTop: 6 }}>{item.institution}</div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', color: '#64748b' }}>{item.period}</div>
                        {isCurrent && (
                          <div style={{ marginTop: 8, display: 'inline-block', padding: '6px 10px', borderRadius: 999, background: 'rgba(108,99,255,0.12)', color: '#6c63ff', fontWeight: 700, fontSize: '0.75rem' }}>
                            Current
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
