import React from 'react';
import './Dashboard.css'
const Dashboard = () => (
  <div className="dashboard">
    <div className="dashboard-overview">
      <h2>Welcome, UserName</h2>
      <div className="dashboard-stats">
        <div>Active Contracts: 3</div>
        <div>Pending Payments: $1,200</div>
        <div>New Notifications: 5</div>
      </div>
    </div>
    <div className="dashboard-actions">
      <button>Create New Contract</button>
      <button>List a Crop</button>
      <button>Make a Payment</button>
    </div>
    <div className="dashboard-recent-activity">
      <h3>Recent Activity</h3>
      <ul>
        <li>Contract with Buyer A signed on 20th Aug</li>
        <li>Payment of $500 made for Contract #1234</li>
        <li>Message received from Buyer B</li>
      </ul>
    </div>
  </div>
);

export default Dashboard;
