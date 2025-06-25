import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});
  const [heights, setHeights] = useState({});

  const refs = {
    dashboard: useRef(null),
    order: useRef(null),
  };

  const toggleMenu = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  useEffect(() => {
    const newHeights = {};
    Object.keys(refs).forEach((key) => {
      if (refs[key].current) {
        newHeights[key] = refs[key].current.scrollHeight;
      }
    });
    setHeights(newHeights);
  }, [openMenus]);

  const styles = {
    sidebar: {
      width: "250px",
      height: "100vh",
      background: "#28a745",
      color: "#fff",
      padding: "20px",
      boxSizing: "border-box",
      position: "fixed",
      left: 0,
      top: 0,
      overflowY: "auto",
    },
    logo: {
      width: "150px",
      marginBottom: "30px",
    },
    menuList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    menuItem: {
      marginBottom: "10px",
    },
    link: {
      display: "flex",
      alignItems: "center",
      padding: "10px",
      color: "#fff",
      textDecoration: "none",
      background: "#2c2c3a",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "0.3s",
    },
    icon: {
      width: "20px",
      marginRight: "10px",
    },
    submenuContainer: (menuName) => ({
      maxHeight: openMenus[menuName] ? `${heights[menuName]}px` : "0px",
      overflow: "hidden",
      transition: "max-height 0.3s ease",
    }),
    submenu: {
      listStyle: "none",
      paddingLeft: "20px",
      marginTop: "5px",
    },
    subLink: {
      display: "block",
      padding: "8px 10px",
      background: "#2c2c3a",
      margin: "5px 0",
      color: "#bbb",
      borderRadius: "5px",
      textDecoration: "none",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.sidebar}>
      <img
        src="https://ekomart-nextjs.vercel.app/assets/images-dashboard/logo/logo.svg"
        alt="Logo"
        style={styles.logo}
      />

      <ul style={styles.menuList}>
        {/* Dashboard */}
        <li style={styles.menuItem}>
          <a href="#!" onClick={(e) => {
              e.preventDefault();
              toggleMenu("dashboard");
            }} style={styles.link}>
            <img src="/assets/images-dashboard/icons/01.svg" alt="icon" style={styles.icon} />
            <span>Dashboard</span>
          </a>
          <div style={styles.submenuContainer("dashboard")}>
            <ul style={styles.submenu} ref={refs.dashboard}>
              <li>
                <Link to="/dashboard" style={styles.subLink}>Main Demo</Link>
              </li>
              <li>
                <a href="#!" style={styles.subLink}>Coming Soon</a>
              </li>
            </ul>
          </div>
        </li>

        {/* Order */}
        <li style={styles.menuItem}>
          <a href="#!" onClick={(e) => {
              e.preventDefault();
              toggleMenu("order");
            }} style={styles.link}>
            <img src="/assets/images-dashboard/icons/09.svg" alt="icon" style={styles.icon} />
            <span>Order</span>
          </a>
          <div style={styles.submenuContainer("order")}>
            <ul style={styles.submenu} ref={refs.order}>
              <li>
                <Link to="/dashboard/order" style={styles.subLink}>Order</Link>
              </li>
              <li>
                <Link to="/dashboard/order-details" style={styles.subLink}>Order Details</Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Add Product */}
        <li style={styles.menuItem}>
          <Link to="/dashboard/add-product" style={styles.link}>
            <img src="/assets/images-dashboard/icons/05.svg" alt="icon" style={styles.icon} />
            <span>Add Product</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
