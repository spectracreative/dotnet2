
import { motion } from 'framer-motion';

import venturePointLogo from '../../assets/brands/venture_point.png';

const brands = [
    { type: 'text', value: 'Sipature', className: 'font-handwriting !bg-none !text-brand-primary' },
    { type: 'image', src: venturePointLogo, alt: 'Venture Point' },
];

const BrandGallery = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 mb-10 text-center">
                <h2 className="text-3xl font-bold text-gray-900">Brands We Work With</h2>
                <p className="text-gray-500 mt-2">Trusted by industry leaders.</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* Marquee Effect */}
                <div className="animate-marquee whitespace-nowrap flex gap-16 py-4">
                    {brands.concat(brands).map((brand, i) => (
                        <span key={i} className="text-4xl font-bold text-gray-300 hover:text-brand-primary transition-colors cursor-pointer select-none">
                            {brand}
                        </span>
                    ))}
                </div>
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 py-4">
                    {brands.concat(brands).map((brand, i) => (
                        <span key={i} className="text-4xl font-bold text-gray-300 hover:text-brand-primary transition-colors cursor-pointer select-none">
                            {brand}
                        </span>
                    ))}
                </div>
            </div>

            {/* Simple style for marquee if not in tailwind config yet, but assuming standard animate-marquee is not there, I will add it or use Framer Motion for safer/smoother effect */}
        </section>
    );
};

// Re-writing with Framer Motion for guaranteed smooth infinite scroll without custom tailwind config
const BrandGalleryMotion = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900">Brands We Work With</h2>
                <p className="text-gray-500 mt-2">Trusted by industry leaders.</p>
            </div>

            <div className="flex">
                <motion.div
                    className="flex gap-16 items-center whitespace-nowrap"
                    animate={{ x: [0, -1035] }} // Approximate width of one set
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                >
                    {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                        <div key={i} className="px-8 min-w-[200px] flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
                            {brand.type === 'image' ? (
                                <img src={brand.src} alt={brand.alt} className="h-20 w-auto object-contain" />
                            ) : (
                                <span className={`text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-500 ${brand.className || ''}`}>
                                    {brand.value}
                                </span>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BrandGalleryMotion;
