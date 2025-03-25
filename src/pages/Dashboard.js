import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

// Import UI components
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Loader from '../components/ui/Loader';

// Import icons
import uploadIcon from '../assets/icons/upload.svg';
import chartIcon from '../assets/icons/chart.svg';
import alertIcon from '../assets/icons/alert.svg';
import saveIcon from '../assets/icons/save.svg';
import phoneIcon from '../assets/icons/phone-bill.svg';
import utilityIcon from '../assets/icons/utility-bill.svg';
import internetIcon from '../assets/icons/internet-bill.svg';
import subscriptionIcon from '../assets/icons/subscription-bill.svg';

// Mock data for demonstration purposes
const mockAnalyzedBills = [
  {
    id: 1,
    type: 'phone',
    provider: 'Verizon Wireless',
    totalAmount: 128.47,
    potentialSavings: 32.99,
    date: '2025-02-15',
    status: 'analyzed',
    iconSrc: phoneIcon
  },
  {
    id: 2,
    type: 'utility',
    provider: 'Pacific Gas & Electric',
    totalAmount: 153.22,
    potentialSavings: 27.45,
    date: '2025-02-10',
    status: 'disputed',
    iconSrc: utilityIcon
  },
  {
    id: 3,
    type: 'internet',
    provider: 'Comcast Xfinity',
    totalAmount: 89.99,
    potentialSavings: 15.00,
    date: '2025-01-28',
    status: 'resolved',
    iconSrc: internetIcon
  },
  {
    id: 4,
    type: 'subscription',
    provider: 'Various Services',
    totalAmount: 64.93,
    potentialSavings: 22.98,
    date: '2025-01-20',
    status: 'analyzed',
    iconSrc: subscriptionIcon
  }
];

// Mock savings history data
const mockSavingsHistory = [
  { month: 'Sep', savings: 45.99 },
  { month: 'Oct', savings: 62.45 },
  { month: 'Nov', savings: 58.32 },
  { month: 'Dec', savings: 73.87 },
  { month: 'Jan', savings: 89.44 },
  { month: 'Feb', savings: 98.42 }
];

