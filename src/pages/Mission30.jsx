import { motion } from 'framer-motion';
import { Target, Building, Mic, GraduationCap, Globe, Camera } from 'lucide-react';

const timelineData = [
    {
        year: '2026',
        title: 'Foundation',
        description: 'Spectra Creative establishes itself as a premier Digital Marketing Agency, setting the standard for innovation and client success.',
        icon: Target,
    },
    {
        year: '2027',
        title: 'New Headquarters',
        description: 'Opening our own dedicated office space to foster creativity and collaboration.',
        icon: Building,
    },
    {
        year: '2027-2028',
        title: 'Spectra Studio',
        description: 'Launching a comprehensive creative hub featuring an Editing Suite, Product Studio, and Podcast Studio available for the public and collaborators.',
        icon: Mic,
    },
    {
        year: '2028',
        title: 'Spectra Academy',
        description: 'Empowering the next generation of creatives through specialized training and workshops at Spectra Academy.',
        icon: GraduationCap,
    },
    {
        year: '2029',
        title: 'Global Expansion',
        description: 'Establishing branches in different parts of the country and expanding our footprint abroad.',
        icon: Globe,
    },
    {
        year: '2030',
        title: 'Mission Complete',
        description: 'Solidifying "Spectra Creative" as a globally recognized brand, celebrated for professional imagery and excellence.',
        icon: Camera,
    },
];

const Mission30 = () => {
    return (
        <div className="pt-24 pb-20 min-h-screen bg-brand-third/30">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Roadmap</span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">Mission <span className="text-brand-primary">2030</span></h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        A decade of vision, growth, and creative excellence. Here is our path to the future.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-brand-primary/20 -translate-x-1/2 md:translate-x-0 rounded-full" />

                    <div className="space-y-12">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Spacer for alternate side */}
                                <div className="hidden md:block flex-1" />

                                {/* Icon Node */}
                                <div className="absolute left-4 md:left-1/2 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center -translate-x-1/2 border-4 border-white shadow-lg z-10">
                                    <item.icon size={20} />
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 ml-12 md:ml-0">
                                    <div className={`bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className={`inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-bold mb-4 ${index % 2 === 0 ? 'md:mr-auto' : ''}`}>
                                            {item.year}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission30;
