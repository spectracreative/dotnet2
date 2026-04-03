import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { Check, Palette, Monitor, ArrowLeft } from 'lucide-react';

const Packages = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    const categories = [
        {
            id: 'branding',
            title: "Logo & Branding",
            icon: <Palette size={48} />,
            description: "Crafting your unique identity with professional design.",
            packages: [
                {
                    name: 'Starter Identity',
                    price: '$299',
                    desc: 'Essential branding for startups.',
                    features: ['Custom Logo Design', 'Business Card', 'Color Palette', '2 Revisions']
                },
                {
                    name: 'Professional Brand',
                    price: '$599',
                    desc: 'Complete identity solution.',
                    features: ['Logo Design', 'Stationery Systems', 'Social Media Kit', 'Brand Guidelines', 'Email Signature']
                },
                {
                    name: 'Full Brand Suite',
                    price: '$999',
                    desc: 'Total visual transformation.',
                    features: ['Premium Logo Concepts', 'Full Brand Guidelines', '3D Mockups', 'Social Media Templates', 'Unlimited Support']
                }
            ]
        },
        {
            id: 'digital',
            title: "Digital & Web",
            icon: <Monitor size={48} />,
            description: "Building your powerful online presence.",
            packages: [
                {
                    name: 'Landing Page',
                    price: '$499',
                    desc: 'High-converting single page.',
                    features: ['Custom Design', 'Mobile Responsive', 'Contact Form', 'Fast Loading']
                },
                {
                    name: 'Business Website',
                    price: '$1299',
                    desc: 'Scalable multi-page presence.',
                    features: ['5 Page Website', 'CMS Integration', 'Basic SEO', 'Analytics Setup', 'Priority Support']
                },
                {
                    name: 'Custom / E-com',
                    price: '$2499',
                    desc: 'Advanced functionality & sales.',
                    features: ['Custom Web App', 'E-commerce Setup', 'Advanced SEO', 'API Integrations', 'Performance Optimization']
                }
            ]
        }
    ];

    return (
        <div className="pt-24 pb-20 min-h-screen">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white">Our <span className="text-[#8b1a85]">Packages</span></h1>
                    <p className="text-gray-500 max-w-xl mx-auto mt-4">Transparent pricing for premium services. Choose the plan that fits your vision.</p>
                </div>

                {!activeCategory ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {categories.map((cat, index) => (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setActiveCategory(cat.id)}
                                className="group cursor-pointer bg-[#141414] rounded-3xl p-10 border border-white/5 hover:border-[#51084d]/30 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                            >
                                <div className={`inline-block p-6 rounded-2xl mb-6 ${cat.id === 'branding' ? 'bg-[#51084d]/20 text-[#8b1a85]' : 'bg-[#51084d]/20 text-[#8b1a85]'} group-hover:scale-110 transition-transform duration-300`}>
                                    {cat.icon}
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-4">{cat.title}</h2>
                                <p className="text-gray-500 text-lg mb-8">{cat.description}</p>
                                <div className="text-[#8b1a85] font-semibold flex items-center justify-center gap-2 group-hover:gap-4 transition-all">
                                    View Packages <ArrowLeft className="rotate-180" size={20} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            onClick={() => setActiveCategory(null)}
                            className="flex items-center gap-2 text-gray-500 hover:text-[#8b1a85] mb-8 transition-colors font-medium"
                        >
                            <ArrowLeft size={20} /> Back to Categories
                        </button>

                        {categories.map((category) => {
                            if (category.id !== activeCategory) return null;
                            return (
                                <div key={category.id}>
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                                        <p className="text-gray-500 mt-2">{category.description}</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {category.packages.map((pkg, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col ${i === 1 ? 'border-[#51084d]/50 bg-[#1a1a1a] shadow-2xl shadow-[#51084d]/5 scale-105 z-10' : 'border-white/5 bg-[#141414] hover:border-white/20'}`}
                                            >
                                                {i === 1 && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#51084d] text-black text-xs font-bold px-4 py-1 rounded-full">Popular</span>}
                                                <h3 className="text-2xl font-bold mb-2 text-white">{pkg.name}</h3>
                                                <p className="text-sm mb-6 text-gray-500">{pkg.desc}</p>
                                                <div className={`text-4xl font-extrabold mb-8 ${i === 1 ? 'text-[#8b1a85]' : 'text-white'}`}>{pkg.price}</div>

                                                <ul className="space-y-4 mb-8 flex-grow">
                                                    {pkg.features.map((feat, idx) => (
                                                        <li key={idx} className="flex items-center gap-3">
                                                            <Check size={18} className="text-[#8b1a85]" />
                                                            <span className="text-sm font-medium text-gray-300">{feat}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <Button variant={i === 1 ? 'primary' : 'outline'} className="w-full mt-auto" onClick={() => window.location.href = '#contact'}>
                                                    Get Started
                                                </Button>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Packages;
