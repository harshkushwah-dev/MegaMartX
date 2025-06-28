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
      `}</style>
      <div className="row align-items-center">
        <div className="col-12 d-flex flex-wrap justify-content-between align-items-center gap-3">
          {/* Logo */}
          <a href="/" className="logo-area text-center" style={{ width: '15%' }}>
            <img src={logo} alt="Shop Logo" className="img-fluid" style={{width:'125px'}} />
          </a>

          {/* Search Box */}
          <div className="category-search-wrapper flex-grow-1" style={{ maxWidth: '750px', flexBasis: '50%' }}>
            <form className="search-header d-flex align-items-center" autoComplete="off" style={{ border: '2px solid #28a745', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}>
              <input
                type="text"
                ref={inputRef}
                placeholder=""
                required
                className="form-control border-0"
                style={{ height: '45px', flex: '1', paddingLeft: '15px', fontSize: '1.5rem' }}
              />
              <button
                type="submit"
                className="rts-btn btn-primary d-flex align-items-center justify-content-center"
                style={{ width: '10%', height: '100%', border: 'none', backgroundColor: '#000', color: '#fff' }}
              >
                <i className="fa-solid fa-magnifying-glass fs-5"></i>
              </button>
            </form>
          </div>

          {/* Account, Wishlist, Cart */}
          <div className="accont-wishlist-cart-area-header d-flex gap-3">
            <a href="/account" className="btn btn-outline-dark d-flex flex-column align-items-center py-3 px-4" style={{ minWidth: '80px', fontSize: '12px' }}>
              <i className="fa-regular fa-user fs-3"></i>
              <span>Account</span>
            </a>

            <a href="/shop-compare" className="btn btn-outline-dark d-flex flex-column align-items-center py-3 px-4 position-relative" style={{ minWidth: '80px', fontSize: '12px' }}>
              <i className="fa-solid fa-cart-shopping fs-3"></i>
              
              <span>Compare</span>
            </a>

            <a href="/wishlist" className="btn btn-outline-dark d-flex flex-column align-items-center py-3 px-4 position-relative" style={{ minWidth: '80px', fontSize: '12px' }}>
              <i className="fa-regular fa-heart fs-3"></i>
              
              <span>Wishlist</span>
            </a>

            <a href="/cart" className="btn btn-outline-dark d-flex flex-column align-items-center py-3 px-4 position-relative" style={{ minWidth: '80px', fontSize: '12px' }}>
              <i className="fa-solid fa-cart-shopping fs-3"></i>
             
              <span>Cart</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
