import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const backgroundUrl = "https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/marathon%20website/hero%20Section/marathon%20hero%20image.jpg";
  const subImageUrl = "https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/marathon%20website/hero%20Section/hero%20sub%20image.jpg";

  return (
    <section className="relative min-h-[900px] h-screen w-full flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundUrl}')` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-20">
        {/* Left Column: Text & Buttons */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="space-y-4">
            <span className="text-[#c6ff00] text-sm md:text-base font-black tracking-[0.2em] italic uppercase">
              SALE UP TO 50% OFF!
            </span>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.85] text-white uppercase drop-shadow-2xl">
              RUN THAT CHANGES <br />
              <span className="text-white">WHAT HAPPENS NEXT</span>
            </h1>
            <p className="text-white/80 max-w-xl text-lg font-medium leading-relaxed italic">
              This isn't just a marathon. <br />
              It's a community coming together to change how children on the autism spectrum are supported.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
          <a 
            href="https://www.ticket360.co.in/event-details?event=NzAwfF58"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#c6ff00] text-black font-black uppercase text-sm tracking-widest rounded-none hover:bg-white transition-all duration-300 shadow-xl shadow-[#c6ff00]/20 active:scale-95 inline-block text-center"
          >
            REGISTER NOW
          </a>
           
          </div>
        </div>

        {/* Right Column: Event Card */}
        <div className="relative group animate-in fade-in slide-in-from-right duration-1000 delay-200">
           {/* Decorative elements */}
           <div className="absolute -inset-4 bg-[#c6ff00]/10 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
           
          <div className="relative bg-black/70 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-full max-w-[420px] ml-auto overflow-hidden">
            {/* NEW EVENT Badge */}
            <div className="absolute top-8 left-8 z-20">
              <span className="bg-[#c6ff00] text-black text-[10px] font-black px-3 py-1 rounded-sm uppercase tracking-tighter">
                NEW EVENT
              </span>
            </div>

            {/* Sub Image Container */}
            <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6">
              <img 
                src={subImageUrl} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Marathon Event"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-black italic tracking-tight text-white uppercase">
                Marathon Event 2026
              </h2>

              <div className="space-y-4 text-white/70">
                <div className="flex items-center gap-4 group/item">
                  <div className="w-8 h-8 rounded-lg bg-[#c6ff00] flex items-center justify-center text-black">
                    <Calendar size={18} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider">MAY 31, 2026</span>
                </div>
                
                <div className="flex items-center gap-4 group/item">
                  <div className="w-8 h-8 rounded-lg bg-[#c6ff00] flex items-center justify-center text-black">
                    <Clock size={18} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider italic">START 05:30 AM - UNTIL FINISH</span>
                </div>
                
                <div className="flex items-center gap-4 group/item">
                  <div className="w-8 h-8 rounded-lg bg-[#c6ff00] flex items-center justify-center text-black flex-shrink-0">
                    <MapPin size={18} strokeWidth={3} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wide leading-tight">
                    ADISSIA VIVAANA, PONGALIYUR | COIMBATORE - 641041
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        <div className="w-3 h-3 rounded-full bg-white opacity-40 cursor-pointer hover:opacity-100 transition-opacity" />
        <div className="w-3 h-3 rounded-full bg-[#c6ff00] cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-white opacity-40 cursor-pointer hover:opacity-100 transition-opacity" />
      </div>
    </section>
  );
};

export default Hero;
