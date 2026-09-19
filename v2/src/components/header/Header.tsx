import { useState } from 'react'

import './Header.css'

type HeaderProps = {
  progress: number
}

export function Header({ progress }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <nav className="v2-nav" aria-label="Main navigation">
        <a className="brand" href="#top">Austin-William Lo</a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>Menu</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#work" onClick={closeMenu}>Projects</a>
          <a href="#approach" onClick={closeMenu}>Services</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </nav>
    </>
  )
}
