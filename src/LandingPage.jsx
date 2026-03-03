import React from 'react';
import './LandingPage.css'; // Assuming you have a CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Your Ultimate Solution</h1>
        <p>Get started with our incredible product that changes the way you manage your tasks.</p>
        <button>Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">Feature 1</div>
          <div className="feature-item">Feature 2</div>
          <div className="feature-item">Feature 3</div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <h2>Our Stats</h2>
        <div className="stat-item">1000+ Users</div>
        <div className="stat-item">99% Satisfaction Rate</div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>We make everything easy with our four-step process.</p>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Testimonials</h2>
        <blockquote>"This product has changed my life!" - Happy Customer</blockquote>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <h2>Pricing Plans</h2>
        <div className="pricing-item">Basic - $10</div>
        <div className="pricing-item">Pro - $20</div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">Question 1?</div>
        <div className="faq-item">Answer 1.</div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <h2>Ready to get started?</h2>
        <button>Sign Up Now</button>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;