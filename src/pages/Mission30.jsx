import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Building, Mic, GraduationCap, Globe, Camera, ChevronLeft, ChevronRight, X, Image as ImageIcon } from 'lucide-react';
import landingBg from '../assets/landing-bg.jfif';
import teamImg from '../assets/team.png';
import bgPattern from '../assets/bg-pattern.jpg';

const placeholderImages = [
    landingBg,
    teamImg,
    bgPattern
];

const timelineData = [
    {
        year: '2026',
        title: 'Foundation',
        description: 'Spectra Creative establishes itself as a premier Digital Marketing Agency, setting the standard for innovation and client success.',
        icon: Target,
        hasGallery: true,
        images: placeholderImages
    },
    {
        year: '2027',
        title: 'New Headquarters',
        description: 'Opening our own dedicated office space to foster creativity and collaboration.',
        icon: Building,
        hasGallery: true,
        images: placeholderImages
    },
    {
        year: '2027-2028',
        title: 'Spectra Studio',
        description: 'Launching a comprehensive creative hub featuring an Editing Suite, Product Studio, and Podcast Studio available for the public and collaborators.',
        icon: Mic,
        hasGallery: true,
        images: placeholderImages
    },
    {
        year: '2028',
        title: 'Spectra Academy',
        description: 'Empowering the next generation of creatives through specialized training and workshops at Spectra Academy.',
        icon: GraduationCap,
        hasGallery: true,
        images: placeholderImages
    },
    {
        year: '2029',
        title: 'Global Expansion',
        description: 'Establishing branches in different parts of the country and expanding our footprint abroad.',
        icon: Globe,
        hasGallery: true,
        images: placeholderImages
    },
    {
        year: '2030',
        title: 'Mission Complete',
        description: 'Solidifying "Spectra Creative" as a globally recognized brand, celebrated for professional imagery and excellence.',
        icon: Camera,
        hasGallery: true,
        images: placeholderImages
    },
];

const variants = {
    enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
    })
};

const Mission30 = () => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [direction, setDirection] = useState(0);
    const [activeImages, setActiveImages] = useState(placeholderImages);

    const openGallery = (images) => {
        setActiveImages(images);
        setCurrentIdx(0);
        setIsGalleryOpen(true);
    };

    const closeGallery = () => setIsGalleryOpen(false);

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIdx((prev) => (prev + newDirection + activeImages.length) % activeImages.length);
    };

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
                                <div className="absolute left-4 md:left-1/2 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center -translate-x-1/2 border-4 border-white shadow-lg z-10 transition-transform hover:scale-110">
                                    <item.icon size={20} />
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 ml-12 md:ml-0">
                                    <div className={`bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 group ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className={`inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-bold mb-4 ${index % 2 === 0 ? 'md:mr-auto' : ''}`}>
                                            {item.year}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {item.description}
                                        </p>

                                        {item.hasGallery && (
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => openGallery(item.images)}
                                                className={`inline-flex items-center gap-2 px-4 py-2 bg-brand-primary text-white text-sm font-medium rounded-lg hover:bg-brand-secondary transition-colors ${index % 2 === 0 ? 'float-right' : ''}`}
                                            >
                                                <ImageIcon size={16} />
                                                View Gallery
                                            </motion.button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery Modal */}
            <AnimatePresence>
                {isGalleryOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                        onClick={closeGallery}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeGallery}
                                className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 transition-all"
                            >
                                <X size={24} />
                            </button>

                            {/* Images */}
                            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                                    <motion.img
                                        key={currentIdx}
                                        src={activeImages[currentIdx]}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 }
                                        }}
                                        className="absolute w-full h-full object-cover"
                                        alt={`Gallery image ${currentIdx + 1}`}
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Navigation Controls */}
                            <div className="absolute inset-0 flex items-center justify-between p-4 z-10 pointer-events-none">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => paginate(-1)}
                                    className="pointer-events-auto p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all group"
                                >
                                    <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => paginate(1)}
                                    className="pointer-events-auto p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all group"
                                >
                                    <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </div>

                            {/* Indicators */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {activeImages.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-2 h-2 rounded-full transition-all ${idx === currentIdx ? 'bg-white w-6' : 'bg-white/50'}`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Mission30;
