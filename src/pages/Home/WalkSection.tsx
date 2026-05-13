import React from 'react';
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';

const WalkSection: React.FC = () => {
  const backgroundUrl = "https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/marathon%20website/hero%20Section/runner%20background.png";

  const events = [
    {
      id: 1,
      title: '3 KM Walk',
      image: "https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/marathon%20website/hero%20Section/runner%201.png",
      price: '350',
      theme: 'lime',
    },
    {
      id: 2,
      title: '5 KM Marathon',
      image: "https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/marathon%20website/hero%20Section/runner%202.png",
      price: '400',
      theme: 'white',
    },
    {
      id: 3,
      title: '10 KM Marathon',
      image: "https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/marathon%20website/hero%20Section/runner%203.png",
      price: '500',
      theme: 'white',
    },
  ];

  return (
    <section className="relative py-32 px-6 md:px-10 overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('${backgroundUrl}')` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Header */}
        <div className="space-y-2">
          <span className="text-[#c6ff00] text-sm font-black tracking-widest uppercase italic">
            EVENTS
          </span>
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white uppercase">
            WALK AND MARATHON EVENTS
          </h2>
        </div>

        {/* Tickets Container */}
        <div className="flex flex-col gap-10">
          {events.map((event) => (
            <div key={event.id} className="relative w-full max-w-5xl mx-auto h-[320px] md:h-[280px] group transition-all duration-500 hover:scale-[1.01]">
              
              {/* Main Ticket Container (FLEX) */}
              <div className="flex h-full w-full overflow-hidden shadow-2xl">
                
                {/* Left Side: Info (Arrow Shape) */}
                <div 
                  className={`relative z-20 w-[60%] md:w-[35%] h-full flex flex-col justify-center px-8 space-y-6 transition-colors duration-500
                    ${event.theme === 'lime' ? 'bg-[#c6ff00] text-black' : 'bg-white text-black'}`}
                  style={{ 
                    clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)' 
                  }}
                >
                  <h3 className="text-2xl font-black italic uppercase tracking-tight leading-tight">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 opacity-80">
                    <div className="flex items-center gap-3">
                      <MapPin size={14} strokeWidth={3} className={event.theme === 'lime' ? 'text-black' : 'text-[#c6ff00]'} />
                      <span className="text-[10px] font-black uppercase tracking-wider">RPM SCHOOL, MULLAI NAGAR, VADAVALLI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar size={14} strokeWidth={3} className={event.theme === 'lime' ? 'text-black' : 'text-[#c6ff00]'} />
                      <span className="text-[10px] font-black uppercase tracking-wider">MAY 31, 2026</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={14} strokeWidth={3} className={event.theme === 'lime' ? 'text-black' : 'text-[#c6ff00]'} />
                      <span className="text-[10px] font-black uppercase tracking-wider italic">START 05:30 AM - UNTIL FINISH</span>
                    </div>
                  </div>
                </div>

                {/* Center: Image */}
                <div className="relative flex-1 z-0 -ml-12 -mr-12 md:-ml-10 md:-mr-10 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Right Side: Price (Arrow Shape) */}
                <div 
                  className={`relative z-20 w-[55%] md:w-[30%] h-full flex flex-col items-center justify-center space-y-4 px-6 transition-colors duration-500
                    ${event.theme === 'lime' ? 'bg-[#c6ff00] text-black' : 'bg-white text-black'}`}
                  style={{ 
                    clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%)' 
                  }}
                >
                  <div className="text-center group-hover:scale-110 transition-transform duration-300">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-neutral-500">Ticket</span>
                    <div className="flex items-start justify-center gap-1">
                      <span className="text-4xl font-black tracking-tighter">₹{event.price}</span>
                      <span className="text-[10px] mt-2 font-bold opacity-60">/ticket</span>
                    </div>
                  </div>

                  <a 
                    href="https://www.ticket360.co.in/event-details?event=NzAwfF58"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 flex items-center gap-2 group-hover:translate-x-1 ${
                    event.theme === 'lime' ? 'bg-white text-black hover:bg-black hover:text-white' : 'bg-[#c6ff00] text-black hover:bg-black hover:text-white'
                  }`}
                  >
                    LEARN MORE
                    <ArrowRight size={12} strokeWidth={3} />
                  </a>
                </div>

              </div>

              {/* Decorative side accent lines (like in original) */}
              <div className="absolute top-2 bottom-2 right-1 w-1 bg-white opacity-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WalkSection;
