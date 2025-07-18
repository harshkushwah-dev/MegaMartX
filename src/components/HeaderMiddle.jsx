import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react'; 

export const HeaderMiddle = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div
        className="header-mid-one-wrapper px-3 py-2 border-bottom shadow-sm sticky-top hide-below-992"
        style={{ backgroundColor: '#28a745', zIndex: 1030 }}
      >

        <style>{`
        .hover-dropdown:hover > .dropdown-menu {
          display: block;
          margin-top: 0;
        }

        .dropdown-menu {
          display: none;
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 10px 0;
        }

        .dropdown-item {
          color: black !important;
          padding: 6px 20px;
        }

        .nav-link, .dropdown-toggle, .dropdown-item {
          transition: all 0.3s ease;
        }

        .nav-link:hover, .dropdown-toggle:hover {
          color: #fff !important;
        }

        @media(max-width: 425px) {
          .nav-h_top li:nth-child(3), /* Track Order */
          .nav-h_top li:nth-child(4) { /* Delivery Time */
            display: none !important;
          }
        }
      `}</style>

        <div className="container-fluid">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">

            {/* Language & Currency */}
            <ul className="nav-h_top d-flex gap-3 list-unstyled mb-0 align-items-center">
              <li className="dropdown hover-dropdown">
                <a href="#" className="dropdown-toggle text-white fw-semibold" style={{textDecoration:'none'}} >English</a>
                <ul className="dropdown-menu">
                  <li><a href="#" className="dropdown-item">Italian</a></li>
                  <li><a href="#" className="dropdown-item">Russian</a></li>
                  <li><a href="#" className="dropdown-item">Chinese</a></li>
                </ul>
              </li>

              <li className="dropdown hover-dropdown">
                <a href="#" className="dropdown-toggle text-white fw-semibold" style={{textDecoration:'none'}} >USD</a>
                <ul className="dropdown-menu">
                  <li><a href="#" className="dropdown-item">Ruble</a></li>
                  <li><a href="#" className="dropdown-item">Rupee</a></li>
                  <li><a href="#" className="dropdown-item">Euro</a></li>
                </ul>
              </li>

              <li><Link className="text-white fw-semibold text-decoration-none" to="/trackorder">Track Order</Link></li>
              <li className="d-none d-md-block" style={{ paddingLeft: '15px', borderLeft: '1px solid #fff' }}>
                <span className="text-white" style={{ fontSize: '14px', fontWeight: '400' }}>
                  Delivery every day 7:00 AM – 10:00 PM
                </span>
              </li>
            </ul>

            {/* Navigation Menu */}
            <div className="nav-area">
              {isMobile ? (
                <div className="dropdown text-end">
                  <button className="btn btn-light dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <Menu className="me-1" size={18} />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><Link className="dropdown-item" to="/">Home</Link></li>
                   
                    <li><Link className="dropdown-item" to="/shop">Shop</Link></li>
                    <li><Link className="dropdown-item" to="/vendor">Vendors</Link></li>
                    <li><Link className="dropdown-item" to="/blogmain">Blog</Link></li>
                    <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
                  </ul>
                </div>
              ) : (
                <nav>
                  <ul className="d-flex flex-wrap list-unstyled gap-4 mb-0 align-items-center">
                    <li><Link className="text-white text-decoration-none" to="/">Home</Link></li>
                    <li><Link className="text-white text-decoration-none" to="/about">About</Link></li>
                    {/* <li className="dropdown hover-dropdown">
                      <a className="text-white dropdown-toggle text-decoration-none" href="#">Shop</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/shop">Shop Grid</a></li>
                        <li><a className="dropdown-item" href="/shop-list-sidebar">List Sidebar</a></li>
                        <li><a className="dropdown-item" href="/shop-grid-top-filter">Top Filter Grid</a></li>
                      </ul>
                    </li> */}
                    <li className="dropdown hover-dropdown">
                      <a className="text-white dropdown-toggle text-decoration-none" href="#">Vendors</a>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/vendor">Vendor List</Link></li>
                        <li><Link className="dropdown-item" to="/vendorDetails">Vendor Details</Link></li>
                      </ul>
                    </li>
                    <li><Link className="text-white text-decoration-none" to="/blogmain">Blog</Link></li>
                    <li><Link className="text-white text-decoration-none" to="/contact">Contact</Link></li>
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
    @media (max-width: 991.98px) {
      .hide-below-992 {
        display: none !important;
      }
    }
  `}
      </style>

    </>
  );
};
