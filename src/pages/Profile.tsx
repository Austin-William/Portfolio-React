import React from 'react';
import { MdOutlineMail } from 'react-icons/md';

import "../styles/pages/Profile.scss";

function Profile() {
    return (
        <div id='profile' className="profile">
            <div className='container'>
                <div className='profile__image' data-aos="fade-up" data-aos-duration="1000">
                    <img src='https://avatars.githubusercontent.com/u/55129304?v=4' alt='Austin-William' />
                </div>
                <div className='profile__title'>
                    <h1 className='profile__title__name' data-aos="fade-up" data-aos-duration="1000">
                        Austin-William
                    </h1>
                    <h2 className='profile__title__description' data-aos="fade-up" data-aos-duration="1000">
                        Web Developer
                    </h2>
                </div>
                <div className='profile__description'>
                    <p className='profile__description__text' data-aos="fade-up" data-aos-duration="1000">
                        I'm a web developer based in France. I have a passion for web development and love to create new things. I'm always open to new opportunities!
                    </p>
                </div>
                <div className='profile__social' data-aos="fade-up" data-aos-duration="1500">
                    <a className='profile__social__link' href='https://github.com/Austin-William?tab=repositories' target='_blank' rel='noreferrer'>
                            <img src='assets/icons/github.png' alt='github' />
                    </a>
                    <a className='profile__social__link' href='https://www.linkedin.com/in/austin-william-lo-2a75271a1/' target='_blank' rel='noreferrer'>
                        <img src='assets/icons/linkedin.png' alt='linkedin' />
                    </a>
                    <a className='profile__social__link' href="mailto:austin-william.lo@epitech.eu">
                        <span className='mail__icon'>
                            <MdOutlineMail />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Profile;