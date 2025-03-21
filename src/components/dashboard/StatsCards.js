// components/dashboard/StatsCards.js
import React from 'react';

const StatsCards = ({ stats }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 text-sm">Total Potential Savings</p>
        <p className="text-3xl font-bold text-green-600">${stats.totalSaved.toFixed(2)}</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 text-sm">Bills Analyzed</p>
        <p className="text-3xl font-bold">{stats.billsAnalyzed}</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 text-sm">Average Savings Per Bill</p>
        <p className="text-3xl font-bold text-blue-600">${stats.averageSavings.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default StatsCards;