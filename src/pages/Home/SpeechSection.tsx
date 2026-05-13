import React from 'react';

const SpeechSection: React.FC = () => {
  return (
    <section className="relative bg-[#121212] overflow-hidden min-h-[500px] flex items-center">
      {/* Background/Layout Container */}
      <div className="flex w-full h-full">
        
        {/* Main Content Area */}
        <div className="flex-1 flex items-center px-10 md:px-20 py-24">
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Quote & Profile */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end space-y-8">
              <div className="relative">
                {/* Quote Icon SVG */}
                <div className="absolute -top-6 -left-10 z-10">
                  <svg width="60" height="44" viewBox="0 0 60 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V44H24V18H10V0H0ZM36 0V44H60V18H46V0H36Z" fill="#c6ff00"/>
                  </svg>
                </div>
                
                {/* Profile Circle */}
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#333]">
                  <img 
                    src="/assets/profiles/rithvik.webp" 
                    alt="Rithvik" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Identity */}
              <div className="flex items-center gap-4 pl-8 border-l-2 border-[#c6ff00]">
                <div className="flex flex-col">
                  {/* <span className="text-white text-xl font-black uppercase tracking-tighter">Rithvik</span> */}
                  {/* <span className="text-neutral-500 text-xs font-bold uppercase tracking-widest">Marathoner</span> */}
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="lg:col-span-8 space-y-10">
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl font-black text-white capitalize tracking-tighter leading-tight max-w-2xl">
                  Beyond Heights Began At Home. When Our Founder Ranjani's Son, Rithvik, Was Diagnosed On The Autism Spectrum, There Were Answers But No Clear Path Forward. No System. No Structure. No Roadmap.
                </p>
                <p className="text-xl md:text-2xl font-bold text-neutral-400 max-w-2xl tracking-tight">
                  So, One Was Built—Step By Step.
                  Through Consistency And The Right Support, Rithvik Progressed.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-neutral-500 text-lg font-bold">From</p>
                <p className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter flex flex-wrap items-center gap-3">
                  Uncertainty 
                  <span className="text-[#c6ff00]">→</span> 
                  To Capability 
                  <span className="text-[#c6ff00]">→</span> 
                  To Becoming An Ultra-Marathoner, Now Training For An Ironman.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Far Right Lime Accent Panel */}
        <div className="hidden lg:block w-[15%] bg-[#c6ff00]" />
      </div>
    </section>
  );
};

export default SpeechSection;
