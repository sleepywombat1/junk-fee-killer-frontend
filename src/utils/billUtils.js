// utils/billUtils.js
/**
 * Process detected fees text to create structured data
 * @param {string} feesText - The raw fees text from API response
 * @returns {Array} - Array of fee objects with name, amount, description and confidence
 */
export const processDetectedFees = (feesText) => {
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

/**
 * Calculate potential savings from detected fees
 * @param {Array} fees - Array of fee objects
 * @returns {number} - Total potential savings amount
 */
export const calculatePotentialSavings = (fees) => {
  return fees.reduce((total, fee) => total + (fee.amount || 0), 0);
};

/**
 * Get bills from localStorage
 * @returns {Array} - Array of bill objects
 */
export const getBills = () => {
  return JSON.parse(localStorage.getItem('bills') || '[]');
};

/**
 * Get a single bill by ID from localStorage
 * @param {string} billId - The ID of the bill to retrieve
 * @returns {Object|null} - The bill object or null if not found
 */
export const getBillById = (billId) => {
  const bills = getBills();
  return bills.find(bill => bill.id === billId) || null;
};

/**
 * Save a bill to localStorage
 * @param {Object} billData - The bill data to save
 */
export const saveBill = (billData) => {
  const bills = getBills();
  bills.push(billData);
  localStorage.setItem('bills', JSON.stringify(bills));
};

/**
 * Calculate dashboard stats from bills
 * @param {Array} bills - Array of bill objects
 * @returns {Object} - Statistics object with totalSaved, billsAnalyzed, and averageSavings
 */
export const calculateStats = (bills) => {
  if (bills.length === 0) {
    return {
      totalSaved: 0,
      billsAnalyzed: 0,
      averageSavings: 0
    };
  }

  const totalSavings = bills.reduce((total, bill) => {
    const fees = processDetectedFees(bill.detectedFees);
    const savings = calculatePotentialSavings(fees);
    return total + savings;
  }, 0);

  return {
    totalSaved: totalSavings,
    billsAnalyzed: bills.length,
    averageSavings: bills.length ? totalSavings / bills.length : 0
  };
};