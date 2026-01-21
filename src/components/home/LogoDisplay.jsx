
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';

const LogoDisplay = () => {
    return (
        <section className="min-h-[50vh] flex flex-col items-center justify-center bg-gray-50 py-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center gap-6"
            >
                <img src={logo} alt="Spectra Creative Logo" className="w-32 md:w-48 h-auto object-contain drop-shadow-xl" />
                <h2 className="text-4xl md:text-6xl font-bold text-brand-primary tracking-tight">
                    Spectra Creative
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-brand-primary to-blue-500 rounded-full"></div>
            </motion.div>
        </section>
    );
};

export default LogoDisplay;
