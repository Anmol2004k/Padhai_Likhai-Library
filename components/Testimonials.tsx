
import React from 'react';

const testimonials = [
  { 
    name: 'Sandeep Kumar', 
    target: 'SSC CGL Selected', 
    text: 'The silence at Gurgao Library is unmatched. I spent 10 hours daily here and cleared my exams in the first attempt. The owners are very supportive.',
    img: 'https://picsum.photos/100/100?sig=10'
  },
  { 
    name: 'Priya Sharma', 
    target: 'Bank PO Aspirant', 
    text: 'Finally found a library in Gurgao that actually maintains AC and Wi-Fi properly. The premium plan with a locker is a lifesaver for my books.',
    img: 'https://picsum.photos/100/100?sig=11'
  },
  { 
    name: 'Amit Dahiya', 
    target: 'UPSC Candidate', 
    text: 'I have tried many libraries in Gurgao, but the discipline here is at par with Top institutes. Highly recommended for serious aspirants.',
    img: 'https://picsum.photos/100/100?sig=12'
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Success Stories</h2>
          <p className="text-slate-600">Hear from our students who achieved their dreams here.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 italic relative">
              <div className="absolute top-0 right-10 -translate-y-1/2 text-6xl text-blue-200">
                <i className="fas fa-quote-right"></i>
              </div>
              <p className="text-slate-700 mb-8 relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border-2 border-blue-100" />
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-blue-600 font-bold uppercase tracking-wider">{t.target}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
