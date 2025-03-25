import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

// Import images (you'll need to add these to your assets folder)
import heroImage from '../assets/hero-image.jpg';
import featureIcon1 from '../assets/icons/bill-analysis.svg';
import featureIcon2 from '../assets/icons/fee-detection.svg';
import featureIcon3 from '../assets/icons/savings.svg';
import testimonialAvatar1 from '../assets/testimonial-1.jpg';
import testimonialAvatar2 from '../assets/testimonial-2.jpg';

const LandingPage = () => {
  // Refs for animation elements
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    // Animation on scroll logic
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const fadeInElements = [heroRef, featuresRef, statsRef, testimonialsRef];
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    fadeInElements.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      fadeInElements.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section fade-in" ref={heroRef}>
        <div className="hero-content">
          <h1 className="hero-title">
            Stop Paying <span className="accent">Hidden Fees</span>
          </h1>
          <p className="hero-subtitle">
            We analyze your bills to detect and eliminate unnecessary charges, saving you money every month.
          </p>
          <div className="hero-cta">
            <Link to="/signup" className="cta-button primary">Start Saving Today</Link>
            <Link to="/how-it-works" className="cta-button secondary">How It Works</Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">$320</span>
              <span className="stat-text">Avg. Annual Savings</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">94%</span>
              <span className="stat-text">Success Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15k+</span>
              <span className="stat-text">Happy Customers</span>
            </div>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img src={heroImage} alt="Bill analysis visualization" className="hero-image" />
            <div className="hero-image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section fade-in" ref={featuresRef}>
        <div className="section-header">
          <h2 className="section-title">How We Help You Save</h2>
          <p className="section-subtitle">Our intelligent system analyzes your bills to find and eliminate hidden fees.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <img src={featureIcon1} alt="Bill Analysis" />
            </div>
            <h3 className="feature-title">Smart Bill Analysis</h3>
            <p className="feature-description">
              Our AI-powered system scans your bills to identify all charges and categorize them automatically.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src={featureIcon2} alt="Fee Detection" />
            </div>
            <h3 className="feature-title">Hidden Fee Detection</h3>
            <p className="feature-description">
              We flag unnecessary fees, overcharges, and billing errors that are costing you money each month.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src={featureIcon3} alt="Savings" />
            </div>
            <h3 className="feature-title">Automatic Savings</h3>
            <p className="feature-description">
              We help you dispute charges and negotiate lower rates with service providers on your behalf.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section fade-in" ref={statsRef}>
        <div className="stats-content">
          <h2 className="stats-title">Your Money Back Where It Belongs</h2>
          <p className="stats-subtitle">
            The average American household pays over $750 annually in unnecessary fees. We're changing that.
          </p>
          <div className="stats-grid">
            <div className="stat-block">
              <div className="stat-value">$3.8M+</div>
              <div className="stat-label">Saved for our customers</div>
            </div>
            <div className="stat-block">
              <div className="stat-value">12,400+</div>
              <div className="stat-label">Hidden fees eliminated</div>
            </div>
            <div className="stat-block">
              <div className="stat-value">98%</div>
              <div className="stat-label">Customer satisfaction</div>
            </div>
            <div className="stat-block">
              <div className="stat-value">4</div>
              <div className="stat-label">Minutes to get started</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section fade-in" ref={testimonialsRef}>
        <div className="section-header">
          <h2 className="section-title">What Our Users Say</h2>
          <p className="section-subtitle">Join thousands of satisfied customers who are saving money every month.</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "I was shocked to discover I had been paying over $200 a year in hidden fees on my phone bill. The service paid for itself within the first month!"
              </p>
              <div className="testimonial-meta">
                <img src={testimonialAvatar1} alt="Sarah J." className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Sarah J.</h4>
                  <p className="testimonial-position">Saved $243 annually</p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "The dashboard makes it so easy to see exactly what I'm being charged for. I've saved over $400 across all my utility bills since signing up six months ago."
              </p>
              <div className="testimonial-meta">
                <img src={testimonialAvatar2} alt="Michael T." className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Michael T.</h4>
                  <p className="testimonial-position">Saved $412 annually</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Stop Overpaying?</h2>
          <p className="cta-description">
            Join thousands of smart consumers who are keeping more of their hard-earned money.
          </p>
          <div className="cta-buttons">
            <Link to="/signup" className="cta-button primary">Get Started Free</Link>
            <Link to="/contact" className="cta-button secondary">Contact Us</Link>
          </div>
        </div>
        <div className="cta-pattern"></div>
      </section>
    </div>
  );
};

export default LandingPage;