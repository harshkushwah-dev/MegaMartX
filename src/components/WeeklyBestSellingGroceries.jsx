import React, { useState } from 'react';
import sampleProducts from '../data/sampleProducts'; // Make sure this has category field in each product

const WeeklyBestSellingGroceries = () => {
  const categories = ['All', 'Beverages', 'Grocery & Staples', 'Breakfast & Dairy', 'Snacks'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [quantities, setQuantities] = useState(
    sampleProducts.reduce((acc, p) => ({ ...acc, [p._id]: 1 }), {})
  );
  const [wishlist, setWishlist] = useState([]);

  const increment = id => setQuantities(prev => ({ ...prev, [id]: prev[id] + 1 }));
  const decrement = id => setQuantities(prev => ({ ...prev, [id]: Math.max(1, prev[id] - 1) }));
  const toggleWishlist = id => setWishlist(prev =>
    prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
  );

  const filteredProducts = sampleProducts
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .slice(0, 8); // Limit to 8 products (2 rows)

  return (
    <div className="rts-section-gap bg_light-1" style={{ padding: '40px 15px' }}>
      <style>{`
        .nav-link {
          background-color: #f5f5f5;
          color: #333;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 8px 14px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .nav-link.active {
          background-color: #27ae60;
          color: white;
        }
        .nav-link:hover {
          background-color: #e0e0e0;
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.12);
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center', marginBottom: '25px', gap: '10px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '600' }}>Weekly Best Selling Groceries</h2>
          <ul style={{ display: 'flex', gap: '10px', padding: 0, listStyle: 'none', flexWrap: 'wrap' }}>
            {categories.map(category => (
              <li key={category}>
                <button
                  className={`nav-link ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {filteredProducts.map(product => (
            <div key={product._id} className="product-card" style={{ background: '#fff', borderRadius: '12px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', position: 'relative', transition: '0.3s ease', display: 'flex', flexDirection: 'column' }}>

              {/* Wishlist */}
              <div className="wishlist-icon" onClick={() => toggleWishlist(product._id)} style={{ position: 'absolute', top: '10px', right: '12px', fontSize: '22px', color: wishlist.includes(product._id) ? '#e74c3c' : '#ccc', cursor: 'pointer' }}>♥</div>

              {/* Discount */}
              <div style={{ position: 'absolute', top: '10px', left: '12px', backgroundColor: '#ff4757', color: '#fff', fontSize: '12px', fontWeight: '500', padding: '4px 8px', borderRadius: '4px' }}>
                {Math.floor(((product.regularPrice - product.salePrice) / product.regularPrice) * 100)}% Off
              </div>

              {/* Image */}
              <div style={{ height: '180px', marginBottom: '12px', borderRadius: '8px', overflow: 'hidden' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* Info */}
              <div style={{ textAlign: 'left', flexGrow: 1 }}>
                <h4 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: '600' }}>{product.name}</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#777' }}>{product.size}</p>
                <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontWeight: '600', fontSize: '16px', color: '#27ae60' }}>₹{product.salePrice}</span>
                  <span style={{ textDecoration: 'line-through', color: '#aaa', fontSize: '14px' }}>₹{product.regularPrice}</span>
                </div>
              </div>

              {/* Controls */}
              <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', border: '1px solid #ddd', borderRadius: '6px', overflow: 'hidden' }}>
                  <button onClick={() => decrement(product._id)} style={qtyBtn}>−</button>
                  <input type="text" value={quantities[product._id]} readOnly style={{ width: '36px', textAlign: 'center', border: 'none', fontSize: '14px' }} />
                  <button onClick={() => increment(product._id)} style={qtyBtn}>+</button>
                </div>
                <button style={cartBtn}><i className="fa fa-shopping-cart"></i> Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const qtyBtn = {
  padding: '6px 12px',
  background: '#f8f8f8',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px'
};

const cartBtn = {
  flex: 1,
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  padding: '10px 14px',
  borderRadius: '6px',
  fontSize: '14px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  justifyContent: 'center'
};

export default WeeklyBestSellingGroceries;
