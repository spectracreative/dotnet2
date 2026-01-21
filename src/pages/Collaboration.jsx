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
        // Combine First and Last Name for the backend which expects 'name'
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
            const response = await fetch("https://formsubmit.co/ajax/creativespectra0@gmail.com", {
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
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-5xl font-bold leading-tight mb-6">Let's <span className="text-brand-primary">Collaborate</span> & Create Magic.</h1>
                        <p className="text-lg text-gray-600 mb-8">
                            We are always looking for partners, agencies, and visionaries to collaborate with. Whether it's a co-branded campaign or a long-term strategic partnership, we are ready.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Handshake, title: 'Strategic Partnerships', desc: 'Joint ventures that drive mutual growth.' },
                                { icon: Zap, title: 'Creative Synergy', desc: 'Combining our design prowess with your expertise.' },
                                { icon: Globe, title: 'Global Reach', desc: 'Expanding horizons together.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-third flex items-center justify-center text-brand-primary shrink-0">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-brand-third/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white/50"
                    >
                        <h3 className="text-2xl font-bold mb-6">Partner With Us</h3>

                        {isSent ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Proposal Sent!</h3>
                                <p className="text-gray-500 mb-6">Thanks for your interest. We'll review your proposal and get back to you.</p>
                                <Button onClick={() => setIsSent(false)}>Send Another</Button>
                            </div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" name="firstName" required placeholder="First Name" className="w-full p-4 bg-white/50 backdrop-blur-sm rounded-2xl border-none focus:ring-2 ring-brand-primary shadow-sm" />
                                    <input type="text" name="lastName" required placeholder="Last Name" className="w-full p-4 bg-white/50 backdrop-blur-sm rounded-2xl border-none focus:ring-2 ring-brand-primary shadow-sm" />
                                </div>
                                <input type="email" name="email" required placeholder="Business Email" className="w-full p-4 bg-white/50 backdrop-blur-sm rounded-2xl border-none focus:ring-2 ring-brand-primary shadow-sm" />
                                <input type="text" name="company" required placeholder="Company Name" className="w-full p-4 bg-white/50 backdrop-blur-sm rounded-2xl border-none focus:ring-2 ring-brand-primary shadow-sm" />
                                <textarea name="message" required rows="4" placeholder="How do you want to collaborate?" className="w-full p-4 bg-white/50 backdrop-blur-sm rounded-2xl border-none focus:ring-2 ring-brand-primary shadow-sm"></textarea>
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
