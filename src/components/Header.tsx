import React from 'react';

import "../styles/components/Header.scss";

function Header() {
    const name = "Austin-William";

    return (
        <header className="header">
            <div className='container'>
                <h1 className='title'>
                    <span className='title__main'>
                        Hello, I'm
                        <span className='title__name'>
                            {name}
                        </span>
                        !
                    </span>
                </h1>
                <div className="start">
                    <a className="button" href="#profile"><div className="arrow-down"></div></a>
                </div>
            </div>
        </header>
    )
}

export default Header;
