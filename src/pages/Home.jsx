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
