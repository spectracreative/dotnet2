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
            // Reverting to FormSubmit AJAX as per User Choice (Option B)
            const response = await fetch("https://formsubmit.co/ajax/creativespectra0@gmail.com", {
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
        { icon: Mail, title: 'Email Us', val: 'creativespectra0@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=creativespectra0@gmail.com', label: 'Send an Email' },
        { icon: Phone, title: 'Call Us', val: '8590552384', href: 'tel:+918590552384', label: 'Call Now' },
        { icon: MessageCircle, title: 'WhatsApp', val: 'Chat on WhatsApp', href: 'https://wa.me/918590552384', label: 'Chat Now' },
        { icon: Instagram, title: 'Instagram', val: '@spectra.ads', href: 'https://www.instagram.com/spectra.ads/?utm_source=ig_web_button_share_sheet', label: 'Follow Us' }
    ];

    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-2">Get In <span className="text-brand-primary">Touch</span></h1>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 100 }}
                        className="h-1 bg-brand-secondary mx-auto rounded-full"
                    />
                    <p className="mt-4 text-gray-600 max-w-xl mx-auto">We'd love to hear from you. Whether you have a question or need a quote, use the form below or drop us an email.</p>
                </div>

                <div className="flex flex-col gap-12 max-w-6xl mx-auto">
                    {/* Contact Info Cards - Horizontal */}
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
                                className="flex flex-col items-center text-center gap-4 p-6 bg-white/60 backdrop-blur-md rounded-3xl shadow-sm border border-white/40 hover:shadow-lg hover:border-brand-primary/30 transition-all duration-300 group cursor-pointer"
                            >
                                <div className="w-14 h-14 bg-brand-primary text-white rounded-full flex items-center justify-center group-hover:bg-brand-secondary transition-colors shrink-0 shadow-lg">
                                    <item.icon size={24} />
                                </div>
                                <div className="overflow-hidden">
                                    <h4 className="text-sm font-bold text-gray-500 uppercase mb-1">{item.title}</h4>
                                    <p className="font-semibold text-gray-900 group-hover:text-brand-primary transition-colors truncate">{item.label}</p>
                                </div>
                            </a>
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="w-full bg-white/70 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-white/50"
                    >
                        <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

                        {isSent ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                <p className="text-gray-500 mb-6">Thank you for contacting us. We will get back to you shortly.</p>
                                <Button onClick={() => setIsSent(false)}>Send Another Message</Button>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <input type="hidden" name="_subject" value="New Inquiry from Spectra Website" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-600">Name</label>
                                        <input type="text" name="name" required className="w-full p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/60 focus:border-brand-primary focus:ring-0 transition-all shadow-inner" placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-600">Email</label>
                                        <input type="email" name="email" required className="w-full p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/60 focus:border-brand-primary focus:ring-0 transition-all shadow-inner" placeholder="your@email.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-600">Service Interested In</label>
                                    <select name="service" className="w-full p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/60 focus:border-brand-primary focus:ring-0 transition-all shadow-inner">
                                        <option value="" disabled selected>Select Service</option>
                                        <option>Web Design & Development</option>
                                        <option>Branding & Identity</option>
                                        <option>Digital Marketing</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-600">Interested Package (Optional)</label>
                                    <select name="package" className="w-full p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/60 focus:border-brand-primary focus:ring-0 transition-all shadow-inner">
                                        <option value="">None / Custom</option>
                                        <option>Starter ($499)</option>
                                        <option>Professional ($1299)</option>
                                        <option>Enterprise ($2999)</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-600">Message</label>
                                    <textarea name="message" required rows="4" className="w-full p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/60 focus:border-brand-primary focus:ring-0 transition-all resize-none shadow-inner" placeholder="Tell us about your project..."></textarea>
                                </div>

                                <Button
                                    className="w-full py-4 text-base font-semibold shadow-xl shadow-brand-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        )}
                    </motion.div >
                </div >
            </div >
        </div >
    );
};

export default Contact;

