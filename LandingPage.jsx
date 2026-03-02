import React from 'react';
import { IconCamera, IconShield, IconVideo } from 'lucide-react';
import './LandingPage.css'; // Assuming you will create a CSS file for additional styling

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 to-cyan-600 min-h-screen flex flex-col items-center justify-center text-white">
      <header className="w-full p-4 text-center shadow-lg">
        <h1 className="text-5xl font-bold">Moscow Video Surveillance</h1>
        <p className="mt-2 text-xl">Safeguarding your space with modern technology</p>
      </header>

      <section id="features" className="my-20">
        <h2 className="text-4xl font-semibold mb-6">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-xl glassmorphism text-black">
            <IconCamera className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold">High-Quality Video</h3>
            <p>Experience crystal clear video quality at all times.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl glassmorphism text-black">
            <IconShield className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold">Reliable Security</h3>
            <p>Your safety is our top priority with robust security features.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl glassmorphism text-black">
            <IconVideo className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold">Live Streaming</h3>
            <p>Watch live feeds from your camera anywhere, anytime.</p>
          </div>
        </div>
      </section>

      <section id="cta" className="text-center my-20">
        <h2 className="text-3xl font-bold">Get Started Today!</h2>
        <p className="mt-4 mb-8">Join dozens of satisfied customers and secure your property today.</p>
        <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">Contact Us</button>
      </section>

      <footer className="w-full text-center p-4">
        <p>&copy; 2026 Moscow Video Surveillance. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;