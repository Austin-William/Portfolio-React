import React from 'react';

import { experiences } from '../data/data';

import "../styles/pages/Experiences.scss";

function Experiences() {
    
    const [currentExperience, setCurrentExperience] = React.useState(experiences[0]);
    const [activeTypeEffectDescription, setActiveTypeEffectDescription] = React.useState(false);
    const [tab, setTab] = React.useState('title');

    function TypingEffectComponent(props: { text: string, delay: number, className: string }) {
        const [currentText, setCurrentText] = React.useState('');
        const [currentIndex, setCurrentIndex] = React.useState(0);

        React.useEffect(() => {
            if (currentIndex < props.text.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(prevText => prevText + props.text[currentIndex]);
                    setCurrentIndex(prevIndex => prevIndex + 1);
                }, props.delay);

                return () => clearTimeout(timeout);
            }
            if (currentIndex === props.text.length) {
                setTimeout(() => {
                    setActiveTypeEffectDescription(true);
                }, 1500);
            }
        }, [currentIndex, props.delay, props.text, props.text.length]);

        return (
            <span className={props.className}> 
                {currentText}
            </span>
        )
    }

    function changeExperience(experience: any) {
        setCurrentExperience(experience);
        setActiveTypeEffectDescription(false);
    }

    function changeTab(tab: string) {
        setActiveTypeEffectDescription(false);
        setTab(tab);
    }

    function displayTab() {
        switch (tab) {
            case "title":
                return (
                    <div className='screen__content__title__wrapper'>
                        <div className='screen__content__title'>
                            {
                                !activeTypeEffectDescription ?
                                    <TypingEffectComponent text={currentExperience.name} delay={100} className='screen__content__title__text caret' />
                                    :
                                    <span className='screen__content__title__text'>
                                        {currentExperience.name}
                                    </span>
                            }
                        </div>
                        <div className='screen__content__description'>
                            {
                                activeTypeEffectDescription ?
                                    <TypingEffectComponent text={currentExperience.description} delay={50} className='screen__content__description__text caret' />
                                    :
                                    <span className='screen__content__description__text'></span>
                            }
                        </div>
                    </div>
                );
            case "missions":
                return (
                    <div className='screen__content__missions'>
                        {
                            currentExperience.missions.map((mission: any, index: number) => {
                                return (
                                    <div className=' screen__content__mission' key={index}>
                                        <span className='screen__content__mission__text'>
                                            {mission}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                );
            case "technologies":
                return (
                    <div className='screen__content__technologies'>
                        {
                            currentExperience.technologies.map((technology: any, index: number) => {
                                return (
                                    <div className=' screen__content__technology' key={index}>
                                        <span className='screen__content__technology__text'>
                                            {technology}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                );

            default:
                break;
        }
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
                <div className='body' data-aos="fade-up" data-aos-duration="1000">
                    <section className='screen'>
                        <div className='screen__left'>
                            <div className='screen__content'>
                                {
                                    displayTab()
                                }
                            </div>
                        </div>
                        <div className='screen__right'>
                            <div className='tabs'>
                                <label className="checkbox__wrapper">
                                    <input type="radio" className="checkbox__input" id="title" name="tab-control" defaultChecked onChange={() => changeTab('title')} />
                                    <span className="checkbox__tile">
                                        <div className='checkbox__label__box'>
                                            <span className="checkbox__label">Title</span>
                                        </div>
                                    </span>
                                </label>
                                <label className="checkbox__wrapper">
                                    <input type="radio" className="checkbox__input" id="missions" name="tab-control" onChange={() => changeTab('missions')} />
                                    <span className="checkbox__tile">
                                        <div className='checkbox__label__box'>
                                            <span className="checkbox__label">Missions</span>
                                        </div>
                                    </span>
                                </label>
                                <label className="checkbox__wrapper">
                                    <input type="radio" className="checkbox__input" id="technologies" name="tab-control" onChange={() => changeTab('technologies')} />
                                    <span className="checkbox__tile">
                                        <div className='checkbox__label__box'>
                                            <span className="checkbox__label">Techs</span>
                                        </div>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </section>
                    <div className='buttons' data-aos="fade-up" data-aos-duration="1000">
                        {experiences.map((experience) => (
                            <label className="checkbox__wrapper">
                                <input type="radio" className="checkbox__input" id={experience.name} name="experience-control" onChange={() => changeExperience(experience)} checked={currentExperience.name === experience.name} />
                                <span className="checkbox__tile">
                                    <div className='checkbox__label__box'>
                                        <span className="checkbox__label">{experience.name}</span>
                                    </div>
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences;