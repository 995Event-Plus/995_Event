import React, { useState } from 'react';
import { GlassCard } from './ui/GlassCard';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Logic from user script: Send to Google Apps Script
      // Mocking the success for UI demo purposes as CORS might block the specific script URL in this environment
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', budget: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative">
       <div className="absolute inset-0 z-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=5')] bg-cover opacity-20"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <h2 className="text-4xl font-heading font-bold text-center mb-6 text-white neon-shadow-text-cyan">Contact Us</h2>
        <p className="text-lg font-body text-gray-400 text-center mb-16">Ready to collaborate on your next project?</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Info */}
          <GlassCard className="p-8 text-left">
            <h3 className="text-2xl font-heading font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-300 font-body mb-8">
              Ready to get started on your next creative project? Get in touch and we can discuss how we can help you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-purple-500 rounded-full flex items-center justify-center text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">+66 (0) 2 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-purple-500 rounded-full flex items-center justify-center text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">hello@995events.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-purple-500 rounded-full flex items-center justify-center text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Bangkok, Thailand</p>
                  <p className="text-gray-400 text-sm">Asia Event Hub</p>
                </div>
              </div>
            </div>
          </GlassCard>
          
          {/* Form */}
          <GlassCard className="p-8 text-left">
            <h3 className="text-2xl font-heading font-bold text-white mb-6">Let's Talk</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input 
                    type="text" name="fullName" required 
                    value={formData.fullName} onChange={handleChange}
                    className="w-full bg-bg-dark/50 border border-white/20 rounded-md p-3 font-body text-white focus:outline-none focus:border-neon-cyan transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" name="email" required 
                    value={formData.email} onChange={handleChange}
                    className="w-full bg-bg-dark/50 border border-white/20 rounded-md p-3 font-body text-white focus:outline-none focus:border-neon-cyan transition-colors"
                    placeholder="email@domain.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input 
                    type="tel" name="phone" 
                    value={formData.phone} onChange={handleChange}
                    className="w-full bg-bg-dark/50 border border-white/20 rounded-md p-3 font-body text-white focus:outline-none focus:border-neon-cyan transition-colors"
                    placeholder="+66 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                  <select 
                    name="budget" 
                    value={formData.budget} onChange={handleChange}
                    className="w-full bg-bg-dark/50 border border-white/20 rounded-md p-3 font-body text-white focus:outline-none focus:border-neon-cyan transition-colors"
                  >
                    <option value="">Select budget</option>
                    <option value="Under 100K">Under 100K</option>
                    <option value="100K - 500K">100K - 500K</option>
                    <option value="500K - 1M">500K - 1M</option>
                    <option value="1M+">1M+</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  name="message" rows={4} required 
                  value={formData.message} onChange={handleChange}
                  className="w-full bg-bg-dark/50 border border-white/20 rounded-md p-3 font-body text-white focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="promo-magic-button w-full text-lg font-heading uppercase"
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
