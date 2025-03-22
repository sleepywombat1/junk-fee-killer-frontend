import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { FaChartLine, FaFileInvoiceDollar, FaExclamationTriangle, FaCheckCircle, FaBell } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    savedAmount: 0,
    totalBills: 0,
    flaggedFees: 0,
    resolvedIssues: 0
  });
  
  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setData({
        savedAmount: 234.50,
        totalBills: 6,
        flaggedFees: 8,
        resolvedIssues: 3
      });
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };
  
  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loader"></div>
        <p>Loading your dashboard...</p>
      </div>
    );
  }
  
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Your Dashboard</h1>
        <p className="dashboard-subtitle">Overview of your bill analysis and savings</p>
      </div>
      
      <motion.div 
        className="dashboard-stats"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="stat-card primary" variants={itemVariants}>
          <div className="stat-icon">
            <FaFileInvoiceDollar />
          </div>
          <div className="stat-content">
            <h3>${data.savedAmount.toFixed(2)}</h3>
            <p>Total Saved</p>
          </div>
        </motion.div>
        
        <motion.div className="stat-card" variants={itemVariants}>
          <div className="stat-icon">
            <FaChartLine />
          </div>
          <div className="stat-content">
            <h3>{data.totalBills}</h3>
            <p>Bills Analyzed</p>
          </div>
        </motion.div>
        
        <motion.div className="stat-card warning" variants={itemVariants}>
          <div className="stat-icon">
            <FaExclamationTriangle />
          </div>
          <div className="stat-content">
            <h3>{data.flaggedFees}</h3>
            <p>Flagged Fees</p>
          </div>
        </motion.div>
        
        <motion.div className="stat-card success" variants={itemVariants}>
          <div className="stat-icon">
            <FaCheckCircle />
          </div>
          <div className="stat-content">
            <h3>{data.resolvedIssues}</h3>
            <p>Resolved Issues</p>
          </div>
        </motion.div>
      </motion.div>
      
      <div className="dashboard-sections">
        <motion.div 
          className="dashboard-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="section-header">
            <h2>Recent Bills</h2>
            <button className="btn-secondary">View All</button>
          </div>
          
          <div className="bills-list">
            <div className="bill-card">
              <div className="bill-provider">
                <div className="provider-icon cellular">AT</div>
                <div className="provider-info">
                  <h4>AT&T</h4>
                  <p>Cellular Service</p>
                </div>
              </div>
              <div className="bill-details">
                <div className="bill-date">March 15, 2025</div>
                <div className="bill-amount">$89.99</div>
                <div className="bill-status flagged">
                  <FaExclamationTriangle /> 2 Flags
                </div>
              </div>
            </div>
            
            <div className="bill-card">
              <div className="bill-provider">
                <div className="provider-icon utility">PG</div>
                <div className="provider-info">
                  <h4>PG&E</h4>
                  <p>Utilities</p>
                </div>
              </div>
              <div className="bill-details">
                <div className="bill-date">March 10, 2025</div>
                <div className="bill-amount">$142.75</div>
                <div className="bill-status resolved">
                  <FaCheckCircle /> Resolved
                </div>
              </div>
            </div>
            
            <div className="bill-card">
              <div className="bill-provider">
                <div className="provider-icon internet">CM</div>
                <div className="provider-info">
                  <h4>Comcast</h4>
                  <p>Internet Service</p>
                </div>
              </div>
              <div className="bill-details">
                <div className="bill-date">March 5, 2025</div>
                <div className="bill-amount">$79.99</div>
                <div className="bill-status flagged">
                  <FaExclamationTriangle /> 3 Flags
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="dashboard-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="section-header">
            <h2>Fee Alerts</h2>
            <button className="btn-secondary">Manage Alerts</button>
          </div>
          
          <div className="alerts-list">
            <div className="alert-card high">
              <div className="alert-icon">
                <FaBell />
              </div>
              <div className="alert-content">
                <h4>Unexpected Rate Increase</h4>
                <p>Your AT&T bill increased by $15.99 this month.</p>
              </div>
              <button className="btn-text">View</button>
            </div>
            
            <div className="alert-card medium">
              <div className="alert-icon">
                <FaBell />
              </div>
              <div className="alert-content">
                <h4>New Administrative Fee</h4>
                <p>Comcast added a "Network Enhancement Fee" of $4.99.</p>
              </div>
              <button className="btn-text">View</button>
            </div>
            
            <div className="alert-card low">
              <div className="alert-icon">
                <FaBell />
              </div>
              <div className="alert-content">
                <h4>Late Payment Fee Waiver</h4>
                <p>You qualify for a late fee waiver on your PG&E bill.</p>
              </div>
              <button className="btn-text">View</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;