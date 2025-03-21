import React from 'react';
import BillUploadForm from '../components/BillUploadForm';

const BillUploadPage = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Upload Your Bill</h1>
      
      <BillUploadForm />
      
      <div className="mt-6 bg-blue-50 rounded-lg p-4">
        <h3 className="font-semibold text-lg mb-2">Privacy Note</h3>
        <p className="text-gray-700">
          Your bill is securely processed and analyzed. We never store your complete bill 
          details, only the necessary information to identify fee patterns.
        </p>
      </div>
    </div>
  );
};

export default BillUploadPage;