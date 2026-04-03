import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { Mail, Phone, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formsubmit.co/ajax/dotnetmarketing.ads@gmail.com", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                setIsSent(true);
                e.target.reset();
            } else {
                alert(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Error sending message. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        { icon: Mail, title: 'Email Us', val: 'dotnetmarketing.ads@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=dotnetmarketing.ads@gmail.com', label: 'Send an Email' },
        { icon: Phone, title: 'Call Us', val: '90748 92554', href: 'tel:+919074892554', label: 'Call Now' },
        { icon: MessageCircle, title: 'WhatsApp', val: 'Chat on WhatsApp', href: 'https://wa.me/919074892554', label: 'Chat Now' },
        { icon: Instagram, title: 'Instagram', val: '@dotnet.digital', href: 'https://www.instagram.com/dotnet.digital', label: 'Follow Us' }
    ];

    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold mb-2 text-white">Get In <span className="text-[#8b1a85]">Touch</span></h1>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 100 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1 bg-[#51084d] mx-auto rounded-full"
                    />
                    <p className="mt-4 text-gray-500 max-w-xl mx-auto">We'd love to hear from you. Whether you have a question or need a quote, use the form below or drop us an email.</p>
                </motion.div>

                <div className="flex flex-col gap-12 max-w-6xl mx-auto">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {contactInfo.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target={['Instagram', 'WhatsApp', 'Email Us'].includes(item.title) ? '_blank' : undefined}
                                rel={['Instagram', 'WhatsApp', 'Email Us'].includes(item.title) ? 'noopener noreferrer' : undefined}
                                className="flex flex-col items-center text-center gap-4 p-6 bg-[#141414] rounded-3xl border border-white/5 hover:border-[#51084d]/30 transition-all duration-300 group cursor-pointer"
                            >
                                <div className="w-14 h-14 bg-[#51084d] text-[#0a0a0a] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shrink-0 shadow-lg">
                                    <item.icon size={24} />
                                </div>
                                <div className="overflow-hidden">
                                    <h4 className="text-sm font-bold text-gray-500 uppercase mb-1">{item.title}</h4>
                                    <p className="font-semibold text-white group-hover:text-[#8b1a85] transition-colors truncate">{item.label}</p>
                                </div>
                            </a>
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="w-full bg-[#141414] rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-white/5"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>

                        {isSent ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-500 mb-6">Thank you for contacting us. We will get back to you shortly.</p>
                                <Button onClick={() => setIsSent(false)}>Send Another Message</Button>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <input type="hidden" name="_subject" value="New Inquiry from Dotnet Website" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-400">Name</label>
                                        <input type="text" name="name" required className="w-full p-4 bg-[#0a0a0a] rounded-xl border border-white/10 focus:border-[#51084d] focus:ring-0 transition-all text-white placeholder-gray-600" placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-400">Email</label>
                                        <input type="email" name="email" required className="w-full p-4 bg-[#0a0a0a] rounded-xl border border-white/10 focus:border-[#51084d] focus:ring-0 transition-all text-white placeholder-gray-600" placeholder="your@email.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400">Service Interested In</label>
                                    <select name="service" className="w-full p-4 bg-[#0a0a0a] rounded-xl border border-white/10 focus:border-[#51084d] focus:ring-0 transition-all text-white">
                                        <option value="" disabled selected>Select Service</option>
                                        <option>Web Design & Development</option>
                                        <option>Branding & Identity</option>
                                        <option>Digital Marketing</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400">Interested Package (Optional)</label>
                                    <select name="package" className="w-full p-4 bg-[#0a0a0a] rounded-xl border border-white/10 focus:border-[#51084d] focus:ring-0 transition-all text-white">
                                        <option value="">None / Custom</option>
                                        <option>Starter ($499)</option>
                                        <option>Professional ($1299)</option>
                                        <option>Enterprise ($2999)</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400">Message</label>
                                    <textarea name="message" required rows="4" className="w-full p-4 bg-[#0a0a0a] rounded-xl border border-white/10 focus:border-[#51084d] focus:ring-0 transition-all resize-none text-white placeholder-gray-600" placeholder="Tell us about your project..."></textarea>
                                </div>

                                <Button
                                    className="w-full py-4 text-base font-semibold shadow-xl shadow-[#51084d]/10 disabled:opacity-70 disabled:cursor-not-allowed"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
