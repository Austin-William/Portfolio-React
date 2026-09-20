import { useRef } from 'react'
import { FaCheck, FaXmark } from 'react-icons/fa6'

import './Profile.css'

export function Profile() {
  const heroRef = useRef<HTMLElement>(null)
  const available = false

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const hero = heroRef.current
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const bounds = hero.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width) * 100
    const y = ((event.clientY - bounds.top) / bounds.height) * 100
    hero.style.setProperty('--pointer-x', `${x}%`)
    hero.style.setProperty('--pointer-y', `${y}%`)
  }

  const resetPointer = () => {
    heroRef.current?.style.setProperty('--pointer-x', '50%')
    heroRef.current?.style.setProperty('--pointer-y', '35%')
  }

  return (
    <section ref={heroRef} id="top" className="hero-v2" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
      <svg className="hero-doodles" viewBox="0 0 900 700" aria-hidden="true" focusable="false">
        <path d="M34 148C146 44 247 73 283 171s-24 177 66 226 183-17 242 72" />
        <path d="M620 50c-30 83 50 119 99 88s107 9 123 83" />
        <path d="M132 580c89-73 164-67 218 7s142 66 212-8" />
        <circle cx="122" cy="124" r="12" />
        <circle cx="756" cy="526" r="22" />
      </svg>
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="hero-intro reveal">
        <img className="profile-photo" src="https://avatars.githubusercontent.com/u/55129304?v=4" alt="Austin-William Lo" />
        <div className="hero-copy">
          <span className="eyebrow">Full-stack developer / France</span>
          <h1><em>Austin-William</em><br/>Lo</h1>
        </div>
      </div>
      <div className="hero-foot reveal">
        <div className="hero-foot-copy">
          <p>I turn complex ideas into clear, fast digital experiences with an eye for detail.</p>
          <div className={`availability-status ${available ? 'is-available' : 'is-unavailable'}`} role="status">
            {available ? <FaCheck aria-hidden="true" /> : <FaXmark aria-hidden="true" />}
            <span>{available ? 'Available for new projects' : 'Currently unavailable'}</span>
          </div>
        </div>
        <span className="scroll-cue">↓ Scroll to explore</span>
      </div>
    </section>
  )
}
