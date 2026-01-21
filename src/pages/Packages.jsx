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
            color: "bg-purple-600",
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
            color: "bg-blue-600",
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
                    <h1 className="text-4xl font-bold text-gray-900">Our <span className="text-brand-primary">Packages</span></h1>
                    <p className="text-gray-500 max-w-xl mx-auto mt-4">Transparent pricing for premium services. Choose the plan that fits your vision.</p>
                </div>

                {!activeCategory ? (
                    // Category Selection View
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {categories.map((cat, index) => (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setActiveCategory(cat.id)}
                                className="group cursor-pointer bg-white rounded-3xl p-10 border border-gray-200 hover:border-brand-primary shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                            >
                                <div className={`inline-block p-6 rounded-2xl mb-6 ${cat.id === 'branding' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'} group-hover:scale-110 transition-transform duration-300`}>
                                    {cat.icon}
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">{cat.title}</h2>
                                <p className="text-gray-500 text-lg mb-8">{cat.description}</p>
                                <div className="text-brand-primary font-semibold flex items-center justify-center gap-2 group-hover:gap-4 transition-all">
                                    View Packages <ArrowLeft className="rotate-180" size={20} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    // Packages View
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            onClick={() => setActiveCategory(null)}
                            className="flex items-center gap-2 text-gray-500 hover:text-brand-primary mb-8 transition-colors font-medium"
                        >
                            <ArrowLeft size={20} /> Back to Categories
                        </button>

                        {categories.map((category) => {
                            if (category.id !== activeCategory) return null;
                            return (
                                <div key={category.id}>
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                                        <p className="text-gray-500 mt-2">{category.description}</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {category.packages.map((pkg, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col ${i === 1 ? 'border-brand-primary bg-brand-primary text-white shadow-2xl scale-105 z-10' : 'border-gray-200 bg-white text-gray-800 hover:shadow-xl'}`}
                                            >
                                                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                                                <p className={`text-sm mb-6 ${i === 1 ? 'text-blue-200' : 'text-gray-500'}`}>{pkg.desc}</p>
                                                <div className="text-4xl font-extrabold mb-8">{pkg.price}</div>

                                                <ul className="space-y-4 mb-8 flex-grow">
                                                    {pkg.features.map((feat, idx) => (
                                                        <li key={idx} className="flex items-center gap-3">
                                                            <Check size={18} className={i === 1 ? 'text-green-300' : 'text-brand-primary'} />
                                                            <span className="text-sm font-medium">{feat}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <Button variant={i === 1 ? 'secondary' : 'primary'} className="w-full mt-auto" onClick={() => window.location.href = '#contact'}>
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
