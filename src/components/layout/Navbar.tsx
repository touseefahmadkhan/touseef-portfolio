import { useEffect, useState } from 'react'
import { navLinks } from '../../data/navLinks'
import { IconMoon, IconSun, IconDownload, IconMenu, IconX } from '../ui/Icons'
import { scrollIntoView } from '../../utils/animations'

type NavbarProps = {
  light: boolean
  onToggleLight: () => void
}

const navLinkButtons = (links: string[], activeSection: string, onSelect: (id: string) => void) =>
  links.map(link => (
    <button
      key={link}
      onClick={() => onSelect(link)}
      className={`nav-link ${activeSection === link.toLowerCase() ? 'active' : ''}`}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'Inter, sans-serif',
        padding: '4px 0',
      }}
    >
      {link}
    </button>
  ))

export function Navbar({ light, onToggleLight }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.toLowerCase())).filter(Boolean)
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.4 },
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleSelect = (link: string) => {
    scrollIntoView(link.toLowerCase())
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          background: scrolled
            ? light
              ? 'rgba(248,250,252,0.9)'
              : 'rgba(15,23,42,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? light
              ? '1px solid rgba(0,0,0,0.08)'
              : '1px solid rgba(255,255,255,0.06)'
            : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 64,
          }}
        >
          <button
            type="button"
            aria-label="Go to top of page"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: '1.2rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              border: 'none',
              background: 'transparent',
              padding: 0,
            }}
            onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
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
                fontSize: '1rem',
                fontWeight: 900,
                color: 'white',
                boxShadow: '0 4px 15px rgba(108,99,255,0.4)',
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
              Touseef
            </span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
            {navLinkButtons(navLinks, activeSection, handleSelect)}
            <button
              onClick={onToggleLight}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10,
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: light ? '#0f172a' : '#94a3b8',
                transition: 'all 0.2s',
              }}
            >
              {light ? <IconMoon size={17} /> : <IconSun size={17} />}
            </button>
            <button
              className="btn-primary"
              style={{
                borderRadius: 12,
                padding: '9px 20px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 7,
                fontFamily: 'Inter',
              }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Hire Me
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              onClick={onToggleLight}
              aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
              className="mobile-only"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8,
                width: 38,
                height: 38,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#94a3b8',
              }}
            >
              {light ? <IconMoon size={16} /> : <IconSun size={16} />}
            </button>
            <button
              onClick={() => setMenuOpen(open => !open)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8,
                width: 38,
                height: 38,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#94a3b8',
              }}
              className="mobile-menu-btn"
            >
              {menuOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 64,
            left: 0,
            right: 0,
            zIndex: 999,
            background: light ? 'rgba(248,250,252,0.97)' : 'rgba(15,23,42,0.97)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            padding: '16px 0',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => handleSelect(link)}
              style={{
                background: 'none',
                border: 'none',
                padding: '14px 32px',
                textAlign: 'left',
                cursor: 'pointer',
                fontFamily: 'Inter',
                fontSize: '0.95rem',
                color: '#94a3b8',
                fontWeight: 500,
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 769px) { .mobile-only { display: none !important; } .mobile-menu-btn { display: none !important; } }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </>
  )
}
