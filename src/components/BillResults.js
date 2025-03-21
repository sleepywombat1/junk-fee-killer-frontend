// components/BillResults.js
import React from 'react';
import { Link } from 'react-router-dom';

const BillResults = ({ analysisData }) => {
  // Process the detected fees text to create structured data
  const processDetectedFees = (feesText) => {
    if (!feesText || feesText === "No fees detected") {
      return [];
    }
    
    // Simple parsing - in real app, you'd want more sophisticated parsing based on your API
    const fees = [];
    
    // Try to extract fee items - this is very basic and would need customization
    const feeRegex = /([A-Za-z\s]+):\s*\$?(\d+\.\d+|\d+)/g;
    let match;
    while ((match = feeRegex.exec(feesText)) !== null) {
      fees.push({
        name: match[1].trim(),
        amount: parseFloat(match[2]),
        description: "This fee may be unnecessary or excessive.",
        confidence: "medium"
      });
    }
    
    // If regex didn't work, provide a fallback
    if (fees.length === 0) {
      fees.push({
        name: "Potential Unnecessary Fee",
        amount: 0,
        description: feesText,
        confidence: "medium"
      });
    }
    
    return fees;
  };

  const suspiciousFees = processDetectedFees(analysisData.detectedFees);
  const potentialSavings = suspiciousFees.reduce((total, fee) => total + (fee.amount || 0), 0);

  // Build analysis data with the detected information
  const data = {
    billDetails: {
      provider: analysisData.provider || "Your Provider",
      date: analysisData.date,
      totalAmount: analysisData.totalAmount || 0,
      billType: analysisData.billType
    },
    suspiciousFees: suspiciousFees,
    potentialSavings: potentialSavings,
    nextSteps: [
      "Contact your service provider's customer service",
      "Ask specifically about removing the identified fees",
      "Request a detailed explanation of each charge on your bill",
      "Request a credit for any fees that have been applied without your explicit consent"
    ],
    rawResponse: analysisData.rawResponse
  };

  return (
    <>
      {/* Bill Summary */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Bill Summary</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <p className="text-gray-600 text-sm">Provider</p>
            <p className="font-medium">{data.billDetails.provider}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Bill Type</p>
            <p className="font-medium">{data.billDetails.billType}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Date</p>
            <p className="font-medium">{data.billDetails.date}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Total Amount</p>
            <p className="font-medium">${data.billDetails.totalAmount.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Raw Detection Result */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Detection Results</h2>
        <div className="bg-gray-50 p-4 rounded border">
          <pre className="whitespace-pre-wrap">{analysisData.detectedFees}</pre>
        </div>
      </div>

      {/* Potential Savings */}
      {potentialSavings > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Potential Savings</h2>
            <p className="text-2xl font-bold text-green-600">${potentialSavings.toFixed(2)}</p>
          </div>
          <p className="mt-2 text-gray-700">
            We've identified potential savings from questionable fees on your bill.
          </p>
        </div>
      )}

      {/* Questionable Fees */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Questionable Fees</h2>
        
        {data.suspiciousFees.length === 0 ? (
          <p className="text-gray-600">No specific questionable fees were detected on this bill, but review the detection results above for more information.</p>
        ) : (
          <div className="space-y-4">
            {data.suspiciousFees.map((fee, index) => (
              <div 
                key={index} 
                className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{fee.name}</h3>
                    <p className="text-gray-700 mt-1">{fee.description}</p>
                  </div>
                  <div className="text-right">
                    {fee.amount > 0 && (
                      <p className="font-bold">${fee.amount.toFixed(2)}</p>
                    )}
                    <span className="text-xs px-2 py-1 rounded mt-1 inline-block bg-yellow-100 text-yellow-800">
                      Potentially Unnecessary
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Next Steps */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recommended Next Steps</h2>
        <ol className="list-decimal pl-5 space-y-2">
          {data.nextSteps.map((step, index) => (
            <li key={index} className="text-gray-700">{step}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default BillResults;