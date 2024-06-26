import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const handleLogout = () => {
    // Add your logout logic here
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/dashboard"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fw-bolder d-none d-sm-inline">
                CHU de Cocody
              </span>
            </Link>
            <ul
              className="nav nav-pills mb-sm-auto mb-0  align-items-sm-start"
              id="menu"
            >
              <li className="w-100">
                <Link
                  to="/dashboard"
                  className="nav-link text-white px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2 "></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/employee"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-people bi-sm ms-2"></i>
                  <span className="ms-2 ">
                    Manage Employees
                  </span>
                </Link>
              </li>
              <li className="w-100">
  <Link
    to="/dashboard/leaveManagement"
    className="nav-link px-0 align-middle text-white"
  >
    <i className="fs-4 bi-columns bi-sm ms-2"></i> 
    <span className="ms-2">Leave Management</span> 
  </Link>
</li>

              <li className="w-100">
                <Link
                  to="/dashboard/category"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Category</span>
                </Link>
              </li>
              <li className="w-100" onClick={handleLogout}>
                <Link
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
