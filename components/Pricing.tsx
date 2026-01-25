
import React from 'react';
import { trackEvent } from '../services/analytics';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-light dark:bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Investment in Success</h2>
          <p className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto font-medium">
            Join the elite club of aspirants who prioritize their environment. Choose your path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-brand-surface-light dark:bg-brand-surface-dark p-12 rounded-[40px] border-2 border-brand-accent-light/10 dark:border-white/5 hover:border-brand-accent-light transition-all flex flex-col shadow-lg">
            <div className="mb-10">
              <h3 className="text-3xl font-black mb-3">Essentials</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-black">₹500</span>
                <span className="text-xl font-bold opacity-50">/ month</span>
              </div>
            </div>
            
            <ul className="space-y-6 mb-12 flex-grow">
              <li className="flex items-center gap-4 text-lg font-bold">
                <i className="fas fa-check text-brand-accent-light dark:text-brand-accent-dark"></i>
                Comfortable Seating
              </li>
              <li className="flex items-center gap-4 text-lg font-bold">
                <i className="fas fa-check text-brand-accent-light dark:text-brand-accent-dark"></i>
                Climate Controlled AC
              </li>
              <li className="flex items-center gap-4 text-lg font-bold">
                <i className="fas fa-check text-brand-accent-light dark:text-brand-accent-dark"></i>
                Gigabit Wi-Fi Access
              </li>
              <li className="flex items-center gap-4 text-lg font-bold">
                <i className="fas fa-check text-brand-accent-light dark:text-brand-accent-dark"></i>
                RO Drinking Water
              </li>
            </ul>

            <button 
              onClick={() => trackEvent('pricing_click', { plan: 'Basic' })}
              className="w-full py-5 rounded-2xl border-4 border-brand-text-light dark:border-brand-text-dark font-black text-xl hover:bg-brand-text-light hover:text-white dark:hover:bg-brand-text-dark dark:hover:text-brand-dark transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-brand-accent-light dark:bg-brand-accent-dark p-12 rounded-[40px] text-white dark:text-brand-dark shadow-[0_30px_60px_-15px_rgba(217,119,6,0.5)] dark:shadow-[0_30px_60px_-15px_rgba(251,191,36,0.3)] relative overflow-hidden flex flex-col md:scale-105 z-10 border-4 border-brand-accent-light dark:border-brand-accent-dark">
            <div className="absolute top-8 right-[-35px] bg-brand-text-light dark:bg-brand-text-dark text-white dark:text-brand-accent-dark text-xs font-black px-12 py-2 rotate-45 shadow-lg">
              BEST VALUE
            </div>
            
            <div className="mb-10">
              <h3 className="text-3xl font-black mb-3">Premium Pro</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-black">₹800</span>
                <span className="text-xl font-bold opacity-80">/ month</span>
              </div>
            </div>
            
            <ul className="space-y-6 mb-12 flex-grow">
              <li className="flex items-center gap-4 text-lg font-black">
                <i className="fas fa-star text-brand-text-light dark:text-brand-text-dark"></i>
                Personal Secure Locker
              </li>
              <li className="flex items-center gap-4 text-lg font-black">
                <i className="fas fa-star text-brand-text-light dark:text-brand-text-dark"></i>
                Extra Large Workspace
              </li>
              <li className="flex items-center gap-4 text-lg font-black">
                <i className="fas fa-star text-brand-text-light dark:text-brand-text-dark"></i>
                Dedicated Comfort Seating
              </li>
              <li className="flex items-center gap-4 text-lg font-black">
                <i className="fas fa-star text-brand-text-light dark:text-brand-text-dark"></i>
                Unlimited Everything
              </li>
            </ul>

            <button 
              onClick={() => trackEvent('pricing_click', { plan: 'Premium' })}
              className="w-full py-5 rounded-2xl bg-brand-text-light dark:bg-brand-text-dark text-white dark:text-brand-accent-dark font-black text-xl hover:scale-[1.02] transition-all shadow-2xl"
            >
              Go Premium Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
