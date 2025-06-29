import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeaderTop = () => {
  const targetDate = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now
  const [menuOpen, setMenuOpen] = useState(false);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const menuLinks = [
    { label: 'Home', route: '/' },
    { label: 'Shop', route: '/shop' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' },
    { label: 'Vendor', route: '/vendor' },
    { label: 'Vendor Details', route: '/vendorDetails' },
    { label: 'Blog', route: '/blogmain' },
    { label: 'Dashboard', route: '/dashboard' },
  ];

  const timeValues = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds];

  return (
    <div
      className="header-top-area"
      style={{
        backgroundColor: '#28a745',
        color: '#fff',
        padding: '10px 15px',
        fontSize: '14px',
      }}
    >
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          {/* Left Section */}
          <div className="d-flex align-items-center" style={{ flex: 1, minWidth: '250px' }}>
            <div className="d-block" style={{ width: '60%' }}>
              <marquee scrollamount="3">
                FREE delivery & 40% Discount for next 3 orders! | Limited time offer! | Extra 10% off on 3rd order!
              </marquee>
            </div>
            <div className="d-flex ms-3">
              {timeValues.map((val, i) => (
                <div
                  key={i}
                  style={{
                    width: '28px',
                    textAlign: 'center',
                    background: '#fff',
                    color: '#28a745',
                    margin: '0 2px',
                    padding: '2px 4px',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    marginRight: '10px',
                  }}
                >
                  {val.toString().padStart(2, '0')}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="d-flex align-items-center justify-content-between" style={{ gap: '15px' }}>
            <p className="m-0" style={{ color: '#fff' }}>
              Call Us:{' '}
              <a href="tel:+4733378901" style={{ color: '#fff', textDecoration: 'underline' }}>
                +258 3268 21485
              </a>
            </p>

            {/* Mobile Menu Toggle */}
            <div className="d-md-none">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  background: 'none',
                  border: '1px solid #fff',
                  color: '#fff',
                  borderRadius: '4px',
                  padding: '4px 10px',
                  fontSize: '16px',
                }}
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Animated Mobile Dropdown */}
        <div
          style={{
            backgroundColor: '#fff',
            color: '#333',
            borderRadius: '6px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            maxHeight: menuOpen ? '500px' : '0px',
            opacity: menuOpen ? 1 : 0,
            visibility: menuOpen ? 'visible' : 'hidden',
            padding: menuOpen ? '10px' : '0px 10px',
            transition: 'all 0.5s ease-in-out',
            marginTop: menuOpen ? '10px' : '0px',
          }}
        >
          {menuLinks.map((item, i) => (
            <Link
              key={i}
              to={item.route}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '8px 12px',
                textDecoration: 'none',
                color: '#28a745',
                fontWeight: '500',
                borderBottom: i !== menuLinks.length - 1 ? '1px solid #eee' : 'none',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
