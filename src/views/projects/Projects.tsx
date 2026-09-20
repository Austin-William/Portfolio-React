import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import projectsData from '../../data/json/projects.json'
import { TechnologyIcon } from '../../components/technology-icon/TechnologyIcon'
import areaLogo from '../../assets/projects/logos/area_logo.jpg'
import bingsuLogo from '../../assets/projects/logos/bingsu_logo.jpg'
import checkTheTimeLogo from '../../assets/projects/logos/check_the_time_logo.png'
import dashboardLogo from '../../assets/projects/logos/dashboard_logo.jpg'
import foodWheelLogo from '../../assets/projects/logos/food_wheel_logo.png'
import nextJsLogo from '../../assets/projects/logos/nextjs.png'
import paperworkLogo from '../../assets/projects/logos/paperwork_logo.png'
import redditLogo from '../../assets/projects/logos/reddit_logo.png'
import weatherLogo from '../../assets/projects/logos/weather_logo.png'
import './Projects.css'

const projects = projectsData.projects_data
const gameJamLogo = new URL('../../assets/projects/logos/game_jam_2022_logo.PNG', import.meta.url).href
const projectScreenshots = import.meta.glob('../../assets/projects/**/*.{png,PNG,jpg,jpeg}', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>

const projectLogos: Record<number, string> = {
  1: paperworkLogo,
  2: areaLogo,
  3: dashboardLogo,
  4: redditLogo,
  5: gameJamLogo,
  6: checkTheTimeLogo,
  7: nextJsLogo,
  8: foodWheelLogo,
  9: weatherLogo,
  10: bingsuLogo,
}

function getScreenshotUrl(path: string) {
  return Object.entries(projectScreenshots).find(([assetPath]) => assetPath.endsWith(path))?.[1]
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [activeScreenshot, setActiveScreenshot] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const screenshotUrls = project.screenshots.map(getScreenshotUrl).filter((url): url is string => Boolean(url))
  const logo = projectLogos[project.id]
  const showPrevious = () => setActiveScreenshot((index) => (index - 1 + screenshotUrls.length) % screenshotUrls.length)
  const showNext = () => setActiveScreenshot((index) => (index + 1) % screenshotUrls.length)

  useEffect(() => {
    if (!isFullscreen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsFullscreen(false)
      if (event.key === 'ArrowLeft') setActiveScreenshot((index) => (index - 1 + screenshotUrls.length) % screenshotUrls.length)
      if (event.key === 'ArrowRight') setActiveScreenshot((index) => (index + 1) % screenshotUrls.length)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isFullscreen, screenshotUrls.length])

  return (
    <article className={`project-card project-card-${project.id}`}>
      <div className="project-card-top"><span>{project.type}</span><span>Duration : {project.duration}</span></div>
      <div className={`project-heading ${logo ? '' : 'project-heading-empty'}`}>
        {logo && <img className="project-image" src={logo} alt={`${project.name} logo`} />}
        <h3>{project.name}</h3>
      </div>
      <p>{project.description}</p>
      <dl className="project-details">
        <div><dt>Team</dt><dd>{project.nb_members} {project.nb_members === 1 ? 'member' : 'members'}</dd></div>
        <div><dt>Maintained</dt><dd>{project.maintained ? 'Yes' : 'No'}</dd></div>
      </dl>
      <div className="project-links">
        {project.url && <a href={project.url} target="_blank" rel="noreferrer">Live website ↗</a>}
        <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
      <div className="project-technologies">
        <span className="project-label">Technologies</span>
        <div className="tag-list">{project.technologies.map((technology) => <span className="technology-tag" key={technology} title={technology}><TechnologyIcon technology={technology} />{technology}</span>)}</div>
      </div>
      <div className="project-gallery">
        <div className="project-gallery-heading"><span className="project-label">Screenshots ({project.screenshots.length})</span><span>{activeScreenshot + 1} / {project.screenshots.length}</span></div>
        <div className="screenshot-carousel">
          {screenshotUrls.length > 0 && <button className="screenshot-trigger" type="button" onClick={() => setIsFullscreen(true)} aria-label={`Open ${project.name} screenshot in fullscreen`}><img src={screenshotUrls[activeScreenshot]} alt={`${project.name} screenshot ${activeScreenshot + 1}`} loading="lazy" /></button>}
          {screenshotUrls.length > 1 && <div className="carousel-controls"><button type="button" onClick={showPrevious} aria-label="Previous screenshot">←</button><button type="button" onClick={showNext} aria-label="Next screenshot">→</button></div>}
        </div>
      </div>
      {isFullscreen && screenshotUrls.length > 0 && createPortal(<div className="lightbox" role="dialog" aria-modal="true" aria-label={`${project.name} screenshots`} onClick={() => setIsFullscreen(false)}><button className="lightbox-close" type="button" onClick={() => setIsFullscreen(false)} aria-label="Close fullscreen">×</button><button className="lightbox-arrow lightbox-previous" type="button" onClick={(event) => { event.stopPropagation(); showPrevious() }} aria-label="Previous screenshot">←</button><img src={screenshotUrls[activeScreenshot]} alt={`${project.name} screenshot ${activeScreenshot + 1}`} onClick={(event) => event.stopPropagation()} /><button className="lightbox-arrow lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); showNext() }} aria-label="Next screenshot">→</button></div>, document.body)}
    </article>
  )
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [sliderIndex, setSliderIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [activeProject, setActiveProject] = useState(projects[0]?.id)
  const isResetting = useRef(false)

  const moveTo = (nextIndex: number) => {
    setIsTransitioning(true)
    setSliderIndex(nextIndex)
    setActiveProject(projects[(nextIndex - 1 + projects.length) % projects.length].id)
  }

  const handleTransitionEnd = () => {
    if (isResetting.current) return

    if (sliderIndex === 0) {
      isResetting.current = true
      setIsTransitioning(false)
      setSliderIndex(projects.length)
    } else if (sliderIndex === projects.length + 1) {
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
    if (sliderIndex > 0 && sliderIndex <= projects.length) {
      setActiveProject(projects[sliderIndex - 1].id)
    }
  }, [sliderIndex])

  const sliderProjects = [projects[projects.length - 1], ...projects, projects[0]]

  return (
    <section ref={sectionRef} id="work" className="v2-section section-dark">
      <div className="section-heading reveal"><h2>My Projects</h2><span>{projects.length} projects</span></div>
      <nav className="project-progress" aria-label="Project navigation">
        <span>Selected project</span>
        <div className="project-progress-links">
          {projects.map((project, index) => <button className={project.id === activeProject ? 'active' : ''} type="button" onClick={() => moveTo(index + 1)} key={project.id}><span>0{index + 1}</span>{project.name}</button>)}
        </div>
      </nav>
      <div className="project-slider" aria-roledescription="carousel" aria-label="Portfolio projects">
        <div className={`project-grid${isTransitioning ? '' : ' no-transition'}`} style={{ transform: `translateX(-${sliderIndex * 100}%)` }} onTransitionEnd={handleTransitionEnd}>
          {sliderProjects.map((project, index) => <ProjectCard project={project} key={`${project.id}-${index}`} />)}
        </div>
        <div className="project-slider-controls">
          <button type="button" onClick={() => moveTo(sliderIndex - 1)} aria-label="Previous project">←</button>
          <span>{String(((sliderIndex - 1 + projects.length) % projects.length) + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
          <button type="button" onClick={() => moveTo(sliderIndex + 1)} aria-label="Next project">→</button>
        </div>
      </div>
    </section>
  )
}
