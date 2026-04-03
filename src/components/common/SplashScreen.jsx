import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import splashLogo from '../../assets/dotnet-logo.png';

const SplashScreen = ({ onComplete }) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        // Tagline duration
        const t1 = setTimeout(() => setStep(1), 1800);
        // Logo duration before completing splash
        const t2 = setTimeout(() => onComplete(), 3600);
        
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
        >
            <div className="relative z-10 text-center flex justify-center w-full px-4">
                <AnimatePresence mode="wait">
                    {step === 0 && (
                        <motion.div
                            key="tagline"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15, filter: "blur(5px)" }}
                            transition={{ duration: 0.6 }}
                            className="text-[#8b1a85] font-semibold text-lg md:text-2xl tracking-[0.2em] md:tracking-[0.3em] uppercase"
                        >
                            Grow · Dominate · Standout
                        </motion.div>
                    )}
                    
                    {step === 1 && (
                        <motion.img
                            key="logo"
                            src={splashLogo}
                            alt="Dotnet"
                            initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
                            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-64 md:w-96 h-auto object-contain drop-shadow-2xl"
                        />
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default SplashScreen;
