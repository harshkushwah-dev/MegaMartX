import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-wrapper">
      <div className="ekomart_dashboard">
        <div className="sidebar_left">
          <Sidebar />
        </div>
        <div className="right-area-body-content">
          <Header />
          <main className="dashboard-content">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
