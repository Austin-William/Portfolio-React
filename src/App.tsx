import { useEffect, useState } from 'react'

import { Header } from './components/header/Header'
import { Contact } from './views/contact/Contact'
import { Experiences } from './views/experiences/Experiences'
import { Profile } from './views/profile/Profile'
import { Projects } from './views/projects/Projects'
import { Services } from './views/services/Services'
import './App.css'

function App() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)
    }

    document.documentElement.style.scrollBehavior = 'smooth'
    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
    }, { threshold: 0.15 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

    return () => {
      window.removeEventListener('scroll', updateProgress)
      observer.disconnect()
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  return (
    <main className="portfolio-v2">
      <Header progress={progress} />
      <Profile />
      <Projects />
      <Services />
      <Experiences />
      <Contact />
    </main>
  )
}

export default App
