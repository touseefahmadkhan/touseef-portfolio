import { type FormEvent, type MouseEvent, useState } from 'react'
import { IconEmail, IconLinkedin, IconGithub, IconMapPin, IconSend } from '../ui/Icons'
import { SectionLabel } from './SectionLabel'
import { contactItems } from '../../data/contact'

type ContactProps = {
  light: boolean
}

export function Contact({ light }: ContactProps) {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (sending) return
    setError('')
    setSending(true)

    try {
      // Build FormData from controlled state (inputs are controlled and don't have name attrs)
      const formData = new FormData()
      formData.append('name', formState.name)
      formData.append('email', formState.email)
      formData.append('subject', formState.subject)
      formData.append('message', formState.message)
      // Add Web3Forms access key (user provided)
      formData.append('access_key', '5abb6e16-f52a-4e58-b216-315ce1b21e7a')

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setSent(true)
        setFormState({ name: '', email: '', subject: '', message: '' })
      } else {
        setError(data.message || 'Failed to send message. Please try again.')
      }
    } catch (e) {
      setError('Network error. Please try again later.')
    } finally {
      setSending(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '13px 16px',
    borderRadius: 12,
    background: light ? 'rgba(255,255,255,0.78)' : 'rgba(255,255,255,0.04)',
    border: light ? '1px solid rgba(15,23,42,0.16)' : '1px solid rgba(255,255,255,0.1)',
    color: light ? '#0f172a' : '#f8fafc',
    fontFamily: 'Inter',
    fontSize: '0.9rem',
    transition: 'all 0.2s',
    backdropFilter: 'blur(10px)',
    boxShadow: light ? '0 18px 42px rgba(15,23,42,0.06)' : undefined,
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
    setTimeout(() => emailInput?.focus(), 600)
  }

  const iconMap = {
    email: <IconEmail size={20} />,
    linkedin: <IconLinkedin size={20} />,
    github: <IconGithub size={20} />,
    location: <IconMapPin size={20} />,
  }

  return (
    <section id="contact" style={{ padding: '120px 32px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: 600, height: 600, top: -100, left: -200, background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', width: 500, height: 500, bottom: -100, right: -100, background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 70 }} className="reveal">
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: light ? '#0f172a' : '#f8fafc', marginBottom: 14 }}>
            Let's <span style={{ background: 'linear-gradient(135deg, #6c63ff, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Work
            </span>{' '}
            Together
          </h2>
          <p style={{ color: '#64748b', maxWidth: 500, margin: '0 auto', fontFamily: 'Inter', lineHeight: 1.7 }}>
            Open to internships and full-time opportunities. Feel free to get in touch.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 50, alignItems: 'start' }} className="contact-grid">
          <div className="reveal-left">
            {contactItems.map(item => {
              const isEmailAction = item.label === 'Email'
              const isExternalLink = item.label === 'LinkedIn' || item.label === 'GitHub'
              const content = (
                <>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${item.color}18`, border: `1px solid ${item.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, flexShrink: 0 }}>
                    {iconMap[item.iconKey]}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: '#475569', fontWeight: 600, marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: light ? '#0f172a' : '#e2e8f0', fontWeight: 500 }}>{item.value}</div>
                  </div>
                </>
              )

              const sharedStyle = {
                borderRadius: 16,
                padding: '20px 22px',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 14,
                transition: 'all 0.25s',
                textDecoration: 'none',
                color: light ? '#0f172a' : '#f8fafc',
              }

              const hoverHandlers = {
                onMouseEnter: (e: MouseEvent<HTMLElement>) => {
                  const target = e.currentTarget as HTMLElement
                  target.style.borderColor = `${item.color}44`
                  target.style.transform = 'translateX(6px)'
                },
                onMouseLeave: (e: MouseEvent<HTMLElement>) => {
                  const target = e.currentTarget as HTMLElement
                  target.style.borderColor = 'rgba(255,255,255,0.08)'
                  target.style.transform = 'translateX(0)'
                },
              }

              return isEmailAction ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={handleEmailAction}
                  aria-label="Scroll to the contact form"
                  className="glass"
                  style={{ ...sharedStyle, background: 'transparent', border: 'none', textAlign: 'left', cursor: 'pointer' }}
                  {...hoverHandlers}
                >
                  {content}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  target={isExternalLink ? '_blank' : undefined}
                  rel={isExternalLink ? 'noopener noreferrer' : undefined}
                  className="glass"
                  style={{ ...sharedStyle, border: '1px solid rgba(255,255,255,0.08)' }}
                  {...hoverHandlers}
                >
                  {content}
                </a>
              )
            })}

            <div className="glass" style={{ borderRadius: 16, padding: '20px 22px', marginTop: 20, border: '1px solid rgba(34,197,94,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px #22c55e', animation: 'pulse 2s ease infinite' }} />
                <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '0.9rem', color: '#22c55e' }}>Available for Hire</span>
              </div>
              <p style={{ fontFamily: 'Inter', fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6 }}>
                Open to internship opportunities and junior frontend/fullstack roles. Response within 24 hours.
              </p>
            </div>
          </div>
          <div className="reveal-right">
            <div className="glass-strong" style={{ borderRadius: 24, padding: '36px 32px' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ fontSize: '3.5rem', marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.4rem', color: '#22c55e', marginBottom: 10 }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: '#64748b', fontFamily: 'Inter' }}>
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-primary"
                    style={{
                      borderRadius: 12,
                      padding: '11px 26px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      marginTop: 24,
                      fontFamily: 'Inter',
                    }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label className="contact-label" style={{ display: 'block', fontFamily: 'Inter', fontSize: '0.8rem', fontWeight: 600, color: light ? '#475569' : '#94a3b8', marginBottom: 8 }}>
                        Full Name
                      </label>
                      <input
                        className="contact-input"
                        required
                        style={inputStyle}
                        placeholder="Ahmad Khan"
                        value={formState.name}
                        onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="contact-label" style={{ display: 'block', fontFamily: 'Inter', fontSize: '0.8rem', fontWeight: 600, color: light ? '#475569' : '#94a3b8', marginBottom: 8 }}>
                        Email Address
                      </label>
                      <input
                        className="contact-input"
                        required
                        type="email"
                        style={inputStyle}
                        placeholder="ahmad@company.com"
                        value={formState.email}
                        onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label className="contact-label" style={{ display: 'block', fontFamily: 'Inter', fontSize: '0.8rem', fontWeight: 600, color: light ? '#475569' : '#94a3b8', marginBottom: 8 }}>
                      Subject
                    </label>
                    <input
                      className="contact-input"
                      required
                      style={inputStyle}
                      placeholder="Internship Opportunity / Project Collaboration"
                      value={formState.subject}
                      onChange={e => setFormState(prev => ({ ...prev, subject: e.target.value }))}
                    />
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label className="contact-label" style={{ display: 'block', fontFamily: 'Inter', fontSize: '0.8rem', fontWeight: 600, color: light ? '#475569' : '#94a3b8', marginBottom: 8 }}>
                      Message
                    </label>
                    <textarea
                      className="contact-input"
                      required
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                      placeholder="Tell me about the opportunity or project..."
                      value={formState.message}
                      onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    />
                  </div>
                  {error && (
                    <div style={{ marginBottom: 12, color: '#ff6b6b', fontFamily: 'Inter', fontSize: '0.95rem' }} role="alert">
                      {error}
                    </div>
                  )}
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={sending}
                    style={{
                      width: '100%',
                      borderRadius: 14,
                      padding: '14px 24px',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 10,
                      fontFamily: 'Poppins',
                      opacity: sending ? 0.8 : 1,
                    }}
                  >
                    {sending ? (
                      <>
                        <span style={{ width: 18, height: 18, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.8s linear infinite' }} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <IconSend size={17} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
        .contact-input::placeholder { color: ${light ? '#64748b' : 'rgba(255,255,255,0.72)'}; }
        .contact-input { color: ${light ? '#0f172a' : '#f8fafc'}; }
        .contact-input:hover { border-color: ${light ? 'rgba(15,23,42,0.32)' : 'rgba(255,255,255,0.18)'}; }
        .contact-input:focus { outline: none; border-color: ${light ? '#6c63ff' : '#60a5fa'}; box-shadow: 0 0 0 3px ${light ? 'rgba(108,99,255,0.12)' : 'rgba(96,165,250,0.16)'}; background: ${light ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.06)'}; }
        .contact-label { color: ${light ? '#475569' : '#94a3b8'}; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  )
}
