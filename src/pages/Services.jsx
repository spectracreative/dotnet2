import { motion } from 'framer-motion';
import { Megaphone, Code, Video, Palette, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';

const services = [
    {
        icon: Megaphone,
        title: 'Digital Marketing',
        desc: 'Strategic campaigns that amplify your brand presence across all digital platforms. From SEO to social media, we drive measurable growth.',
        features: ['Social Media Marketing', 'SEO & SEM', 'Content Strategy', 'Analytics & Reporting'],
    },
    {
        icon: Code,
        title: 'Web Development',
        desc: 'High-performance websites and web applications built with modern tech stacks. Fast, responsive, and conversion-optimized.',
        features: ['Custom Websites', 'E-commerce Solutions', 'Web Applications', 'CMS Integration'],
    },
    {
        icon: Video,
        title: 'Video Production',
        desc: 'Compelling video content that tells your brand story. From concept to post-production, we create visuals that captivate.',
        features: ['Commercial Videos', 'Social Media Reels', 'Product Demos', 'Motion Graphics'],
    },
    {
        icon: Palette,
        title: 'Branding',
        desc: 'Complete brand identity systems that make you unforgettable. Logos, guidelines, and visual assets that define who you are.',
        features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Stationery Design'],
    },
];

const Services = () => {
    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-white">Our <span className="text-[#8b1a85]">Services</span></h1>
                    <p className="text-gray-500 max-w-xl mx-auto mt-4">End-to-end digital solutions to help your brand grow, dominate, and stand out.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 md:p-10 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#51084d]/50 transition-all duration-500 hover:bg-[#1a1a1a]"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#51084d]/20 flex items-center justify-center mb-6 group-hover:bg-[#51084d]/30 transition-colors">
                                <service.icon size={28} className="text-[#8b1a85]" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-500 mb-6 leading-relaxed">{service.desc}</p>
                            <ul className="space-y-3 mb-8">
                                {service.features.map((feat, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#51084d]" />
                                        <span className="text-sm">{feat}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                variant="outline"
                                className="text-sm py-2.5 px-5"
                                onClick={() => window.location.href = '#contact'}
                            >
                                Get Started <ArrowRight size={16} />
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
