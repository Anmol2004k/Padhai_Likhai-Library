
import React, { useState } from 'react';

const faqs = [
  {
    q: "What are the library timings?",
    a: "Our library is open from 7:00 AM to 7:00 PM daily, including Sundays, to provide maximum study time for students."
  },
  {
    q: "Is there a safe place to keep my books?",
    a: "Yes, we provide personal lockers under our Premium Plan. These lockers are secure and accessible only by the respective student."
  },
  {
    q: "Can I take a trial before joining?",
    a: "Absolutely! We offer a 1-day free trial so you can experience our silent environment and facilities before making a commitment."
  },
  {
    q: "Is the Wi-Fi really fast enough for online classes?",
    a: "Yes, we have a high-speed fiber connection with multiple access points to ensure stable 5G speeds for live lectures and video downloads."
  },
  {
    q: "Are the cabins distracted-free?",
    a: "Our cabins are designed with partitions that ensure privacy and minimize visual distractions, helping you enter a deep state of focus."
  }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Common Questions</h2>
          <p className="text-slate-600">Everything you need to know about our study center.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <button 
                className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="font-bold text-slate-800">{faq.q}</span>
                <i className={`fas fa-chevron-down transition-transform duration-300 ${openIdx === i ? 'rotate-180' : ''}`}></i>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIdx === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-6 pt-0 text-slate-600 border-t border-slate-50">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
