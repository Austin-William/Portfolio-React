import { useState } from 'react'
import { FaBriefcase, FaEnvelope, FaFolderOpen, FaWandMagicSparkles } from 'react-icons/fa6'

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
        <button className={`menu-button ${menuOpen ? 'open' : ''}`} type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} aria-controls="radial-navigation">
          <span className="menu-button-icon" aria-hidden="true"><span /><span /></span>
        </button>
        <div id="radial-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#work" onClick={closeMenu} aria-label="Projects" data-label="Projects"><FaFolderOpen aria-hidden="true" /></a>
          <a href="#approach" onClick={closeMenu} aria-label="Services" data-label="Services"><FaWandMagicSparkles aria-hidden="true" /></a>
          <a href="#experience" onClick={closeMenu} aria-label="Experience" data-label="Experience"><FaBriefcase aria-hidden="true" /></a>
          <a href="#contact" onClick={closeMenu} aria-label="Contact" data-label="Contact"><FaEnvelope aria-hidden="true" /></a>
        </div>
      </nav>
    </>
  )
}
