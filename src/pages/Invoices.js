import React from 'react';
import './Invoices.css';

const Invoices = () => {
  const data = [
    { name: 'Gamma Inc', date: 'Feb 4, 2026', status: 'OVERDUE', amount: '$200,000' },
    { name: 'Alpha Corp', date: 'Feb 14, 2026', status: 'PENDING', amount: '$150,000' },
    { name: 'Beta Ltd', date: 'Feb 21, 2026', status: 'PENDING', amount: '$80,000' }
  ];

  return (
    <div className="page-container">
      <div className="table-header">
        <h2>Invoices (Inflow)</h2>
        <button className="add-btn">+ Add Invoice</button>
      </div>
      <div className="invoice-list">
        {data.map((item, i) => (
          <div key={i} className="invoice-row">
            <div>
              <div className="client-name">{item.name}</div>
              <div className="due-date">Due: {item.date} <span className={`badge ${item.status.toLowerCase()}`}>{item.status}</span></div>
            </div>
            <div className="amount-text">{item.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Invoices;