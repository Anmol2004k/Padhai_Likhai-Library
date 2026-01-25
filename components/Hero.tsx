
import React from 'react';
import { trackEvent } from '../services/analytics';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-light dark:bg-brand-dark">
      {/* Visual background elements - dynamic depending on theme */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-brand-accent-light/5 dark:bg-brand-accent-dark/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 text-center md:text-left flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-3/5">
          <div className="inline-flex items-center gap-2 bg-brand-accent-light/10 dark:bg-brand-accent-dark/10 text-brand-accent-light dark:text-brand-accent-dark px-4 py-2 rounded-full text-sm font-black tracking-widest uppercase mb-8 border border-brand-accent-light/20">
            <i className="fas fa-check-circle"></i>
            5+ Years of Excellence
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-tight mb-8">
            The Ultimate <br/>
            <span className="gradient-text">Study Zone</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-text-light/80 dark:text-brand-text-dark/80 mb-12 max-w-2xl leading-relaxed">
            A premium, high-focus environment designed specifically for UPSC, SSC, and Banking aspirants. Zero distractions, maximum success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <a 
              href="#pricing"
              onClick={() => trackEvent('cta_click', { position: 'hero_primary' })}
              className="bg-brand-accent-light dark:bg-brand-accent-dark text-white dark:text-brand-dark px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <i className="fas fa-graduation-cap"></i> Start Now
            </a>
            <a 
              href="https://wa.me/910000000000"
              onClick={() => trackEvent('whatsapp_click', { position: 'hero' })}
              className="bg-brand-surface-light dark:bg-brand-surface-dark text-brand-text-light dark:text-brand-text-dark border-2 border-brand-accent-light/20 px-10 py-5 rounded-2xl font-black text-xl hover:bg-brand-accent-light/5 transition-all flex items-center justify-center gap-3"
            >
              <i className="fab fa-whatsapp text-green-500"></i> WhatsApp
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-8 border-t border-brand-surface-light dark:border-brand-surface-dark pt-10">
            <div>
              <div className="text-3xl font-black text-brand-accent-light dark:text-brand-accent-dark mb-1">500+</div>
              <div className="text-sm font-bold uppercase tracking-wider opacity-60">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl font-black text-brand-accent-light dark:text-brand-accent-dark mb-1">100%</div>
              <div className="text-sm font-bold uppercase tracking-wider opacity-60">Silent Zone</div>
            </div>
            <div className="hidden lg:block">
              <div className="text-3xl font-black text-brand-accent-light dark:text-brand-accent-dark mb-1">24/7</div>
              <div className="text-sm font-bold uppercase tracking-wider opacity-60">Secure Campus</div>
            </div>
          </div>
        </div>

        <div className="md:w-2/5 relative">
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-8 border-brand-surface-light dark:border-brand-surface-dark transform md:rotate-3">
            <img 
              src="https://picsum.photos/1200/1600?grayscale&v=hero" 
              alt="Premium Library Seating" 
              className="w-full h-full object-cover grayscale brightness-110 contrast-125"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent-light dark:bg-brand-accent-dark rounded-full -z-10 mix-blend-multiply opacity-20 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
