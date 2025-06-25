import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeaturedGrocery = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [quantities, setQuantities] = useState({}); // Quantity per product

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => {
        setProducts(res.data);
        // Initialize quantity for each product to 1
        const initialQuantities = {};
        res.data.forEach(p => initialQuantities[p._id] = 1);
        setQuantities(initialQuantities);
      })
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  const visibleProducts = showAll ? products : products.slice(0, 4);

  // Handle quantity changes
  const increment = id => {
    setQuantities(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decrement = id => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, prev[id] - 1)
    }));
  };

  return (
    <div className="rts-grocery-feature-area rts-section-gapBottom" style={{ padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <h1 className="title-left" style={{ fontSize: '24px' }}>Featured Grocery</h1>
          {!showAll && products.length > 4 && (
            <button
              onClick={() => setShowAll(true)}
              style={{
                backgroundColor: '#27ae60',
                color: '#fff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px',
                width:'12%',
              }}
            >
              Show More
            </button>
          )}
        </div>

        {/* Product Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {visibleProducts.map(product => (
            <div
              key={product._id}
              style={{
                background: '#fff',
                borderRadius: '10px',
                padding: '15px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                position: 'relative',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}
            >
              {/* Discount Badge */}
              <div style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                backgroundColor: '#e74c3c',
                color: '#fff',
                padding: '4px 6px',
                borderRadius: '4px',
                fontSize: '12px',
                zIndex: 2
              }}>
                {Math.floor(((product.regularPrice - product.salePrice) / product.regularPrice) * 100)}% Off
              </div>

              {/* Product Image */}
              <div style={{
                width: '100%',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                marginBottom: '15px'
              }}>
                <img
                  src={`http://localhost:5000/uploads/${product.image}`}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>

              {/* Product Details */}
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontSize: '16px', margin: '0 0 5px' }}>{product.name}</h4>
                <span style={{ fontSize: '13px', color: '#555' }}>{product.size}</span>
                <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontWeight: 'bold', color: '#27ae60', fontSize: '16px' }}>₹{product.salePrice}</span>
                  <span style={{ textDecoration: 'line-through', color: '#aaa', fontSize: '14px' }}>₹{product.regularPrice}</span>
                </div>
              </div>

              {/* Quantity + Cart Button */}
              <div style={{ marginTop: '20px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
                  flexWrap: 'wrap'
                }}>
                  {/* Quantity Controls */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    overflow: 'hidden'
                  }}>
                    <button onClick={() => decrement(product._id)} style={{
                      padding: '6px 10px',
                      border: 'none',
                      background: '#f0f0f0',
                      cursor: 'pointer',
                      fontSize: '16px'
                    }}>−</button>
                    <input type="text" value={quantities[product._id] || 1} readOnly style={{
                      width: '40px',
                      textAlign: 'center',
                      border: 'none',
                      outline: 'none',
                      fontSize: '14px'
                    }} />
                    <button onClick={() => increment(product._id)} style={{
                      padding: '6px 10px',
                      border: 'none',
                      background: '#f0f0f0',
                      cursor: 'pointer',
                      fontSize: '16px'
                    }}>+</button>
                  </div>

                  {/* Add to Cart */}
                  <button
                    style={{
                      flex: 1,
                      backgroundColor: '#27ae60',
                      color: '#fff',
                      border: 'none',
                      padding: '10px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'background-color 0.3s ease, transform 0.3s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = '#1f8a4c';
                      e.currentTarget.style.transform = 'scale(1.03)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = '#27ae60';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <i className="fa fa-shopping-cart"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FeaturedGrocery;
