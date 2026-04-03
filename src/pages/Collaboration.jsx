import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { Handshake, Zap, Globe } from 'lucide-react';

const Collaboration = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const fullName = `${formData.get('firstName')} ${formData.get('lastName')}`;

        const payload = {
            name: fullName,
            email: formData.get('email'),
            service: `Partnership Inquiry (${formData.get('company')})`,
            message: formData.get('message'),
            _subject: "New Partnership Proposal",
            _template: "table"
        };

        try {
            const response = await fetch("https://formsubmit.co/ajax/dotnetmarketing.ads@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                setIsSent(true);
                e.target.reset();
            } else {
                alert(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Error sending proposal. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl font-bold leading-tight mb-6 text-white">Let's <span className="text-[#8b1a85]">Collaborate</span> & Create Magic.</h1>
                        <p className="text-lg text-gray-400 mb-8">
                            We are always looking for partners, agencies, and visionaries to collaborate with. Whether it's a co-branded campaign or a long-term strategic partnership, we are ready.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Handshake, title: 'Strategic Partnerships', desc: 'Joint ventures that drive mutual growth.' },
                                { icon: Zap, title: 'Creative Synergy', desc: 'Combining our design prowess with your expertise.' },
                                { icon: Globe, title: 'Global Reach', desc: 'Expanding horizons together.' }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex gap-4"
                                >
                                    <div className="w-12 h-12 rounded-full bg-[#141414] border border-white/5 flex items-center justify-center text-[#8b1a85] shrink-0">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-[#141414] p-8 rounded-[2.5rem] shadow-2xl border border-white/5"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Partner With Us</h3>

                        {isSent ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Proposal Sent!</h3>
                                <p className="text-gray-500 mb-6">Thanks for your interest. We'll review your proposal and get back to you.</p>
                                <Button onClick={() => setIsSent(false)}>Send Another</Button>
                            </div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" name="firstName" required placeholder="First Name" className="w-full p-4 bg-[#0a0a0a] rounded-2xl border border-white/10 focus:border-[#51084d] focus:ring-0 text-white placeholder-gray-600" />
                                    <input type="text" name="lastName" required placeholder="Last Name" className="w-full p-4 bg-[#0a0a0a] rounded-2xl border border-white/10 focus:border-[#51084d] focus:ring-0 text-white placeholder-gray-600" />
                                </div>
                                <input type="email" name="email" required placeholder="Business Email" className="w-full p-4 bg-[#0a0a0a] rounded-2xl border border-white/10 focus:border-[#51084d] focus:ring-0 text-white placeholder-gray-600" />
                                <input type="text" name="company" required placeholder="Company Name" className="w-full p-4 bg-[#0a0a0a] rounded-2xl border border-white/10 focus:border-[#51084d] focus:ring-0 text-white placeholder-gray-600" />
                                <textarea name="message" required rows="4" placeholder="How do you want to collaborate?" className="w-full p-4 bg-[#0a0a0a] rounded-2xl border border-white/10 focus:border-[#51084d] focus:ring-0 text-white placeholder-gray-600"></textarea>
                                <Button
                                    variant="primary"
                                    className="w-full justify-center disabled:opacity-70"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Submit Proposal'}
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Collaboration;
