import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <div className="settings-card">
        <div className="settings-header">
          <h2>Welcome to CashLens</h2>
          <p>Let's set up your business profile to get accurate insights.</p>
        </div>
        
        <div className="form-group">
          <label>Business Type</label>
          <select>
            <option>Service</option>
            <option>Product</option>
          </select>
        </div>

        <div className="form-group">
          <label>Avg. Monthly Revenue</label>
          <div className="input-with-icon">
            <span>$</span>
            <input type="number" defaultValue="10000" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Customers Pay In</label>
            <select><option>30 Days</option></select>
          </div>
          <div className="form-group">
            <label>You Pay Suppliers In</label>
            <select><option>30 Days</option></select>
          </div>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" id="gst" />
          <label htmlFor="gst">GST Registered?</label>
        </div>

        <button className="start-btn">Start Dashboard</button>
      </div>
    </div>
  );
};

export default Settings;