import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

// Import team images (you'll need to add these to your assets folder)
import founderImage from '../assets/team/founder.jpg';
import ctoImage from '../assets/team/cto.jpg';
import designerImage from '../assets/team/designer.jpg';
import analystImage from '../assets/team/analyst.jpg';
import aboutHeroImage from '../assets/about-hero.jpg';
import missionImage from '../assets/mission.jpg';

const About = () => {
  // Refs for animation elements
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    // Animation on scroll logic
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const fadeInElements = [heroRef, missionRef, teamRef, valuesRef];
    
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
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-section fade-in" ref={heroRef}>
        <div className="about-hero-content">
          <h1 className="about-hero-title">Our Mission to End Hidden Fees</h1>
          <p className="about-hero-subtitle">
            We're on a mission to help consumers stop paying for services they don't need and fees they shouldn't be charged.
          </p>
        </div>
        <div className="about-hero-image-container">
          <img src={aboutHeroImage} alt="Team working together" className="about-hero-image" />
          <div className="about-hero-image-overlay"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section fade-in" ref={missionRef}>
        <div className="mission-content">
          <div className="mission-text">
            <h2 className="section-title">Why We Started This Journey</h2>
            <p className="mission-paragraph">
              It all began when our founder was reviewing his own phone bill and noticed he was paying for services he never requested. After hours spent on the phone with customer service, he finally got the charges removed — but realized most people don't have the time or knowledge to fight these battles.
            </p>
            <p className="mission-paragraph">
              We built this platform to automatically detect and dispute hidden fees, questionable charges, and unnecessary services that inflate your monthly bills. Our technology does the heavy lifting, so you don't have to spend hours analyzing fine print or negotiating with service providers.
            </p>
            <p className="mission-paragraph">
              Today, we've helped thousands of customers save millions of dollars collectively on their monthly bills. But we're just getting started.
            </p>
          </div>
          <div className="mission-image-container">
            <img src={missionImage} alt="Our mission visualization" className="mission-image" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section fade-in" ref={teamRef}>
        <div className="section-header">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">The experts dedicated to uncovering hidden fees and saving you money.</p>
        </div>
        <div className="team-grid">
          <div className="team-member">
            <div className="team-member-image-container">
              <img src={founderImage} alt="Alex Johnson" className="team-member-image" />
            </div>
            <h3 className="team-member-name">Alex Johnson</h3>
            <p className="team-member-role">Founder & CEO</p>
            <p className="team-member-bio">
              Former consumer rights attorney with a passion for transparency in billing practices.
            </p>
          </div>
          <div className="team-member">
            <div className="team-member-image-container">
              <img src={ctoImage} alt="Maya Patel" className="team-member-image" />
            </div>
            <h3 className="team-member-name">Maya Patel</h3>
            <p className="team-member-role">CTO</p>
            <p className="team-member-bio">
              AI specialist who built our bill analysis algorithm after 10 years in fintech.
            </p>
          </div>
          <div className="team-member">
            <div className="team-member-image-container">
              <img src={designerImage} alt="David Chen" className="team-member-image" />
            </div>
            <h3 className="team-member-name">David Chen</h3>
            <p className="team-member-role">Head of Design</p>
            <p className="team-member-bio">
              UX expert focused on making complex financial information easy to understand.
            </p>
          </div>
          <div className="team-member">
            <div className="team-member-image-container">
              <img src={analystImage} alt="Sarah Williams" className="team-member-image" />
            </div>
            <h3 className="team-member-name">Sarah Williams</h3>
            <p className="team-member-role">Lead Data Analyst</p>
            <p className="team-member-bio">
              Former utility company analyst who knows all the industry's billing tactics.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section fade-in" ref={valuesRef}>
        <div className="section-header">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">The principles that guide everything we do.</p>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-number">01</div>
            <h3 className="value-title">Transparency</h3>
            <p className="value-description">
              We believe consumers deserve complete clarity about what they're paying for and why.
            </p>
          </div>
          <div className="value-card">
            <div className="value-number">02</div>
            <h3 className="value-title">Fairness</h3>
            <p className="value-description">
              We're committed to leveling the playing field between service providers and consumers.
            </p>
          </div>
          <div className="value-card">
            <div className="value-number">03</div>
            <h3 className="value-title">Empowerment</h3>
            <p className="value-description">
              We equip people with the knowledge and tools to take control of their finances.
            </p>
          </div>
          <div className="value-card">
            <div className="value-number">04</div>
            <h3 className="value-title">Innovation</h3>
            <p className="value-description">
              We continuously improve our technology to stay ahead of new billing tactics.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="about-cta-content">
          <h2 className="about-cta-title">Join Our Mission</h2>
          <p className="about-cta-description">
            Help us create a world where billing is fair, transparent, and free from hidden charges.
          </p>
          <div className="about-cta-buttons">
            <Link to="/signup" className="cta-button primary">Create Account</Link>
            <Link to="/contact" className="cta-button secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;