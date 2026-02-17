import React from 'react';
import './ForecastChart.css';

const ForecastChart = () => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>30-Day Forecast</h3>
      </div>
      <div className="chart-wrapper">
        <div className="y-axis">
          <span>$150k</span>
          <span>$100k</span>
          <span>$50k</span>
          <span>$0k</span>
          <span>$-50k</span>
        </div>
        <div className="graph-area">
          <svg viewBox="0 0 500 150" className="line-graph">
            <path 
              d="M0,80 L50,80 L70,40 L100,40 L120,90 L450,90" 
              fill="none" 
              stroke="#3182ce" 
              strokeWidth="3"
            />
          </svg>
          <div className="x-axis">
            <span>13 Feb</span>
            <span>18 Feb</span>
            <span>23 Feb</span>
            <span>1 Mar</span>
            <span>10 Mar</span>
            <span>20 Mar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastChart;