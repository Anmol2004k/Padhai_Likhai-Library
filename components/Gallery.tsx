
import React from 'react';

const images = [
  { url: 'https://picsum.photos/800/600?sig=1', alt: 'Spacious Study Hall at Padhai Likhai Library Ganaur' },
  { url: 'https://picsum.photos/800/600?sig=2', alt: 'Individual Study Cabins with Modern Lighting' },
  { url: 'https://picsum.photos/800/600?sig=3', alt: 'Secure Personal Lockers for Students' },
  { url: 'https://picsum.photos/800/600?sig=4', alt: 'Comfortable Ergonomic Chairs for Long Study Hours' },
  { url: 'https://picsum.photos/800/600?sig=5', alt: 'Clean and Purified Water Facility' },
  { url: 'https://picsum.photos/800/600?sig=6', alt: 'Silent Zone for Deep Focus Concentration' },
];

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Environment</h2>
          <p className="text-slate-600">Take a virtual tour of your future success zone.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden shadow-md">
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
