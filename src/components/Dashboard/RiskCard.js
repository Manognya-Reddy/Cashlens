import React from 'react';
import './RiskCard.css';

const RiskCard = ({ amount, days, reasons }) => {
  return (
    <div className="risk-card">
      <div className="risk-header">
        <div className="risk-icon">✕</div>
        <h2>Critical Risk</h2>
        <p>Major shortfall of {amount} within {days} days.</p>
      </div>
      <div className="risk-details">
        <h4>Why is cash flow at risk?</h4>
        <ul>
          {reasons.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RiskCard;