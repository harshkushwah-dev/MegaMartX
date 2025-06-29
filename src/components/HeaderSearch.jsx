import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import logo from '../assets/Shop_Logo.png';

export const HeaderSearch = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(inputRef.current, {
      strings: [
        "Search for products...",
        "Search for categories...",
        "Search for brands..."
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="search-header-area-main py-3 px-3 border-bottom shadow-sm" style={{ backgroundColor: '#fff' }}>
        <style>{`
          .accont-wishlist-cart-area-header a {
            transition: all 0.3s ease;
            border-radius: 8px;
          }
          .accont-wishlist-cart-area-header a:hover {
            background-color: #28a745 !important;
            color: white !important;
            transform: scale(1.05);
          }

          @media (max-width: 425px) {
            .accont-wishlist-cart-area-header {
              display: none !important;
            }
          }
        `}</style>

        <div className="row align-items-center">
          <div className="col-12 d-flex flex-wrap justify-content-between align-items-center gap-3">

            {/* Logo */}
            <a href="/" className="logo-area" style={{ flex: '1 1 120px', textAlign:'center' }}>
              <img src={logo} alt="Shop Logo" className="img-fluid" style={{ maxWidth: '125px', height: 'auto', textAlign:'center' }} />
            </a>

            {/* Search Box with Category Select */}
            <div className="category-search-wrapper flex-grow-1" style={{ flex: '2 1 300px', minWidth: '250px' }}>
              <form
                className="search-header d-flex align-items-center"
                autoComplete="off"
                style={{
                  border: '2px solid #28a745',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 0 5px rgba(0,0,0,0.1)',
                  width: '100%',
                  backgroundColor: '#fff',
                }}
              >
                {/* Category Dropdown */}
                <select
                  className="form-select border-0"
                  style={{
                    width: '140px',
                    height: '45px',
                    borderRight: '1px solid #ccc',
                    borderRadius: '0',
                    fontSize: '14px'
                  }}
                >
                  <option value="">All Categories</option>
                  <option value="grocery">Grocery</option>
                  <option value="fruits">Fruits</option>
                  <option value="drinks">Drinks</option>
                  <option value="snacks">Snacks</option>
                  <option value="dairy">Dairy</option>
                </select>

                {/* Typed Input */}
                <input
                  type="text"
                  ref={inputRef}
                  placeholder=""
                  required
                  className="form-control border-0"
                  style={{
                    height: '45px',
                    flex: '1',
                    paddingLeft: '15px',
                    fontSize: '1.1rem',
                    minWidth: '0',
                  }}
                />

                {/* Search Button */}
                <button
                  type="submit"
                  className="rts-btn btn-primary d-flex align-items-center justify-content-center"
                  style={{
                    width: '50px',
                    height: '100%',
                    border: 'none',
                    backgroundColor: '#28a745',
                    color: '#fff',
                    padding: '13px'
                  }}
                >
                  <i className="fa-solid fa-magnifying-glass fs-5"></i>
                </button>
              </form>
            </div>

            {/* Account / Wishlist / Cart */}
            <div
              className="accont-wishlist-cart-area-header d-flex flex-wrap align-items-center justify-content-end"
              style={{
                gap: '10px',
                flex: '1 1 auto',
              }}
            >
              <a href="/account" className="btn btn-outline-dark d-flex flex-column align-items-center py-2 px-3" style={{ fontSize: '12px', minWidth: '70px' }}>
                <i className="fa-regular fa-user fs-5"></i>
                <span>Account</span>
              </a>

              <a href="/shop-compare" className="btn btn-outline-dark d-flex flex-column align-items-center py-2 px-3" style={{ fontSize: '12px', minWidth: '70px' }}>
                <i className="fa-solid fa-code-compare fs-5"></i>
                <span>Compare</span>
              </a>

              <a href="/wishlist" className="btn btn-outline-dark d-flex flex-column align-items-center py-2 px-3" style={{ fontSize: '12px', minWidth: '70px' }}>
                <i className="fa-regular fa-heart fs-5"></i>
                <span>Wishlist</span>
              </a>

              <a href="/cart" className="btn btn-outline-dark d-flex flex-column align-items-center py-2 px-3" style={{ fontSize: '12px', minWidth: '70px' }}>
                <i className="fa-solid fa-cart-shopping fs-5"></i>
                <span>Cart</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
