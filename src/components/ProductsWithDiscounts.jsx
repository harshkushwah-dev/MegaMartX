import React from 'react';

const ProductsWithDiscount = () => {
  const products = [
    {
      _id: '1',
      name: 'Fresh Apples',
      size: '1kg',
      salePrice: 80,
      regularPrice: 120,
      image: 'https://t3.ftcdn.net/jpg/02/02/67/00/240_F_202670033_L2na30dIVjD5o2UlvF9DT0wlzdFIti04.jpg',
    },
    {
      _id: '2',
      name: 'Organic Bananas',
      size: '1 Dozen',
      salePrice: 60,
      regularPrice: 90,
      image: 'https://t4.ftcdn.net/jpg/11/53/03/73/240_F_1153037323_jta5jxQSrYkYGyjdjVWfxJsg1mwY7Ed8.jpg',
    },
    {
      _id: '3',
      name: 'Broccoli',
      size: '500g',
      salePrice: 40,
      regularPrice: 55,
      image: 'https://t4.ftcdn.net/jpg/01/38/59/65/240_F_138596528_dG7J8xrEXROzGkE0PCgKjDWyclYUWfzz.jpg',
    },
    {
      _id: '4',
      name: 'Milk 2L',
      size: '2 Litres',
      salePrice: 75,
      regularPrice: 100,
      image: 'https://t4.ftcdn.net/jpg/06/38/12/07/240_F_638120764_nSG4bMkSdONBkAQ8vjfS8tqCHVJgKKd2.jpg',
    },
  ];

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
                <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-end p-4 text-white"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
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
                <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-end p-4 text-white"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                  <h5 className="mb-1">Fresh Juice Organic Special</h5>
                  <h4 className="fw-bold">Save 20%</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="col-lg-6">
          <div className="row g-3">
            {products.map((product) => {
              const discount = Math.floor(((product.regularPrice - product.salePrice) / product.regularPrice) * 100);
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
                      e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                    }}
                  >
                    {/* Discount Badge */}
                    <div className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 rounded"
                      style={{ fontSize: '12px', transform: 'translate(10px, 10px)' }}>
                      {discount}% Off
                    </div>

                    {/* Image */}
                    <div className="text-center mb-3" style={{ height: '110px' }}>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                      />
                    </div>

                    {/* Info */}
                    <div>
                      <h5 className="fw-bold mb-1">{product.name}</h5>
                      <p className="text-muted mb-1" style={{ fontSize: '15px' }}>{product.size}</p>
                      <div className="mb-3 d-flex align-items-center gap-2">
                        <span className="text-success fw-bold fs-5">₹{product.salePrice}</span>
                        <span className="text-muted text-decoration-line-through fs-6">₹{product.regularPrice}</span>
                      </div>
                    </div>

                    {/* Button */}
                    <button className="btn btn-success w-100 mt-auto" style={{ fontSize: '15px' }}>
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
