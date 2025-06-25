import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  return (
    <div className="product-list" style={{ padding: '40px 20px', backgroundColor: '#f9f9f9' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '28px', fontWeight: '600' }}>Product Categories</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
          {products.map(product => (
            <div key={product._id} style={{
              border: '1px solid #e0e0e0',
              padding: '20px',
              borderRadius: '10px',
              backgroundColor: '#ffffff',
              boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={`http://localhost:5000/uploads/${product.image}`}
                  alt={product.name}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />
              </div>
              <h4 style={{ marginTop: '15px', fontSize: '16px', color: '#333' }}>{product.category}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
