import React from 'react';
import Hero from './Hero';
import Sponsors from './Sponsors';
import Awareness from './Awareness';
import Progress from './Progress';
import WalkSection from './WalkSection';
import WaysInSection from './WaysInSection';
import SpeechSection from './SpeechSection';

const Home: React.FC = () => {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <Hero />
      <Sponsors />
      <Awareness />
      <Progress />
      <WalkSection />
      <WaysInSection />
      <SpeechSection />
      {/* Other sections can be added here later */}
    </div>
  );
};

export default Home;