// Mock alerts data
const mockAlerts = [
  {
    id: 1,
    title: 'New fee detected',
    message: 'We found a new "Administrative Fee" on your Verizon bill that increased by $3.99 this month.',
    date: '2025-03-02',
    type: 'warning',
    isRead: false
  },
  {
    id: 2,
    title: 'Dispute successful',
    message: 'Your dispute with PG&E was successful! You\'ve been credited $27.45 on your next bill.',
    date: '2025-02-28',
    type: 'success',
    isRead: true
  },
  {
    id: 3,
    title: 'Subscription price increase',
    message: 'Netflix has announced a price increase of $2/month effective next billing cycle.',
    date: '2025-02-20',
    type: 'info',
    isRead: false
  }
];

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bills, setBills] = useState([]);
  const [savingsHistory, setSavingsHistory] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [totalSaved, setTotalSaved] = useState(0);
  const [activeTab, setActiveTab] = useState('all');

  // Calculate total savings based on resolved disputes
  const calculateTotalSavings = (bills) => {
    return bills
      .filter(bill => bill.status === 'resolved')
      .reduce((total, bill) => total + bill.potentialSavings, 0);
  };

  // Filter bills based on active tab
  const filteredBills = bills.filter(bill => {
    if (activeTab === 'all') return true;
    return bill.status === activeTab;
  });

  // Simulate data loading
  useEffect(() => {
    const fetchData = async () => {
      // Simulate API call
      setTimeout(() => {
        setBills(mockAnalyzedBills);
        setSavingsHistory(mockSavingsHistory);
        setAlerts(mockAlerts);
        setTotalSaved(calculateTotalSavings(mockAnalyzedBills));
        setIsLoading(false);
      }, 1500);
    };

    fetchData();
  }, []);

  // Mark alert as read
  const markAlertAsRead = (alertId) => {
    setAlerts(prevAlerts => 
      prevAlerts.map(alert => 
        alert.id === alertId ? { ...alert, isRead: true } : alert
      )
    );
  };

  if (isLoading) {
    return (
      <div className="dashboard-loading">
        <Loader variant="spinner" size="large" text="Loading your dashboard..." fullScreen />
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <h1 className="dashboard-title">Welcome Back, Alex</h1>
          <p className="dashboard-subtitle">Here's an overview of your bill savings and analyses.</p>
        </div>
        <div className="dashboard-actions">
          <Button variant="primary" size="medium" leftIcon={<img src={uploadIcon} alt="" />}>
            Upload New Bill
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="dashboard-stats">
        <Card className="stats-card">
          <div className="stats-icon">
            <img src={saveIcon} alt="" />
          </div>
          <div className="stats-content">
            <h3 className="stats-value">${totalSaved.toFixed(2)}</h3>
            <p className="stats-label">Total Saved</p>
          </div>
        </Card>
        <Card className="stats-card">
          <div className="stats-icon">
            <img src={chartIcon} alt="" />
          </div>
          <div className="stats-content">
            <h3 className="stats-value">{bills.length}</h3>
            <p className="stats-label">Bills Analyzed</p>
          </div>
        </Card>
        <Card className="stats-card">
          <div className="stats-icon">
            <img src={alertIcon} alt="" />
          </div>
          <div className="stats-content">
            <h3 className="stats-value">{alerts.filter(alert => !alert.isRead).length}</h3>
            <p className="stats-label">New Alerts</p>
          </div>
        </Card>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-main">
          {/* Bills Section */}
          <Card className="bills-card">
            <Card.Header>
              <Card.Title>Your Bills</Card.Title>
              <div className="bills-tabs">
                <button 
                  className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveTab('all')}
                >
                  All
                </button>
                <button 
                  className={`tab-button ${activeTab === 'analyzed' ? 'active' : ''}`}
                  onClick={() => setActiveTab('analyzed')}
                >
                  Analyzed
                </button>
                <button 
                  className={`tab-button ${activeTab === 'disputed' ? 'active' : ''}`}
                  onClick={() => setActiveTab('disputed')}
                >
                  Disputed
                </button>
                <button 
                  className={`tab-button ${activeTab === 'resolved' ? 'active' : ''}`}
                  onClick={() => setActiveTab('resolved')}
                >
                  Resolved
                </button>
              </div>
            </Card.Header>
            <Card.Content>
              {filteredBills.length > 0 ? (
                <div className="bills-list">
                  {filteredBills.map(bill => (
                    <div key={bill.id} className="bill-item">
                      <div className="bill-icon">
                        <img src={bill.iconSrc} alt={bill.type} />
                      </div>
                      <div className="bill-details">
                        <h3 className="bill-provider">{bill.provider}</h3>
                        <p className="bill-date">{new Date(bill.date).toLocaleDateString()}</p>
                      </div>
                      <div className="bill-amount">
                        <p className="amount-label">Total</p>
                        <p className="amount-value">${bill.totalAmount.toFixed(2)}</p>
                      </div>
                      <div className="bill-savings">
                        <p className="savings-label">Potential Savings</p>
                        <p className="savings-value">${bill.potentialSavings.toFixed(2)}</p>
                      </div>
                      <div className="bill-status">
                        <span className={`status-badge status-${bill.status}`}>
                          {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                        </span>
                      </div>
                      <div className="bill-actions">
                        <Button variant="outline" size="small" to={`/bills/${bill.id}`}>View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <p>No bills found for this filter.</p>
                </div>
              )}
            </Card.Content>
            <Card.Footer>
              <Link to="/bills" className="view-all-link">View All Bills</Link>
            </Card.Footer>
          </Card>

          {/* Savings Chart */}
          <Card className="savings-card">
            <Card.Header>
              <Card.Title>Savings History</Card.Title>
            </Card.Header>
            <Card.Content>
              <div className="savings-chart">
                {savingsHistory.map((month, index) => (
                  <div key={index} className="chart-bar-container">
                    <div className="chart-bar-wrapper">
                      <div 
                        className="chart-bar" 
                        style={{ height: `${(month.savings / 100) * 100}%` }}
                        data-value={`$${month.savings}`}
                      ></div>
                    </div>
                    <div className="chart-label">{month.month}</div>
                  </div>
                ))}
              </div>
              <div className="savings-summary">
                <div className="summary-item">
                  <span className="summary-label">Total Savings</span>
                  <span className="summary-value">
                    ${savingsHistory.reduce((sum, month) => sum + month.savings, 0).toFixed(2)}
                  </span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Avg. Monthly</span>
                  <span className="summary-value">
                    ${(savingsHistory.reduce((sum, month) => sum + month.savings, 0) / savingsHistory.length).toFixed(2)}
                  </span>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>

        <div className="dashboard-sidebar">
          {/* Alerts Section */}
          <Card className="alerts-card">
            <Card.Header>
              <Card.Title>Recent Alerts</Card.Title>
            </Card.Header>
            <Card.Content>
              {alerts.length > 0 ? (
                <div className="alerts-list">
                  {alerts.map(alert => (
                    <div 
                      key={alert.id} 
                      className={`alert-item ${alert.isRead ? 'read' : 'unread'}`}
                      onClick={() => markAlertAsRead(alert.id)}
                    >
                      <div className={`alert-indicator ${alert.type}`}></div>
                      <div className="alert-content">
                        <h4 className="alert-title">{alert.title}</h4>
                        <p className="alert-message">{alert.message}</p>
                        <p className="alert-date">{new Date(alert.date).toLocaleDateString()}</p>
                      </div>
                      {!alert.isRead && <div className="unread-dot"></div>}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <p>No alerts at this time.</p>
                </div>
              )}
            </Card.Content>
            <Card.Footer>
              <Link to="/alerts" className="view-all-link">View All Alerts</Link>
            </Card.Footer>
          </Card>

          {/* Quick Actions */}
          <Card className="actions-card">
            <Card.Header>
              <Card.Title>Quick Actions</Card.Title>
            </Card.Header>
            <Card.Content>
              <div className="quick-actions">
                <Button variant="outline" size="medium" fullWidth className="action-button">
                  Dispute a Charge
                </Button>
                <Button variant="outline" size="medium" fullWidth className="action-button">
                  Schedule Bill Review
                </Button>
                <Button variant="outline" size="medium" fullWidth className="action-button">
                  Contact Support
                </Button>
                <Button variant="outline" size="medium" fullWidth className="action-button">
                  Refer a Friend
                </Button>
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;