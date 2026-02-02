
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded font-bold text-lg">P</div>
              <span className="text-xl font-bold">Padhai <span className="text-blue-500">Likhai</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Ganaur's leading study library providing a premium environment for aspirants to focus, learn, and succeed. Managed by professionals for the past 5+ years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#facilities" className="hover:text-blue-500 transition-colors">Facilities</a></li>
              <li><a href="#pricing" className="hover:text-blue-500 transition-colors">Pricing Plans</a></li>
              <li><a href="#testimonials" className="hover:text-blue-500 transition-colors">Success Stories</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Locker Safety</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Rules & Regulations</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Reach Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex gap-3">
                <i className="fas fa-map-marker-alt text-blue-500 pt-1"></i>
                <span>Jai Bharat Colony, Ganaur, Sonipat</span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-phone text-blue-500 pt-1"></i>
                <span>+91 75033-00060</span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-envelope text-blue-500 pt-1"></i>
                <span>info@padhailikhailibrary.com</span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-clock text-blue-500 pt-1"></i>
                <span>Open: 7 AM - 7 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Padhai Likhai Library. All rights reserved. Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
