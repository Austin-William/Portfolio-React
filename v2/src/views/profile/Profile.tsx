import { useRef } from 'react'

import './Profile.css'

export function Profile() {
  const heroRef = useRef<HTMLElement>(null)

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
        <p>I turn complex ideas into clear, fast digital experiences with an eye for detail.</p>
        <span className="scroll-cue">↓ Scroll to explore</span>
      </div>
    </section>
  )
}
