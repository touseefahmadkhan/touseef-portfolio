import { SectionLabel } from './SectionLabel'
import { certificates } from '../../data/certificates'

type CertificatesProps = {
  light: boolean
}

export function Certificates({ light }: CertificatesProps) {
  return (
    <section id="certificates" style={{ padding: '120px 32px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 36 }} className="reveal">
        <SectionLabel>Certificates</SectionLabel>
        <h2
          style={{
            fontFamily: 'Poppins',
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            color: light ? '#0f172a' : '#f8fafc',
            marginBottom: 10,
          }}
        >
          Certifications & Diplomas
        </h2>
        <p style={{ color: '#64748b', maxWidth: 720, margin: '0 auto', fontFamily: 'Inter', lineHeight: 1.7 }}>
          Professional certifications and diplomas that reflect my continuous learning and technical expertise.
        </p>
      </div>

      <div className="reveal" style={{ position: 'relative', paddingLeft: 28, marginTop: 30 }}>
        <div style={{ position: 'absolute', left: 18, top: 0, bottom: 0, width: 4, background: 'linear-gradient(180deg, rgba(108,99,255,0.25), transparent)', borderRadius: 4 }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {certificates.map((cert, idx) => (
            <div key={cert.name} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: 'linear-gradient(135deg, rgba(108,99,255,0.12), rgba(59,130,246,0.07))',
                    border: '1px solid rgba(108,99,255,0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6c63ff',
                    fontSize: 20,
                  }}
                >
                  {cert.icon}
                </div>
              </div>

              <div style={{ flex: 1 }}>
                <div className="gradient-border" style={{ padding: '18px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                    <div>
                      <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.05rem', color: light ? '#0f172a' : '#f1f5f9', margin: 0 }}>
                        {cert.name}
                      </h3>
                      <div style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '0.9rem', color: '#6c63ff', marginTop: 6 }}>
                        {cert.issuer}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', color: '#64748b' }}>
                        {cert.date || cert.year || 'Date not specified'}
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: 14, fontFamily: 'Inter', fontSize: '0.88rem', color: '#64748b' }}>
                    {cert.credential}
                  </div>
                  {cert.duration && (
                    <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 10, color: '#64748b', fontFamily: 'Inter', fontSize: '0.85rem' }}>
                      <span>Duration: {cert.duration}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
