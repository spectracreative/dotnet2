import { motion } from 'framer-motion';
import Counter from '../components/common/Counter';

const About = () => {
    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <span className="text-[#8b1a85] font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
                    <h1 className="text-5xl font-extrabold text-white mb-6">Building Brands That <span className="text-[#8b1a85]">Resonate</span></h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        We are a team of visionary designers and developers dedicated to transforming ideas into digital reality. Our mission is to empower businesses with attractive, high-performance visual identities and web experiences.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold mb-6 text-white">Why We Exist</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        In a crowded digital landscape, standing out is not just an option—it's a necessity. We noticed that many brands struggle to align their visual identity with their core values. We bridge that gap.
                    </p>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Every pixel we place, every line of code we write, is infused with intention. We don't just make things look good; we make them work beautifully.
                    </p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.1 }}
                        className="flex flex-col sm:flex-row justify-center gap-6 mt-10"
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0 }
                            }}
                            className="p-6 bg-[#141414] rounded-xl border border-white/5 min-w-[200px]"
                        >
                            <h4 className="font-bold text-4xl text-[#8b1a85] mb-2">
                                <Counter to={50} />+
                            </h4>
                            <p className="text-sm text-gray-500 uppercase tracking-widest">Projects Completed</p>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0 }
                            }}
                            className="p-6 bg-[#141414] rounded-xl border border-white/5 min-w-[200px]"
                        >
                            <h4 className="font-bold text-4xl text-[#8b1a85] mb-2">
                                <Counter to={95} />%
                            </h4>
                            <p className="text-sm text-gray-500 uppercase tracking-widest">Client Satisfaction</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
