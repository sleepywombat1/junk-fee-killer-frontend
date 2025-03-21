import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StatsCards from '../components/dashboard/StatsCards';
import BillsList from '../components/dashboard/BillsList';
import { processDetectedFees } from '../utils/billUtils';

const DashboardPage = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({
    totalSaved: 0,
    billsAnalyzed: 0,
    averageSavings: 0
  });

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we're getting the data from localStorage
    const fetchBills = () => {
      try {
        const storedBills = JSON.parse(localStorage.getItem('bills') || '[]');
        setBills(storedBills);
        
        // Calculate stats
        if (storedBills.length > 0) {
          const totalSavings = storedBills.reduce((total, bill) => {
            // Calculate savings based on detected fees
            const savings = processDetectedFees(bill.detectedFees).reduce(
              (sum, fee) => sum + (fee.amount || 0), 
              0
            );
            return total + savings;
          }, 0);
          
          setStats({
            totalSaved: totalSavings,
            billsAnalyzed: storedBills.length,
            averageSavings: storedBills.length ? totalSavings / storedBills.length : 0
          });
        }
      } catch (err) {
        setError('Error loading your bills. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBills();
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Dashboard</h1>
        <Link 
          to="/upload" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload New Bill
        </Link>
      </div>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-6">
          {error}
        </div>
      )}

      {/* Stats Cards */}
      <StatsCards stats={stats} />

      {/* Recent Bills */}
      <h2 className="text-2xl font-bold mb-4">Your Recent Bills</h2>
      
      {bills.length === 0 ? (
        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <p className="text-lg mb-4">You haven't uploaded any bills yet.</p>
          <Link 
            to="/upload" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Upload Your First Bill
          </Link>
        </div>
      ) : (
        <BillsList bills={bills} />
      )}
    </div>
  );
};

export default DashboardPage;