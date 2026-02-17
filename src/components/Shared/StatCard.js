import React from 'react';
import './StatCard.css';

const StatCard = ({ label, value, color, isWarning }) => {
  return (
    <div className="stat-card">
      <span className="stat-label">{label}</span>
      <div className="stat-value" style={{ color: color }}>
        {value}
      </div>
      {isWarning && <div className="warning-dot">!</div>}
    </div>
  );
};

export default StatCard;