import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useToast } from '../context/ToastContext';

const Contact: React.FC = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    showToast('Message sent successfully! We will get back to you soon.', 'success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Get in Touch</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a question about our custom pieces or need help with an order? 
          Our team is here to assist you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          <div className="bg-[#1a1a1a] rounded-[2rem] p-8 border border-white/5">
            <h3 className="text-2xl font-display font-bold mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#E3C598]/10 flex items-center justify-center text-[#E3C598] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email Us</p>
                  <p className="text-lg font-medium text-white">hello@vibevault.com</p>
                  <p className="text-lg font-medium text-white">support@vibevault.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#E3C598]/10 flex items-center justify-center text-[#E3C598] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Call Us</p>
                  <p className="text-lg font-medium text-white">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#E3C598]/10 flex items-center justify-center text-[#E3C598] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Visit Us</p>
                  <p className="text-lg font-medium text-white">Yaba, Tejuosho</p>
                  <p className="text-lg font-medium text-white">Ultra-Modern Shopping Centre</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#E3C598] rounded-[2rem] p-8 text-black relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold mb-4">FAQ</h3>
              <p className="mb-6 font-medium">
                Check our Frequently Asked Questions for quick answers to common queries.
              </p>
              <Link to="/faq" className="inline-block px-6 py-3 bg-black text-white rounded-full font-bold text-sm hover:bg-black/80 transition-colors">
                VISIT FAQ
              </Link>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6 bg-[#1a1a1a] rounded-[2rem] p-8 border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E3C598] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E3C598] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-2">Subject</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E3C598] transition-colors"
                placeholder="How can we help?"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-2">Message</label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E3C598] transition-colors resize-none"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#E3C598] text-black font-bold py-4 rounded-xl hover:bg-[#d4b485] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                'SENDING...'
              ) : (
                <>
                  SEND MESSAGE
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
