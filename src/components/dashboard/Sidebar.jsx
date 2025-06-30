import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaShoppingBag, FaPlus, FaAngleRight } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({
    dashboard: true,
    orders: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <aside style={styles.sidebar}>
      {/* Logo */}
      <div style={styles.logoContainer}>
        <h2 style={{ color: "#22c55e", fontWeight: "bold", fontSize: "24px" }}>MegaMartX</h2>
      </div>

      {/* Navigation */}
      <nav>
        <ul style={styles.menuList}>
          {/* Dashboard */}
          <li>
            <div
              style={styles.menuTitle}
              onClick={() => toggleMenu("dashboard")}
              role="button"
              tabIndex={0}
              onKeyPress={() => toggleMenu("dashboard")}
            >
              <FaTachometerAlt style={styles.menuIcon} />
              <span>Dashboard</span>
              <FaAngleRight
                style={{
                  marginLeft: "auto",
                  transition: "transform 0.3s ease",
                  transform: openMenus.dashboard ? "rotate(90deg)" : "rotate(0deg)",
                  color: "#22c55e",
                }}
              />
            </div>
            <ul
              style={{
                ...styles.subMenu,
                maxHeight: openMenus.dashboard ? "200px" : "0",
                padding: openMenus.dashboard ? "8px 0" : "0 0",
                opacity: openMenus.dashboard ? 1 : 0,
              }}
            >
              <li>
                <Link
                  to="/dashboard"
                  style={{
                    ...styles.submenuLink,
                    ...(isActive("/dashboard") ? styles.activeSubmenuLink : {}),
                  }}
                >
                  Main Demo
                </Link>
              </li>
              <li>
                <Link to="#" style={styles.submenuLink}>
                  Coming Soon
                </Link>
              </li>
            </ul>
          </li>

          {/* Orders */}
          <li>
            <div
              style={styles.menuTitle}
              onClick={() => toggleMenu("orders")}
              role="button"
              tabIndex={0}
              onKeyPress={() => toggleMenu("orders")}
            >
              <FaShoppingBag style={styles.menuIcon} />
              <span>Orders</span>
              <FaAngleRight
                style={{
                  marginLeft: "auto",
                  transition: "transform 0.3s ease",
                  transform: openMenus.orders ? "rotate(90deg)" : "rotate(0deg)",
                  color: "#22c55e",
                }}
              />
            </div>
            <ul
              style={{
                ...styles.subMenu,
                maxHeight: openMenus.orders ? "200px" : "0",
                padding: openMenus.orders ? "8px 0" : "0 0",
                opacity: openMenus.orders ? 1 : 0,
              }}
            >
              <li>
                <Link
                  to="/dashboard/order"
                  style={{
                    ...styles.submenuLink,
                    ...(isActive("/dashboard/order") ? styles.activeSubmenuLink : {}),
                  }}
                >
                  Order
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/order-details"
                  style={{
                    ...styles.submenuLink,
                    ...(isActive("/dashboard/order-details") ? styles.activeSubmenuLink : {}),
                  }}
                >
                  Order Details
                </Link>
              </li>
            </ul>
          </li>

          {/* Add Product */}
          <li>
            <Link
              to="/dashboard/add-product"
              style={styles.addProductLink}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#4b5563")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#374151")}
            >
              <FaPlus style={styles.menuIcon} />
              Add Product
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: "260px",
    height: "100vh",
    background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
    color: "#d1d5db",
    padding: "25px 20px",
    position: "fixed",
    top: 0,
    left: 0,
    overflowY: "auto",
    boxShadow: "4px 0 12px rgba(0,0,0,0.25)",
    zIndex: 1000,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    userSelect: "none",
  },
  logoContainer: {
    marginBottom: "40px",
    textAlign: "center",
  },
  menuList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  menuTitle: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: "#d1d5db",
    fontWeight: "600",
    fontSize: "16px",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "8px",
    userSelect: "none",
    transition: "background-color 0.3s ease",
  },
  menuIcon: {
    width: "18px",
    height: "18px",
    color: "#22c55e",
    flexShrink: 0,
  },
  subMenu: {
    listStyle: "none",
    paddingLeft: "30px",
    margin: 0,
    overflow: "hidden",
    transition: "all 0.4s ease",
  },
  submenuLink: {
    display: "block",
    padding: "8px 12px",
    color: "#9ca3af",
    textDecoration: "none",
    borderRadius: "6px",
    fontSize: "14px",
    marginBottom: "6px",
    fontWeight: "500",
    transition: "color 0.3s ease, background-color 0.3s ease",
  },
  activeSubmenuLink: {
    backgroundColor: "#22c55e",
    color: "#fff",
    fontWeight: "700",
  },
  addProductLink: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 15px",
    backgroundColor: "#374151",
    borderRadius: "8px",
    color: "#d1d5db",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "15px",
    marginTop: "10px",
    userSelect: "none",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
};

export default Sidebar;
