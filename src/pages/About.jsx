import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import teamImage from '../assets/team.png';

const About = () => {
    const imgRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: imgRef,
        offset: ["start end", "end start"]
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Building Brands That <span className="text-brand-primary">Resonate</span></h1>
                    <p className="text-xl text-gray-500 leading-relaxed">
                        We are a team of visionary designers and developers dedicated to transforming ideas into digital reality. Our mission is to empower businesses with attractive, high-performance visual identities and web experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        ref={imgRef}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-tr from-brand-primary to-purple-500 rounded-3xl p-1 rotate-2 hover:rotate-0 transition-transform duration-500"
                    >
                        <div className="bg-white rounded-[22px] overflow-hidden h-96 flex items-center justify-center">
                            <motion.img
                                style={{ scale }}
                                src={teamImage}
                                alt="Spectra Creative Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Why We Exist</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            In a crowded digital landscape, standing out is not just an option—it's a necessity. We noticed that many brands struggle to align their visual identity with their core values. We bridge that gap.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Every pixel we place, every line of code we write, is infused with intention. We don't just make things look good; we make them work beautifully.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="p-4 bg-brand-third rounded-xl">
                                <h4 className="font-bold text-3xl text-brand-primary mb-1">50+</h4>
                                <p className="text-sm text-gray-500">Projects Completed</p>
                            </div>
                            <div className="p-4 bg-brand-third rounded-xl">
                                <h4 className="font-bold text-3xl text-brand-primary mb-1">100%</h4>
                                <p className="text-sm text-gray-500">Client Satisfaction</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
