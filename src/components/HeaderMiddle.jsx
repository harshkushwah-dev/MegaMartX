import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
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
    <div
      className="header-mid-one-wrapper  px-2 border-bottom shadow-sm sticky-top"
      style={{ backgroundColor: '#28a745', zIndex: 1030 }}
    >
      <style>{`
        .hover-dropdown:hover > .dropdown-menu {
          display: block;
          margin-top: 0;
        }

        menu, ol, ul {
   margin:  0px !important;
    padding: 0 0 0 40px;
}

        .dropdown-menu {
          display: none;
          background-color: #fff;
          border: 1px solid #ccc;
        }

        .dropdown-item {
          color: black !important;
        }

        .nav-link {
          transition: color 0.2s ease-in-out;
        }

        .nav-link:hover {
          color: #fff !important;
        }
      `}</style>

      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          <div className="col-12">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 flex-wrap">

              {/* Left Section */}
              <div className="d-flex flex-wrap gap-3 align-items-center">
                <ul className="nav-h_top d-flex gap-3 list-unstyled mb-0 flex-wrap">
                  <li className="dropdown hover-dropdown">
                    <a href="#" className="dropdown-toggle text-white fw-semibold" role="button" aria-expanded="false">English</a>
                    <ul className="dropdown-menu">
                      <li><a href="#" className="dropdown-item text-black">Italian</a></li>
                      <li><a href="#" className="dropdown-item text-black">Russian</a></li>
                      <li><a href="#" className="dropdown-item text-black">Chinese</a></li>
                    </ul>
                  </li>

                  <li className="dropdown hover-dropdown">
                    <a href="#" className="dropdown-toggle text-white fw-semibold" role="button" aria-expanded="false">USD</a>
                    <ul className="dropdown-menu">
                      <li><a href="#" className="dropdown-item text-black">Ruble</a></li>
                      <li><a href="#" className="dropdown-item text-black">Rupee</a></li>
                      <li><a href="#" className="dropdown-item text-black">Euro</a></li>
                    </ul>
                  </li>

                  <li><a className="text-white fw-semibold text-decoration-none" href="/trackorder">Track Order</a></li>
                  <li className="d-none d-md-block small" style={{paddingLeft:'15px', borderLeft:'1px solid #fff'}} >
                    <a style={{fontSize:'15px', fontWeight:'400'}}  className="text-white text-decoration-none" href="#">We deliver every day from 7:00 to 22:00</a>
                  </li>
                </ul>
              </div>

              {/* Navigation */}
              <div className="nav-area ">
                {isMobile ? (
                  <div className="d-flex justify-content-end">
                    <div className="dropdown">
                      <button className="btn btn-light dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <Menu className="me-1" size={18} />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item text-black" href="#">About</a></li>
                        <li><a className="dropdown-item text-black" href="#">Shop</a></li>
                        <li><a className="dropdown-item text-black" href="#">Vendors</a></li>
                        <li><a className="dropdown-item text-black" href="#">Pages</a></li>
                        <li><a className="dropdown-item text-black" href="/blog">Blog</a></li>
                        <li><a className="dropdown-item text-black" href="/contact">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <nav>
                    <ul className="parent-nav d-flex flex-wrap justify-content-center gap-5 list-unstyled mb-0">
                      <li><a className="nav-link text-white fw-semibold" href="#">About</a></li>
                      <li className="dropdown hover-dropdown">
                        <a className="nav-link dropdown-toggle text-white fw-semibold" href="#" role="button" aria-expanded="false">Shop</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item text-black" href="/shop">Shop Grid Sidebar</a></li>
                          <li><a className="dropdown-item text-black" href="/shop-list-sidebar">Shop List Sidebar</a></li>
                          <li><a className="dropdown-item text-black" href="/shop-grid-top-filter">Top Filter Grid</a></li>
                          <li><a className="dropdown-item text-black" href="/shop-list-top-filter">Top Filter List</a></li>
                        </ul>
                      </li>
                      <li className="dropdown hover-dropdown">
                        <a className="nav-link dropdown-toggle text-white fw-semibold" href="#" role="button" aria-expanded="false">Vendors</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item text-black" href="/vendor-list">Vendor List</a></li>
                          <li><a className="dropdown-item text-black" href="/vendor-grid">Vendor Grid</a></li>
                          <li><a className="dropdown-item text-black" href="/vendor-details">Vendor Details</a></li>
                        </ul>
                      </li>
                      <li className="dropdown hover-dropdown">
                        <a className="nav-link dropdown-toggle text-white fw-semibold" href="#" role="button" aria-expanded="false">Pages</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item text-black" href="/dashboard">Dashboard</a></li>
                          <li><a className="dropdown-item text-black" href="/about">About</a></li>
                          <li><a className="dropdown-item text-black" href="/store">Store</a></li>
                          <li><a className="dropdown-item text-black" href="/faq">FAQ</a></li>
                          <li><a className="dropdown-item text-black" href="/invoice">Invoice</a></li>
                          <li><a className="dropdown-item text-black" href="/contact">Contact</a></li>
                          <li><a className="dropdown-item text-black" href="/register">Register</a></li>
                          <li><a className="dropdown-item text-black" href="/login">Login</a></li>
                          <li><a className="dropdown-item text-black" href="/privacy-policy">Privacy Policy</a></li>
                          <li><a className="dropdown-item text-black" href="/cookies-policy">Cookies Policy</a></li>
                          <li><a className="dropdown-item text-black" href="/terms-condition">Terms & Condition</a></li>
                          <li><a className="dropdown-item text-black" href="/404">Error</a></li>
                        </ul>
                      </li>
                      <li><a className="nav-link text-white fw-semibold" href="/blog">Blog</a></li>
                      <li><a className="nav-link text-white fw-semibold" href="/contact">Contact</a></li>
                    </ul>
                  </nav>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
