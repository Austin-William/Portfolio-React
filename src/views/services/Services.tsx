import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import servicesData from '../../data/json/services.json'
import './Services.css'

gsap.registerPlugin(ScrollTrigger)

const services = servicesData.services_data

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const context = gsap.context(() => {
      const section = sectionRef.current
      const cards = gsap.utils.toArray<HTMLElement>('.service')
      if (!section || cards.length === 0) return

      gsap.fromTo(cards, { autoAlpha: 0, y: 70, rotate: 1.5 }, {
        autoAlpha: 1,
        y: 0,
        rotate: 0,
        duration: .8,
        stagger: .12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 72%',
          once: true,
        },
      })

      gsap.to(section, {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.to(cards, {
        y: -18,
        ease: 'none',
        stagger: .08,
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      })
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section ref={sectionRef} id="approach" className="v2-section playground-section">
      <div className="section-heading playground-heading"><h2>My Playground</h2><span>{services.length} areas of expertise</span></div>
      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service" key={service.title}>
            <strong>{String(index + 1).padStart(2, '0')}</strong>
            <div className="service-content"><h3>{service.title}</h3><p>{service.description}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}
