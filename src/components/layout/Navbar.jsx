import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoreVertical, X } from 'lucide-react';
import logoWhite from '../../assets/dotnet-logo.png';
import logoDark from '../../assets/dotnet-logo-dark.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/#home' },
        { name: 'About Us', path: '/#about' },
        { name: 'Services', path: '/#services' },
        { name: 'Contact', path: '/#contact' },
    ];

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 50);

            // Hide navbar on scroll down, show on scroll up
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                setHidden(true);
                setIsMobileMenuOpen(false); // Auto-close mobile menu on scroll down
            } else {
                setHidden(false);
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 w-full z-50 px-4 md:px-8 pt-3 transition-transform duration-500 ease-in-out ${hidden ? '-translate-y-[150%]' : 'translate-y-0'}`}>
            <nav className={`mx-auto max-w-7xl transition-all duration-500 rounded-2xl border ${scrolled ? 'bg-[#51084d]/90 backdrop-blur-xl shadow-2xl shadow-black/30 py-2.5 border-white/20' : 'bg-[#51084d]/40 backdrop-blur-lg shadow-lg py-3 border-white/20'}`}>
                <div className="px-5 md:px-8 flex justify-between items-center relative">
                    <Link to="/#home" className="flex items-center gap-3">
                        <img src={logoWhite} alt="Dotnet Logo" className="h-7 md:h-9 w-auto object-contain transition-all duration-300" />
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="font-medium transition-all duration-300 text-sm lg:text-base text-gray-400 hover:text-white relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#51084d] after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-all"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <MoreVertical size={24} />}
                    </button>

                    {/* Mobile Dropdown - Glassmorphism Dark */}
                    {isMobileMenuOpen && (
                        <div className="absolute top-full right-0 mt-3 w-56 bg-[#141414]/90 backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden md:hidden border border-white/10">
                            <div className="flex flex-col py-3">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className="px-5 py-3 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-all border-b last:border-none border-white/5"
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
        </div>
    );
};

export default Navbar;
