import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { ArrowRight } from 'lucide-react';
import sipatureThumb from '../assets/sipature-thumb.png';

const projectsList = [
    { title: "Sipature", type: "Web Design", color: "bg-teal-600", url: "https://basiii73.github.io/sip23/", image: sipatureThumb },
    { title: "Neon Tech", type: "Web Design", color: "bg-blue-500" },
    { title: "Eco Life", type: "Branding", color: "bg-green-500" },
    { title: "Urban Fit", type: "App UI", color: "bg-orange-500" },
    { title: "Skyline Arch", type: "Website", color: "bg-gray-800" },
    { title: "Zen Spa", type: "Identity", color: "bg-pink-400" },
    { title: "Future Fin", type: "Fintech", color: "bg-indigo-600" },
];

const Projects = () => {
    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Selected <span className="text-brand-primary">Projects</span></h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">Check out some of our recent work. We put passion into every project.</p>
                </div>

                <div className="flex overflow-x-auto gap-8 pb-8 snap-x scrollbar-hide">
                    {projectsList.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 min-w-[320px] md:min-w-[400px] snap-center"
                        >
                            {/* Image or Color Placeholder */}
                            <div className={`h-80 w-full flex items-center justify-center p-0 overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                ) : (
                                    <div className={`w-full h-full ${project.color} flex items-center justify-center p-6`}>
                                        <h3 className="text-white text-3xl font-bold opacity-30">{project.type}</h3>
                                    </div>
                                )}
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-brand-third text-sm font-semibold uppercase">{project.type}</span>
                                <h3 className="text-white text-2xl font-bold mb-4">{project.title}</h3>
                                <Button
                                    variant="primary"
                                    className="w-fit text-sm py-2"
                                    onClick={() => project.url && window.open(project.url, '_blank')}
                                >
                                    View Details <ArrowRight size={16} />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
