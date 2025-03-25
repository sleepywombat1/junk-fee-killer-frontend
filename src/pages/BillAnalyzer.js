import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import BillResults from '../components/BillResults';

const BillAnalysisPage = () => {
  const { billId } = useParams();
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we're getting the data from localStorage
    const fetchAnalysis = () => {
      try {
        const bills = JSON.parse(localStorage.getItem('bills') || '[]');
        const bill = bills.find(b => b.id === billId);
        
        if (bill) {
          setAnalysisData(bill);
        } else {
          throw new Error('Bill not found');
        }
      } catch (err) {
        setError('Error loading bill analysis. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysis();
  }, [billId]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-6"></div>
          <div className="h-64 bg-gray-200 rounded mb-6"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
          {error}
        </div>
        <Link to="/dashboard" className="text-blue-600 hover:underline">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Bill Analysis Results</h1>
        <Link 
          to="/dashboard" 
          className="text-blue-600 hover:text-blue-800"
        >
          Back to Dashboard
        </Link>
      </div>

      {analysisData && <BillResults analysisData={analysisData} />}
    </div>
  );
};

export default BillAnalysisPage;