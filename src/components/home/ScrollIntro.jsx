import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import splashLogo from '../../assets/dotnet-logo.png';

const ScrollIntro = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Logo Sequence (0% to 25%)
    const logoOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
    const logoScale = useTransform(scrollYProgress, [0, 0.2], [1, 5]); // zoom in effect
    const logoBlur = useTransform(scrollYProgress, [0, 0.2], ["blur(0px)", "blur(10px)"]);

    // "GROW" Sequence (20% to 45%)
    const growOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
    const growY = useTransform(scrollYProgress, [0.2, 0.3, 0.45], [50, 0, -50]);

    // "DOMINATE" Sequence (40% to 65%)
    const dominateOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.65], [0, 1, 1, 0]);
    const dominateY = useTransform(scrollYProgress, [0.4, 0.5, 0.65], [50, 0, -50]);

    // "STANDOUT" Sequence (60% to 85%)
    const standoutOpacity = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.85], [0, 1, 1, 0]);
    const standoutY = useTransform(scrollYProgress, [0.6, 0.7, 0.85], [50, 0, -50]);

    // Overall Intro Fadeout (85% to 100%)
    const introOpacity = useTransform(scrollYProgress, [0.85, 0.95], [1, 0]);
    const pointerEvents = useTransform(scrollYProgress, [0.85, 0.95], ["auto", "none"]);

    return (
        <div ref={containerRef} className="relative h-[300vh] w-full bg-[#0a0a0a] z-[100]">
            <motion.div 
                className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
                style={{ opacity: introOpacity, pointerEvents }}
            >
                {/* Logo */}
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ opacity: logoOpacity, scale: logoScale, filter: logoBlur }}
                >
                    <img src={splashLogo} alt="Dotnet" className="w-64 md:w-96 h-auto object-contain drop-shadow-2xl" />
                </motion.div>

                {/* GROW */}
                <motion.h1 
                    className="absolute text-5xl md:text-8xl font-black text-white px-4 text-center tracking-tight"
                    style={{ opacity: growOpacity, y: growY }}
                >
                    <span className="text-[#8b1a85]">GROW</span>
                </motion.h1>

                {/* DOMINATE */}
                <motion.h1 
                    className="absolute text-5xl md:text-8xl font-black text-white px-4 text-center tracking-tight"
                    style={{ opacity: dominateOpacity, y: dominateY }}
                >
                    <span className="text-[#8b1a85]">DOMINATE</span>
                </motion.h1>

                {/* STANDOUT */}
                <motion.h1 
                    className="absolute text-5xl md:text-8xl font-black text-white px-4 text-center tracking-tight"
                    style={{ opacity: standoutOpacity, y: standoutY }}
                >
                    <span className="text-[#8b1a85]">STANDOUT</span>
                </motion.h1>

            </motion.div>
        </div>
    );
};

export default ScrollIntro;
