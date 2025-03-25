import React, { useState, useEffect } from 'react';
import './NotificationCenter.css';

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // Simulate fetching notifications
  useEffect(() => {
    // This would be replaced with an actual API call
    const mockNotifications = [
      {
        id: 1,
        message: 'Your bill analysis is complete.',
        type: 'info',
        timestamp: new Date().toISOString()
      }
    ];
    
    setNotifications(mockNotifications);
  }, []);

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className={`notification-center ${isVisible ? 'visible' : ''}`}>
      <button 
        className="notification-toggle"
        onClick={() => setIsVisible(!isVisible)}
      >
        {notifications.length}
      </button>
      
      {isVisible && (
        <div className="notification-panel">
          <h3>Notifications</h3>
          <div className="notification-list">
            {notifications.map(notification => (
              <div key={notification.id} className={`notification-item ${notification.type}`}>
                <p>{notification.message}</p>
                <span className="notification-time">
                  {new Date(notification.timestamp).toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;