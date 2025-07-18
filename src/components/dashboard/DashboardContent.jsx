import React from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

const DashboardContent = () => {
  return (
    <div className="p-4">
      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold text-dark">Welcome Back 👋</h2>
        <p className="text-muted">Here’s a quick overview of your job portal statistics</p>
      </div>

      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        {[
          { title: 'Total Jobs', icon: 'ri-briefcase-line', value: 184, color: '#28a745' },
          { title: 'Active Employers', icon: 'ri-building-line', value: 92, color: '#007bff' },
          { title: 'New Applicants', icon: 'ri-user-line', value: 312, color: '#fd7e14' },
          { title: 'Pending Approvals', icon: 'ri-time-line', value: 12, color: '#dc3545' },
        ].map((item, index) => (
          <div className="col-md-6 col-xl-3" key={index}>
            <div
              className="card shadow-sm border-0"
              style={{ borderLeft: `6px solid ${item.color}`, borderRadius: '12px' }}
            >
              <div className="card-body d-flex align-items-center gap-3">
                <div
                  className="icon-box d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: `${item.color}22`,
                    color: item.color,
                    fontSize: '20px',
                  }}
                >
                  <i className={item.icon}></i>
                </div>
                <div>
                  <h6 className="mb-1">{item.title}</h6>
                  <h5 className="mb-0 fw-bold">{item.value}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-header bg-white border-bottom">
          <h5 className="mb-0 fw-semibold">Recent Activity</h5>
        </div>
        <div className="card-body p-3">
          <ul className="list-unstyled mb-0">
            {[
              { text: 'New employer registered: ByteTech Inc.', time: '2 hrs ago' },
              { text: 'Job posted: Senior React Developer', time: '5 hrs ago' },
              { text: 'Applicant submitted CV: Alex Johnson', time: 'Yesterday' },
              { text: 'Company verified: NovaCorp Solutions', time: '2 days ago' },
            ].map((act, i) => (
              <li key={i} className="d-flex justify-content-between align-items-center border-bottom py-2">
                <span>{act.text}</span>
                <span className="badge bg-light text-muted">{act.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="text-end">
        <Link to="/jobs" className="btn btn-success px-4 py-2 rounded-pill">
          View All Jobs
        </Link>
      </div>
    </div>
  );
};

export default DashboardContent;
