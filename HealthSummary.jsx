import React from 'react';

const HealthSummary = () => {
  return (
    <div className="health-summary">
      <h2>Health Summary</h2>
      <div className="summary-content">
        <section>
          <h3>Allergies</h3>
          <p>No known allergies.</p>
        </section>
        <section>
          <h3>Medications</h3>
          <p>Current medications will be listed here.</p>
        </section>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default HealthSummary;
