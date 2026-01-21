import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/common/Button';
import { ArrowRight } from 'lucide-react';

const TextRotator = ({ text }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % text.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [text]);

    return (
        <span className="inline-flex min-w-[300px] justify-center text-center">
            <AnimatePresence mode='wait'>
                <motion.span
                    key={text[index]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-600"
                >
                    {text[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20">
                {/* Abstract Background Shapes */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.1, scale: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-primary rounded-full blur-3xl"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.1, scale: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-secondary rounded-full blur-3xl"
                    />

                    {/* SVG Design Elements */}
                    <motion.svg
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ delay: 1, duration: 2 }}
                        className="absolute top-20 left-10 w-24 h-24 text-brand-primary/20"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                    >
                        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
                        <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
                    </motion.svg>

                    <motion.svg
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 0.6, x: 0 }}
                        transition={{ delay: 1.2, duration: 2 }}
                        className="absolute bottom-20 right-10 w-64 h-64 text-brand-secondary/10"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 100 Q 50 10 90 100 T 170 100" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path d="M10 120 Q 50 30 90 120 T 170 120" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path d="M10 140 Q 50 50 90 140 T 170 140" stroke="currentColor" strokeWidth="4" fill="none" />
                    </motion.svg>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ delay: 1.5, duration: 2 }}
                        className="absolute top-1/3 right-1/4 w-12 h-12 border-4 border-brand-primary/20 rounded-full"
                        style={{ borderStyle: 'dotted' }}
                    />

                    {/* User Requested SVG */}
                    <motion.svg
                        initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                        animate={{ opacity: 0.5, rotate: 0, scale: 1 }}
                        transition={{ delay: 1.8, duration: 1.5, ease: "backOut" }}
                        className="absolute bottom-1/4 left-10 w-20 h-20 text-brand-primary/30"
                        viewBox="0 0 91 91"
                        xmlSpace="preserve"
                        fill="currentColor"
                    >
                        <g>
                            <path d="M27.7,34.3c0.9,0.8,2.4,1,3.3,0c2.6-2.8,1.2-7.4,1-10.9c-0.2-3.2,0.1-8-2.4-10.3c-0.6-0.5-1.5-0.6-2,0 c-2.4,2.5-1.7,7.1-1.7,10.3C26,26.8,24.9,31.7,27.7,34.3z" fill="currentColor" />
                            <path d="M50.1,27.7c5.3,0.1,7.9,4.6,10.6,8.5c2.5,3.6,8.4,0.2,5.9-3.5c-2.7-3.9-5.5-7.7-9.3-9.9c1.6-1,3.3-2,4.8-3.1 c2.7-1.9,6.1-3.8,7.4-6.9c0.3-0.8-0.5-1.5-1.2-1.6c-3.7-0.3-7.7,2.5-10.8,4.2c-3.4,1.8-7,3.7-9.8,6.5 C45.6,24,47.2,27.6,50.1,27.7z" fill="currentColor" />
                            <path d="M74.6,47.3c-10.1-1-20.2-1.6-30.4-1.6c-9.9,0-19.8,0.2-29.5,2.8c-1.4,0.4-0.9,2.2,0.3,2.3 c3.5,0.4,6.9,0.5,10.4,0.6c-0.4,4.7-0.1,9.5,1.1,14.1c1.7,6.7,5.9,11.1,12.4,13.5c6.7,2.5,15.9,1,20.8-4.4 c5.5-6,5.7-14.2,5.4-21.9c3.1,0.3,6.3,0.5,9.4,0.9C78.5,54,78.5,47.7,74.6,47.3z M54.9,69.7c-3.9,4.4-11.1,4.5-16,1.9 c-7.2-3.8-7.4-12.6-8-20.2c3.3,0,6.7,0,10,0c-0.5,2.3-0.7,4.6-0.9,6.9c-0.3,2.8-0.8,5,1.2,7.3c1.1,1.3,3.3,1.2,4.4,0 c2.1-2.1,1.6-4.5,1.4-7.3c-0.1-2.3-0.2-4.5-0.6-6.8c3.8,0.1,7.6,0.3,11.4,0.5C58.6,58,59,65.1,54.9,69.7z" fill="currentColor" />
                        </g>
                    </motion.svg>

                    <svg className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-brand-primary/5 text-brand-primary font-bold text-sm tracking-wider uppercase border border-brand-primary/10 mb-6">
                            Transform Your Brand
                        </span>
                        <motion.h1
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900 mb-6"
                        >
                            We Craft <TextRotator text={["Digital Experiences", "Brand Identities", "Visual Stories", "Analysis"]} /> That Matter.
                        </motion.h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
                            Elevate your business with attractive designs, collaborative creativity, and interactive web solutions tailored to your unique identity.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button onClick={() => window.location.href = '#projects'}>
                                View Projects <ArrowRight size={18} />
                            </Button>
                            <Button variant="outline" className="!text-brand-primary !border-brand-primary hover:!bg-brand-primary hover:!text-white" onClick={() => window.location.href = '#contact'}>
                                Contact Us
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Basic Features Teaser */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
                        <p className="text-gray-500">We bring your vision to life with cutting-edge technology and stunning aesthetics.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Interactive Design', desc: 'Engaging animations that keep users hooked.' },
                            { title: 'Brand Strategy', desc: 'Cohesive identity across all platforms.' },
                            { title: 'Modern Tech', desc: 'Fast, secure, and scalable solutions.' }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-brand-third hover:bg-white border border-transparent hover:border-brand-primary/20 hover:shadow-xl transition-all duration-300">
                                <h3 className="text-xl font-bold text-brand-primary mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
