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
      <h2 className="mb-4 fw-bold" style={{ fontSize: '26px' }}>Discounted Grocery Offers</h2>
      <div className="row g-4">
        {/* Left Banners - will stack on mobile */}
        <div className="col-lg-6">
          <div className="row g-3">
            {/* Banner 1 */}
            <div className="col-12">
              <div className="position-relative rounded overflow-hidden" style={{
                height: '280px',
                backgroundImage: `url('https://t4.ftcdn.net/jpg/13/94/87/57/240_F_1394875755_I9WZBOOFij3FClDwdjio9sPXbJEMryAo.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex flex-column justify-content-end p-3 text-white" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                  <h5 className="mb-1">Alpro Organic Flavored Juice</h5>
                  <h4 className="fw-bold">Only ₹15.00</h4>
                </div>
              </div>
            </div>

            {/* Banner 2 */}
            <div className="col-12">
              <div className="position-relative rounded overflow-hidden" style={{
                height: '280px',
                backgroundImage: `url('https://t4.ftcdn.net/jpg/15/38/90/87/240_F_1538908713_6MvO5azarpclNSUowB5ip19cwhcGr1iY.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex flex-column justify-content-end p-3 text-white" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                  <h5 className="mb-1">Fresh Juice Organic Special</h5>
                  <h4 className="fw-bold">Save 20%</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="col-lg-6">
          <div className="row g-3">
            {products.map(product => {
              const discount = Math.floor(((product.regularPrice - product.salePrice) / product.regularPrice) * 100);
              return (
                <div className="col-12 col-sm-6" key={product._id}>
                  <div className="border rounded p-3 h-100 shadow-sm d-flex flex-column justify-content-between position-relative" style={{borderRadius:'10px'}} >
                    <div className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 rounded" style={{ fontSize: '12px', transform: 'translate(10px, 10px)' }}>
                      {discount}% Off
                    </div>

                    <div className="text-center mb-3" style={{ height: '115px' }}>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                      />
                    </div>

                    <h2>{product.name}</h2>
                    <small className="text-muted" style={{fontSize:'16px'}} >{product.size}</small>
                    <div className="mt-2 mb-3 d-flex gap-2 align-items-center">
                      <span className="fw-bold text-success fs-2">₹{product.salePrice}</span>
                      <span className="text-danger text-decoration-line-through fs-6">₹{product.regularPrice}</span>
                    </div>

                    <button className="btn btn-success w-100" style={{fontSize:'18px'}} >
                      <i className="fa fa-shopping-cart me-2"></i>
                      Add to Cart
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
