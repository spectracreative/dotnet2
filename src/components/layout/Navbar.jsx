import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';
import Button from '../common/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
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
                    <img src={logo} alt="Spectra Creative Logo" className="h-10 md:h-12 w-auto object-contain" />
                    <span className="text-white font-bold text-lg md:text-xl tracking-wide hidden sm:block">Spectra Creative</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className={`font-medium transition-colors hover:text-brand-third text-white`}
                        >
                            {link.name}
                        </a>
                    ))}

                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border border-white/20"
                    >
                        <div className="flex flex-col items-center py-6 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className="text-gray-800 font-medium text-lg hover:text-brand-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
