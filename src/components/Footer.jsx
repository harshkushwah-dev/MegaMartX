import React from "react";

const footerData = {
  about: {
    phone: " +91 88791 45630",
    workingHours: [
      "Mon-Fri: 8:00am - 6:00pm",
      "Saturday: 8:00am - 6:00pm",
      "Sunday: Closed",
    ],
  },
  stores: ["Delivery Info", "Privacy Policy", "Terms & Conditions", "Support Center", "Careers"],
  categories: ["Fruits", "Vegetables", "Meat", "Bakery", "Beverages"],
  links: ["Returns", "Report Issue", "Payments", "Shipping", "FAQs"],
  social: ["facebook-f", "twitter", "youtube", "whatsapp", "instagram"],
  services: [
    {
      id: "01",
      title: "Organic Food Services",
      desc: "Fresh, organic produce sourced directly from trusted farms.",
      icon: "https://ekomart-nextjs.vercel.app/assets/images/service/01.svg",
    },
    {
      id: "02",
      title: "Fast Delivery System",
      desc: "Reliable and fast delivery to your doorstep within hours.",
      icon: "https://ekomart-nextjs.vercel.app/assets/images/service/02.svg",
    },
    {
      id: "03",
      title: "Fresh Grocery Everyday",
      desc: "A daily restock of premium grocery items just for you.",
      icon: "https://ekomart-nextjs.vercel.app/assets/images/service/03.svg",
    },
    {
      id: "04",
      title: "24/7 Customer Support",
      desc: "Our team is here for you anytime you need help or support.",
      icon: "https://ekomart-nextjs.vercel.app/assets/images/service/03.svg",
    },
  ],
};

const Footer = () => {
  return (
    <>
      <style>{`
        .footer-title {
          font-weight: 600;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #fff;
        }

        .footer-link {
          color: #ccc;
          text-decoration: none;
          display: block;
          margin-bottom: 8px;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .footer-link:hover {
          color: #28a745;
          transform: translateX(5px);
        }

        .footer-card {
          transition: all 0.3s ease;
        }

        .footer-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .footer-input {
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          width: 100%;
          margin-bottom: 8px;
        }

        .footer-button {
          padding: 10px;
          border-radius: 6px;
          background-color: #28a745;
          color: white;
          border: none;
          width: 100%;
          cursor: pointer;
        }

        .footer-social a {
          color: #fff;
          margin-right: 10px;
          font-size: 1.2rem;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .footer-social a:hover {
          color: #28a745;
          transform: scale(1.2);
        }

        footer p, footer li, footer small, footer span {
          color: #ccc;
        }
      `}</style>

      {/* Top Services */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row g-4 text-center">
            {footerData.services.map((s, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="p-4 bg-white rounded-4 shadow-sm footer-card h-100">
                  <img src={s.icon} alt={s.title} style={{ width: "50px" }} />
                  <h6 className="mt-3 fw-bold">{s.title}</h6>
                  <p style={{ fontSize: "14px", color: "#666" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-dark text-light pt-5 pb-4">
        <div className="container">
          <div className="row g-4">
            {/* About */}
            <div className="col-md-3">
              <h4 className="footer-title">About Company</h4>
              <p className="small">Have Questions? Call Us 24/7</p>
              <h5 className="text-success">{footerData.about.phone}</h5>
              <ul className="list-unstyled mt-3 small">
                {footerData.about.workingHours.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Reusable Link Columns */}
            {[
              { title: "Our Stores", items: footerData.stores },
              { title: "Shop Categories", items: footerData.categories },
              { title: "Useful Links", items: footerData.links },
            ].map((section, idx) => (
              <div className="col-md-2" key={idx}>
                <h4 className="footer-title">{section.title}</h4>
                <ul className="list-unstyled">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <a className="footer-link" href="#">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className="col-md-3">
              <h4 className="footer-title">Newsletter</h4>
              <p className="small">Subscribe to get the latest news, updates & offers.</p>
              <input type="email" placeholder="Your email" className="footer-input" />
              <button className="footer-button">Subscribe</button>
            </div>
          </div>

          {/* Social & Payments */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 pt-4 border-top border-secondary">
            <div className="footer-social mb-3 mb-md-0">
              <span className="me-2">Follow Us:</span>
              {footerData.social.map((platform, i) => (
                <a href="#" key={i}>
                  <i className={`fa-brands fa-${platform}`}></i>
                </a>
              ))}
            </div>
            <div>
              <span className="me-2" style={{ color: "#fff" }}>
                Payments:
              </span>
              <img
                src="https://ekomart-nextjs.vercel.app/assets/images/payment/01.png"
                alt="payment methods"
                style={{ height: "50px" }}
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-light text-center py-3 small text-muted">
        © 2025 <strong>Mega Mart</strong> – All rights reserved.
      </div>
    </>
  );
};

export default Footer;
