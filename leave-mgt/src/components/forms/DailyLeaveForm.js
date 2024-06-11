import React, { useState } from 'react';

const DailyLeaveForm = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [reason, setReason] = useState('');
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
     
      console.log('Form submitted');
    };
  
    return (
      <div>
        <h4 className='mt-2  text-center' > Daily Leave Form</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="startDate" className="form-label">Start Date</label>
            <input type="date" className="form-control" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">End Date</label>
            <input type="date" className="form-control" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="startTime" className="form-label">Start Time</label>
            <input type="time" className="form-control" id="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="endTime" className="form-label">End Time</label>
            <input type="time" className="form-control" id="endTime" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="reason" className="form-label">Reason</label>
            <textarea className="form-control" id="reason" rows="3" value={reason} onChange={(e) => setReason(e.target.value)}></textarea>
          </div>
          <button type="submit" className="btn btn-warning">Submit</button>
        </form>
      </div>
    );
};

export default DailyLeaveForm;
