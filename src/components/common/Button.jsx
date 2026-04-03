import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false }) => {
    const baseStyle = "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";

    const variants = {
        primary: "bg-[#51084d] text-white hover:bg-[#6a0c65] shadow-lg hover:shadow-xl hover:shadow-[#51084d]/20",
        secondary: "bg-white text-[#0a0a0a] hover:bg-gray-200",
        outline: "border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40",
        ghost: "text-[#8b1a85] hover:bg-[#51084d]/10",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </motion.button>
    );
};

export default Button;
