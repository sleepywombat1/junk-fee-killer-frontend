// components/BillUploadForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UploadCloud, ShieldCheck } from 'lucide-react';

const BillUploadForm = () => {
  const [file, setFile] = useState(null);
  const [billType, setBillType] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const billTypes = [
    'Mobile Phone',
    'Internet/Cable',
    'Electricity',
    'Water',
    'Gas',
    'Credit Card',
    'Subscription Service',
    'Other'
  ];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Only accept PDF, JPG, PNG files
      if (['application/pdf', 'image/jpeg', 'image/png'].includes(selectedFile.type)) {
        setFile(selectedFile);
        setError('');
      } else {
        setFile(null);
        setError('Please upload a PDF, JPG, or PNG file');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select a file to upload');
      return;
    }
    
    if (!billType) {
      setError('Please select a bill type');
      return;
    }

    setIsUploading(true);
    setError('');

    try {
      // Create form data to send file
      const formData = new FormData();
      formData.append('file', file);
      formData.append('billType', billType);

      // Using your existing backend endpoint
      const response = await axios.post('https://junk-fee-killer-backend.onrender.com/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      // Store the response in localStorage to access on analysis page
      const analysisData = {
        id: Date.now().toString(), // Generate a temporary ID
        billType: billType,
        provider: 'Detected Provider', // You might extract this from response if available
        date: new Date().toISOString().split('T')[0],
        totalAmount: 0, // You might extract this from response if available
        potentialSavings: 0, // Calculate from detected fees if possible
        detectedFees: response.data.detected_fees || "No fees detected",
        rawResponse: response.data
      };
      
      // Save to localStorage (in a real app, this would go to a database)
      const existingBills = JSON.parse(localStorage.getItem('bills') || '[]');
      existingBills.push(analysisData);
      localStorage.setItem('bills', JSON.stringify(existingBills));
      
      // Navigate to the analysis page with the bill ID
      navigate(`/analysis/${analysisData.id}`);
    } catch (err) {
      console.error("Upload Error:", err);
      if (err.response) {
        console.error("Server Response:", err.response);
        setError(`Error: ${err.response.status} - ${err.response.data?.error || "Unknown error"}`);
      } else if (err.request) {
        console.error("No Response from Server:", err.request);
        setError("No response from server. Please check your internet connection.");
      } else {
        console.error("Request Error:", err.message);
        setError("Error uploading bill. Please try again.");
      }
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Bill Type</label>
        <select
          value={billType}
          onChange={(e) => setBillType(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
          required
        >
          <option value="">Select Bill Type</option>
          {billTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Upload Bill (PDF, JPG, PNG)</label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          {file ? (
            <div>
              <p className="text-green-600 mb-2">File selected:</p>
              <p className="font-medium">{file.name}</p>
              <button 
                type="button"
                onClick={() => setFile(null)}
                className="text-red-500 underline mt-2"
              >
                Remove
              </button>
            </div>
          ) : (
            <div>
              <ShieldCheck className="text-blue-500 w-12 h-12 mb-2 mx-auto" />
              <p className="text-gray-500 mb-2">Drag and drop your file here or</p>
              <label className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer">
                Browse Files
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          )}
        </div>
      </div>
      
      <button
        type="submit"
        disabled={isUploading}
        className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 ${
          isUploading ? 'opacity-75 cursor-not-allowed' : ''
        }`}
      >
        <UploadCloud className="w-5 h-5" />
        {isUploading ? 'Uploading...' : 'Upload and Analyze Bill'}
      </button>
    </form>
  );
};

export default BillUploadForm;