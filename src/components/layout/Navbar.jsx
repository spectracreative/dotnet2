import { useState, useEffect } from 'react';
import logo from '../../assets/splash-logo-full.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'About Us', path: '#about' },
        { name: 'Projects', path: '#projects' },
        { name: 'Showcase', path: '#showcase' },
        { name: 'Packages', path: '#packages' },
        { name: 'Contact', path: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-[#211282] border-b border-white/10 rounded-b-[2.5rem] ${scrolled ? 'shadow-lg py-3' : 'shadow-md py-4'}`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                <a href="#home" className="flex items-center gap-3">
                    <img src={logo} alt="Spectra Creative Logo" className="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
                    <span className="text-white font-bold text-lg md:text-xl tracking-wide hidden sm:block"></span>
                </a>

                {/* Nav Links - Always Visible */}
                <div className="flex items-center gap-2 md:gap-8 mt-2 md:mt-0">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className={`font-medium transition-colors hover:text-brand-third text-white text-[10px] sm:text-xs md:text-base`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
