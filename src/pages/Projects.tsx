import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';

import { displayTechIcons } from '../tools/Icons';

import { projects } from '../data/data';

import "../styles/pages/Projects.scss";

function Projects() {
    const [id, setId] = useState(1);

    return (
        <div id='projects' className="projects">
            <div className='container'>
                <div className='projects__header'>
                    <h1 className='projects__title' data-aos="fade-up" data-aos-duration="1000">
                        Projects
                    </h1>
                    <span className='projects__description' data-aos="fade-up" data-aos-duration="1000">
                        I have worked on different projects, here are some of them.
                    </span>
                </div>
                <div className='body'>
                    <div className='left__side'>
                        {
                            projects.map((project: Record<string, any>) => {
                                return (
                                    <div className="checkbox" key={project.id} data-aos="fade-up" data-aos-duration="1000">
                                        <label className="checkbox__wrapper">
                                            <input type="checkbox" className="checkbox__input" id={`project-${project.id}`} name={project.name} checked={id === project.id} onChange={() => setId(project.id)} />
                                            <span className="checkbox__tile">
                                                <span className="checkbox__icon">
                                                    <LazyLoadImage
                                                        src={require(`../${project.image}`)}
                                                        alt={project.name}
                                                        effect='blur'
                                                    />
                                                </span>
                                                <div className='checkbox-label__box'>
                                                    <span className="checkbox__label">{project.name}</span>
                                                </div>
                                            </span>
                                        </label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='right__side'>
                        <div className='right__side__content'>
                            <span className='project__name' data-aos="fade-up" data-aos-duration="1000">{projects[id - 1].name}</span>
                            <div className='project__description__box' data-aos="fade-up" data-aos-duration="1000">
                                <span className='project__description'>{projects[id - 1].description}</span>
                            </div>
                            <ul className='project__info' data-aos="fade-up" data-aos-duration="1000">
                                <li>
                                    <span className='project__info__title'><strong>Member(s)</strong> : {projects[id - 1].nb_members}</span>
                                </li>
                                {/* <li>
                                    <span className='project__info__title'><strong>Duration</strong> : {projects[id - 1].duration}</span>
                                </li> */}
                                <li>
                                    <span className='project__info__title'><strong>Type</strong> : {projects[id - 1].type}</span>
                                </li>
                                <li>
                                    <span className='project__info__title'><strong>Maintained</strong> : {
                                        projects[id - 1].maintained ?
                                            <span className='project__info__maintained project__info__maintained--yes'>Yes</span> :
                                            <span className='project__info__maintained project__info__maintained--no'>No</span>
                                    }
                                    </span>
                                </li>
                            </ul>
                            <div className='project__technologies'>
                                <div className='project__technologies__list' data-aos="fade-up" data-aos-duration="1000">
                                    {projects[id - 1].technologies.map((technology: string, index: number) => (
                                        <div key={index} className='project__technologies__item'>
                                            <div className='project__technologies__item__icon'>
                                                {displayTechIcons(technology)}
                                            </div>
                                            <div className='project__technologies__item__text'>
                                                {technology}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='project__link_button__box' data-aos="fade-up" data-aos-duration="1000">
                                {
                                    projects[id - 1].url !== "" &&
                                    <a href={projects[id - 1].url} target='_blank' rel='noreferrer' className='project__link_button'>
                                        <span className='project__url'>Link</span>
                                    </a>
                                }
                                <a href={projects[id - 1].github} target='_blank' rel='noreferrer' className='project__link_button'>
                                    <span className='project__url'>Github</span>
                                </a>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <Swiper
                                    pagination={{
                                        dynamicBullets: true,
                                    }}
                                    modules={[Pagination, Mousewheel]}
                                    mousewheel={true}
                                    slidesPerView={1}
                                >
                                    {
                                        projects[id - 1].screenshots.map((screenshot: string, index: number) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <LazyLoadImage
                                                        className='project__screenshot'
                                                        src={require(`../${screenshot}`)}
                                                        alt={projects[id - 1].name}
                                                        effect='blur'
                                                    />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Projects;
