
import React from 'react';

const facilities = [
  { icon: 'fa-wifi', title: 'High-Speed Wi-Fi', desc: 'Symmetrical 5G fiber connection for buffer-free online lectures.' },
  { icon: 'fa-snowflake', title: 'Climate Control', desc: 'Centralized AC ensuring a perfect 22°C environment all year.' },
  { icon: 'fa-chair', title: 'Supportive Seats', desc: 'Industrial grade ergonomic chairs built for 12+ hour sessions.' },
  { icon: 'fa-glass-water', title: 'RO Drinking Water', desc: 'Multi-stage RO purification with chilled water dispensers.' },
  { icon: 'fa-volume-mute', title: 'Deep Silence', desc: 'Strict no-talking policy enforced for absolute concentration.' },
  { icon: 'fa-video', title: 'Surveillance', desc: '360° AI-powered CCTV monitoring for 100% student safety.' },
];

const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="py-24 bg-brand-surface-light dark:bg-brand-surface-dark">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Designed for Focus</h2>
          <p className="text-lg md:text-xl opacity-70 leading-relaxed font-medium">
            We've eliminated every possible distraction. Here, the only thing you need to worry about is your next chapter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((f, i) => (
            <div 
              key={i} 
              className="p-10 rounded-3xl bg-brand-light dark:bg-brand-dark border-2 border-transparent hover:border-brand-accent-light dark:hover:border-brand-accent-dark hover:shadow-2xl transition-all group"
            >
              <div className="w-20 h-20 bg-brand-surface-light dark:bg-brand-surface-dark rounded-2xl flex items-center justify-center text-4xl text-brand-accent-light dark:text-brand-accent-dark mb-8 group-hover:bg-brand-accent-light dark:group-hover:bg-brand-accent-dark group-hover:text-white dark:group-hover:text-brand-dark transition-all shadow-sm">
                <i className={`fas ${f.icon}`}></i>
              </div>
              <h3 className="text-2xl font-black mb-4">{f.title}</h3>
              <p className="text-lg opacity-70 leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
