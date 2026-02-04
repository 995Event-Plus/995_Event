import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyUs } from './components/WhyUs';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { GeminiAssistant } from './components/GeminiAssistant';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-neon-cyan selection:text-bg-dark">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Portfolio />
        <GeminiAssistant />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
