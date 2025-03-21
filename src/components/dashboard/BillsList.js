// components/dashboard/BillsList.js
import React from 'react';
import { Link } from 'react-router-dom';

const BillsList = ({ bills }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bill Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detected Fees</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bills.map((bill) => {
              // Get a preview of detected fees
              const feesPreview = bill.detectedFees 
                ? bill.detectedFees.substring(0, 50) + (bill.detectedFees.length > 50 ? '...' : '')
                : 'No fees detected';
              
              return (
                <tr key={bill.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{bill.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bill.billType}</td>
                  <td className="px-6 py-4">{feesPreview}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link 
                      to={`/analysis/${bill.id}`} 
                      className="text-blue-600 hover:text-blue-900"
                    >
                      View Analysis
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillsList;