import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import { projects } from '../data/data';

import "../styles/pages/Projects.scss";

function Projects() {
    const [id, setId] = React.useState(1);

    return (
        <div id='projects' className="projects">
            <div className='container'>
                <h1 className='projects__title' data-aos="fade-up" data-aos-duration="1000">
                    Projects
                </h1>
                <h4 className='projects__description' data-aos="fade-up" data-aos-duration="1000">
                    I have worked on different projects, here are some of them.
                </h4>
                <div className='body'>
                    <div className='left__side'>
                        {
                            projects.map((project) => {
                                return (
                                    <div className="checkbox" key={project.id} data-aos="fade-up" data-aos-duration="1000">
                                        <label className="checkbox__wrapper">
                                            <input type="checkbox" className="checkbox__input" id={`project-${project.id}`} name={project.name} checked={id === project.id} onChange={() => setId(project.id)} />
                                            <span className="checkbox__tile">
                                                <span className="checkbox__icon">
                                                    <img src={require(`../${project.image}`)} alt={project.name} />
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
                                    <span className='project__info__title'><strong>Members</strong> : {projects[id - 1].nb_members}</span>
                                </li>
                                <li>
                                    <span className='project__info__title'><strong>Duration</strong> : {projects[id - 1].duration}</span>
                                </li>
                            </ul>
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
                                <AliceCarousel
                                    items={projects[id - 1].screenshots.map((screenshot) => {
                                        return (
                                            <img className='project__screenshot' src={require(`../${screenshot}`)} alt={projects[id - 1].name} />
                                        )
                                    }
                                    )}
                                    activeIndex={0}
                                    autoPlay={false}
                                    controlsStrategy="alternate"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
