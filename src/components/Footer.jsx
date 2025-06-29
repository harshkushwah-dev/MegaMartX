import React from "react";

const services = [
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
];

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
          color: #fff;
          text-decoration: none;
          display: inline-block;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .footer-link:hover {
          color: #28a745;
          transform: translateX(5px);
        }

        .footer-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .footer-input {
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          width: 100%;
        }

        .footer-button {
          padding: 10px;
          border-radius: 6px;
          background-color: #28a745;
          color: white;
          border: none;
          margin-top: 8px;
          width: 100%;
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

        footer p,
        footer li,
        footer small,
        footer span,
        footer h5,
        footer h6 {
          color: #ccc !important;
        }
      `}</style>

      {/* Services Top Bar */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row g-4 text-center">
            {services.map((service, index) => (
              <div className="col-6 col-md-3" key={index}>
                <div className="p-4 bg-white rounded-4 shadow-sm footer-card h-100 transition">
                  <img src={service.icon} alt={service.title} style={{ width: "50px" }} />
                  <h6 className="mt-3 fw-bold">{service.title}</h6>
                  <p style={{ fontSize: "14px", color: "#666" }}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-dark text-light pt-5 pb-4">
        <div className="container">
          <div className="row g-4">
            {/* About */}
            <div className="col-md-3">
              <h4 className="footer-title">About Company</h4>
              <p className="small">Have Questions? Call Us 24/7</p>
              <h5 className="text-success">+258 3692 2569</h5>
              <ul className="list-unstyled mt-3 small">
                <li>Mon-Fri: 8:00am - 6:00pm</li>
                <li>Saturday: 8:00am - 6:00pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            {/* Store Links */}
            <div className="col-md-2">
              <h4 className="footer-title">Our Stores</h4>
              <ul className="list-unstyled">
                <li><a className="footer-link" href="#">Delivery Info</a></li>
                <li><a className="footer-link" href="#">Privacy Policy</a></li>
                <li><a className="footer-link" href="#">Terms & Conditions</a></li>
                <li><a className="footer-link" href="#">Support Center</a></li>
                <li><a className="footer-link" href="#">Careers</a></li>
              </ul>
            </div>

            {/* Shop Categories */}
            <div className="col-md-2">
              <h4 className="footer-title">Shop Categories</h4>
              <ul className="list-unstyled">
                <li><a className="footer-link" href="#">Fruits</a></li>
                <li><a className="footer-link" href="#">Vegetables</a></li>
                <li><a className="footer-link" href="#">Meat</a></li>
                <li><a className="footer-link" href="#">Bakery</a></li>
                <li><a className="footer-link" href="#">Beverages</a></li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="col-md-2">
              <h4 className="footer-title">Useful Links</h4>
              <ul className="list-unstyled">
                <li><a className="footer-link" href="#">Returns</a></li>
                <li><a className="footer-link" href="#">Report Issue</a></li>
                <li><a className="footer-link" href="#">Payments</a></li>
                <li><a className="footer-link" href="#">Shipping</a></li>
                <li><a className="footer-link" href="#">FAQs</a></li>
              </ul>
            </div>

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
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
              <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
            </div>
            <div>
              <span className="me-2 " style={{color:'#fff'}} >Payments:</span>
              <img src="https://ekomart-nextjs.vercel.app/assets/images/payment/01.png" alt="payment methods" style={{ height: '50px' }} />
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-light text-center py-3 small text-muted">
        © 2025 <strong>Ekomart</strong> – All rights reserved.
      </div>
    </>
  );
};

export default Footer;
