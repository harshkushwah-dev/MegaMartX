import React from 'react';

const bg_image = 'https://example.com/banner.jpg';


const VendorDetails = () => {
  return (
    <div className="vendor-name">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="vendor-name-area-details">
              <h1 className="title">Food Forulard</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="store-details-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-12 pr--60 pr_md--10 pr_sm--10">
              <div className="filter-area-vendor-details">
                <div className="single-filter-box">
                  <h5 className="title">Product Categories</h5>
                  <div className="filterbox-body">
                    <div className="category-wrapper">
                      {[
                        'Beverages',
                        'Biscuits & Snacks',
                        'Breads & Bakery',
                        'Breakfast & Dairy',
                        'Frozen Foods',
                        'Fruits & Vegetables',
                        'Grocery & Staples',
                        'Household Needs',
                        'Meats & Seafood'
                      ].map((category, i) => (
                        <div className={`single-category${i === 4 || i === 6 ? ' with-more' : ''}`} key={i}>
                          <input id={`cat${i + 1}`} type="checkbox" />
                          <label htmlFor={`cat${i + 1}`}>{category}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="single-filter-box">
                  <h5 className="title">Store Time</h5>
                  <div className="filterbox-body vendor-time-opening">
                    <h6 className="title-opeing">Open Hours</h6>
                    {[
                      'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
                    ].map((day, i) => (
                      <span className="single-opening-hour" key={i}>
                        <span className="day"> {day} </span> : 8:00 am - 10:00 pm
                      </span>
                    ))}
                    <span className="single-opening-hour">
                      <span className="day">Sun</span> : <span> Off Day</span>
                    </span>
                  </div>
                </div>
                <div className="single-filter-box">
                  <h5 className="title">Contact Vendor</h5>
                  <div className="filterbox-body vendor-contact-info-wrapper">
                    <form>
                      <input type="text" placeholder="Your Name" />
                      <input type="text" placeholder="Email Address" />
                      <input type="text" placeholder="Type Message" />
                      <button className="rts-btn btn-primary">Submit Message</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-9 col-lg-12 mt-lg--30">
              <div className="vendor-details-banner--area">
                <div className="row g-5">
                  <div className="col-lg-3">
                    <div className="vendor-banner-left">
                      <img src="https://ekomart-nextjs.vercel.app/assets/images/vendor/09.svg" alt="vendor" />
                      <div className="header-area">
                        <h4 className="title">Food Forulard <span>Open</span></h4>
                      </div>
                      <div className="stars-area">
                        {Array(5).fill().map((_, i) => <i className="fa-solid fa-star" key={i}></i>)}
                        <span>(4.50 out of 5)</span>
                      </div>
                      <div className="location"><i className="fa-regular fa-location-dot"></i><p>530 Post Ct El Dorado Hills California, United States</p></div>
                      <div className="location"><i className="fa-regular fa-phone-volume"></i><p>+1 (511) 934-8170</p></div>
                      <div className="location"><i className="fa-regular fa-cart-shopping"></i><p>3214 Product Available</p></div>
                    </div>
                  </div>

                  <div className="col-lg-9">
                    <div className="banner-vendor-details bg_image" style={{
                        backgroundImage:'url(https://ekomart-nextjs.vercel.app/assets/images/vendor/01.jpg)',
                        backgroundPosition:'center'
                    }}  >
                      <div className="content-area">
                        <a href="#" className="rts-btn btn-primary">Weekend Discount</a>
                        <h3 className="title animated fadeIn">Drink Fresh Corn Juice <br /><span>Good Taste</span></h3>
                        <a href="#" className="shop-now-goshop-btn">
                          <span className="text">Shop Now</span>
                          <div className="plus-icon"><i className="fa-sharp fa-regular fa-plus"></i></div>
                          <div className="plus-icon"><i className="fa-sharp fa-regular fa-plus"></i></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="product-area-add-wrapper bg_image" style={{backgroundImage:'url(https://ekomart-nextjs.vercel.app/assets/images/vendor/02.jpg)'}} >
                    <h2 className="title">Products</h2>
                    <img src="https://ekomart-nextjs.vercel.app/assets/images/vendor/02.png" alt="" className="one" />
                    <img src="https://ekomart-nextjs.vercel.app/assets/images/vendor/01.png" alt="" className="two" />
                  </div>
                </div>
              </div>

              <div className="row mt--50 ml-v-dec-m">
                <div className="col-lg-12">
                  <div className="product-filter-area-vendors-details">
                    <div className="search-area">
                      <form className="search-header">
                        <input type="text" placeholder="Enter Product Name" />
                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                          <div className="btn-text">Search</div>
                          <div className="arrow-icon"><i className="fa-light fa-magnifying-glass"></i></div>
                          <div className="arrow-icon"><i className="fa-light fa-magnifying-glass"></i></div>
                        </a>
                      </form>
                    </div>
                    <div className="single-select">
                      <select>
                        <option data-display="All Categories">Default Sorting</option>
                        <option value="1">Some option</option>
                        <option value="2">Another option</option>
                        <option value="3">A disabled option</option>
                        <option value="4">Potato</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4 ml-v-dec-m mt--40">
                {Array(6).fill().map((_, i) => (
                  <div className="col-lg-4 col-md-6" key={i}>
                    <div className="single-shopping-card-one tranding-product">
                      <a href="/shop" className="thumbnail-preview">
                        <img src={`https://ekomart-nextjs.vercel.app/assets/images/vendor/01.png`} alt="grocery" />
                      </a>
                      <div className="body-content">
                        <div className="time-tag"><i className="fa-light fa-clock"></i>9 MINS</div>
                        <a href="/shop">
                          <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                        </a>
                        <span className="availability">500g Pack</span>
                        <div className="price-area">
                          <span className="current">$36.00</span>
                          <div className="previous">$36.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
