
import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border-[0.5px] border-white"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Why Padhai Likhai Library Stands Out?</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">5+ Years of Trust</h3>
                  <p className="text-blue-100">We are the oldest and most trusted library in Ganaur with a proven track record.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Government Exam Specialists</h3>
                  <p className="text-blue-100">Hundreds of our students have successfully cleared SSC, UPSC, and Banking exams.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Management</h3>
                  <p className="text-blue-100">Personally managed by professionals who understand the value of discipline and hard work.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
            <div className="text-center mb-10">
              <div className="text-5xl font-bold text-amber-400 mb-2">98%</div>
              <div className="text-lg uppercase tracking-widest font-semibold">Student Satisfaction</div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold mb-1">2000+</div>
                <div className="text-xs text-blue-200">Total Students</div>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold mb-1">12h+</div>
                <div className="text-xs text-blue-200">Daily Access</div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-blue-800/50 rounded-2xl italic text-blue-100 text-sm">
              "The discipline here is unmatched. The owners treat every student like family and ensure no one disturbs the peaceful atmosphere."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
