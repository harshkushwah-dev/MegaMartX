import React from "react";

const services = [
  {
    id: '01',
    title: 'Organic Food Services',
    desc: 'Fresh, organic produce sourced directly from trusted farms.',
    icon: 'https://ekomart-nextjs.vercel.app/assets/images/service/01.svg',
  },
  {
    id: '02',
    title: 'Fast Delivery System',
    desc: 'Reliable and fast delivery to your doorstep within hours.',
    icon: 'https://ekomart-nextjs.vercel.app/assets/images/service/02.svg',
  },
  {
    id: '03',
    title: 'Fresh Grocery Everyday',
    desc: 'A daily restock of premium grocery items just for you.',
    icon: 'https://ekomart-nextjs.vercel.app/assets/images/service/03.svg',
  },
  {
    id: '04',
    title: '24/7 Customer Support',
    desc: 'Our team is here for you anytime you need help or support.',
    icon: 'https://ekomart-nextjs.vercel.app/assets/images/service/03.svg',
  },
];
const Footer = () => {
  return (
    <>
      <div className="rts-shorts-service-area rts-section-gap bg_primary">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                <div
                  className="short-service-card text-center p-4 rounded-4 shadow-sm h-100 bg-white"
                  style={{
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                  }}
                >
                  <div className="icon-area mb-3">
                    <img
                      src={service.icon}
                      alt={service.title}
                      style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                    />
                  </div>
                  <h4 className="title mb-2" style={{ fontWeight: '600', fontSize: '1.25rem' }}>
                    {service.title}
                  </h4>
                  <p className="disc" style={{ color: '#555', fontSize: '1rem', lineHeight: '1.6' }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="rts-footer-area pt--80 bg_light-1">
          <div className="" style={{ padding: '0 15px' }} >
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-main-content-wrapper pb--70 pb_sm--30">
                  <div className="single-footer-wized">
                    <h3 className="footer-title">About Company</h3>
                    <div className="call-area">
                      <div className="icon">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div className="info">
                        <span>Have Question? Call Us 24/7</span>
                        <a href="#" className="number">
                          +258 3692 2569
                        </a>
                      </div>
                    </div>
                    <div className="opening-hour">
                      <div className="single">
                        <p>
                          Monday - Friday: <span>8:00am - 6:00pm</span>
                        </p>
                      </div>
                      <div className="single">
                        <p>
                          Saturday: <span>8:00am - 6:00pm</span>
                        </p>
                      </div>
                      <div className="single">
                        <p>
                          Sunday: <span>Service Close</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="single-footer-wized">
                    <h3 className="footer-title">Our Stores</h3>
                    <div className="footer-nav">
                      <ul>
                        <li>
                          <a href="#">Delivery Information</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Terms &amp; Conditions</a>
                        </li>
                        <li>
                          <a href="#">Support Center</a>
                        </li>
                        <li>
                          <a href="#">Careers</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="single-footer-wized">
                    <h3 className="footer-title">Shop Categories</h3>
                    <div className="footer-nav">
                      <ul>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                        <li>
                          <a href="#">Information</a>
                        </li>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Careers</a>
                        </li>
                        <li>
                          <a href="#">Nest Stories</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="single-footer-wized">
                    <h3 className="footer-title">Useful Links</h3>
                    <div className="footer-nav">
                      <ul>
                        <li>
                          <a href="#">Cancellation &amp; Returns</a>
                        </li>
                        <li>
                          <a href="#">Report Infringement</a>
                        </li>
                        <li>
                          <a href="#">Payments</a>
                        </li>
                        <li>
                          <a href="#">Shipping</a>
                        </li>
                        <li>
                          <a href="#">FAQ</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="single-footer-wized">
                    <h3 className="footer-title">Our Newsletter</h3>
                    <p className="disc-news-letter">
                      Subscribe to the mailing list to receive updates one <br /> the
                      new arrivals and other discounts
                    </p>
                    <form className="footersubscribe-form" action="#">
                      <input
                        type="email"
                        placeholder="Your email address"
                        required
                      />
                      <button className="rts-btn btn-primary">Subscribe</button>
                    </form>
                    <p className="dsic">I would like to receive news and special offer</p>
                  </div>
                </div>

                <div className="social-and-payment-area-wrapper">
                  <div className="social-one-wrapper">
                    <span>Follow Us:</span>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-whatsapp"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="payment-access">
                    <span>Payment Accepts:</span>
                    <img src="https://ekomart-nextjs.vercel.app/assets/images/payment/01.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rts-copyright-area" style={{ backgroundColor: '#fff' }} >
          <div className="" style={{ padding: '0 15px' }} >
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-between-1">
                  <p className="disc">
                    Copyright 2025 <a href="#">©Ekomart</a>. All rights reserved.
                  </p>
                  <a href="#" className="playstore-app-area">
                    <span>Download App</span>
                    <img src="https://ekomart-nextjs.vercel.app/assets/images/payment/02.png" alt="" />
                    <img src="https://ekomart-nextjs.vercel.app/assets/images/payment/02.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
