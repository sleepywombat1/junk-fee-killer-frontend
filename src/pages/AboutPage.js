import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">About Junk Fee Killer</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          Junk Fee Killer is dedicated to helping consumers identify and eliminate unnecessary fees on their bills. 
          Our mission is to save people money by providing tools to easily spot potentially excessive or hidden charges.
        </p>
        <p>
          We believe in transparency and fair billing practices. By analyzing bills using advanced technologies, 
          we empower consumers to challenge unfair charges and keep more of their hard-earned money.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal pl-5 space-y-3">
          <li>
            <strong>Upload your bill</strong> - Simply take a photo or upload a PDF of your bill
          </li>
          <li>
            <strong>Automatic analysis</strong> - Our system scans for common unnecessary fees and charges
          </li>
          <li>
            <strong>Review findings</strong> - See a detailed breakdown of potential savings opportunities
          </li>
          <li>
            <strong>Take action</strong> - Follow our recommended steps to dispute unnecessary charges
          </li>
        </ol>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Privacy and Security</h2>
        <p className="mb-4">
          We take your privacy seriously. When you upload a bill, we only extract the necessary information 
          to identify fee patterns. Your sensitive personal information is never stored on our servers.
        </p>
        <p>
          All uploads are encrypted and processed securely. We never share your data with third parties 
          without your explicit permission.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;