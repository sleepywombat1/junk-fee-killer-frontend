// pages/HomePage.js - Home page component
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Stop Paying Unnecessary Fees</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Our AI-powered tool analyzes your bills to find hidden fees, unexpected charges, 
          and pricing errors that you shouldn't have to pay.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/register" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
          >
            Get Started - It's Free
          </Link>
          <Link 
            to="/about" 
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 border border-gray-300 rounded-lg"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload Your Bill</h3>
            <p className="text-gray-600">
              Simply upload a photo or PDF of your bill. We support most major service providers.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
            <p className="text-gray-600">
              Our AI scans your bill for unnecessary fees, pricing errors, and hidden charges.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Save Money</h3>
            <p className="text-gray-600">
              Get actionable steps to dispute charges and save money on your monthly bills.
            </p>
          </div>
        </div>
      </div>

      {/* Bill Types Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Bills We Can Analyze</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Cell Phone', 'Internet', 'Cable TV', 'Utilities', 'Credit Card', 'Streaming', 'Insurance', 'Subscriptions'].map((type) => (
            <div key={type} className="bg-white p-4 rounded-lg shadow-md text-center">
              <p className="font-medium">{type}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "I found $27 in unnecessary fees on my phone bill that I've been paying for years. The app paid for itself instantly!",
              name: "Sarah T.",
              saved: "$324/year"
            },
            {
              quote: "My cable company was charging me for premium channels I never ordered. This app spotted it right away.",
              name: "Michael R.",
              saved: "$180/year"
            },
            {
              quote: "As someone who hates reading fine print, this tool is a lifesaver for finding hidden charges.",
              name: "Jessica L.",
              saved: "$215/year"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4">"{testimonial.quote}"</p>
              <div className="flex justify-between items-center">
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-green-600 font-bold">Saved {testimonial.saved}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-blue-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Stop Overpaying?</h2>
        <p className="text-xl text-gray-600 mb-6">
          Join thousands of users already saving money on their monthly bills.
        </p>
        <Link 
          to="/register" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
        >
          Start Saving Today
        </Link>
      </div>
    </div>
  );
};

export default HomePage;