
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-2/5 order-2 md:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/600/800?grayscale&v=1" 
                  alt="Gurgao Library Founders" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-2xl hidden lg:block">
                <div className="text-4xl font-bold mb-1">5+</div>
                <div className="text-xs uppercase tracking-tighter">Years of Legacy</div>
              </div>
            </div>
          </div>

          <div className="md:w-3/5 order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Guided by Professional Excellence</h2>
            <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
              <p>
                Founded and managed by a dedicated husband-and-wife duo, <strong>Gurgao Library</strong> is more than just a study space; it's a sanctuary for future leaders.
              </p>
              <p>
                The husband, a distinguished professional lawyer and property dealer, brings a sense of legality, ethics, and strong discipline to the institution. His vision was to create a place where students are respected and their time is valued.
              </p>
              <p>
                Together, they have successfully nurtured this library for over 5 years, fostering an environment where hundreds of aspirants have transformed their dreams into reality. 
              </p>
              <p className="font-medium italic text-blue-700">
                "Our goal is simple: To provide the same quality of silence and comfort that we would want for our own children. Your success is our reputation."
              </p>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                 <img src="https://picsum.photos/100/100?sig=1" alt="Founder Signature" />
               </div>
               <div>
                 <div className="font-bold">Founders & Managers</div>
                 <div className="text-sm text-slate-500">Gurgao Library</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
