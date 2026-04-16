import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    { title: 'DIGITAL MARKETING', variant: 'filled' },
    { title: 'ADVERTISING', variant: 'outline' },
    { title: 'BRANDING', variant: 'outline' },
    { title: 'GRAPHIC & WEB DESIGN', variant: 'filled' },
    { title: 'SOCIAL MEDIA MANAGEMENT', variant: 'filled' },
    { title: 'BRANDING', variant: 'outline' },
];

const Services = () => {
    return (
        <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden pt-32 pb-20">
            {/* Grid Overlay */}
            <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #ffffff 1px, transparent 1px),
                        linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px'
                }}
            ></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-7xl md:text-[12rem] font-black leading-[0.8] tracking-tighter text-white">
                            OUR <br /> SERVICES
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-8 md:mt-4 md:ml-10"
                    >
                        <Link 
                            to="/contact" 
                            className="text-xl md:text-2xl font-bold text-white underline underline-offset-8 decoration-2 hover:text-brand-primary transition-colors"
                        >
                            WORK <br /> WITH US
                        </Link>
                    </motion.div>
                </div>

                <div className="flex flex-wrap gap-4 md:gap-8 items-center max-w-6xl">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: i * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }}
                            className={`
                                px-8 py-4 md:px-12 md:py-6 rounded-full text-lg md:text-2xl font-bold tracking-tight cursor-default transition-all duration-300
                                ${service.variant === 'filled' 
                                    ? 'bg-white text-black hover:bg-black hover:text-white border-2 border-white' 
                                    : 'border-2 border-white text-white hover:bg-white hover:text-black'}
                                ${i === 1 ? 'mt-0 md:mt-12' : ''}
                                ${i === 3 ? 'ml-0 md:ml-20' : ''}
                                ${i === 4 ? 'mt-0 md:-mt-8' : ''}
                            `}
                        >
                            {service.title}
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-32 border-t border-white/10 pt-10"
                >
                    <p className="text-gray-500 text-lg max-w-2xl">
                        We don't just provide services; we craft digital experiences that resonate and drive results. 
                        Every pixel, every strategy, every line of code is intentional.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;

