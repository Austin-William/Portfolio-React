import AOS from 'aos';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Profile from './pages/Profile';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
    AOS.init();

    return (
        <div className="App">
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
