import React from 'react';
import './Expenses.css';

const Expenses = () => {
  const expenses = [
    { category: 'Supplier', date: 'Feb 11, 2026', status: 'PENDING', amount: '-$50,000' },
    { category: 'Gst', date: 'Feb 17, 2026', status: 'PENDING', amount: '-$90,000' },
    { category: 'Rent', date: 'Feb 19, 2026', status: 'PENDING', amount: '-$40,000' }
  ];

  return (
    <div className="page-container">
      <div className="table-header">
        <h2>Expenses (Outflow)</h2>
        <button className="add-btn expense">+ Add Bill</button>
      </div>
      <div className="expense-list">
        {expenses.map((exp, i) => (
          <div key={i} className="expense-row">
            <div>
              <div className="cat-name">{exp.category}</div>
              <div className="due-date">Due: {exp.date} <span className="badge pending">{exp.status}</span></div>
            </div>
            <div className="amount-text negative">{exp.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expenses;