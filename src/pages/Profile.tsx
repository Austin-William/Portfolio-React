import { MdOutlineMail } from 'react-icons/md';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Services from '../components/Services';

import "../styles/pages/Profile.scss";

function Profile() {
    return (
        <div id='profile' className="profile">
            <div className='container'>
                <div className='profile__image' data-aos="fade-up" data-aos-duration="1500">
                    <LazyLoadImage
                        src='https://avatars.githubusercontent.com/u/55129304?v=4'
                        alt='Austin-William'
                        effect='blur'
                    />
                </div>
                <div className='profile__title'>
                    <h1 className='profile__title__name' data-aos="fade-up" data-aos-duration="1500">
                        Austin-William Lo
                    </h1>
                    <h2 className='profile__title__description' data-aos="fade-up" data-aos-duration="1500">
                        A Full-stack Developer
                    </h2>
                </div>
                <div className='profile__description'>
                    <p className='profile__description__text' data-aos="fade-up" data-aos-duration="1500">
                        I'm a Full-stack developer based in France. I have a passion for web development and love to create new things. I'm always open to new opportunities and challenges. Feel free to contact me!
                    </p>
                </div>
                <div className='profile__social' data-aos="fade-up" data-aos-duration="1500">
                    <a className='profile__social__link' href='https://github.com/Austin-William' target='_blank' rel='noreferrer'>
                        <img src={require('../assets/icons/github.png')} alt='github' loading='lazy' />
                    </a>
                    <a className='profile__social__link' href='https://www.linkedin.com/in/austin-william-lo-2a75271a1/' target='_blank' rel='noreferrer'>
                        <img src={require('../assets/icons/linkedin.png')} alt='linkedin' loading='lazy' />
                    </a>
                    <a className='profile__social__link' href="mailto:austin-william.lo@epitech.eu">
                        <span className='mail__icon'>
                            <MdOutlineMail />
                        </span>
                    </a>
                </div>
                <Services />
            </div>
        </div>
    )
}

export default Profile;
