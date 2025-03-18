import { useState } from 'react';

import { displayTechIcons } from '../tools/Icons';

import { experiences } from '../data/data';

import "../styles/pages/Experiences.scss";

function Experiences() {
    const [indexSelectedExperience, setIndexSelectedExperience] = useState(0);

    function changeSelectedExperience(index: number) {
        setIndexSelectedExperience(index);
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
                            {experiences.map((experience: Record<string, any>, index: number) => (
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