import { useEffect, useRef, useState } from 'react'
import experiencesData from '../../data/json/experiences.json'
import { TechnologyIcon } from '../../components/technology-icon/TechnologyIcon'
import './Experiences.css'

const experiences = [...experiencesData.experiences_data].sort((firstExperience, secondExperience) => {
  const firstStartYear = Number.parseInt(firstExperience.year, 10)
  const secondStartYear = Number.parseInt(secondExperience.year, 10)

  return secondStartYear - firstStartYear
})

export function Experiences() {
  const sectionRef = useRef<HTMLElement>(null)
  const [sliderIndex, setSliderIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [activeExperience, setActiveExperience] = useState(experiences[0]?.id)
  const isResetting = useRef(false)

  const moveTo = (nextIndex: number) => {
    setIsTransitioning(true)
    setSliderIndex(nextIndex)
    setActiveExperience(experiences[(nextIndex - 1 + experiences.length) % experiences.length].id)
  }

  const handleTransitionEnd = () => {
    if (isResetting.current) return

    if (sliderIndex === 0) {
      isResetting.current = true
      setIsTransitioning(false)
      setSliderIndex(experiences.length)
    } else if (sliderIndex === experiences.length + 1) {
      isResetting.current = true
      setIsTransitioning(false)
      setSliderIndex(1)
    }
  }

  useEffect(() => {
    if (!isResetting.current) return
    const frame = window.requestAnimationFrame(() => {
      isResetting.current = false
      setIsTransitioning(true)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [sliderIndex])

  useEffect(() => {
    if (sliderIndex > 0 && sliderIndex <= experiences.length) {
      setActiveExperience(experiences[sliderIndex - 1].id)
    }
  }, [sliderIndex])

  const sliderExperiences = [experiences[experiences.length - 1], ...experiences, experiences[0]]

  return (
    <section ref={sectionRef} id="experience" className="v2-section experience-section">
      <div className="section-heading reveal"><h2>My Experiences</h2><span>{experiences.length} jobs</span></div>
      <nav className="experience-progress" aria-label="Experience navigation">
        <span className="experience-progress-label">Selected path</span>
        <div className="experience-progress-track"><span style={{ height: `${((experiences.findIndex((experience) => experience.id === activeExperience) + 1) / experiences.length) * 100}%` }} /></div>
        <div className="experience-progress-links">
          {experiences.map((experience, index) => <button className={experience.id === activeExperience ? 'active' : ''} type="button" onClick={() => moveTo(index + 1)} key={experience.id}><span>0{index + 1}</span>{experience.name}</button>)}
        </div>
      </nav>
      <div className="experience-slider" aria-roledescription="carousel" aria-label="Professional experiences">
        <div className={`experience-list${isTransitioning ? '' : ' no-transition'}`} style={{ transform: `translateX(-${sliderIndex * 100}%)` }} onTransitionEnd={handleTransitionEnd}>
          {sliderExperiences.map((experience, index) => (
          <article id={index > 0 && index < sliderExperiences.length - 1 ? `experience-${experience.id}` : undefined} className="experience-card" key={`${experience.id}-${index}`} aria-hidden={experience.id !== activeExperience}>
            <div className="experience-meta"><span>{experience.year}</span></div>
            <div>
              <h3>{experience.name}</h3>
              <p>{experience.description}</p>
              <div className="tag-list">{experience.technologies.map((technology) => <span className="technology-tag" key={technology} title={technology}><TechnologyIcon technology={technology} />{technology}</span>)}</div>
              <ul className="experience-missions">{experience.missions.map((mission) => <li key={mission}>{mission}</li>)}</ul>
            </div>
          </article>
          ))}
        </div>
        <div className="experience-slider-controls">
          <button type="button" onClick={() => moveTo(sliderIndex - 1)} aria-label="Previous experience">←</button>
          <span>{String(((sliderIndex - 1 + experiences.length) % experiences.length) + 1).padStart(2, '0')} / {String(experiences.length).padStart(2, '0')}</span>
          <button type="button" onClick={() => moveTo(sliderIndex + 1)} aria-label="Next experience">→</button>
        </div>
      </div>
    </section>
  )
}
