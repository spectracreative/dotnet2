import { useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';
import splashLogo from '../../assets/splash-logo-full.png';

const SplashScreen = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 1000); // 1.0 seconds total display time
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-primary overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                {/* Logo Texture */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `url(${logo})`,
                        backgroundSize: '120px',
                        backgroundRepeat: 'repeat',
                        filter: 'grayscale(100%)'
                    }}
                />

                {/* Creative Blobs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        x: [0, 50, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-brand-secondary/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, -60, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] bg-purple-600/20 rounded-full blur-3xl"
                />
            </div>

            <div className="relative z-10 text-center flex justify-center">
                <motion.img
                    src={splashLogo}
                    alt="Spectra Creative"
                    initial={{ scale: 0.5, opacity: 0, filter: 'blur(10px)' }}
                    animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-48 md:w-64 h-auto object-contain drop-shadow-2xl"
                />
            </div>
        </motion.div>
    );
};

export default SplashScreen;
