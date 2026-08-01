import { useState } from 'react'
import { useTypingEffect } from '../../hooks/useTypingEffect'
import { IconDownload, IconArrowRight, IconSend, IconGithub, IconLinkedin, IconEmail } from '../ui/Icons'
import { gradientBlobStyle } from '../../utils/animations'
import { contactItems } from '../../data/contact'
import profilePhoto from '../../assets/images/profile_photo.png'

type HeroProps = {
  light: boolean
}

const socialLinks = [
  {
    icon: <IconGithub size={18} />,
    href: contactItems.find(i => i.label === 'GitHub')?.href ?? '#',
    label: 'GitHub',
    color: '#6e40c9',
  },
  {
    icon: <IconLinkedin size={18} />,
    href: contactItems.find(i => i.label === 'LinkedIn')?.href ?? '#',
    label: 'LinkedIn',
    color: '#0077b5',
  },
  {
    icon: <IconEmail size={18} />,
    href: contactItems.find(i => i.label === 'Email')?.href ?? 'mailto:example@example.com',
    label: 'Email',
    color: '#6c63ff',
  },
]

const typedRoles = [
  'Frontend Web Developer',
  'Vue.js & React Developer',
  'AI & Machine Learning Enthusiast',
  'BSCS Student',
]

export function Hero({ light }: HeroProps) {
  const typedText = useTypingEffect(typedRoles)
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 80,
      }}
    >
      <div style={{ ...gradientBlobStyle, width: 600, height: 600, top: -100, left: -200, background: 'radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%)' }} />
      <div style={{ ...gradientBlobStyle, width: 500, height: 500, top: 100, right: -150, background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }} />
      <div style={{ ...gradientBlobStyle, width: 400, height: 400, bottom: 0, left: '40%', background: 'radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)' }} />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '80px 32px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', rowGap: 0, columnGap: 60, alignItems: 'center' }} className="hero-grid">
          <div className="hero-badge-row">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '7px 18px',
                borderRadius: 999,
                background: 'rgba(108,99,255,0.1)',
                border: '1px solid rgba(108,99,255,0.25)',
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#22c55e',
                  display: 'inline-block',
                  boxShadow: '0 0 10px #22c55e',
                }}
              />
              <span style={{ fontSize: '0.8rem', fontWeight: 500, color: '#a78bfa', fontFamily: 'Inter' }}>
                Available for opportunities
              </span>
            </div>
          </div>

          <div className="hero-avatar animate-float" style={{ position: 'relative', flexShrink: 0, justifySelf: 'center' }}>
            <div
              className="avatar-frame"
              style={{
                width: 320,
                height: 320,
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                background: 'linear-gradient(135deg, #6c63ff22, #3b82f622)',
                border: '1px solid rgba(108,99,255,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 40px 100px rgba(108,99,255,0.25), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
            >
              <div
                className="avatar-inner"
                style={{
                  width: 260,
                  height: 260,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(108,99,255,0.3), rgba(59,130,246,0.3))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                {!imageError ? (
                  <img
                    src={profilePhoto}
                    alt="Touseef Ahmad"
                    onError={() => setImageError(true)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block',
                    }}
                  />
                ) : (
                  <span style={{ fontSize: '3rem', fontWeight: 800, color: '#a78bfa', fontFamily: 'Poppins', letterSpacing: '0.05em' }}>
                    TA
                  </span>
                )}
              </div>
              <div
                style={{
                  position: 'absolute',
                  inset: -2,
                  borderRadius: 'inherit',
                  border: '1px dashed rgba(108,99,255,0.2)',
                  animation: 'orbit-spin 20s linear infinite',
                }}
              />
            </div>
            {[
              { label: 'Projects', value: '6+', top: '10%', left: '-15%', color: '#6c63ff', className: 'hero-stat-projects' },
              { label: 'BSCS Journey', value: '2023+', top: '55%', right: '-18%', color: '#3b82f6', className: 'hero-stat-bscs' },
              { label: 'Developer', value: 'Frontend', bottom: '5%', left: '5%', color: '#06b6d4', className: 'hero-stat-developer' },
            ].map(stat => (
              <div
                key={stat.label}
                className={`hero-stat-card ${stat.className}`}
                style={{
                  position: 'absolute',
                  top: stat.top,
                  bottom: stat.bottom,
                  left: stat.left,
                  right: stat.right,
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${stat.color}44`,
                  borderRadius: 14,
                  padding: '10px 16px',
                  textAlign: 'center',
                  minWidth: 90,
                }}
              >
                <div style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '1.3rem', color: stat.color }}>{stat.value}</div>
                <div style={{ fontFamily: 'Inter', fontSize: '0.72rem', color: '#64748b', fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="hero-main">
            <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
              <span style={{ display: 'block', fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', color: light ? '#0f172a' : '#f8fafc' }}>
                Hi, I'm
              </span>
              <span
                style={{
                  display: 'block',
                  fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                  background: 'linear-gradient(135deg, #6c63ff 0%, #3b82f6 50%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Touseef Ahmad
              </span>
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28, height: 40 }}>
              <span style={{ color: '#94a3b8', fontSize: '1.1rem', fontFamily: 'Inter', fontWeight: 400 }}>
                I'm a
              </span>
              <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#a78bfa', fontFamily: 'Poppins', minWidth: 260 }}>
                {typedText}
                <span style={{ borderRight: '2px solid #6c63ff', paddingRight: 2 }} />
              </span>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 540, marginBottom: 40, fontFamily: 'Inter' }}>
              BSCS Student building pixel-perfect frontends and AI-powered applications. Passionate about creating clean, responsive, and high-performance digital experiences.
            </p>

            <div className="hero-button-row" style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              <a
                href="/Touseef_Ahmad_CV.pdf"
                download="Touseef_Ahmad_CV.pdf"
                className="btn-primary"
                style={{
                  borderRadius: 14,
                  padding: '13px 26px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  fontFamily: 'Poppins',
                  textDecoration: 'none',
                }}
              >
                <IconDownload size={17} /> Download CV
              </a>
              <button
                className="btn-outline"
                style={{
                  borderRadius: 14,
                  padding: '13px 26px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  fontFamily: 'Poppins',
                }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects <IconArrowRight size={17} />
              </button>
              <button
                className="btn-outline"
                style={{
                  borderRadius: 14,
                  padding: '13px 26px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  fontFamily: 'Poppins',
                }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me <IconSend size={16} />
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 44 }}>
              <span style={{ color: '#475569', fontSize: '0.8rem', fontFamily: 'Inter' }}>Find me on</span>
              <div style={{ width: 40, height: 1, background: 'rgba(71,85,105,0.5)' }} />
              {socialLinks.map(item => {
                const isEmail = item.label === 'Email'
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    {...(!isEmail ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    aria-label={isEmail ? 'Scroll to contact section' : `Open ${item.label} in new tab`}
                    onClick={isEmail ? (e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) } : undefined}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#94a3b8',
                      transition: 'all 0.25s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => {
                      const target = e.currentTarget as HTMLElement
                      target.style.color = 'white'
                      target.style.borderColor = item.color
                      target.style.background = `${item.color}22`
                      target.style.transform = 'translateY(-3px)'
                    }}
                    onMouseLeave={e => {
                      const target = e.currentTarget as HTMLElement
                      target.style.color = '#94a3b8'
                      target.style.borderColor = 'rgba(255,255,255,0.08)'
                      target.style.background = 'rgba(255,255,255,0.05)'
                      target.style.transform = 'translateY(0)'
                    }}
                  >
                    {item.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .hero-badge-row { grid-column: 1; grid-row: 1; }
        .hero-avatar { grid-column: 2; grid-row: 1 / span 2; justify-self: center; align-self: center; }
        .hero-main { grid-column: 1; grid-row: 2; }

        @media (max-width: 1023px) {
          .hero-grid { grid-template-columns: 1fr !important; row-gap: 28px !important; text-align: center; }
          .hero-badge-row, .hero-avatar, .hero-main { grid-column: 1 !important; grid-row: auto !important; }
          .hero-avatar { width: 300px !important; height: 300px !important; }
          .hero-avatar .avatar-frame { width: 300px !important; height: 300px !important; }
          .hero-avatar .avatar-inner { width: 240px !important; height: 240px !important; }
          .hero-avatar { margin: 0 auto; }
          .hero-avatar .hero-stat-projects { top: -12px !important; left: 4% !important; right: auto !important; bottom: auto !important; }
          .hero-avatar .hero-stat-bscs { top: 20% !important; right: -12px !important; left: auto !important; bottom: auto !important; }
          .hero-avatar .hero-stat-developer { bottom: -12px !important; left: 8% !important; right: auto !important; top: auto !important; }
        }

        @media (max-width: 700px) {
          .hero-avatar { width: 240px !important; height: 240px !important; }
          .hero-avatar .avatar-frame { width: 240px !important; height: 240px !important; }
          .hero-avatar .avatar-inner { width: 200px !important; height: 200px !important; }
          .hero-avatar .hero-stat-projects { top: -10px !important; left: 8% !important; }
          .hero-avatar .hero-stat-bscs { top: 16% !important; right: -10px !important; }
          .hero-avatar .hero-stat-developer { bottom: -10px !important; left: 14% !important; }
        }

        @media (max-width: 767px) {
          .hero-grid { row-gap: 22px !important; }
          .hero-badge-row > div { margin-bottom: 20px !important; }
          .hero-avatar { width: 260px !important; height: 260px !important; }
          .hero-avatar .avatar-frame { width: 260px !important; height: 260px !important; }
          .hero-avatar .avatar-inner { width: 210px !important; height: 210px !important; }
          .hero-avatar { margin: 0 auto; }
          .hero-avatar .hero-stat-projects { top: -8px !important; left: 6% !important; }
          .hero-avatar .hero-stat-bscs { top: 18% !important; right: -10px !important; }
          .hero-avatar .hero-stat-developer { bottom: -10px !important; left: 12% !important; }
          .hero-avatar .hero-stat-card { min-width: 76px !important; padding: 8px 12px !important; }
          .hero-avatar .hero-stat-card div { font-size: 1.05rem !important; }
          .hero-avatar .hero-stat-card div + div { font-size: 0.65rem !important; }
          .hero-main h1 { margin-bottom: 14px !important; }
          .hero-main h1 span:first-child { font-size: clamp(1.9rem, 5vw, 3.4rem) !important; }
          .hero-main h1 span:last-child { font-size: clamp(2.4rem, 6vw, 4rem) !important; }
          .hero-main > div:nth-of-type(2) { margin-bottom: 20px !important; height: auto !important; }
          .hero-main > div:nth-of-type(2) span { font-size: 1rem !important; min-width: auto !important; }
          .hero-main p { font-size: 0.95rem !important; max-width: 420px !important; margin-bottom: 30px !important; }
          .hero-main .btn-primary, .hero-main .btn-outline { padding: 11px 22px !important; font-size: 0.9rem !important; }
          .hero-main > div:last-child { gap: 12px !important; }
          .hero-main > div:last-child a { width: 34px !important; height: 34px !important; margin-right: 8px !important; }
          .hero-main > div:last-child a:last-child { margin-right: 0 !important; }
        }

        @media (max-width: 425px) {
          .hero-button-row { gap: 14px !important; justify-content: center !important; }
          .hero-button-row > .btn-primary,
          .hero-button-row > .btn-outline {
            min-width: 0 !important;
            flex: 1 1 calc(50% - 7px) !important;
          }
          .hero-button-row > .btn-outline:last-of-type {
            flex: 1 1 calc(50% - 7px) !important;
          }
        }

        @media (max-width: 375px) {
          .hero-button-row > .btn-primary,
          .hero-button-row > .btn-outline {
            flex: 1 1 100% !important;
          }
        }

        @keyframes orbit-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  )
}
