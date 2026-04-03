import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import flyer1 from '../assets/flyers/flyer1.jpg';
import flyer2 from '../assets/flyers/flyer2.jpg';
import flyer3 from '../assets/flyers/flyer3.png';


const flyers = [
  { src: flyer1, title: 'Hearing Loss Treatment', type: 'Flyer Design' },
  { src: flyer2, title: 'Republic Day Offer', type: 'Promotion' },
  { src: flyer3, title: 'Golden Blend Tea', type: 'Product Design' },
  { src: null, title: 'Brand Asset #5', type: 'Social Media' },
  { src: null, title: 'Brand Asset #6', type: 'Branding' },
];

const cardVariants = {
  initial: (i) => ({
    x: i * 20,
    y: -i * 15,
    rotate: i % 2 === 0 ? -(i * 2) : (i * 2),
    opacity: 0,
    scale: 0.9,
    zIndex: flyers.length - i
  }),
  animate: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1 }
  }),
  hover: (i) => {
    const total = flyers.length;
    const offset = i - Math.floor(total / 2);
    return {
      x: offset * 220,
      y: Math.abs(offset) * 15,
      rotate: offset * 4,
      scale: 1,
      zIndex: 10,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    };
  }
};

const Showcase = () => {
  const [selectedFlyer, setSelectedFlyer] = useState(null);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">
            Projects <span className="text-[#51084d]">Showcase</span>
          </h1>

        </div>
        {/* Stacked card layout with spread on container hover */}
        <motion.div 
          className="relative flex justify-center items-center h-[500px] w-full"
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          {flyers.map((flyer, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              layoutId={flyer.title}
              onClick={() => setSelectedFlyer(flyer)}
              whileHover={{ 
                scale: 1.1, 
                rotate: 0, 
                y: -30,
                zIndex: 100,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
              className="absolute w-72 h-[22rem] bg-[#141414] rounded-xl shadow-2xl border border-white/10 cursor-pointer overflow-hidden transition-colors hover:border-[#51084d]"
            >
              {flyer.src ? (
                flyer.src.toLowerCase().endsWith('.mov') || flyer.src.toLowerCase().endsWith('.mp4') || flyer.src.toLowerCase().endsWith('.webm') ? (
                  <video src={flyer.src} className="w-full h-full object-cover" muted loop playsInline />
                ) : (
                  <img src={flyer.src} alt={flyer.title} className="w-full h-full object-cover" />
                )
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-600">
                  Asset {i + 1}
                </div>
              )}

            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedFlyer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedFlyer(null)}
          >
            <motion.div
              layoutId={selectedFlyer.title}
              className="relative bg-[#141414] rounded-2xl overflow-hidden max-w-4xl max-h-[90vh] shadow-2xl border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedFlyer(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 backdrop-blur-md transition-colors z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
              {selectedFlyer.src ? (
                selectedFlyer.src.toLowerCase().endsWith('.mov') || selectedFlyer.src.toLowerCase().endsWith('.mp4') || selectedFlyer.src.toLowerCase().endsWith('.webm') ? (
                  <video src={selectedFlyer.src} className="w-full h-full object-contain max-h-[80vh]" controls autoPlay />
                ) : (
                  <img src={selectedFlyer.src} alt={selectedFlyer.title} className="w-full h-full object-contain" />
                )
              ) : (
                <div className="w-[500px] h-[500px] flex items-center justify-center bg-[#1a1a1a] text-gray-600">
                  No Image Available
                </div>
              )}
              <div className="p-6 bg-[#141414]">
                <h3 className="text-2xl font-bold text-white">{selectedFlyer.title}</h3>
                <p className="text-[#51084d] font-medium uppercase mt-1">{selectedFlyer.type}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Showcase;
