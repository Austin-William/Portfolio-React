import githubIcon from '../../assets/icons/github.png'
import linkedinIcon from '../../assets/icons/linkedin.png'
import './Contact.css'

export function Contact() {
  return (
    <section id="contact" className="v2-section section-dark contact-v2">
      <div className="reveal"><span className="eyebrow">Have an idea?</span><h2>Let's talk.</h2></div>
      <div className="contact-copy reveal">
        <p>Available to build an ambitious product, join a strong team, or simply talk about the web.</p>
        <div className="contact-actions">
          <a className="email-button" href="mailto:austinw@live.fr">Email me <span aria-hidden="true">↗</span></a>
          <div className="social-links" aria-label="Social links">
            <a className="social-link" href="https://www.linkedin.com/in/austin-william-l-2a75271a1/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="" />
            </a>
            <a className="social-link github" href="https://github.com/Austin-William" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src={githubIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
