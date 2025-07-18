import React, { useState } from "react";

const AccountPage = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");

  const user = {
    firstName: "Harsh",
    lastName: "Kushwah",
    email: "harsh@example.com",
    phone: "+91 98765 43210",
    gender: "Male",
    birthday: "10 March 1999",
    avatar: "https://imgs.search.brave.com/p7wTkIvslowa-wWgv34Zn5V---LR8tmCew0m1JcolWI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzQ2LzgzLzk2/LzM2MF9GXzM0Njgz/OTY4M182bkFQemJo/cFNrSXBiOHBtQXd1/ZmtDN2M1ZUQ3d1l3/cy5qcGc",
  };

  const sections = [
    "Dashboard",
    "Order",
    "Track Your Order",
    "My Address",
    "Account Details",
    "Log Out",
  ];

  const orderData = [
    {
      _id: "HL2",
      name: "Chia Seeds",
      size: "250g",
      regularPrice: 150,
      salePrice: 125,
      stock: 70,
      SKU: "SKU-HL2",
      category: "Health",
      image:
        "https://t3.ftcdn.net/jpg/13/67/69/92/240_F_1367699239_SBBtQEoXk7uJEwKvOD5FiGj6NbRYxR9n.jpg",
    },
    {
      _id: "HL3",
      name: "Protein Granola",
      size: "500g",
      regularPrice: 180,
      salePrice: 148,
      stock: 35,
      SKU: "SKU-HL3",
      category: "Health",
      image:
        "https://t3.ftcdn.net/jpg/13/67/69/92/240_F_1367699239_SBBtQEoXk7uJEwKvOD5FiGj6NbRYxR9n.jpg",
    },
    {
      _id: "HL4",
      name: "Green Tea Bags",
      size: "25 bags",
      regularPrice: 90,
      salePrice: 72,
      stock: 100,
      SKU: "SKU-HL4",
      category: "Health",
      image:
        "https://t4.ftcdn.net/jpg/04/37/50/47/240_F_437504751_0Qftd5fictBssonJcL3dGn5t9P5S6fcw.jpg",
    },
    {
      _id: "HL5",
      name: "Apple Cider Vinegar",
      size: "500ml",
      regularPrice: 135,
      salePrice: 110,
      stock: 60,
      SKU: "SKU-HL5",
      category: "Health",
      image:
        "https://t4.ftcdn.net/jpg/04/37/50/47/240_F_437504751_0Qftd5fictBssonJcL3dGn5t9P5S6fcw.jpg",
    },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "Dashboard":
        return (
          <>
            <h2 style={heading}>Hello {user.firstName} 👋</h2>
            <p style={subText}>
              Welcome back! Here’s your personal dashboard to track orders, manage account, and more.
            </p>

            <div className="dashboard-cards" style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
              marginTop: "30px",
              animation: "fadeSlide 0.6s ease-in-out"
            }}>
              {[
                { title: "Total Orders", value: "12", icon: "🧾" },
                { title: "Pending Deliveries", value: "3", icon: "🚚" },
                { title: "Wishlist Items", value: "7", icon: "❤️" },
                { title: "Unread Messages", value: "2", icon: "💬" },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: "20px",
                    borderRadius: "12px",
                    background: "#f7fdf0",
                    border: "1px solid #d4e9c7",
                    boxShadow: "0 6px 14px rgba(104,165,51,0.08)",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 10px 20px rgba(104,165,51,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 6px 14px rgba(104,165,51,0.08)";
                  }}
                >
                  <div style={{ fontSize: "30px", marginBottom: "10px" }}>{item.icon}</div>
                  <div style={{ fontSize: "18px", fontWeight: "600", color: "#222" }}>{item.value}</div>
                  <div style={{ fontSize: "14px", color: "#666", marginTop: "5px" }}>{item.title}</div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: "35px",
              padding: "20px 25px",
              borderLeft: "5px solid #28a745",
              backgroundColor: "#f0f9eb",
              borderRadius: "12px",
              fontSize: "15px",
              color: "#333",
              lineHeight: "1.6",
              animation: "fadeSlide 0.8s ease-in-out"
            }}>
              💡 <strong>Tip:</strong> You can track your latest order status directly in the "Track Your Order" tab. Stay updated in real-time!
            </div>

            <div style={{
              marginTop: "35px",
              padding: "25px",
              borderRadius: "14px",
              background: "#fff9ed",
              border: "1px dashed #ffc56c",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
              animation: "fadeSlide 0.9s ease-in-out"
            }}>
              <div style={{ fontSize: "15.5px", color: "#444" }}>
                🎁 <strong>Loyalty Points:</strong> <span style={{ fontWeight: "600" }}>520</span> <br />
                🔥 You're <strong>80 points</strong> away from your next reward!
              </div>
              <button
                style={{
                  background: "#28a745",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "0.3s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#558d2a"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#28a745"}
              >
                View Rewards
              </button>
            </div>

            <div style={{ marginTop: "40px", animation: "fadeSlide 1s ease-in-out" }}>
              <h3 style={{ fontSize: "20px", marginBottom: "15px", color: "#222" }}>🔗 Quick Links</h3>
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {[
                  { label: "View Orders", icon: "📦" },
                  { label: "Edit Profile", icon: "👤" },
                  { label: "Manage Address", icon: "🏠" },
                  { label: "Browse Products", icon: "🛍️" },
                ].map((link, idx) => (
                  <div key={idx} style={{
                    padding: "12px 20px",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    fontSize: "15px",
                    color: "#333",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 3px 10px rgba(0,0,0,0.04)"
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#f3fdf1";
                      e.currentTarget.style.boxShadow = "0 8px 20px rgba(104,165,51,0.08)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#fff";
                      e.currentTarget.style.boxShadow = "0 3px 10px rgba(0,0,0,0.04)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {link.icon} {link.label}
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              marginTop: "50px",
              padding: "20px",
              backgroundColor: "#f0f8ff",
              borderRadius: "10px",
              fontSize: "14.5px",
              color: "#444",
              borderLeft: "4px solid #28a745",
              animation: "fadeSlide 1.1s ease-in-out"
            }}>
              Need help? Contact our support team at <strong>+91 98860 21458</strong> or email <strong>bangalore@megamartx.com</strong>
            </div>

            <style>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
          </>
        );


      case "Order":
        return (
          <>
            <h2 style={heading}>Your Orders</h2>

            <div
              style={{
                overflowX: "auto",
                marginTop: "25px",
                animation: "fadeInSlide 0.6s ease-in-out",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 12px" }}>
                <thead>
                  <tr style={{ backgroundColor: "#f2fdf5" }}>
                    <th style={th}>Image</th>
                    <th style={th}>Product</th>
                    <th style={th}>Size</th>
                    <th style={th}>Regular Price</th>
                    <th style={th}>Sale Price</th>
                    <th style={th}>Stock</th>
                    <th style={th}>Category</th>
                  </tr>
                </thead>
                <tbody>
                  {orderData.map((item) => (
                    <tr
                      key={item._id}
                      style={{
                        backgroundColor: "#fff",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                        borderRadius: "8px",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(104,165,51,0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                      }}
                    >
                      <td style={{ ...td, borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: "60px", borderRadius: "8px" }}
                        />
                      </td>
                      <td style={td}>{item.name}</td>
                      <td style={td}>{item.size}</td>
                      <td style={td}>₹{item.regularPrice}</td>
                      <td style={{ ...td, color: "#28a745", fontWeight: "bold" }}>
                        ₹{item.salePrice}
                      </td>
                      <td style={td}>{item.stock}</td>
                      <td style={{ ...td, borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}>
                        {item.category}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <style>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
          </>
        );

      case "Track Your Order":
        const currentStepIndex = 4;

        const trackSteps = [
          "Order Placed",
          "Order Confirmed",
          "Packed",
          "Shipped",
          "Out for Delivery",
          "Expected Delivery (July 1, 2025)",
        ];

        return (
          <>
            <h2 style={heading}>Track Your Order</h2>
            <div style={{ marginTop: "30px" }}>
              <div className="timeline-wrapper">
                {trackSteps.map((step, index) => (
                  <div className="timeline-item" key={index}>
                    <div
                      className={`timeline-dot ${index < currentStepIndex ? "completed" : ""} ${index === currentStepIndex ? "current" : ""
                        }`}
                    />
                    {index !== trackSteps.length - 1 && (
                      <div
                        className={`timeline-line ${index < currentStepIndex ? "line-completed" : ""
                          }`}
                      />
                    )}
                    <div className="timeline-text">{step}</div>
                  </div>
                ))}
              </div>

              <style>{`
          .timeline-wrapper {
            position: relative;
            margin-left: 40px;
            display: flex;
            flex-direction: column;
            gap: 30px;
            animation: fadeTimeline 0.6s ease-in-out;
          }

          .timeline-item {
            position: relative;
            padding-left: 30px;
          }

          .timeline-dot {
            position: absolute;
            left: -16px;
            top: 4px;
            width: 14px;
            height: 14px;
            background-color: #ccc;
            border-radius: 50%;
            transition: background-color 0.3s ease, transform 0.3s ease;
            z-index: 2;
          }

          .timeline-dot.completed {
            background-color: #28a745;
            box-shadow: 0 0 0 4px rgba(104, 165, 51, 0.15);
          }

          .timeline-dot.current {
            background-color: #28a745;
            transform: scale(1.2);
            box-shadow: 0 0 10px rgba(104, 165, 51, 0.3);
          }

          .timeline-line {
            position: absolute;
            left: -10px;
            top: 18px;
            width: 2px;
            height: 30px;
            background-color: #ccc;
            z-index: 1;
            transition: background-color 0.3s ease;
          }

          .timeline-line.line-completed {
            background-color: #28a745;
          }

          .timeline-text {
            font-size: 15.5px;
            color: #444;
            transition: all 0.3s ease;
          }

          @keyframes fadeTimeline {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
            </div>
          </>
        );

      case "My Address":
        return (
          <>
            <h2 style={heading}>My Address</h2>
            <div
              style={{
                marginTop: "25px",
                padding: "25px 30px",
                borderRadius: "14px",
                backgroundColor: "#f9f9f9",
                boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
                borderLeft: "5px solid #28a745",
                color: "#333",
                fontSize: "15.5px",
                lineHeight: "1.8",
                position: "relative",
                animation: "fadeSlideIn 0.6s ease forwards",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 28px rgba(0,0,0,0.1)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.05)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <p><strong>👤 Name:</strong> Harsh Kushwah</p>
              <p><strong>🏠 Address:</strong> 302, Green Valley Residency, MG Road</p>
              <p><strong>📍 City:</strong> Indore, Madhya Pradesh - 452001</p>
              <p><strong>📞 Phone:</strong> +91 98765 43210</p>
              <p><strong>📧 Email:</strong> harsh@example.com</p>
            </div>

            <style>{`
              @keyframes fadeSlideIn {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              @media (max-width: 768px) {
                .account-flex {
                  flex-direction: column !important;
                  align-items: flex-start !important;
                }
                .account-grid {
                  grid-template-columns: 1fr !important;
                }
              }
            `}</style>
          </>
        );

      case "Account Details":
        return (
          <>
            <h2 style={heading}>Account Details</h2>
            <div className="account-details-container">
              <img
                src={user.avatar}
                alt="user"
                className="account-avatar"
              />
              <div className="account-info-grid">
                <div><strong>First Name:</strong> {user.firstName}</div>
                <div><strong>Last Name:</strong> {user.lastName}</div>
                <div><strong>Email Address:</strong> {user.email}</div>
                <div><strong>Phone:</strong> {user.phone}</div>
                <div><strong>Gender:</strong> {user.gender}</div>
                <div><strong>Birthday:</strong> {user.birthday}</div>
                <div><strong>Password:</strong> <span style={{ letterSpacing: "3px" }}>••••••••</span></div>
              </div>
            </div>

            <style>{`
        @keyframes fadeInCard {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .account-details-container {
          display: flex;
          gap: 30px;
          align-items: center;
          margin-top: 25px;
          padding: 30px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.06);
          border: 1px solid #e2e8f0;
          animation: fadeInCard 0.5s ease;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .account-details-container:hover {
          transform: scale(1.015);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .account-avatar {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid #28a745;
          box-shadow: 0 4px 12px rgba(104,165,51,0.3);
          transition: transform 0.3s ease;
        }

        .account-avatar:hover {
          transform: scale(1.08);
        }

        .account-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px 40px;
          font-size: 15.5px;
          color: #222;
          line-height: 1.6;
          width: 100%;
        }

        @media (max-width: 768px) {
          .account-details-container {
            flex-direction: column;
            align-items: flex-start;
          }

          .account-info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
          </>
        );

      case "Log Out":
     
        setTimeout(() => {
          localStorage.clear(); 
          sessionStorage.clear();
          window.location.href = "/"; 
        }, 1500); 
        return (
          <>
            <div className="logout-message">
              <h2>Logging Out...</h2>
              <p>We’re safely signing you out of your account. Please wait.</p>
              <div className="spinner" />
            </div>

            <style>{`
        .logout-message {
          animation: fadeOutUp 0.5s ease forwards;
          padding: 40px;
          text-align: center;
          border-radius: 12px;
          background: #fefefe;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        }

        .logout-message h2 {
          color: #28a745;
          margin-bottom: 10px;
        }

        .logout-message p {
          color: #555;
          font-size: 15px;
          margin-bottom: 20px;
        }

        .spinner {
          margin: 0 auto;
          width: 40px;
          height: 40px;
          border: 4px solid #e0e0e0;
          border-top: 4px solid #28a745;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes fadeOutUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
          </>
        );

    }
  };

  const container = {
    display: "flex",
    padding: "30px",
    flexWrap: "wrap",
  };

  const sidebar = {
    width: "240px",
    marginRight: "30px",
  };

  const menuItem = (isActive) => ({
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    backgroundColor: isActive ? "#28a745" : "#fff",
    color: isActive ? "#fff" : "#333",
    marginBottom: "10px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontWeight: isActive ? "600" : "normal",
  });

  const iconStyle = {
    marginRight: "10px",
    fontSize: "18px",
  };

  const content = {
    flex: 1,
    backgroundColor: "#fff",
    padding: "20px 30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.03)",
  };

  const heading = {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  };

  const subText = {
    fontSize: "15px",
    color: "#666",
  };

  const th = {
    padding: "12px 16px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
    fontWeight: "bold",
    fontSize: "14px",
  };

  const td = {
    padding: "12px 16px",
    borderBottom: "1px solid #eee",
    fontSize: "14px",
  };

  const icons = {
    Dashboard: "📈",
    Order: "🛍️",
    "Track Your Order": "🚚",
    "My Address": "📍",
    "Account Details": "👤",
    "Log Out": "↩️",
  };

  return (
    <div style={container}>
      <div style={sidebar}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src={user.avatar}
            alt="avatar"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
          <h4 style={{ marginTop: "10px" }}>
            {`${user.firstName} ${user.lastName}`}
          </h4>
        </div>
        {sections.map((section) => (
          <div
            key={section}
            style={menuItem(activeSection === section)}
            onClick={() => setActiveSection(section)}
          >
            <span style={iconStyle}>{icons[section]}</span> {section}
          </div>
        ))}
      </div>
      <div style={content}>{renderSection()}</div>
    </div>
  );
};

export default AccountPage;
