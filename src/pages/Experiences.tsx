import React from 'react';

import { experiences } from '../data/data';

import "../styles/pages/Experiences.scss";

function Experiences() {
    const [indexSelectedExperience, setIndexSelectedExperience] = React.useState(0);

    function changeSelectedExperience(index: number) {
        setIndexSelectedExperience(index);
    }

    return (
        <div className='experiences' id='experiences'>
            <div className='container'>
                <h1 className='experiences__title' data-aos="fade-up" data-aos-duration="1000">
                    Experiences
                </h1>
                <h4 className='experiences__description' data-aos="fade-up" data-aos-duration="1000">
                    Here are some of my experiences in companies big school projects that I done during my studies and helped me to improve my skills.
                </h4>
                <div className='experiences__body'>
                    <div className='experiences__body__selects'>
                        <div className='experiences__body__selects__title' data-aos="fade-up" data-aos-duration="1000">
                            Select an experience
                        </div>
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
                            {experiences[indexSelectedExperience].name} - {experiences[indexSelectedExperience].type}
                        </div>
                        <div className='experiences__body__selected__experience__description' data-aos="fade-up" data-aos-duration="1000">
                            {experiences[indexSelectedExperience].description}
                        </div>
                        <ol className='experiences__body__selected__experience__list__tasks'>
                            {experiences[indexSelectedExperience].missions.map((task: string, index: number) => (
                                <li key={index} className='experiences__body__selected__experience__list__tasks__task' data-aos="fade-up" data-aos-duration="1000">
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