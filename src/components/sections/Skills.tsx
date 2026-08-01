import { SectionLabel } from './SectionLabel'
import { skillData } from '../../data/skills'

type SkillsProps = {
  light: boolean
}

export function Skills({ light }: SkillsProps) {
  const groups = Object.entries(skillData)

  return (
    <section
      id="skills"
      style={{
        padding: '120px 32px',
        background: light ? 'rgba(241,245,249,0.5)' : 'rgba(255,255,255,0.015)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 500,
          height: 500,
          bottom: -100,
          left: -100,
          background: 'radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)',
        }}
      />

      <div style={{ maxWidth: 1440, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }} className="reveal">
          <SectionLabel>Technical Skills</SectionLabel>
          <h2
            style={{
              fontFamily: 'Poppins',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              color: light ? '#0f172a' : '#f8fafc',
              marginBottom: 8,
            }}
          >
            Technologies I Use
          </h2>
          <p style={{ color: '#64748b', maxWidth: 640, margin: '0 auto', fontFamily: 'Inter', lineHeight: 1.7 }}>
            Technologies and tools I use to build modern, responsive, and user-friendly web applications.
          </p>
        </div>

        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, alignItems: 'stretch' }}>
          {groups.map(([groupName, skills]) => (
            <div
              key={groupName}
              className="glass"
              style={{
                borderRadius: 16,
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                transition: 'transform 0.22s ease, box-shadow 0.22s ease',
                boxShadow: '0 6px 18px rgba(2,6,23,0.06)',
                minHeight: 180,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 18px 40px rgba(99,102,241,0.12)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 18px rgba(2,6,23,0.06)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ fontSize: 22 }}>{skills[0]?.icon}</div>
                  <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.05rem', color: light ? '#0f172a' : '#f1f5f9' }}>{groupName}</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 6 }}>
                {skills.map(s => (
                  <div
                    key={s.name}
                    role="listitem"
                    aria-label={s.name}
                    style={{
                      padding: '8px 12px',
                      borderRadius: 999,
                      background: light ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${s.color}33`,
                      color: light ? '#0f172a' : '#e6eef8',
                      fontFamily: 'Inter',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      boxShadow: `0 6px 18px ${s.color}11`,
                      transition: 'transform 0.18s ease, box-shadow 0.18s ease',
                    }}
                    onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.transform = 'translateY(-4px)'; t.style.boxShadow = `0 12px 30px ${s.color}22`; }}
                    onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.transform = 'translateY(0)'; t.style.boxShadow = `0 6px 18px ${s.color}11`; }}
                  >
                    <span style={{ fontSize: 14 }}>{s.icon}</span>
                    <span>{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
