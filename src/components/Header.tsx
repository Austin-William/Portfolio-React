import React from 'react';

import "../styles/components/Header.scss";

function Header() {
    const name = "Austin";

    return (
        <header className="header">
            <div className='container'>
                <div className='box'>
                    <h1 className='title'>
                        <span className='title__main'>
                            Hello, I'm
                            <strong className='title__name'>
                                {name}
                            </strong>
                            !
                        </span>
                    </h1>
                </div>
                <div className="start">
                    <a className="button" href="#profile"><div className="arrow-down"></div></a>
                </div>
            </div>
        </header>
    )
}

export default Header;
