import { ChangeEvent, FormEvent, MutableRefObject, useRef, useState } from 'react';
import { GoCheckCircle } from 'react-icons/go';
import { toast } from 'react-toastify';

import emailjs from '@emailjs/browser';

import "../styles/pages/Contact.scss";

function Contact() {
    const form = useRef() as MutableRefObject<HTMLFormElement>;
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const words = [
        'Open to work',
        'Motivated',
        'Team player',
        'Fast learner'
    ]

    function sendEmail(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (form.current && email && name && message) {
            emailjs.sendForm('service_wi4h6q8', 'template_8p6jo17', form.current, 'SB6_UVf6UIbXxT2N1')
                .then(() => {
                    toast.success('Email sent successfully!', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }, () => {
                    toast.error('Something went wrong, please try again later!', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                });
        } else {
            toast.error('Please fill in all the fields!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    return (
        <div className='contact' id="contact">
            <div className='animation a1 contact__title' data-aos="fade-up" data-aos-duration="1400">
                <h1>Feel free to contact me!</h1>
            </div>
            <div className='container'>
                <ul className='left'>
                    {
                        words.map((word: string, index: number) => (
                            <div data-aos="fade-up" data-aos-duration="1500" key={index} >
                                <li className='animation a2'>
                                    <GoCheckCircle className='contact__icon' />
                                    <span>{word}</span>
                                </li>
                            </div>
                        ))
                    }
                </ul>
                <div className='right' data-aos="fade-up" data-aos-duration="1000">
                    <form className='contact__form' ref={form} onSubmit={sendEmail}>
                        <div className='contact__input' data-aos="fade-up" data-aos-duration="1500">
                            <label className='animation a2' htmlFor="email">Email</label>
                            <input className='animation a3' type="email" name="email" id="email" placeholder="Email Address" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                        </div>
                        <div className='contact__input' data-aos="fade-up" data-aos-duration="1500">
                            <label className='animation a4' htmlFor="name">Name</label>
                            <input className='animation a5' type='text' name="name" id="name" placeholder="Name" onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                        </div>
                        <div className='contact__input' data-aos="fade-up" data-aos-duration="1500">
                            <label className='animation a6' htmlFor="message">Message</label>
                            <textarea className='animation a7' name="message" id="message" placeholder="Your message" onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} />
                        </div>
                        <div className='contact__submit' data-aos="fade-up" data-aos-duration="2000">
                            <input className='animation a6 contact__submit__button' type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
