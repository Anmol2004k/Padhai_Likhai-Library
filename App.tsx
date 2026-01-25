
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { trackEvent } from './services/analytics';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    trackEvent('page_view', { page_title: 'Home', theme_preference: theme });
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-brand-accent-light selection:text-white dark:selection:bg-brand-accent-dark">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Facilities />
        <WhyChooseUs />
        <AboutUs />
        <Pricing />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Action Buttons for Mobile */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50 md:hidden">
        <a 
          href="https://wa.me/910000000000" 
          onClick={() => trackEvent('whatsapp_click', { position: 'floating' })}
          className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-700 transition-transform active:scale-95 border-2 border-white/20"
          aria-label="WhatsApp Us"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>
        <a 
          href="tel:+910000000000" 
          onClick={() => trackEvent('call_click', { position: 'floating' })}
          className="w-14 h-14 bg-blue-700 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-800 transition-transform active:scale-95 border-2 border-white/20"
          aria-label="Call Us"
        >
          <i className="fas fa-phone text-xl"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
