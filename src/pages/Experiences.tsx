import React from 'react';

import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaVuejs, FaAngular, FaAws, FaDocker, FaJava, FaBootstrap, FaJira } from 'react-icons/fa';
import { SiFirebase, SiCsharp, SiDotnet, SiMicrosoftsqlserver, SiConfluence, SiTypescript, SiSass, SiFlutter, SiJest, SiPostgresql, SiLess, SiHcl } from 'react-icons/si';
import { TbBrandReactNative } from "react-icons/tb";

import { experiences } from '../data/data';

import "../styles/pages/Experiences.scss";

function Experiences() {
    const [indexSelectedExperience, setIndexSelectedExperience] = React.useState(0);

    function changeSelectedExperience(index: number) {
        setIndexSelectedExperience(index);
    }

    function displayTechIcons(technology: string) {
        switch (technology) {
            case 'ReactJS':
                return <FaReact />;
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
        <div id='experiences' className='experiences'>
            <div className='container'>
                <h1 className='experiences__title' data-aos="fade-up" data-aos-duration="1000">
                    Experiences
                </h1>
                <p className='experiences__description' data-aos="fade-up" data-aos-duration="1000">
                    Here are some of my experiences in companies big school projects that I done during my studies and helped me to improve my skills.
                </p>
                <div className='experiences__body'>
                    <div className='experiences__body__selects'>
                        <h2 className='experiences__body__selects__title' data-aos="fade-up" data-aos-duration="1000">
                            Select an experience
                        </h2>
                        <div className='experiences__body__selects__buttons' data-aos="fade-up" data-aos-duration="1000">
                            {experiences.map((experience, index) => (
                                <button key={index} className={`experiences__body__selects__buttons__button ${index === indexSelectedExperience ? 'selected' : ''}`} onClick={() => changeSelectedExperience(index)}>
                                    {experience.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='experiences__body__selected__experience'>
                        <div className='experiences__body__selected__experience__title' data-aos="fade-up" data-aos-duration="1000">
                            {experiences[indexSelectedExperience].name}
                        </div>
                        <div className='experiences__body__selected__experience__description' data-aos="fade-up" data-aos-duration="1000">
                            {experiences[indexSelectedExperience].description}
                        </div>
                        <div className='experiences__body__selected__experience__technologies' data-aos="fade-up" data-aos-duration="1000">
                            <div className='experiences__body__selected__experience__technologies__list'>
                                {experiences[indexSelectedExperience].technologies.map((technology: string, index: number) => (
                                    <div key={index} className='experiences__body__selected__experience__technologies__list__item'>
                                        <div className='experiences__body__selected__experience__technologies__list__item__icon'>
                                            {displayTechIcons(technology)}
                                        </div>
                                        <div className='experiences__body__selected__experience__technologies__list__item__text'>
                                            {technology}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <ol className='experiences__body__selected__experience__list__tasks'>
                            {experiences[indexSelectedExperience].missions.map((task: string, index: number) => (
                                <li key={index} className='experiences__body__selected__experience__list__tasks__task' data-aos="fade-right" data-aos-duration="1000">
                                    {task}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences;