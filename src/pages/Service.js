import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

// Import images (you'll need to add these to your assets folder)
import phoneIcon from '../assets/icons/phone-bill.svg';
import utilityIcon from '../assets/icons/utility-bill.svg';
import internetIcon from '../assets/icons/internet-bill.svg';
import cableIcon from '../assets/icons/cable-bill.svg';
import insuranceIcon from '../assets/icons/insurance-bill.svg';
import subscriptionIcon from '../assets/icons/subscription-bill.svg';
import processImage1 from '../assets/process-1.jpg';
import processImage2 from '../assets/process-2.jpg';
import processImage3 from '../assets/process-3.jpg';

const Service = () => {
  // State for FAQ accordion
  const [activeIndex, setActiveIndex] = useState(null);
  
  // Refs for animation elements
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);

  // Toggle FAQ accordion
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // Animation on scroll logic
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const fadeInElements = [heroRef, servicesRef, processRef, faqRef];
    
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

  // FAQ data
  const faqItems = [
    {
      question: "How do you identify hidden fees on my bills?",
      answer: "Our proprietary algorithm analyzes your bills line by line, comparing charges against our extensive database of known fees and industry practices. We flag any charges that are potentially unnecessary, excessive, or were added without proper notification."
    },
    {
      question: "What types of bills can you analyze?",
      answer: "We can analyze phone bills, utility bills (electricity, water, gas), internet and cable packages, insurance policies, and subscription services. We're continually expanding our capabilities to cover more bill types."
    },
    {
      question: "How much does your service cost?",
      answer: "We offer a basic free plan that scans up to 2 bills per month. Our premium plan at $9.99/month provides unlimited bill analysis, automatic monitoring for new fees, and dedicated support for disputing charges. We only charge if we successfully save you money above our fee."
    },
    {
      question: "Can you actually get these fees removed from my bills?",
      answer: "Yes! Once we identify problematic charges, we provide you with detailed dispute instructions customized for your specific provider. Premium users can also opt to have our team handle the dispute process directly with your service providers on your behalf."
    },
    {
      question: "How long does it take to see savings?",
      answer: "Most users see their first savings within their first billing cycle. For more complex cases or providers that are resistant to removing fees, it may take 2-3 billing cycles to resolve disputes and implement changes."
    },
    {
      question: "Do I need to provide my account passwords?",
      answer: "No, we never ask for your account passwords. You can either upload bill PDFs or screenshots, or forward email bills to our secure processing address. For some providers, we offer a secure connection method that doesn't require sharing your password."
    }
  ];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero-section fade-in" ref={heroRef}>
        <div className="service-hero-content">
          <h1 className="service-hero-title">Our Bill Analysis Services</h1>
          <p className="service-hero-subtitle">
            Cutting-edge technology that identifies and helps eliminate hidden fees in your recurring bills.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section fade-in" ref={servicesRef}>
        <div className="section-header">
          <h2 className="section-title">Bill Types We Analyze</h2>
          <p className="section-subtitle">
            Our specialized algorithms scan across multiple bill types to maximize your savings.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img src={phoneIcon} alt="Phone Bill Icon" />
            </div>
            <h3 className="service-title">Phone Bills</h3>
            <p className="service-description">
              We identify unnecessary add-ons, roaming charges, and fees for services you never requested.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src={utilityIcon} alt="Utility Bill Icon" />
            </div>
            <h3 className="service-title">Utility Bills</h3>
            <p className="service-description">
              We detect erroneous meter readings, regulatory fees, and surcharges that may be improperly applied.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src={internetIcon} alt="Internet Bill Icon" />
            </div>
            <h3 className="service-title">Internet Bills</h3>
            <p className="service-description">
              We check for equipment rental fees, speed tier mismatches, and promotional period expirations.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src={cableIcon} alt="Cable Bill Icon" />
            </div>
            <h3 className="service-title">Cable TV Bills</h3>
            <p className="service-description">
              We find channel package overcharges, unauthorized premium additions, and outdated equipment fees.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src={insuranceIcon} alt="Insurance Bill Icon" />
            </div>
            <h3 className="service-title">Insurance Bills</h3>
            <p className="service-description">
              We review coverage duplications, unnecessary riders, and improper rate increases.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src={subscriptionIcon} alt="Subscription Bill Icon" />
            </div>
            <h3 className="service-title">Subscription Services</h3>
            <p className="service-description">
              We track multiple subscriptions, identify unused services, and flag unexpected price increases.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section fade-in" ref={processRef}>
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Our streamlined process makes it easy to start saving immediately.
          </p>
        </div>
        <div className="process-timeline">
          <div className="process-step">
            <div className="process-step-content">
              <div className="process-step-number">01</div>
              <h3 className="process-step-title">Upload Your Bills</h3>
              <p className="process-step-description">
                Simply upload PDFs or screenshots of your bills through our secure platform, or forward your email bills to our processing address.
              </p>
            </div>
            <div className="process-step-image-container">
              <img src={processImage1} alt="Upload your bills" className="process-step-image" />
            </div>
          </div>
          <div className="process-step reverse">
            <div className="process-step-content">
              <div className="process-step-number">02</div>
              <h3 className="process-step-title">AI-Powered Analysis</h3>
              <p className="process-step-description">
                Our advanced algorithms scan every line item, comparing charges against our database of known fees and industry billing practices.
              </p>
            </div>
            <div className="process-step-image-container">
              <img src={processImage2} alt="AI analyzes your bills" className="process-step-image" />
            </div>
          </div>
          <div className="process-step">
            <div className="process-step-content">
              <div className="process-step-number">03</div>
              <h3 className="process-step-title">Dispute and Save</h3>
              <p className="process-step-description">
                Receive a detailed report with actionable steps to dispute unnecessary charges or let our team handle the process for you.
              </p>
            </div>
            <div className="process-step-image-container">
              <img src={processImage3} alt="Dispute and save money" className="process-step-image" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section fade-in" ref={faqRef}>
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Get answers to common questions about our service.
          </p>
        </div>
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className="faq-icon"></span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="section-header">
          <h2 className="section-title">Straightforward Pricing</h2>
          <p className="section-subtitle">
            Choose the plan that fits your needs. Cancel anytime.
          </p>
        </div>
        <div className="pricing-container">
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="pricing-plan">Basic</h3>
              <div className="pricing-amount">
                <span className="pricing-currency">$</span>
                <span className="pricing-number">0</span>
                <span className="pricing-duration">/month</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li>Analyze up to 2 bills per month</li>
                <li>Basic fee detection</li>
                <li>Self-service dispute guides</li>
                <li>Monthly savings report</li>
                <li className="disabled">Automatic bill monitoring</li>
                <li className="disabled">Priority support</li>
                <li className="disabled">Direct dispute handling</li>
              </ul>
            </div>
            <div className="pricing-action">
              <Link to="/signup" className="pricing-button">Get Started Free</Link>
            </div>
          </div>
          <div className="pricing-card featured">
            <div className="pricing-card-badge">Most Popular</div>
            <div className="pricing-card-header">
              <h3 className="pricing-plan">Premium</h3>
              <div className="pricing-amount">
                <span className="pricing-currency">$</span>
                <span className="pricing-number">9.99</span>
                <span className="pricing-duration">/month</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li>Unlimited bill analysis</li>
                <li>Advanced AI fee detection</li>
                <li>Personalized dispute templates</li>
                <li>Real-time savings dashboard</li>
                <li>Automatic bill monitoring</li>
                <li>Priority support</li>
                <li>We dispute on your behalf</li>
              </ul>
            </div>
            <div className="pricing-action">
              <Link to="/signup" className="pricing-button">Start 14-Day Trial</Link>
            </div>
          </div>
        </div>
        <div className="pricing-guarantee">
          <p>100% Money-Back Guarantee: If we can't find savings greater than our fee, you don't pay.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta-section">
        <div className="service-cta-content">
          <h2 className="service-cta-title">Ready to Stop Overpaying?</h2>
          <p className="service-cta-description">
            Upload your first bill today and see how much you could be saving.
          </p>
          <div className="service-cta-buttons">
            <Link to="/signup" className="cta-button primary">Try For Free</Link>
            <Link to="/contact" className="cta-button secondary">Ask a Question</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;