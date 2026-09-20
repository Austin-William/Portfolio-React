import { useEffect, useState } from 'react';
import AOS from 'aos';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Profile from './pages/Profile';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 900, once: true, offset: 80, easing: 'ease-out-cubic' });

        const updateProgress = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
        };

        document.documentElement.style.scrollBehavior = 'smooth';
        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();

        return () => {
            window.removeEventListener('scroll', updateProgress);
            document.documentElement.style.scrollBehavior = '';
        };
    }, []);

    return (
        <div className="App">
            <div aria-hidden="true" style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000, width: `${scrollProgress}%`, height: '3px', background: 'currentColor', transition: 'width 120ms ease-out' }} />
            <ToastContainer />
            <Navbar />
            <Header />
            <Profile />
            <Experiences />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
