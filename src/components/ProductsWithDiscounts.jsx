import React from 'react';
import sampleProducts from '../data/sampleProducts';

const ProductsWithDiscount = () => {
  const discountedProducts = sampleProducts.filter(
    (product) =>
      product.regularPrice &&
      product.salePrice &&
      product.salePrice < product.regularPrice
  );

  const top4Discounted = discountedProducts
    .sort(
      (a, b) =>
        ((b.regularPrice - b.salePrice) / b.regularPrice) * 100 -
        ((a.regularPrice - a.salePrice) / a.regularPrice) * 100
    )
    .slice(0, 4); 

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold" style={{ fontSize: '28px' }}>
        Discounted Grocery Offers
      </h2>

      <div className="row g-4">
        {/* Banners */}
        <div className="col-lg-6">
          <div className="row g-3">
            {/* Banner 1 */}
            <div className="col-12">
              <div
                className="position-relative rounded overflow-hidden"
                style={{
                  height: '280px',
                  backgroundImage: `url('https://t4.ftcdn.net/jpg/13/94/87/57/240_F_1394875755_I9WZBOOFij3FClDwdjio9sPXbJEMryAo.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  className="position-absolute w-100 h-100 d-flex flex-column justify-content-end p-4 text-white"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                >
                  <h5 className="mb-1">Alpro Organic Flavored Juice</h5>
                  <h4 className="fw-bold">Only ₹15.00</h4>
                </div>
              </div>
            </div>

            {/* Banner 2 */}
            <div className="col-12">
              <div
                className="position-relative rounded overflow-hidden"
                style={{
                  height: '280px',
                  backgroundImage: `url('https://t4.ftcdn.net/jpg/15/38/90/87/240_F_1538908713_6MvO5azarpclNSUowB5ip19cwhcGr1iY.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  className="position-absolute w-100 h-100 d-flex flex-column justify-content-end p-4 text-white"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                >
                  <h5 className="mb-1">Fresh Juice Organic Special</h5>
                  <h4 className="fw-bold">Save 20%</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top 4 Discounted Products */}
        <div className="col-lg-6">
          <div className="row g-3">
            {top4Discounted.map((product) => {
              const discount = Math.floor(
                ((product.regularPrice - product.salePrice) /
                  product.regularPrice) *
                  100
              );
              return (
                <div className="col-12 col-sm-6" key={product._id}>
                  <div
                    className="border rounded shadow-sm p-3 h-100 d-flex flex-column justify-content-between position-relative"
                    style={{
                      borderRadius: '12px',
                      transition: '0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow =
                        '0 10px 20px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow =
                        '0 2px 8px rgba(0,0,0,0.1)';
                    }}
                  >
                    {/* Discount Badge */}
                    <div
                      className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 rounded"
                      style={{
                        fontSize: '12px',
                        transform: 'translate(10px, 10px)',
                      }}
                    >
                      {discount}% Off
                    </div>

                    {/* Image */}
                    <div
                      className="text-center mb-3"
                      style={{ height: '110px' }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          maxHeight: '100%',
                          maxWidth: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div>
                      <h5 className="fw-bold mb-1">{product.name}</h5>
                      <p
                        className="text-muted mb-1"
                        style={{ fontSize: '15px' }}
                      >
                        {product.size}
                      </p>
                      <div className="mb-3 d-flex align-items-center gap-2">
                        <span className="text-success fw-bold fs-5">
                          ₹{product.salePrice}
                        </span>
                        <span className="text-muted text-decoration-line-through fs-6">
                          ₹{product.regularPrice}
                        </span>
                      </div>
                    </div>

                    {/* Button */}
                    <button
                      className="btn btn-success w-100 mt-auto"
                      style={{ fontSize: '15px', backgroundColor:'#28a745' }}
                    >
                      <i className="fa fa-shopping-cart me-2"></i> Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsWithDiscount;
