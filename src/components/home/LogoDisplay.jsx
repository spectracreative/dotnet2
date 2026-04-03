
import { motion } from 'framer-motion';
import logo from '../../assets/dotnet-logo.png';

const LogoDisplay = () => {
    return (
        <section className="min-h-[50vh] flex flex-col items-center justify-center py-20 border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center gap-6"
            >
                <img src={logo} alt="Dotnet Logo" className="w-32 md:w-48 h-auto object-contain drop-shadow-xl" />
                <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-widest uppercase text-center mt-4">
                    Grow · Dominate · Standout
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-[#51084d] to-[#51084d] rounded-full"></div>
            </motion.div>
        </section>
    );
};

export default LogoDisplay;
