import Home from './Home';
import About from './About';
import Projects from './Projects';
import Showcase from './Showcase';
import Packages from './Packages';
import Contact from './Contact';
import Collaboration from './Collaboration';
import BrandGallery from '../components/home/BrandGallery';
import LogoDisplay from '../components/home/LogoDisplay';

const HomeContent = () => {
    return (
        <>
            <section id="home">
                <Home />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="showcase">
                <Showcase />
            </section>
            <section id="packages">
                <Packages />
            </section>
            <section id="brands">
                <BrandGallery />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <section id="collaboration">
                <Collaboration />
            </section>
            <section id="identity">
                <LogoDisplay />
            </section>
        </>
    );
};

export default HomeContent;
