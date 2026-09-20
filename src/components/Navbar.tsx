import { useState, useEffect } from 'react';

import "../styles/components/Navbar.scss";

function Navbar() {
    const [isShrunk, setShrunk] = useState(false);
    const [activeSection, setActiveSection] = useState('profile');

    useEffect(() => {
        const sections = ['profile', 'experiences', 'projects', 'contact'];
        const handleScroll = () => {
            setShrunk(window.scrollY > 24);
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                return element && element.getBoundingClientRect().top <= 140 && element.getBoundingClientRect().bottom > 140;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className='navbar' data-aos="fade-down" data-aos-duration="1000">
            <div className='container'>
                <div className={`${isShrunk ? 'box move__background' : 'box'}`}>
                    <div className='links'>
                        <a href="#profile" className={`link ${activeSection === 'profile' ? 'active' : ''}`}>About me</a>
                        <a href="#experiences" className={`link ${activeSection === 'experiences' ? 'active' : ''}`}>Experiences</a>
                        <a href="#projects" className={`link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
                        <a href="#contact" className={`link ${activeSection === 'contact' ? 'active' : ''}`}>Contact me</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
