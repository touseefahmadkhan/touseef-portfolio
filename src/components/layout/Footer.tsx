import { navLinks } from '../../data/navLinks'
import { IconGithub, IconLinkedin, IconEmail } from '../ui/Icons'
import { contactItems } from '../../data/contact'

type FooterProps = {
  light: boolean
}

export function Footer({ light }: FooterProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleEmailAction = () => {
    const section = document.getElementById('contact')
    if (!section) return
    const emailInput = section.querySelector('input[type="email"]') as HTMLInputElement | null
    const rect = section.getBoundingClientRect()
    const inView = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)

    if (inView) {
      emailInput?.focus()
      emailInput?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    section.scrollIntoView({ behavior: 'smooth' })
    // focus after scroll animation completes
    setTimeout(() => emailInput?.focus(), 600)
  }

  return (
    <footer
      style={{
        borderTop: `1px solid ${light ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.06)'}`,
        padding: '60px 32px 32px',
        background: light ? 'rgba(241,245,249,0.7)' : 'rgba(255,255,255,0.015)',
      }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gap: 60,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          <div>
            <div
              style={{
                fontFamily: 'Poppins',
                fontWeight: 800,
                fontSize: '1.3rem',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  color: 'white',
                  fontSize: '1rem',
                }}
              >
                T
              </div>
              <span
                style={{
                  background: 'linear-gradient(135deg, #a78bfa, #6c63ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Touseef Ahmad
              </span>
            </div>
            <p
              style={{
                color: '#64748b',
                fontFamily: 'Inter',
                fontSize: '0.88rem',
                lineHeight: 1.7,
                maxWidth: 280,
                marginBottom: 24,
              }}
            >
              BSCS Student · Frontend Developer · AI Enthusiast. Building elegant solutions to complex problems.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { icon: <IconGithub size={16} />, label: 'GitHub', color: '#6e40c9' },
                { icon: <IconLinkedin size={16} />, label: 'LinkedIn', color: '#0077b5' },
                { icon: <IconEmail size={16} />, label: 'Email', color: '#6c63ff' },
              ].map((item, index) => {
                const contact = contactItems.find(c => c.label === item.label)
                const href = contact?.href ?? '#'

                // Email should scroll to contact and focus input instead of opening mail client
                if (item.label === 'Email') {
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={handleEmailAction}
                      aria-label="Scroll to contact and focus email field"
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: '#64748b',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => {
                        const target = e.currentTarget as HTMLElement
                        target.style.color = 'white'
                        target.style.borderColor = item.color
                        target.style.transform = 'translateY(-3px)'
                      }}
                      onMouseLeave={e => {
                        const target = e.currentTarget as HTMLElement
                        target.style.color = '#64748b'
                        target.style.borderColor = 'rgba(255,255,255,0.08)'
                        target.style.transform = 'translateY(0)'
                      }}
                    >
                      {item.icon}
                    </button>
                  )
                }

                return (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${item.label} in new tab`}
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#64748b',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      const target = e.currentTarget as HTMLElement
                      target.style.color = 'white'
                      target.style.borderColor = item.color
                      target.style.transform = 'translateY(-3px)'
                    }}
                    onMouseLeave={e => {
                      const target = e.currentTarget as HTMLElement
                      target.style.color = '#64748b'
                      target.style.borderColor = 'rgba(255,255,255,0.08)'
                      target.style.transform = 'translateY(0)'
                    }}
                  >
                    {item.icon}
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h4
              style={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: '0.9rem',
                color: light ? '#0f172a' : '#f1f5f9',
                marginBottom: 20,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Quick Links
            </h4>
            {navLinks.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                style={{
                  display: 'block',
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  fontFamily: 'Inter',
                  fontSize: '0.88rem',
                  padding: '5px 0',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLElement).style.color = '#a78bfa'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLElement).style.color = '#64748b'
                }}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Services column removed per request - keep layout with two columns */}
        </div>

        <div
          style={{
            borderTop: `1px solid ${light ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.05)'}`,
            paddingTop: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p
            style={{
              color: '#475569',
              fontFamily: 'Inter',
              fontSize: '0.82rem',
            }}
          >
            © 2026 Touseef Ahmad. All Rights Reserved.
          </p>
          <div
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem',
              color: '#334155',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </footer>
  )
}
