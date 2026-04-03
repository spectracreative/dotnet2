import { useEffect } from 'react';
import { motion } from 'framer-motion';
import splashLogo from '../../assets/dotnet-logo.png';

const SplashScreen = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 1500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative z-10 text-center flex justify-center">
                <motion.img
                    src={splashLogo}
                    alt="Dotnet"
                    initial={{ scale: 0.5, opacity: 0, filter: 'blur(10px)' }}
                    animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-64 md:w-96 h-auto object-contain drop-shadow-2xl"
                />
            </div>
        </motion.div>
    );
};

export default SplashScreen;
