
import { motion } from 'framer-motion';

import venturePointLogo from '../../assets/brands/venture_point.png';

const brands = [
    { type: 'text', value: 'Sipature', className: 'font-handwriting' },
    { type: 'image', src: venturePointLogo, alt: 'Venture Point' },
];

const BrandGalleryMotion = () => {
    return (
        <section className="py-20 overflow-hidden border-t border-b border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 md:px-8 mb-12 text-center"
            >
                <h2 className="text-3xl font-bold text-white">Brands We Work With</h2>
                <p className="text-gray-500 mt-2">Trusted by industry leaders.</p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="flex"
            >
                <motion.div
                    className="flex gap-16 items-center whitespace-nowrap"
                    animate={{ x: [0, -1035] }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                >
                    {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                        <div key={i} className="px-8 min-w-[200px] flex items-center justify-center opacity-30 hover:opacity-100 transition-all duration-300">
                            {brand.type === 'image' ? (
                                <img src={brand.src} alt={brand.alt} className="h-20 w-auto object-contain invert" />
                            ) : (
                                <span className={`text-4xl font-extrabold text-white ${brand.className || ''}`}>
                                    {brand.value}
                                </span>
                            )}
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default BrandGalleryMotion;
