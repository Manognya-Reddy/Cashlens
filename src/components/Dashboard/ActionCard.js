import React from 'react';
import './ActionCard.css';

const ActionCard = ({ title, priority, description, impact, type }) => {
  return (
    <div className="action-card">
      <div className="action-top">
        <span className={`priority-tag ${type}`}>{priority}</span>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="action-footer">
        <span className="impact-label">Impact: <span className="impact-value">{impact}</span></span>
        <button className="act-now">Act Now →</button>
      </div>
    </div>
  );
};

export default ActionCard;