import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import "../styles/pages/Projects.scss";

function Projects() {
    const [id, setId] = React.useState(1);
    const projects = [
        {
            id: 1,
            name: "Paperwork",
            description: "An app to help to manage your french administrative paperworks, built with React Typescript, NodeJS, Flutter and AWS. A mobile application is available in Flutter and will be soon made with React Native. This app is still in development. (School project)",
            url: "https://www.paperwork-fr.com",
            github: "https://github.com/Paperwork-EIP",
            image: "/assets/projects/logos/paperwork_logo.png",
            nb_members: 8,
            duration: "2 years",
            screenshots: [
                "/assets/projects/paperwork/1.PNG",
                "/assets/projects/paperwork/2.PNG",
                "/assets/projects/paperwork/3.PNG",
                "/assets/projects/paperwork/4.PNG",
                "/assets/projects/paperwork/5.PNG",
                "/assets/projects/paperwork/6.PNG",
                "/assets/projects/paperwork/7.PNG",
                "/assets/projects/paperwork/8.PNG",
            ],
        },
        {
            id: 2,
            name: "Area",
            description: "A web app to manage your different account in one app thanks to the API of the different services (Discord, Twitter, ...). This app is built with React JS, NodeJS/ExpressJS and Firebase. This app will not be updated anymore. (School project)",
            url: "",
            github: "https://github.com/Austin-William/Area",
            image: "/assets/projects/logos/area_logo.jpg",
            nb_members: 6,
            duration: "2 months",
            screenshots: [
                "/assets/projects/area/1.PNG",
                "/assets/projects/area/2.PNG",
                "/assets/projects/area/3.PNG",
                "/assets/projects/area/4.PNG",
                "/assets/projects/area/5.PNG",
                "/assets/projects/area/6.PNG",
                "/assets/projects/area/7.PNG",
                "/assets/projects/area/8.PNG",
                "/assets/projects/area/9.PNG",
                "/assets/projects/area/10.PNG",
                "/assets/projects/area/11.PNG",
                "/assets/projects/area/12.PNG",
                "/assets/projects/area/13.PNG",
                "/assets/projects/area/14.PNG",
                "/assets/projects/area/15.PNG",
            ],
        },
        {
            id: 3,
            name: "Dashboard",
            description: "A web app to display 6 different widgets (weather, Twitter, Reddit, Youtube, Github and Unsplash API). This app is built with React JS/Bootstrap and Firebase. This app will not be updated anymore. (School project)",
            url: "",
            github: "https://github.com/Austin-William/Dashboard-API",
            image: "/assets/projects/logos/dashboard_logo.jpg",
            nb_members: 2,
            duration: "4 weeks",
            screenshots: [
                "/assets/projects/dashboard/1.png",
                "/assets/projects/dashboard/2.png",
                "/assets/projects/dashboard/3.png",
                "/assets/projects/dashboard/4.png",
                "/assets/projects/dashboard/5.png",
                "/assets/projects/dashboard/6.png",
                "/assets/projects/dashboard/7.png",
            ],
        },
        {
            id: 4,
            name: "Redditech",
            description: "A mobile application using Reddit API. This app is built with Flutter. This app will not be updated anymore. (School project)",
            url: "",
            github: "https://github.com/Austin-William/Redditech",
            image: "/assets/projects/logos/reddit_logo.png",
            nb_members: 2,
            duration: "4 weeks",
            screenshots: [
                "/assets/projects/redditech/1.png",
                "/assets/projects/redditech/2.png",
                "/assets/projects/redditech/3.png",
                "/assets/projects/redditech/4.png",
                "/assets/projects/redditech/5.png",
            ],
        },
        {
            id: 5,
            name: "Successfull Story",
            description: "A game made in Javascript which the end will depend on the user's choices (School project)",
            url: "",
            github: "https://github.com/Austin-William/JAM-Epitech-2022",
            image: "/assets/projects/logos/game_jam_2022_logo.PNG",
            nb_members: 3,
            duration: "2 days",
            screenshots: [
                "/assets/projects/game_jam_2022/1.PNG",
                "/assets/projects/game_jam_2022/2.PNG",
                "/assets/projects/game_jam_2022/3.PNG",
                "/assets/projects/game_jam_2022/4.PNG",
                "/assets/projects/game_jam_2022/5.PNG",
            ],
        }
    ];

    return (
        <div id='projects' className="projects">
            <div className='container'>
                <div className='left__side'>
                    {
                        projects.map((project) => {
                            return (
                                <div className="checkbox" key={project.id}>
                                    <label className="checkbox-wrapper">
                                        <input type="checkbox" className="checkbox-input" id={`project-${project.id}`} name={project.name} checked={id === project.id} onChange={() => setId(project.id)} />
                                        <span className="checkbox-tile">
                                            <span className="checkbox-icon">
                                                <img src={project.image} alt={project.name} />
                                            </span>
                                            <div className='checkbox-label__box'>
                                                <span className="checkbox-label">{project.name}</span>
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
                        <span className='project__name'>{projects[id - 1].name}</span>
                        <div className='project__description__box'>
                            <span className='project__description'>{projects[id - 1].description}</span>
                        </div>
                        <ul className='project__info'>
                            <li>
                                <span className='project__info__title'><strong>Members</strong> : {projects[id - 1].nb_members}</span>
                            </li>
                            <li>
                                <span className='project__info__title'><strong>Duration</strong> : {projects[id - 1].duration}</span>
                            </li>
                        </ul>
                        <div className='project__link_button__box'>
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
                        <AliceCarousel
                            items={projects[id - 1].screenshots.map((screenshot) => {
                                return (
                                    <img className='project__screenshot' src={screenshot} alt={projects[id - 1].name} />
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
    )
}

export default Projects;
