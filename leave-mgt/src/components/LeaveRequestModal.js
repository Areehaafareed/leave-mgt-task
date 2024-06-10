import React, { useState } from 'react';
import MaternityLeaveForm from './forms/MaternityLeaveForm';
import AnnualLeaveForm from './forms/AnnualLeaveForm';
import DailyLeaveForm from './forms/DailyLeaveForm';
import HourlyLeaveForm from './forms/HourlyLeaveForm';

const LeaveRequestModal = ({ isOpen, onClose }) => {
  const [selectedRequestType, setSelectedRequestType] = useState(null);

  const renderLeaveForm = () => {
    switch (selectedRequestType) {
      case 'hourly':
        return <HourlyLeaveForm />;
      case 'daily':
        return <DailyLeaveForm />;
      case 'annual':
        return <AnnualLeaveForm />;
      case 'maternity':
        return <MaternityLeaveForm />;
      default:
        return null;
    }
  };

  return (
    <div className={`modal ${isOpen ? 'show' : ''}`} tabIndex="-1" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Leave Request</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="d-grid gap-2">
              <button
                className="btn leave-btn"
                style={{ backgroundColor: '#FFA500', borderColor: '#FFA500', transition: 'background-color 0.3s ease' }}
                onClick={() => setSelectedRequestType('hourly')}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#FFDB58'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#FFA500'}
              >
                Hourly
              </button>
              <button
                className="btn leave-btn"
                style={{ backgroundColor: '#FFA500', borderColor: '#FFA500', transition: 'background-color 0.3s ease' }}
                onClick={() => setSelectedRequestType('daily')}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#FFDB58'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#FFA500'}
              >
                Daily
              </button>
              <button
                className="btn leave-btn"
                style={{ backgroundColor: '#FFA500', borderColor: '#FFA500', transition: 'background-color 0.3s ease' }}
                onClick={() => setSelectedRequestType('annual')}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#FFDB58'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#FFA500'}
              >
                Annual
              </button>
              <button
                className="btn leave-btn"
                style={{ backgroundColor: '#FFA500', borderColor: '#FFA500', transition: 'background-color 0.3s ease' }}
                onClick={() => setSelectedRequestType('maternity')}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#FFDB58'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#FFA500'}
              >
                Maternity
              </button>
            </div>
            {renderLeaveForm()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequestModal;
