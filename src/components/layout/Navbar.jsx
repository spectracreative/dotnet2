import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoreVertical, X } from 'lucide-react';
import logo from '../../assets/splash-logo-full.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/#home' },
        { name: 'About Us', path: '/#about' },
        { name: 'Projects', path: '/#projects' },
        { name: 'Showcase', path: '/#showcase' },
        { name: 'Packages', path: '/#packages' },
        { name: 'Mission 30', path: '/mission30' },
        { name: 'Contact', path: '/#contact' },
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
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center relative">
                <Link to="/#home" className="flex items-center gap-3">
                    <img src={logo} alt="Spectra Creative Logo" className="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
                    <span className="text-white font-bold text-lg md:text-xl tracking-wide hidden sm:block"></span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="font-medium transition-colors hover:text-brand-third text-white text-base"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <MoreVertical size={24} />}
                </button>

                {/* Mobile Dropdown */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full right-4 mt-2 w-48 bg-white rounded-xl shadow-xl overflow-hidden md:hidden animate-in fade-in slide-in-from-top-5">
                        <div className="flex flex-col py-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-brand-primary/5 hover:text-brand-primary transition-colors border-b last:border-none border-gray-100"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
