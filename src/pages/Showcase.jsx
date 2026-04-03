import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import flyer1 from '../assets/flyers/flyer1.jpg';
import flyer2 from '../assets/flyers/flyer2.jpg';
import flyer3 from '../assets/flyers/flyer3.png';
import flyer4 from '../assets/flyers/flyer4.jpg';
import flyer5 from '../assets/flyers/flyer5.jpg';

const flyers = [
  { src: flyer1, title: 'Hearing Loss Treatment', type: 'Flyer Design' },
  { src: flyer2, title: 'Republic Day Offer', type: 'Promotion' },
  { src: flyer3, title: 'Golden Blend Tea', type: 'Product Design' },
  { src: flyer4, title: 'Brand Asset #5', type: 'Social Media' },
  { src: flyer5, title: 'Brand Asset #6', type: 'Branding' },
];

const ShowcaseCard = ({ flyer, index, total, scrollYProgress, setSelectedFlyer }) => {
  const offset = index - Math.floor(total / 2);

  // Stacked state properties
  const stackedX = index * 20;
  const stackedY = -index * 15;
  const stackedRotate = index % 2 === 0 ? -(index * 2) : (index * 2);

  // Spread state properties
  const spreadX = offset * 220;
  const spreadY = Math.abs(offset) * 15;
  const spreadRotate = offset * 4;

  // Map scroll progress to transform values
  // [0, 1] goes from entering viewport bottom to leaving viewport top
  const x = useTransform(scrollYProgress, [0.2, 0.45, 0.55, 0.8], [stackedX, spreadX, spreadX, stackedX]);
  const y = useTransform(scrollYProgress, [0.2, 0.45, 0.55, 0.8], [stackedY, spreadY, spreadY, stackedY]);
  const rotate = useTransform(scrollYProgress, [0.2, 0.45, 0.55, 0.8], [stackedRotate, spreadRotate, spreadRotate, stackedRotate]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.3], [0.8, 1]);

  return (
    <motion.div
      layoutId={flyer.title}
      onClick={() => setSelectedFlyer(flyer)}
      style={{
        x,
        y,
        rotate,
        opacity,
        scale,
        zIndex: total - index,
      }}
      whileHover={{
        scale: 1.05,
        zIndex: 100,
        boxShadow: "0 25px 50px -12px rgba(81, 8, 77, 0.5)",
        borderColor: "#51084d"
      }}
      className="absolute w-56 md:w-64 h-72 md:h-80 bg-[#141414] rounded-xl shadow-2xl border border-white/10 cursor-pointer overflow-hidden transition-colors"
    >
      {flyer.src ? (
        flyer.src.toLowerCase().endsWith('.mov') || flyer.src.toLowerCase().endsWith('.mp4') || flyer.src.toLowerCase().endsWith('.webm') ? (
          <video src={flyer.src} className="w-full h-full object-cover" muted loop playsInline />
        ) : (
          <img src={flyer.src} alt={flyer.title} className="w-full h-full object-cover" />
        )
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-600">
          Asset {index + 1}
        </div>
      )}
    </motion.div>
  );
};

const Showcase = () => {
  const [selectedFlyer, setSelectedFlyer] = useState(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div className="pt-24 pb-20" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">
            Projects <span className="text-[#51084d]">Showcase</span>
          </h1>
        </div>
        
        {/* Stacked card layout with scroll-driven spread */}
        <div className="relative flex justify-center items-center h-[600px] w-full">
          {flyers.map((flyer, i) => (
            <ShowcaseCard 
              key={i} 
              flyer={flyer} 
              index={i} 
              total={flyers.length} 
              scrollYProgress={scrollYProgress} 
              setSelectedFlyer={setSelectedFlyer} 
            />
          ))}
        </div>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Showcase;
