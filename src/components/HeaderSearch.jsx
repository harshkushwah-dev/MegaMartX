import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import logo from '../assets/Shop_Logo.png';
import { useCart } from "../context/CartContext";
import { motion } from 'framer-motion';

const iconItems = [
  { to: '/compare', icon: 'fa-code-compare', label: 'Compare' },
  { to: '/login', icon: 'fa-right-to-bracket', label: 'Login', login: true },
  { to: '/account', icon: 'fa-user', label: 'Account' },
  { to: '/wishlist', icon: 'fa-heart', label: 'Wishlist' },
  { to: '/cart', icon: 'fa-cart-shopping', label: 'Cart' },
];

const btnStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px 16px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  backgroundColor: '#fff',
  color: '#333',
  textDecoration: 'none',
  fontWeight: 500,
  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
};

const btnHoverStyle = {
  backgroundColor: '#f0fdf4',
  borderColor: '#28a745',
  color: '#28a745',
  boxShadow: '0 4px 12px rgba(40, 167, 69, 0.15)',
};

export const HeaderSearch = () => {
  const inputRef = useRef(null);
  const { cartCount } = useCart();

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

  const btnBaseStyle = {
    fontSize: '12px',
    minWidth: '70px',
    borderRadius: '8px',
    padding: '8px 12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: '1px solid #28a745',  
    transition: 'transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
    userSelect: 'none',
    color: '#333',
    backgroundColor: 'transparent',
    gap: '4px',
    boxShadow: '0 2px 5px rgba(40, 167, 69, 0.15)',
  };

  // Hover effect handlers
  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = '#28a745';
    e.currentTarget.style.color = '#fff';
    e.currentTarget.style.transform = 'scale(1.03)';
    e.currentTarget.style.borderColor = '#28a745';
    e.currentTarget.style.boxShadow = '0 4px 10px rgba(40, 167, 69, 0.3)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = '#333';
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.borderColor = '#28a745';
    e.currentTarget.style.boxShadow = '0 2px 5px rgba(40, 167, 69, 0.15)';
  };

  return (
    <>
      <style>{`
  /* Responsive styles for HeaderSearch */

  @media (max-width: 768px) {
    .search-header-area-main .row > div.col-12 {
      flex-wrap: wrap !important;
    }

    .logo-area {
      flex: 1 1 100% !important;
      margin-bottom: 10px;
      text-align: center !important;
    }

    .category-search-wrapper {
      flex: 1 1 100% !important;
      min-width: 100% !important;
      margin-bottom: 10px;
    }

    .accont-wishlist-cart-area-header {
      flex: 1 1 100% !important;
      justify-content: center !important;
      gap: 6px !important;
      margin-bottom: 10px;
    }

    .accont-wishlist-cart-area-header a {
      min-width: 55px !important;
      font-size: 10px !important;
      padding: 6px 8px !important;
      gap: 2px !important;
    }

    .accont-wishlist-cart-area-header a i {
      font-size: 16px !important;
    }
  }

  @media (max-width: 425px) {
    /* Hide entire header search on very small screens */
    .search-header-area-main {
      display: none !important;
    }
  }
`}</style>

      <style>{`
        /* Responsive styles for HeaderSearch */

        @media (max-width: 768px) {
          .search-header-area-main .row > div.col-12 {
            flex-wrap: wrap !important;
          }

          .logo-area {
            flex: 1 1 100% !important;
            margin-bottom: 10px;
            text-align: center !important;
          }

          .category-search-wrapper {
            flex: 1 1 100% !important;
            min-width: 100% !important;
            margin-bottom: 10px;
          }

          .accont-wishlist-cart-area-header {
            flex: 1 1 100% !important;
            justify-content: center !important;
            gap: 6px !important;
            margin-bottom: 10px;
          }

          .accont-wishlist-cart-area-header a {
            min-width: 55px !important;
            font-size: 10px !important;
            padding: 6px 8px !important;
            gap: 2px !important;
          }

          .accont-wishlist-cart-area-header a i {
            font-size: 16px !important;
          }
        }

        @media (max-width: 425px) {
          .search-header-area-main {
            padding: 10px !important;
          }
          .category-search-wrapper form {
            flex-wrap: wrap;
          }
          .category-search-wrapper select {
            width: 100% !important;
            margin-bottom: 6px;
            border-radius: 8px !important;
          }
          .category-search-wrapper input {
            flex: 1 1 100% !important;
            min-width: 100% !important;
            border-radius: 8px !important;
            margin-bottom: 6px;
          }
          .category-search-wrapper button {
            width: 100% !important;
            border-radius: 8px !important;
          }
        }
      `}</style>

      <div className="search-header-area-main py-3 px-3 border-bottom shadow-sm" style={{ backgroundColor: '#fff' }}>
        <div className="row align-items-center">
          <div className="col-12 d-flex flex-wrap justify-content-between align-items-center gap-3">

            {/* Logo */}
            <a href="/" className="logo-area" style={{ flex: '1 1 120px', textAlign: 'center' }}>
              <img src={logo} alt="Shop Logo" className="img-fluid" style={{ maxWidth: '125px', height: 'auto' }} />
            </a>

            {/* Search Box */}
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
                <select
                  className="form-select border-0"
                  style={{
                    width: '140px',
                    height: '45px',
                    borderRight: '1px solid #ccc',
                    borderRadius: '0',
                    fontSize: '14px',
                  }}
                >
                  <option value="">All Categories</option>
                  <option value="grocery">Grocery</option>
                  <option value="fruits">Fruits</option>
                  <option value="drinks">Drinks</option>
                  <option value="snacks">Snacks</option>
                  <option value="dairy">Dairy</option>
                </select>

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

                <button
                  type="submit"
                  className="rts-btn btn-primary d-flex align-items-center justify-content-center"
                  style={{
                    width: '50px',
                    height: '100%',
                    border: 'none',
                    backgroundColor: '#28a745',
                    color: '#fff',
                    padding: '13px',
                  }}
                >
                  <i className="fa-solid fa-magnifying-glass fs-5"></i>
                </button>
              </form>
            </div>

            {/* Account / Wishlist / Cart */}
            <div
              className="d-flex flex-wrap justify-content-end align-items-center"
              style={{ gap: '12px', flex: '1 1 auto' }}
            >
              {iconItems.map((item, i) => (
                <motion.div key={i} style={{ position: 'relative' }}>
                  <Link
                    to={item.to}
                    style={{
                      ...btnStyle,
                      ...(item.login && {
                        backgroundColor: '#f9f9f9',
                        border: '1px solid #ccc',
                      }),
                    }}
                    onMouseEnter={(e) => {
                      Object.assign(e.currentTarget.style, btnHoverStyle);
                    }}
                    onMouseLeave={(e) => {
                      Object.assign(e.currentTarget.style, {
                        backgroundColor: item.login ? '#f9f9f9' : '#fff',
                        color: '#333',
                        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
                        borderColor: '#ddd',
                      });
                    }}
                  >
                    <i className={`fas ${item.icon} fs-5`}></i>
                    <span>{item.label}</span>
                  </Link>

                  {/* Cart badge */}
                  {item.label === 'Cart' && cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-5px',
                        backgroundColor: '#dc3545',
                        color: '#fff',
                        borderRadius: '50%',
                        padding: '2px 6px',
                        fontSize: '10px',
                        fontWeight: 'bold',
                      }}
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </>
  );
};
