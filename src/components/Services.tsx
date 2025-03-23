import { MdMobileFriendly, MdWeb } from 'react-icons/md';
import { FaServer } from 'react-icons/fa';
import { SiTestcafe } from 'react-icons/si';

import { services } from '../data/data';

import "../styles/components/Services.scss";

function Services() {
    function displayIcon(icon: string) {
        switch (icon) {
            case "web":
                return <MdWeb />
            case "mobile":
                return <MdMobileFriendly />
            case "testing":
                return <SiTestcafe />
            case "server":
                return <FaServer />
            default:
                break;
        }
    }

    return (
        <div className='services'>
            <div className='cards__container'>
                {services.map((service, index) => (
                    <div className='card' key={index} data-aos="fade-up" data-aos-duration="1500">
                        <div className='wrapper'>
                            <div className='content'>
                                <div className='card__icon'>
                                    <span className='icon'>
                                        {
                                            displayIcon(service.icon)
                                        }
                                    </span>
                                </div>
                                <div className='card__title'>
                                    <h3>{service.title}</h3>
                                </div>
                                <div className='card__description'>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services;