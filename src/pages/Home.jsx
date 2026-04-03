import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/common/Button';
import { ArrowRight } from 'lucide-react';

const TextRotator = ({ text }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % text.length);
        }, 3500); 
        return () => clearInterval(interval);
    }, [text]);

    const currentText = text[index];

    return (
        <span className="inline-flex justify-center text-center text-[#8b1a85]">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={index}
                    className="flex"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                        visible: { transition: { staggerChildren: 0.03 } },
                        hidden: {},
                        exit: { transition: { staggerChildren: 0.015 } }
                    }}
                >
                    {currentText.split('').map((char, i) => (
                        <motion.span
                            key={`${index}-${i}`}
                            variants={{
                                hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                                visible: { 
                                    opacity: 1, 
                                    y: 0, 
                                    filter: "blur(0px)", 
                                    transition: { duration: 0.4, ease: "easeOut" } 
                                },
                                exit: { 
                                    opacity: 0, 
                                    y: -30, 
                                    filter: "blur(8px)", 
                                    transition: { duration: 0.3, ease: "easeIn" } 
                                }
                            }}
                            className={char === ' ' ? 'w-[0.3em]' : 'inline-block'}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.div>
            </AnimatePresence>
        </span>
    );
};

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section — Clean dark, no background textures */}
            <section className="relative min-h-screen flex items-center pt-20">
                <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block px-5 py-2.5 rounded-full bg-white/5 text-[#8b1a85] font-semibold text-sm tracking-wider uppercase border border-white/10 mb-8">
                            Grow · Dominate · Standout
                        </span>
                        <motion.h1
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-8"
                        >
                            We Craft <TextRotator text={["Digital Marketing", "Web Solutions", "Brand Identities", "Video Content"]} /> That Matter.
                        </motion.h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
                            Elevate your business with attractive designs, collaborative creativity, and interactive web solutions tailored to your unique identity.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button onClick={() => window.location.href = '#services'}>
                                Our Services <ArrowRight size={18} />
                            </Button>
                            <Button variant="outline" onClick={() => window.location.href = '#contact'}>
                                Contact Us
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-2xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
                        <p className="text-gray-500">We bring your vision to life with cutting-edge technology and stunning aesthetics.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Interactive Design', desc: 'Engaging animations that keep users hooked.', num: '01' },
                            { title: 'Brand Strategy', desc: 'Cohesive identity across all platforms.', num: '02' },
                            { title: 'Modern Tech', desc: 'Fast, secure, and scalable solutions.', num: '03' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#51084d]/50 transition-all duration-500 hover:bg-[#1a1a1a]"
                            >
                                <span className="text-5xl font-black text-white/5 group-hover:text-[#8b1a85]/20 transition-colors">{item.num}</span>
                                <h3 className="text-xl font-bold text-white mb-3 mt-4">{item.title}</h3>
                                <p className="text-gray-500">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
