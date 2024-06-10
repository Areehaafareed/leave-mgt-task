
import React, { useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import { FaBell, FaCheckCircle, FaTimesCircle, FaBabyCarriage, FaCircle } from 'react-icons/fa';
import LeaveRequestModal from './LeaveRequestModal';

const LeaveManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
        setIsModalOpen(true);
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Black color with 50% opacity
        document.body.style.overflow = 'hidden'; // Hide scrollbar
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.style.backgroundColor = ''; // Remove background color
        document.body.style.overflow = ''; // Restore scrollbar
    };

    const leavesData = [
        { name: 'John Doe', position: 'Software Engineer', department: 'IT', requestedTime: '1 am - 10 am', date: '2024-06-01', weeks: 2, status: 'Pending' },
        { name: 'Jane Smith', position: 'Product Manager', department: 'Product', requestedTime: '9 am - 5 pm', date: '2024-06-10', weeks: 1, status: 'Granted' },
        { name: 'Alice Johnson', position: 'HR Specialist', department: 'HR', requestedTime: '10 am - 6 pm', date: '2024-07-15', weeks: 3, status: 'Rejected' },
        { name: 'Bob Brown', position: 'Designer', department: 'Design', requestedTime: '8 am - 4 pm', date: '2024-08-20', weeks: 4, status: 'Maternity' },
        { name: 'Chris Green', position: 'Marketing Coordinator', department: 'Marketing', requestedTime: '7 am - 3 pm', date: '2024-06-05', weeks: 1, status: 'Granted' },
        { name: 'Patricia Black', position: 'Finance Analyst', department: 'Finance', requestedTime: '6 am - 2 pm', date: '2024-06-12', weeks: 2, status: 'Pending' },
        { name: 'Michael White', position: 'Sales Representative', department: 'Sales', requestedTime: '9 am - 5 pm', date: '2024-06-19', weeks: 1, status: 'Rejected' },
        { name: 'Sandra Blue', position: 'Support Specialist', department: 'Customer Support', requestedTime: '8 am - 4 pm', date: '2024-07-01', weeks: 4, status: 'Maternity' },
        { name: 'Linda Red', position: 'Operations Manager', department: 'Operations', requestedTime: '10 am - 6 pm', date: '2024-07-03', weeks: 3, status: 'Granted' },
    ];

    const statusIcons = {
        Pending: <FaBell color="#FFA500" />,
        Granted: <FaCheckCircle color="#00FF00" />,
        Rejected: <FaTimesCircle color="#FF0000" />,
        Maternity: <FaBabyCarriage color="#0000FF" />,
    };


    const statusColors = {
        Pending: '#FFA500', // Orange
        Granted: '#00FF00', // Green
        Rejected: '#FF0000', // Red
        Maternity: '#0000FF', // Blue
    };

    const StatusBall = ({ color }) => (
        <FaCircle style={{ color, marginRight: '5px', fontSize: '10px' }} />
    );

    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-center shadow">Leave Management</h2>
            <button className="btn mb-3" style={{ backgroundColor: '#FFD700', borderColor: '#FFD700' }} onClick={handleOpenModal}>
                Add Leave Request
            </button>
            {isModalOpen && (
                <div
                    className="position-fixed"
                    style={{
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black color with 50% opacity
                        zIndex: 1000, // Higher zIndex than the modal
                    }}
                    onClick={handleCloseModal} // Close modal when clicking on the backdrop
                ></div>
            )}
            <LeaveRequestModal isOpen={isModalOpen} onClose={handleCloseModal} />
            <div className="row mb-4">
                {Object.keys(statusIcons).map((status, index) => (
                    <div className="col-md-3" key={index}>
                        <Card className="text-center" style={{ boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.3)' }}>
                            <Card.Body>
                                <h4>{status} Leave Requests</h4>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                                    {statusIcons[status]}
                                </div>
                                <h5>{leavesData.filter(leave => leave.status === status).length}</h5>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            <Table striped bordered hover size="sm" style={{ boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.3)' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Department</th>
                        <th>Requested Time</th>
                        <th>Date</th>
                        <th>Weeks</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {leavesData.map((leave, index) => (
                        <tr key={index}>
                            <td>{leave.name}</td>
                            <td>{leave.position}</td>
                            <td>{leave.department}</td>
                            <td>{leave.requestedTime}</td>
                            <td>{leave.date}</td>
                            <td>{leave.weeks}</td>
                            <td>
                                <StatusBall color={statusColors[leave.status]} />
                                {leave.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default LeaveManagement;

