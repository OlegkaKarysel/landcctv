import React, { useEffect, useState } from 'react';
import { IntersectionObserver } from 'react-intersection-observer';
import { Star, CheckCircle } from 'lucide-react';

const LandingPage = () => {
  // State for counters
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(c => c + 1);
  };

  useEffect(() => {
    const timer = setInterval(incrementCounter, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white min-h-screen p-5">
      {/* Navbar */}
      <nav className="flex justify-between items-center fixed top-0 left-0 right-0 p-5 bg-transparent z-10">
        <div className="text-xl font-bold">Surveillance Service</div>
        <div className="hidden md:flex space-x-5">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="md:hidden">
          <button className="focus:outline-none">Menu</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-5xl font-bold animate__animated animate__fadeIn">Secure Your Home with Our Service</h1>
        <p className="mt-5 text-lg animate__animated animate__fadeIn">Comprehensive video surveillance tailored for Moscow region.</p>
        <button className="mt-5 px-4 py-2 bg-white text-blue-500 rounded-full hover:bg-gray-200">Get Started</button>
      </section>

      {/* Features Cards */}
      <section id="features" className="py-20">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="flex flex-wrap justify-center mt-10">
          {/* Example Feature Card */}
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="m-5 p-5 border rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <Star className="h-8 w-8 mb-3" />
              <h3 className="font-semibold text-xl">Feature {idx + 1}</h3>
              <p>Description of feature {idx + 1}.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Our Stats</h2>
        <div className="flex justify-around mt-10">
          <div>
            <h3 className="text-5xl font-bold">{count}</h3>
            <p>Happy Customers</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">500+</h3>
            <p>Installations</p>
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center">How It Works</h2>
        <div className="flex justify-between mt-10">
          {["Step 1", "Step 2", "Step 3"].map((step, idx) => (
            <div key={idx} className="w-1/3 p-5 border rounded-lg text-center">
              <CheckCircle className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold text-xl">{step}</h3>
              <p>Description of {step.toLowerCase()}.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <div className="flex flex-wrap justify-center mt-10">
          {["Testimonial 1", "Testimonial 2", "Testimonial 3"].map((text, idx) => (
            <blockquote key={idx} className="m-5 p-5 border rounded-lg shadow-lg">
              <p>{text}</p>
              <footer>- Customer {idx + 1}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-20">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <div className="flex justify-center mt-10">
          {["Basic", "Standard", "Premium"].map((plan, idx) => (
            <div key={idx} className="m-5 border rounded-lg p-5">
              <h3 className="font-semibold text-xl">{plan} Plan</h3>
              <p>Details for {plan.toLowerCase()} plan.</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 rounded text-white">Choose Plan</button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-20">
        <h2 className="text-3xl font-bold text-center">FAQ</h2>
        <div className="mt-10">
          {["Question 1", "Question 2", "Question 3"].map((question, idx) => (
            <details key={idx} className="border-b mb-2">
              <summary className="cursor-pointer font-semibold">{question}</summary>
              <p>Answer to {question.toLowerCase()}.</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-blue-500 text-white text-center">
        <h2 className="text-3xl">Ready to Secure Your Home?</h2>
        <button className="mt-5 px-4 py-2 bg-white text-blue-500 rounded-full">Get Started</button>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-gray-800 text-center">
        <p>© 2026 Surveillance Service - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default LandingPage;