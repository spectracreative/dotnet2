import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
    const baseStyle = "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";

    const variants = {
        primary: "bg-brand-primary text-white hover:bg-brand-secondary shadow-lg hover:shadow-xl",
        secondary: "bg-white text-brand-primary border-2 border-brand-primary hover:bg-brand-third",
        outline: "border-2 border-white text-white hover:bg-white hover:text-brand-primary",
        ghost: "text-brand-primary hover:bg-brand-third",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};

export default Button;
