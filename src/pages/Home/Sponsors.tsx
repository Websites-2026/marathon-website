import React from 'react';

const Sponsors: React.FC = () => {
  const sponsorImage = "https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/marathon%20website/hero%20Section/image%202.png";
  const sponsors = [1, 2, 3, 4, 5];

  return (
    <section className="bg-neutral-950 border-t border-white/5 py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-16 gap-y-10 opacity-60 hover:opacity-100 transition-opacity duration-700">
          {sponsors.map((_, index) => (
            <div 
              key={index} 
              className="grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer hover:scale-110"
            >
              <img 
                src={sponsorImage} 
                alt={`Sponsor ${index + 1}`} 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
