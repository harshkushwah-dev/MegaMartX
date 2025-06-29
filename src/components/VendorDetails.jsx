import React from 'react';
import { ProductList } from './ProductList';

const VendorDetails = () => {
  return (
    <div className="store-details-area rts-section-gap">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-xl-3 col-lg-4 mb-4">
            <div className="filter-area-vendor-details shadow p-3 rounded-4">
              {/* Product Categories */}
              <div className="single-filter-box mb-4 bg-light p-4 rounded">
                <h5 className="title mb-3">🗂️ Product Categories</h5>
                <div className="filterbox-body">
                  {[
                    "Beverages", "Biscuits & Snacks", "Breads & Bakery",
                    "Breakfast & Dairy", "Frozen Foods", "Fruits & Vegetables",
                    "Grocery & Staples", "Household Needs", "Meats & Seafood"
                  ].map((category, i) => (
                    <div className="form-check mb-2 d-flex align-items-center" key={i}>
                      <input
                        id={`cat${i + 1}`}
                        type="checkbox"
                        className="form-check-input me-2"
                        style={{ width: '18px', height: '18px', accentColor: '#28a745' }}
                      />
                      <label htmlFor={`cat${i + 1}`} className="form-check-label">{category}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Store Time */}
              <div className="single-filter-box mb-4 bg-light p-4 rounded">
                <h5 className="title mb-3">🕒 Store Time</h5>
                <div className="filterbox-body">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
                    <div className="d-flex justify-content-between mb-2" key={i}>
                      <strong>{day}</strong>
                      <span className="text-muted">8:00 am - 10:00 pm</span>
                    </div>
                  ))}
                  <div className="d-flex justify-content-between pt-2 border-top mt-3">
                    <strong>Sun</strong>
                    <span className="text-danger fw-semibold">Off Day</span>
                  </div>
                </div>
              </div>

              {/* Contact Vendor */}
              <div className="single-filter-box bg-light p-4 rounded">
                <h5 className="title mb-3">📞 Contact Vendor</h5>
                <form>
                  <input type="text" placeholder="Your Name" className="form-control mb-2" />
                  <input type="email" placeholder="Email Address" className="form-control mb-2" />
                  <textarea placeholder="Type Message" rows="3" className="form-control mb-3"></textarea>
                  <button className="rts-btn btn-primary w-100">Submit Message</button>
                </form>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-xl-9 col-lg-8">
            {/* Vendor Banner */}
            <div className="vendor-details-banner--area mb-4">
              <div className="row g-4 align-items-center">
                <div className="col-md-4 col-lg-3">
                  <div className="bg-white shadow p-3 text-center rounded-4 h-100">
                    <img src="https://ekomart-nextjs.vercel.app/assets/images/vendor/09.svg" alt="vendor" className="mb-3" style={{ width: '80px' }} />
                    <h4 className="title">
                      Food Forulard <span className="badge bg-success ms-2">Open</span>
                    </h4>
                    <div className="stars-area my-2">
                      {[...Array(5)].map((_, i) => (
                        <i className="fa-solid fa-star text-warning me-1" key={i}></i>
                      ))}
                      <span className="text-muted small">(4.50/5)</span>
                    </div>
                    <div className="text-muted small"><i className="fa-solid fa-cart-shopping me-2"></i>530 Post Ct El Dorado Hills CA</div>
                    <div className="text-muted small"><i className="fa-solid fa-phone-volume me-2"></i>+1 (511) 934-8170</div>
                    <div className="text-muted small"><i className="fa-solid fa-box me-2"></i>3214 Products</div>
                  </div>
                </div>
                <div className="col-md-8 col-lg-9">
                  <div className="banner-vendor-details bg_image rounded-4 shadow text-white p-4" style={{ backgroundImage: 'url(https://ekomart-nextjs.vercel.app/assets/images/vendor/01.jpg)', backgroundSize: 'cover' }}>
                    <a href="#" className="rts-btn btn-light mb-3">Weekend Discount</a>
                    <h3 className="title">Drink Fresh Corn Juice <br /><span className="fw-light">Good Taste</span></h3>
                    <a href="#" className="text-white fw-bold mt-3 d-inline-block text-decoration-none">Shop Now <i className="fa-solid fa-arrow-right ms-2"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Section Header */}
            <div className="product-area-add-wrapper bg_image mb-4 p-4 rounded-4 text-white position-relative" style={{ backgroundImage: 'url(https://ekomart-nextjs.vercel.app/assets/images/vendor/02.jpg)', backgroundSize: 'cover' }}>
              <h2 className="title">Products</h2>
              <img src="https://ekomart-nextjs.vercel.app/assets/images/vendor/02.png" alt="" className="position-absolute bottom-0 end-0" style={{ width: '100px' }} />
              <img src="https://ekomart-nextjs.vercel.app/assets/images/vendor/01.png" alt="" className="position-absolute bottom-0 start-0" style={{ width: '100px' }} />
            </div>

            {/* Product Filter */}
            <div className="product-filter-area-vendors-details mb-4 d-flex flex-column flex-md-row justify-content-between gap-3">
              <form className="search-header d-flex flex-grow-1">
                <input type="text" placeholder="Enter Product Name" className="form-control me-2" />
                <button type="submit" className="rts-btn btn-primary">Search</button>
              </form>
              <select className="form-select w-auto">
                <option>Default Sorting</option>
                <option value="1">Popularity</option>
                <option value="2">Price: Low to High</option>
                <option value="3">Price: High to Low</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="row g-4">
              <ProductList />
            </div>
          </div>
        </div>
      </div>

      {/* Hover Styles */}
      <style jsx>{`
        .hover-zoom {
          transition: transform 0.3s ease;
        }
        .hover-zoom:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default VendorDetails;
