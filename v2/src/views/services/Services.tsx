import servicesData from '../../data/json/services.json'
import './Services.css'

const services = servicesData.services_data

export function Services() {
  return (
    <section id="approach" className="v2-section">
      <div className="section-heading reveal"><h2>My Playground</h2><span>{services.length} areas of expertise</span></div>
      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service reveal" key={service.title}>
            <strong>{String(index + 1).padStart(2, '0')}</strong>
            <div className="service-content"><h3>{service.title}</h3><p>{service.description}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}
