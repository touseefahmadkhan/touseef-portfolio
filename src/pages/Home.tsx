import React, { useEffect, useState } from 'react'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { useScrollReveal } from '../hooks/useScrollReveal'

import { Navbar } from '../components/layout/Navbar'
import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Skills } from '../components/sections/Skills'
import { Projects } from '../components/sections/Projects'
import { Experience } from '../components/sections/Experience'
import { Education } from '../components/sections/Education'
import { Certificates } from '../components/sections/Certificates'
import { Contact } from '../components/sections/Contact'
import { Footer } from '../components/layout/Footer'

export default function Home() {
  const [light, setLight] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const progress = useScrollProgress()
  useScrollReveal()

  useEffect(() => {
    document.body.className = light ? 'light' : ''
    document.body.style.backgroundColor = light ? '#f8fafc' : '#0f172a'
  }, [light])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main aria-live="polite" style={{ minHeight: '100vh', background: light ? '#f8fafc' : '#0f172a', color: light ? '#0f172a' : '#f8fafc', transition: 'background 0.3s, color 0.3s' }}>
      <div id="scroll-progress" style={{ width: `${progress * 100}%` }} />

      <Navbar light={light} onToggleLight={() => setLight(current => !current)} />

      <Hero light={light} />
      <About light={light} />
      <Skills light={light} />
      <Projects light={light} />
      <Experience light={light} />
      <Education light={light} />
      <Certificates light={light} />
      <Contact light={light} />
      <Footer light={light} />

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          style={{
            position: 'fixed', bottom: 32, right: 32, zIndex: 999,
            width: 48, height: 48, borderRadius: 14,
            background: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
            border: 'none', color: 'white', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(108,99,255,0.4)',
            transition: 'all 0.3s ease',
            animation: 'fade-in 0.3s ease',
          }}
          onMouseEnter={e => { const target = e.currentTarget as HTMLElement; target.style.transform = 'translateY(-4px)'; target.style.boxShadow = '0 16px 40px rgba(108,99,255,0.5)'}}
          onMouseLeave={e => { const target = e.currentTarget as HTMLElement; target.style.transform = 'translateY(0)'; target.style.boxShadow = '0 8px 32px rgba(108,99,255,0.4)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </span>
        </button>
      )}
    </main>
  )
}
