import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaVuejs, FaAngular, FaAws, FaDocker, FaJava, FaBootstrap, FaJira } from 'react-icons/fa';
import { SiFirebase, SiTailwindcss, SiCsharp, SiDotnet, SiMicrosoftsqlserver, SiConfluence, SiTypescript, SiSass, SiFlutter, SiJest, SiPostgresql, SiLess, SiHcl } from 'react-icons/si';
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";

import { projects } from '../data/data';

import "../styles/pages/Projects.scss";

function Projects() {
    const [id, setId] = React.useState(1);

    function displayTechIcons(technology: string) {
        switch (technology) {
            case 'ReactJS':
                return <FaReact />;
            case 'Next.JS':
                return <TbBrandNextjs />;
            case 'React Native':
                return <TbBrandReactNative />;
            case 'AngularJS':
                return <FaAngular />;
            case 'NodeJS':
                return <FaNodeJs />;
            case 'HTML 5':
                return <FaHtml5 />;
            case 'CSS 3':
                return <FaCss3 />;
            case 'TailwindCSS':
                return <SiTailwindcss />;
            case 'SCSS':
                return <SiSass />;
            case 'Javascript':
                return <FaJs />;
            case 'Typescript':
                return <SiTypescript />;
            case 'VueJS':
                return <FaVuejs />;
            case 'Firebase':
                return <SiFirebase />;
            case 'C#':
                return <SiCsharp />;
            case '.NET':
                return <SiDotnet />;
            case 'SQL Server':
                return <SiMicrosoftsqlserver />;
            case 'Confluence':
                return <SiConfluence />;
            case 'Jira':
                return <FaJira />;
            case 'Flutter':
                return <SiFlutter />;
            case 'AWS':
                return <FaAws />;
            case 'Docker':
                return <FaDocker />;
            case 'Jest':
                return <SiJest />;
            case 'PostgreSQL':
                return <SiPostgresql />;
            case 'Java':
                return <FaJava />;
            case 'JSTL':
                return <FaJava />;
            case 'Less':
                return <SiLess />;
            case 'HCL Commerce':
                return <SiHcl />;
            case 'HCL Commerce 8':
                return <SiHcl />;
            case 'Bootstrap':
                return <FaBootstrap />;
            case 'Bootstrap 3':
                return <FaBootstrap />;
            case 'Bootstrap 5':
                return <FaBootstrap />;
            default:
                return <></>;
        }
    }

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
                            projects.map((project) => {
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
                                <li>
                                    <span className='project__info__title'><strong>Duration</strong> : {projects[id - 1].duration}</span>
                                </li>
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
                                <AliceCarousel
                                    items={projects[id - 1].screenshots.map((screenshot) => {
                                        return (
                                            <LazyLoadImage
                                                className='project__screenshot'
                                                src={require(`../${screenshot}`)}
                                                alt={projects[id - 1].name}
                                                effect='blur'
                                            />
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
