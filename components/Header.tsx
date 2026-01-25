
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Facilities', href: '#facilities' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Success', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-brand-light/95 dark:bg-brand-dark/95 backdrop-blur-md py-3 shadow-lg border-brand-accent-light/10 dark:border-white/5' 
          : 'bg-transparent py-5 border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" onClick={handleLinkClick} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-accent-light dark:bg-brand-accent-dark text-brand-light dark:text-brand-dark flex items-center justify-center rounded-lg font-bold text-xl group-hover:rotate-12 transition-transform shadow-md">
            P
          </div>
          <span className={`text-xl font-bold tracking-tight hidden sm:block`}>
            Padhai <span className="text-brand-accent-light dark:text-brand-accent-dark">Likhai</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold transition-colors hover:text-brand-accent-light dark:hover:text-brand-accent-dark"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-accent-light/20 text-brand-accent-light dark:text-brand-accent-dark hover:scale-110 transition-transform"
            aria-label="Toggle Theme"
          >
            <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} text-lg`}></i>
          </button>

          <a 
            href="tel:+910000000000" 
            className="bg-brand-accent-light dark:bg-brand-accent-dark text-white dark:text-brand-dark px-6 py-2.5 rounded-full text-sm font-black shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            Call Now
          </a>
        </nav>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-accent-light/10 text-brand-accent-light dark:text-brand-accent-dark"
          >
            <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
          </button>
          <button 
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-brand-light dark:bg-brand-dark border-t border-brand-accent-light/10 dark:border-white/5 transition-all duration-300 shadow-2xl mobile-menu-transition ${
          isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <nav className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xl font-black border-b border-brand-surface-light dark:border-brand-surface-dark pb-3"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+910000000000"
            className="w-full bg-brand-accent-light dark:bg-brand-accent-dark text-white dark:text-brand-dark py-4 rounded-xl text-center font-black text-lg shadow-lg"
          >
            Join Today
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
