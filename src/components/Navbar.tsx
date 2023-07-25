import React from 'react';

import "../styles/components/Navbar.scss";

function Navbar() {
    const [isShrunk, setShrunk] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setShrunk(true);
            } else {
                setShrunk(false);
            }
        });
        return () => window.removeEventListener("move__background", () => { });
    }, [isShrunk]);

    return (
        <nav className='navbar' data-aos="fade-down" data-aos-duration="1000">
            <div className='container'>
                <div className={`${isShrunk ? 'box move__background' : 'box'}`}>
                    <div className='links'>
                        <a href="#profile" className='link'>About me</a>
                        <a href="#experiences" className='link'>Experiences</a>
                        <a href="#projects" className='link'>Projects</a>
                        <a href="#contact" className='link'>Contact Me</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
