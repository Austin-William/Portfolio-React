import "../styles/components/Header.scss";

function Header() {
    const name = "Austin";

    return (
        <header className="header">
            <div className='container'>
                <div className='box'>
                    <p data-aos="fade-down" data-aos-duration="900" style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}>Portfolio / 2026</p>
                    <h1 className='title' data-aos="fade-up" data-aos-duration="1200">
                        Hello, I'm&nbsp;
                        <strong className='title__name'>
                            {name}
                        </strong>
                        &nbsp;!
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">I design and build digital experiences with a human pulse.</p>
                </div>
                <div className="start" data-aos="fade-up" data-aos-delay="450">
                    <a className="button" href="#profile"><div className="arrow-down"></div></a>
                </div>
            </div>
        </header>
    )
}

export default Header;
