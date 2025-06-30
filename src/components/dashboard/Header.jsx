import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiBell, FiUser, FiLogOut } from 'react-icons/fi';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // for redirecting

  const handleLogout = () => {
    // Optional: clear user data from localStorage/session
    localStorage.removeItem("authToken");
    sessionStorage.clear();

    alert("Logged out successfully!");

    // Redirect to login
    navigate('/login');
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h2 style={{ margin: 0, color: '#fff', fontSize: '22px' }}>🧾 MegaMartX Admin</h2>
      </div>

      <div style={styles.right}>
        <div style={styles.iconContainer}>
          <FiBell size={20} color="#fff" />
        </div>

        <div
          style={styles.profile}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <FiUser size={22} color="#fff" style={{ marginRight: 8 }} />
          <span style={{ color: '#fff', cursor: 'pointer' }}>Admin</span>

          {dropdownOpen && (
            <div style={styles.dropdown}>
              <div style={styles.dropdownItem}>Profile</div>
              <div style={styles.dropdownItem}>Settings</div>
              <div
                style={{ ...styles.dropdownItem, color: '#ef4444' }}
                onClick={handleLogout}
              >
                <FiLogOut style={{ marginRight: 6 }} />
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    height: '60px',
    background: 'linear-gradient(135deg, #1f2937, #111827)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 30px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 999,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#fff',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    position: 'relative',
  },
  iconContainer: {
    background: '#374151',
    padding: '10px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    position: 'relative',
    background: '#374151',
    padding: '8px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  dropdown: {
    position: 'absolute',
    top: '50px',
    right: 0,
    background: '#1f2937',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    padding: '10px 0',
    zIndex: 1000,
    minWidth: '160px',
    animation: 'fadeInDown 0.3s ease-in-out',
  },
  dropdownItem: {
    padding: '10px 20px',
    color: '#d1d5db',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
};

export default Header;
