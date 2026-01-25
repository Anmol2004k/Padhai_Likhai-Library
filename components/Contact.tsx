
import React, { useState } from 'react';
import { trackEvent } from '../services/analytics';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', plan: 'Basic' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('contact_form_submit', formState);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-brand-surface-light dark:bg-brand-surface-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-10">Connect With Us</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="p-8 rounded-3xl bg-brand-light dark:bg-brand-dark shadow-lg border-2 border-brand-accent-light/10">
                <div className="w-12 h-12 bg-brand-accent-light/10 text-brand-accent-light dark:text-brand-accent-dark rounded-xl flex items-center justify-center mb-6 text-xl">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h4 className="font-black text-xl mb-2">Find Us</h4>
                <p className="opacity-70 font-medium">Jai Bharat Colony, Ganaur, Sonipat, Haryana 131101</p>
              </div>

              <div className="p-8 rounded-3xl bg-brand-light dark:bg-brand-dark shadow-lg border-2 border-brand-accent-light/10">
                <div className="w-12 h-12 bg-green-500/10 text-green-600 rounded-xl flex items-center justify-center mb-6 text-xl">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <h4 className="font-black text-xl mb-2">WhatsApp</h4>
                <p className="opacity-70 font-medium">+91 000 000 0000</p>
              </div>
            </div>

            <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-brand-light dark:border-brand-dark h-96 relative group">
              <div className="absolute inset-0 bg-brand-accent-light/5 pointer-events-none z-10"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.0827101869824!2d77.0205!3d29.1307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da57f6a735c0d%3A0xe7f989f664539860!2sPadhai%20Likhai%20Library!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Map Location"
              ></iframe>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-brand-light dark:bg-brand-dark p-12 rounded-[40px] shadow-2xl border-2 border-brand-accent-light/20">
              <h3 className="text-3xl font-black mb-8">Secure Your Trial Seat</h3>
              {submitted ? (
                <div className="text-center py-16 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 text-4xl shadow-xl shadow-green-500/30">
                    <i className="fas fa-check"></i>
                  </div>
                  <h4 className="text-3xl font-black mb-4">You're On The List!</h4>
                  <p className="text-lg opacity-70 font-bold">Our team will call you within 15 minutes to confirm your slot.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="block text-sm font-black uppercase tracking-widest mb-3 opacity-60">Your Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-6 py-5 rounded-2xl bg-brand-surface-light dark:bg-brand-surface-dark border-2 border-transparent focus:border-brand-accent-light dark:focus:border-brand-accent-dark outline-none transition-all text-lg font-bold"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-black uppercase tracking-widest mb-3 opacity-60">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full px-6 py-5 rounded-2xl bg-brand-surface-light dark:bg-brand-surface-dark border-2 border-transparent focus:border-brand-accent-light dark:focus:border-brand-accent-dark outline-none transition-all text-lg font-bold"
                      placeholder="+91 12345 67890"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-black uppercase tracking-widest mb-3 opacity-60">Interest Level</label>
                    <select 
                      className="w-full px-6 py-5 rounded-2xl bg-brand-surface-light dark:bg-brand-surface-dark border-2 border-transparent focus:border-brand-accent-light dark:focus:border-brand-accent-dark outline-none transition-all text-lg font-bold appearance-none cursor-pointer"
                      value={formState.plan}
                      onChange={(e) => setFormState({...formState, plan: e.target.value})}
                    >
                      <option value="Basic">Basic Access (₹500)</option>
                      <option value="Premium">Premium Pro (₹800)</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-brand-accent-light dark:bg-brand-accent-dark text-white dark:text-brand-dark py-6 rounded-2xl font-black text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-brand-accent-light/20"
                  >
                    Confirm My Session
                  </button>
                  <p className="text-center opacity-40 text-sm font-bold">
                    * No payment required for 1-day free trial.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
