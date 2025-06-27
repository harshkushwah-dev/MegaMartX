import React from 'react';
import fruitImage from '../assets/pexels-asphotograpy-235294-removebg-preview.png';
import vegetableImage from '../assets/Screenshot_2025-06-27_202218-removebg-preview.png';
import dairyImage from '../assets/Screenshot_2025-06-27_202520-removebg-preview.png';
import bakeryImage from '../assets/Screenshot_2025-06-27_230157-removebg-preview.png';
import meatImage from '../assets/Screenshot_2025-06-27_231107-removebg-preview.png';
import snacksImage from '../assets/Screenshot_2025-06-27_231532-removebg-previe.png';
import beveragesImage from '../assets/Screenshot_2025-06-27_232050-removebg-preview.png';
import frozenImage from '../assets/froc-removebg-preview (1).png';

export const ProductList = () => {
  const products = [
    { _id: '1', category: 'Fruits', image: fruitImage },
    { _id: '2', category: 'Vegetables', image: vegetableImage },
    { _id: '3', category: 'Dairy', image: dairyImage },
    { _id: '4', category: 'Bakery', image: bakeryImage },
    { _id: '5', category: 'Meat & Poultry', image: meatImage },
    { _id: '6', category: 'Snacks', image: snacksImage },
    { _id: '7', category: 'Beverages', image: beveragesImage },
    { _id: '8', category: 'Frozen Foods', image: frozenImage },
  ];

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#f9f9f9' }}>
      <div style={{ maxWidth: '100vw', margin: '0 auto' }}>
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '30px',
            fontSize: '28px',
            fontWeight: '600',
          }}
        >
          Product Categories
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '16px',
          }}
        >
          {products.map((product) => (
            <div
              key={product._id}
              style={{
                border: '1px solid #e0e0e0',
                padding: '16px',
                borderRadius: '8px',
                backgroundColor: '#ffffff',
                boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'translateY(-5px)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'translateY(0)')
              }
            >
              <div
                style={{
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={product.image}
                  alt={product.category}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <h4
                style={{
                  marginTop: '12px',
                  fontSize: '15px',
                  color: '#333',
                }}
              >
                {product.category}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
