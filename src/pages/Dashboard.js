import React from 'react';
import RiskCard from '../components/Dashboard/RiskCard';
import ForecastChart from '../components/Dashboard/ForecastChart';
import ActionCard from '../components/Dashboard/ActionCard';
import StatCard from '../components/Shared/StatCard';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Cash Flow Overview</h1>
        <p>Real-time health check for your business finances.</p>
      </header>

      <div className="top-section">
        <RiskCard 
          amount="$50000" 
          days="7" 
          reasons={[
            "High expenses due on 2026-02-11: supplier",
            "1 overdue invoice contributing to shortfall."
          ]}
        />
        <ForecastChart />
      </div>

      <section className="actions-section">
        <h3>Recommended Actions</h3>
        <div className="action-grid">
          <ActionCard 
            title="Follow up on Overdue Invoices"
            priority="HIGH PRIORITY"
            description="Call top 3 customers with overdue payments immediately."
            impact="Recover ₹25000"
            type="high"
          />
          <ActionCard 
            title="Delay Non-Essential Expenses"
            priority="MEDIUM PRIORITY"
            description="Defer office upgrades or non-critical supplies by 15 days."
            impact="Gain 15 days cash buffer"
            type="medium"
          />
        </div>
      </section>

      <div className="stats-grid">
        <StatCard label="INFLOW (30D)" value="$230,000" color="#27ae60" />
        <StatCard label="OUTFLOW (30D)" value="$180,000" color="#e74c3c" />
        <StatCard label="MIN BALANCE" value="-$50,000" color="#333" isWarning />
        <StatCard label="PENDING TASKS" value="2" color="#333" />
      </div>
    </div>
  );
};

export default Dashboard;