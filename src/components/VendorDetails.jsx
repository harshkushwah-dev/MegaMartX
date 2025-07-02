import React from 'react';
import { motion } from 'framer-motion';
import { ProductList } from './ProductList';

const categories = [
  "Beverages", "Biscuits & Snacks", "Breads & Bakery", "Breakfast & Dairy",
  "Frozen Foods", "Fruits & Vegetables", "Grocery & Staples",
  "Household Needs", "Meats & Seafood"
];

const VendorDetails = () => {
  return (
    <div className="store-details-area rts-section-gap mt-5">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <motion.div
            className="col-xl-3 col-lg-4 mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="shadow p-4 rounded-4 bg-white">
              {/* Categories */}
              <div className="mb-4">
                <h5 className="title mb-3 text-success">🗂️ Product Categories</h5>
                {categories.map((cat, i) => (
                  <div className="form-check mb-2 d-flex align-items-center" key={i}>
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      id={`cat-${i}`}
                      style={{ accentColor: '#28a745' }}
                    />
                    <label className="form-check-label" htmlFor={`cat-${i}`}>{cat}</label>
                  </div>
                ))}
              </div>

              {/* Store Timing */}
              <div className="mb-4">
                <h5 className="title mb-3 text-success">🕒 Store Hours</h5>
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
                  <div key={i} className="d-flex justify-content-between small mb-2">
                    <span>{day}</span>
                    <span className="text-muted">8:00 AM - 10:00 PM</span>
                  </div>
                ))}
                <div className="d-flex justify-content-between pt-2 border-top mt-2 small">
                  <strong>Sun</strong>
                  <span className="text-danger fw-bold">Closed</span>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h5 className="title mb-3 text-success">📞 Contact Vendor</h5>
                <form>
                  <input type="text" placeholder="Your Name" className="form-control mb-2" />
                  <input type="email" placeholder="Email Address" className="form-control mb-2" />
                  <textarea placeholder="Your Message" rows="3" className="form-control mb-3"></textarea>
                  <button className="btn btn-success w-100">Send Message</button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="col-xl-9 col-lg-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Vendor Info Card */}
            <div className="mb-4 row g-4 align-items-center">
              <div className="col-md-4 col-lg-3">
                <motion.div
                  className="bg-white p-4 rounded-4 shadow text-center"
                  whileHover={{ scale: 1.03 }}
                >
                  <img src="https://ekomart-nextjs.vercel.app/assets/images/vendor/09.svg" alt="vendor" style={{ width: '80px' }} className="mb-3" />
                  <h4 className="fw-bold">
                    Food Forulard <span className="badge bg-success ms-2">Open</span>
                  </h4>
                  <div className="text-warning my-2">
                    {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star me-1" />)}
                    <span className="text-muted small ms-1">(4.5/5)</span>
                  </div>
                  <p className="text-muted small"><i className="fa fa-location-dot me-1" /> 530 Post Ct El Dorado Hills CA</p>
                  <p className="text-muted small"><i className="fa fa-phone me-1" /> +1 (511) 934-8170</p>
                  <p className="text-muted small"><i className="fa fa-box me-1" /> 3214 Products</p>
                </motion.div>
              </div>

              {/* Banner CTA */}
              <div className="col-md-8 col-lg-9">
                <motion.div
                  className="p-4 text-white rounded-4 shadow"
                  style={{
                    backgroundImage: 'url(https://ekomart-nextjs.vercel.app/assets/images/vendor/01.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <a href="#" className="btn btn-light mb-2">Weekend Offer</a>
                  <h3 className="fw-bold">
                    <span style={{ display: 'block' }}>Drink Fresh Corn Juice</span>
                  </h3>
                  <p className="fw-light">
                    <span style={{ display: 'block' }}>Good Taste</span>
                    <span style={{ display: 'block' }}>Healthy Life</span>
                  </p>
                  <a href="#" className="text-white text-decoration-underline" style={{ display: 'inline-block', marginTop: '8px' }}>
                    Shop Now <i className="fa fa-arrow-right ms-1" />
                  </a>

                </motion.div>
              </div>
            </div>

            {/* Product Area */}
            <motion.div
              className="mb-4 p-4 text-white rounded-4 position-relative overflow-hidden"
              style={{
                backgroundImage: 'url(https://ekomart-nextjs.vercel.app/assets/images/vendor/02.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="fw-bold">Products</h2>
              <img
                src="https://ekomart-nextjs.vercel.app/assets/images/vendor/02.png"
                alt=""
                className="position-absolute bottom-0 end-0"
                style={{ width: '80px', opacity: 0.3 }}
              />
              <img
                src="https://ekomart-nextjs.vercel.app/assets/images/vendor/01.png"
                alt=""
                className="position-absolute bottom-0 start-0"
                style={{ width: '80px', opacity: 0.3 }}
              />
            </motion.div>

            {/* Product Filter Bar */}
            <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-4">
              <form className="d-flex flex-grow-1">
                <input type="text" placeholder="Search products..." className="form-control me-2" />
                <button type="submit" className="btn btn-success">Search</button>
              </form>
              <select className="form-select w-auto">
                <option>Default Sorting</option>
                <option value="1">Popularity</option>
                <option value="2">Price: Low to High</option>
                <option value="3">Price: High to Low</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="row g-4">
              <ProductList />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
