
import logo from '../../assets/dotnet-logo.png';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] text-white pt-16 pb-8 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <img src={logo} alt="Logo" className="h-12 w-auto" />
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Elevating brands through attractive designs, interactive experiences, and creative strategies. Let's create something specific together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/#home' },
                                { name: 'About Us', path: '/#about' },
                                { name: 'Showcase', path: '/#showcase' },
                                { name: 'Services', path: '/#services' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-500 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-500">
                                <Mail size={18} className="text-[#8b1a85]" />
                                <span>dotnetmarketing.ads@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-500">
                                <Phone size={18} className="text-[#8b1a85]" />
                                <span>90748 92554</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-500">
                                <MapPin size={18} className="mt-1 text-[#8b1a85]" />
                                <span>Malappuram, Kerala, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Follow Us</h3>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="bg-white/5 p-2 rounded-full hover:bg-[#51084d] hover:text-white transition-all border border-white/5">
                                    <Icon size={20} />
                                </a>
                            ))}
                            <a href="https://www.instagram.com/dotnet.digital" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-full hover:bg-[#51084d] hover:text-white transition-all border border-white/5">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Dotnet. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
