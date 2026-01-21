import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import flyer1 from '../assets/flyers/flyer1.jpg';
import flyer2 from '../assets/flyers/flyer2.jpg';
import flyer3 from '../assets/flyers/flyer3.png';
import v1 from '../assets/flyers/v1.mov'

const flyers = [
    { src: flyer1, title: 'Hearing Loss Treatment', type: 'Flyer Design' },
    { src: flyer2, title: 'Republic Day Offer', type: 'Promotion' },
    { src: flyer3, title: 'Golden Blend Tea', type: 'Product Design' },
    { src: v1, title: 'commercial Video', type: 'Production' }, // Placeholder for now
    { src: null, title: 'Brand Asset #5', type: 'Social Media' },
    { src: null, title: 'Brand Asset #6', type: 'Branding' },
];

const Showcase = () => {
    const [selectedFlyer, setSelectedFlyer] = useState(null);

    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900">Flyers & Logos <span className="text-brand-primary">Showcase</span></h1>
                    <p className="text-gray-500 mt-4">A collection of our branding assets and print designs.</p>
                </div>

                <div className="flex overflow-x-auto gap-6 pb-6 snap-x scrollbar-hide p-4">
                    {flyers.map((flyer, i) => (
                        <motion.div
                            key={i}
                            layoutId={flyer.title}
                            onClick={() => setSelectedFlyer(flyer)}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white rounded-xl shadow-md p-4 hover:shadow-2xl transition-all border border-gray-100 min-w-[280px] snap-center cursor-pointer"
                        >
                            <div className="aspect-[4/5] bg-brand-third rounded-lg mb-4 overflow-hidden relative group">
                                {flyer.src ? (
                                    flyer.src.toLowerCase().endsWith('.mov') || flyer.src.toLowerCase().endsWith('.mp4') || flyer.src.toLowerCase().endsWith('.webm') ? (
                                        <video
                                            src={flyer.src}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            muted
                                            loop
                                            playsInline
                                            onMouseOver={e => e.target.play()}
                                            onMouseOut={e => e.target.pause()}
                                        />
                                    ) : (
                                        <img src={flyer.src} alt={flyer.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    )
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        Asset {i + 1}
                                    </div>
                                )}
                            </div>
                            <h4 className="font-bold text-gray-800">{flyer.title}</h4>
                            <p className="text-xs text-brand-primary font-medium uppercase mt-1">{flyer.type}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedFlyer && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setSelectedFlyer(null)}
                    >
                        <motion.div
                            layoutId={selectedFlyer.title}
                            className="relative bg-white rounded-2xl overflow-hidden max-w-4xl max-h-[90vh] shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedFlyer(null)}
                                className="absolute top-4 right-4 bg-white/50 hover:bg-white text-black rounded-full p-2 backdrop-blur-md transition-colors z-10"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                            {selectedFlyer.src ? (
                                selectedFlyer.src.toLowerCase().endsWith('.mov') || selectedFlyer.src.toLowerCase().endsWith('.mp4') || selectedFlyer.src.toLowerCase().endsWith('.webm') ? (
                                    <video
                                        src={selectedFlyer.src}
                                        className="w-full h-full object-contain max-h-[80vh]"
                                        controls
                                        autoPlay
                                    />
                                ) : (
                                    <img src={selectedFlyer.src} alt={selectedFlyer.title} className="w-full h-full object-contain" />
                                )
                            ) : (
                                <div className="w-[500px] h-[500px] flex items-center justify-center bg-gray-100 text-gray-400">
                                    No Image Available
                                </div>
                            )}
                            <div className="p-6 bg-white">
                                <h3 className="text-2xl font-bold text-gray-900">{selectedFlyer.title}</h3>
                                <p className="text-brand-primary font-medium uppercase mt-1">{selectedFlyer.type}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Showcase;
