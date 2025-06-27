import React from "react";
import bgImage from '../assets/01.jpg';


const CategoryFeatureArea = () => {
  return (
    <>
      <div className="category-feature-area rts-section-gapTop"  >
        <div className="container">
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="single-feature-card" style={{
                backgroundImage: `url(${bgImage})`, height: '400px', borderRadius: '6px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '40px'
              }}
              >
                <div className="content-area">
                  <a href="/shop" className="rts-btn btn-primary">
                    Weekend Discount
                  </a>
                  <h3 className="title">
                    Drink Fresh Corn Juice <br />
                    <span>Good Taste</span>
                  </h3>
                  <a href="/shop" className="shop-now-goshop-btn">
                    <span className="text">Shop Now</span>
                    <div className="plus-icon">
                      <i className="fa-sharp fa-regular fa-plus"></i>
                    </div>
                    <div className="plus-icon">
                      <i className="fa-sharp fa-regular fa-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="single-feature-card" style={{
                backgroundImage: `url(https://t4.ftcdn.net/jpg/03/80/72/07/240_F_380720787_Ain6UfNeBiRmq6FSdIqvUHwcpxBlcUNc.jpg)`, height: '400px', borderRadius: '6px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '40px'
              }}
              >


                <div className="content-area">
                  <a href="/shop" className="rts-btn btn-primary">
                    Weekend Discount
                  </a>
                  <h3 className="title"  >
                    Organic Lemon Flavored
                    <span>Banana Chips</span>
                  </h3>
                  <a href="/shop" className="shop-now-goshop-btn">
                    <span className="text">Shop Now</span>
                    <div className="plus-icon">
                      <i className="fa-sharp fa-regular fa-plus"></i>
                    </div>
                    <div className="plus-icon">
                      <i className="fa-sharp fa-regular fa-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="single-feature-card" style={{
                backgroundImage: `url(https://t4.ftcdn.net/jpg/13/92/41/73/240_F_1392417398_3GDOcTgUKwuMrCyHEoq3xXkV2uX7OI20.jpg)`, height: '400px', borderRadius: '6px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '40px',
                backgroundPosition:'right'
              }}
              >
                <div className="content-area">
                  <a href="/shop" className="rts-btn btn-primary">
                    Weekend Discount
                  </a>
                  <h3 className="title">
                    Nozes Pecanera Brasil
                    <span>Chocolate Snacks</span>
                  </h3>
                  <a href="/shop" className="shop-now-goshop-btn">
                    <span className="text">Shop Now</span>
                    <div className="plus-icon">
                      <i className="fa-sharp fa-regular fa-plus"></i>
                    </div>
                    <div className="plus-icon">
                      <i className="fa-sharp fa-regular fa-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="single-feature-card" style={{
                backgroundImage: `url(https://t4.ftcdn.net/jpg/02/27/60/33/240_F_227603351_JWbbWxm4XAQfg4llIw1VhkPVLtOZuvQ3.jpg)`, height: '400px', borderRadius: '6px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '40px'
              }}
              >
                <div className="content-area">
                  <a href="/shop" className="rts-btn btn-primary">
                    Weekend Discount
                  </a>
                  <h3 className="title">
                    Strawberry Water Drinks
                    <span>Flavors Awesome</span>
                  </h3>
                  <a href="/shop" className="shop-now-goshop-btn">
                    <span className="text">Shop Now</span>
                    <div className="plus-icon">
                      <i className="fa-sharp fa-regular fa-plus"></i>
                    </div>
                    <div className="plus-icon">
                      <i className="fa-sharp fa-regular fa-plus"></i>
                    </div>
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

export default CategoryFeatureArea;
