import experiencesData from '../../data/json/experiences.json'
import { TechnologyIcon } from '../../components/technology-icon/TechnologyIcon'
import './Experiences.css'

const experiences = [...experiencesData.experiences_data].sort((firstExperience, secondExperience) => {
  const firstStartYear = Number.parseInt(firstExperience.year, 10)
  const secondStartYear = Number.parseInt(secondExperience.year, 10)

  return secondStartYear - firstStartYear
})

export function Experiences() {
  return (
    <section id="experience" className="v2-section">
      <div className="section-heading reveal"><h2>My Experiences</h2><span>{experiences.length} jobs</span></div>
      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-card reveal" key={experience.id}>
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
    </section>
  )
}
