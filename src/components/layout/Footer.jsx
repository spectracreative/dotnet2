
import logo from '../../assets/logo.png';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-brand-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <img src={logo} alt="Logo" className="h-12 w-auto bg-white/10 rounded p-1" />
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Elevating brands through attractive designs, interactive experiences, and creative strategies. Let's create something specific together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/#home' },
                                { name: 'About Us', path: '/#about' },
                                { name: 'Projects', path: '/#projects' },
                                { name: 'Showcase', path: '/#showcase' },
                                { name: 'Packages', path: '/#packages' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-300">
                                <Mail size={18} />
                                <span>creativespectra0@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Phone size={18} />
                                <span>8590552384</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <MapPin size={18} className="mt-1" />
                                <span>Malappuram, Kerala, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Social */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Follow Us</h3>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                            <a href="https://www.instagram.com/spectra.ads/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Spectra Creative. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
