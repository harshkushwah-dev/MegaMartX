import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopTrendingProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => {
        setProducts(res.data.slice(0, 8));
      })
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="top-tranding-product rts-section-gap" style={{ backgroundColor: '#fff', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-between">
              <h1 className="title-left mb--10">Top Trending Products</h1>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {products.map((product) => {
            const discount = product.regularPrice > product.salePrice
              ? Math.floor(((product.regularPrice - product.salePrice) / product.regularPrice) * 100)
              : 0;

            return (
              <div key={product._id} className="col-xl-3 col-md-4 col-sm-6 col-12">
                <div className="single-shopping-card-one tranding-product" style={{ padding: '15px', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', transition: 'all 0.3s ease-in-out', height: '100%' }}>
                  <a href="#" className="thumbnail-preview" style={{ position: 'relative', display: 'block', textAlign: 'center', height: '200px' }}>
                    {discount > 0 && (
                      <div className="badge" style={{ position: 'absolute', top: '10px', left: '10px', background: '#e74c3c', color: '#fff', padding: '4px 6px', borderRadius: '4px', fontSize: '12px', zIndex: 2 }}>
                        <span>{discount}% <br /> Off</span>
                        <i className="fa-solid fa-bookmark"></i>
                      </div>
                    )}
                    <img
                      src={`http://localhost:5000/uploads/${product.image}`}
                      alt={product.name}
                      style={{ maxHeight: '160px', objectFit: 'contain', margin: '0 auto' }}
                    />
                  </a>
                  <div className="body-content" style={{ textAlign: 'left', paddingTop: '12px' }}>
                    <a href="#">
                      <h4 className="title" style={{ fontSize: '15px', margin: '0 0 5px', fontWeight: 600 }}>{product.name}</h4>
                    </a>
                    <span className="availability" style={{ fontSize: '13px', color: '#777' }}>{product.size || 'N/A'}</span>
                    <div className="price-area" style={{ marginTop: '8px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <span className="current" style={{ fontWeight: 'bold', color: '#27ae60', fontSize: '15px' }}>₹{product.salePrice}</span>
                      <div className="previous" style={{ textDecoration: 'line-through', color: '#aaa', fontSize: '13px' }}>₹{product.regularPrice}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopTrendingProducts;
