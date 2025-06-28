import React from 'react';

const VendorDetails = () => {
  return (
    <div className="store-details-area rts-section-gap">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-xl-3 col-lg-12 mb-4 mb-xl-0">
            <div className="filter-area-vendor-details shadow p-3 rounded-4">
              {/* Categories */}
              <div
                className="single-filter-box mb-4"
                style={{
                  backgroundColor: '#f9f9f9',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                }}
              >
                <h5
                  className="title mb-3"
                  style={{ fontWeight: '600', color: '#333', fontSize: '18px' }}
                >
                  🗂️ Product Categories
                </h5>

                <div className="filterbox-body">
                  {[
                    "Beverages",
                    "Biscuits & Snacks",
                    "Breads & Bakery",
                    "Breakfast & Dairy",
                    "Frozen Foods",
                    "Fruits & Vegetables",
                    "Grocery & Staples",
                    "Household Needs",
                    "Meats & Seafood",
                  ].map((category, i) => (
                    <div
                      className="single-category form-check mb-2 d-flex align-items-center"
                      key={i}
                      style={{ fontSize: '15px', color: '#000' }}
                    >
                      <input
                        id={`cat${i + 1}`}
                        type="checkbox"
                        className="form-check-input me-2"
                        style={{
                          cursor: 'pointer',
                          width: '18px',
                          height: '18px',
                          accentColor: '#28a745', // green checkbox (if supported by browser)
                        }}
                      />
                      <label
                        htmlFor={`cat${i + 1}`}
                        className="form-check-label"
                        style={{ cursor: 'pointer' }}
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>


              {/* Store Time */}
              <div
                className="single-filter-box mb-4 p-4 rounded shadow-sm bg-light"
                style={{
                 
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                }}
              >
                <h5 className="title mb-3 text-dark" style={{ fontWeight: '600', color: '#333' }}>
                  🕒 Store Time
                </h5>

                <div className="filterbox-body vendor-time-opening">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
                    <div
                      className="d-flex justify-content-between align-items-center mb-2"
                      key={i}
                      style={{ fontSize: '15px' }}
                    >
                      <span style={{ color: '#333', fontWeight: '500' }}>
                        <strong>{day}</strong>
                      </span>
                      <span style={{ color: '#6c757d' }}>8:00 am - 10:00 pm</span>
                    </div>
                  ))}

                  <div
                    className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top"
                    style={{ fontSize: '15px', borderTop: '1px solid #ddd', paddingTop: '10px' }}
                  >
                    <span style={{ color: '#333', fontWeight: '500' }}>
                      <strong>Sun</strong>
                    </span>
                    <span style={{ color: '#dc3545', fontWeight: '600' }}>Off Day</span>
                  </div>
                </div>
              </div>



              {/* Contact Vendor */}
              <div className="single-filter-box">
                <h5 className="title mb-3">Contact Vendor</h5>
                <div className="filterbox-body vendor-contact-info-wrapper">
                  <form>
                    <input type="text" placeholder="Your Name" className="form-control mb-2" />
                    <input type="email" placeholder="Email Address" className="form-control mb-2" />
                    <textarea placeholder="Type Message" rows="3" className="form-control mb-3"></textarea>
                    <button className="rts-btn btn-primary w-100">Submit Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-xl-9 col-lg-12">
            {/* Vendor Banner */}
            <div className="vendor-details-banner--area mb-4">
              <div className="row g-4 align-items-center">
                <div className="col-lg-3">
                  <div className="vendor-banner-left p-3 bg-white shadow rounded-4 text-center h-100">
                    <img src="https://ekomart-nextjs.vercel.app/assets/images/vendor/09.svg" alt="vendor" className="mb-3" style={{ width: '80px' }} />
                    <h4 className="title">Food Forulard <span className="badge bg-success ms-2">Open</span></h4>
                    <div className="stars-area my-2">
                      {[...Array(5)].map((_, i) => <i className="fa-solid fa-star text-warning me-1" key={i}></i>)}
                      <span className="text-muted small">(4.50/5)</span>
                    </div>
                    <div className="location mb-2"><i className="fa-solid fa-cart-shopping me-2"></i>
                      530 Post Ct El Dorado Hills California, United States</div>
                    <div className="location mb-2"><i className="fa-regular fa-phone-volume me-2"></i>+1 (511) 934-8170</div>
                    <div className="location" style={{ marginRight: '0px' }} ><i className="fa-regular fa-cart-shopping me-2"></i>3214 Products</div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="banner-vendor-details bg_image rounded-4 shadow" style={{ backgroundImage: 'url(https://ekomart-nextjs.vercel.app/assets/images/vendor/01.jpg)', backgroundSize: 'cover', padding: '40px', color: '#fff' }}>
                    <div className="content-area">
                      <a href="#" className="rts-btn btn-light mb-3">Weekend Discount</a>
                      <h3 className="title">Drink Fresh Corn Juice <br /><span className="fw-light">Good Taste</span></h3>
                      <a href="#" className="shop-now-goshop-btn d-inline-block mt-3 text-white text-decoration-none fw-bold">
                        Shop Now <i className="fa-solid fa-arrow-right ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Highlight */}
            <div className="product-area-add-wrapper bg_image mb-4 p-4 rounded-4 text-white position-relative overflow-hidden" style={{ backgroundImage: 'url(https://ekomart-nextjs.vercel.app/assets/images/vendor/02.jpg)', backgroundSize: 'cover', width: '100%', margin: '0' }}>
              <h2 className="title">Products</h2>
              <img src="https://ekomart-nextjs.vercel.app/assets/images/vendor/02.png" alt="" className="position-absolute bottom-0 end-0" style={{ width: '100px' }} />
              <img src="https://ekomart-nextjs.vercel.app/assets/images/vendor/01.png" alt="" className="position-absolute bottom-0 start-0" style={{ width: '100px' }} />
            </div>

            {/* Product Filter */}
            <div className="product-filter-area-vendors-details mb-4 d-flex justify-content-between align-items-center flex-wrap">
              <form className="search-header d-flex mb-2 mb-md-0">
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

            {/* Products */}
            <div className="row g-4">
              {[...Array(6)].map((_, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div className="single-shopping-card-one tranding-product border rounded-4 shadow-sm h-100 overflow-hidden position-relative">
                    <a href="/shop" className="thumbnail-preview d-block overflow-hidden">
                      <img src="https://ekomart-nextjs.vercel.app/assets/images/vendor/01.png" alt="grocery" className="img-fluid hover-zoom" />
                    </a>
                    <div className="body-content p-3">
                      <div className="time-tag text-muted small mb-1"><i className="fa-light fa-clock me-1"></i>9 MINS</div>
                      <a href="/shop" className="text-decoration-none">
                        <h4 className="title fs-6">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                      </a>
                      <span className="availability d-block text-muted mb-1">500g Pack</span>
                      <div className="price-area">
                        <span className="current fw-bold me-2">$36.00</span>
                        <del className="text-muted">$40.00</del>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
