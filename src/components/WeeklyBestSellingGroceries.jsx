import React, { useState } from 'react';

const WeeklyBestSellingGroceries = () => {
  const sampleProducts = [
    {
      _id: '1',
      name: 'Basmati Rice',
      size: '5kg',
      salePrice: 450,
      regularPrice: 550,
      image: 'https://t3.ftcdn.net/jpg/13/91/86/92/240_F_1391869239_i08yBcXrT9ArkVbnLdwbRCF96eCPXSdF.jpg',
    },
    {
      _id: '2',
      name: 'Wheat Flour (Atta)',
      size: '10kg',
      salePrice: 360,
      regularPrice: 420,
      image: 'https://t3.ftcdn.net/jpg/14/26/02/66/240_F_1426026635_5enc7Qec63OyWa7HGWZJOF0r8SC7YUIG.jpg',
    },
    {
      _id: '3',
      name: 'Toor Dal (Pigeon Pea)',
      size: '1kg',
      salePrice: 110,
      regularPrice: 140,
      image: 'https://t4.ftcdn.net/jpg/10/90/44/49/240_F_1090444957_j2OiPz1Vcshq5LSUPweAcM3hnEPpuN70.jpg',
    },
    {
      _id: '4',
      name: 'Sunflower Oil',
      size: '1 Litre',
      salePrice: 115,
      regularPrice: 145,
      image: 'https://t3.ftcdn.net/jpg/01/66/19/74/240_F_166197465_Cn1NwH2TL88xid0w3iED4flIKYLChy5j.jpg',
    },
    {
      _id: '5',
      name: 'Sugar',
      size: '1kg',
      salePrice: 38,
      regularPrice: 50,
      image: 'https://t3.ftcdn.net/jpg/02/01/16/04/240_F_201160496_V9uplFxEKhUFldJ5RDr2KuYaVkzgpN1A.jpg',
    },
    {
      _id: '6',
      name: 'Salt',
      size: '1kg',
      salePrice: 20,
      regularPrice: 30,
      image: 'https://t3.ftcdn.net/jpg/02/94/34/76/240_F_294347652_W3RKypPIHGpnEtGn72J5pC9by14bFntb.jpg',
    },
    {
      _id: '7',
      name: 'Chana Dal (Bengal Gram)',
      size: '1kg',
      salePrice: 95,
      regularPrice: 120,
      image: 'https://t3.ftcdn.net/jpg/14/30/49/24/240_F_1430492406_QATfwbNPKOsdVZ8VMIM8h47iRdUTsDAn.jpg',
    },
    {
      _id: '8',
      name: 'Groundnut Oil',
      size: '1 Litre',
      salePrice: 130,
      regularPrice: 160,
      image: 'https://t4.ftcdn.net/jpg/05/62/17/97/240_F_562179733_ceFCU3vSpOsxhrMEXNhGaDNNqm8ByC3I.jpg',
    },
  ];

  const [quantities, setQuantities] = useState(
    sampleProducts.reduce((acc, p) => ({ ...acc, [p._id]: 1 }), {})
  );

  const [wishlist, setWishlist] = useState([]);

  const increment = id => {
    setQuantities(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decrement = id => {
    setQuantities(prev => ({ ...prev, [id]: Math.max(1, prev[id] - 1) }));
  };

  const toggleWishlist = id => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <>
      <style>{`
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.12);
        }
        .wishlist-icon {
          transition: color 0.3s;
        }
        .wishlist-icon:hover {
          color: #ff4757;
        }
        .nav-link {
          background-color: #f5f5f5;
          color: #333;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 8px 14px;
          font-size: 14px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .nav-link:hover {
          background-color: #e0e0e0 !important;
          color: #333 !important;
        }
        .nav-link.active {
          background-color: #27ae60 !important;
          color: white !important;
        }

        /* Responsive Fixes */
        @media (max-width: 768px) {
          .nav-link {
            font-size: 12px;
            padding: 6px 10px;
          }
          .product-card {
            padding: 12px !important;
          }
          .product-card img {
            height: 160px !important;
          }
          .wishlist-icon {
            font-size: 18px !important;
          }
        }

        @media (min-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>

      <div className="rts-section-gap bg_light-1" style={{ padding: '40px 15px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '25px',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <h2 style={{ fontSize: '26px', fontWeight: '600' }}>Weekly Best Selling Groceries</h2>
            <ul style={{ display: 'flex', gap: '10px', padding: 0, listStyle: 'none', flexWrap: 'wrap' }}>
              <li><button className="nav-link active">Frozen Foods</button></li>
              <li><button className="nav-link">Diet Foods</button></li>
              <li><button className="nav-link">Healthy Foods</button></li>
              <li><button className="nav-link">Vitamin Items</button></li>
            </ul>
          </div>

          <div className="products-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px'
          }}>
            {sampleProducts.map(product => (
              <div
                key={product._id}
                className="product-card"
                style={{
                  background: '#fff',
                  borderRadius: '12px',
                  padding: '16px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Wishlist */}
                <div
                  className="wishlist-icon"
                  onClick={() => toggleWishlist(product._id)}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '12px',
                    fontSize: '22px',
                    color: wishlist.includes(product._id) ? '#e74c3c' : '#ccc',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  ♥
                </div>

                {/* Discount */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '12px',
                  backgroundColor: '#ff4757',
                  color: '#fff',
                  fontSize: '12px',
                  fontWeight: '500',
                  padding: '4px 8px',
                  borderRadius: '4px'
                }}>
                  {Math.floor(((product.regularPrice - product.salePrice) / product.regularPrice) * 100)}% Off
                </div>

                {/* Image */}
                <div style={{
                  height: '180px',
                  marginBottom: '12px',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
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
                <div style={{ marginTop: '16px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{
                      display: 'flex',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      overflow: 'hidden'
                    }}>
                      <button onClick={() => decrement(product._id)} style={qtyBtn}>−</button>
                      <input type="text" value={quantities[product._id]} readOnly style={{
                        width: '36px',
                        textAlign: 'center',
                        border: 'none',
                        fontSize: '14px'
                      }} />
                      <button onClick={() => increment(product._id)} style={qtyBtn}>+</button>
                    </div>

                    <button
                      style={cartBtn}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1f8a4c'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#27ae60'}
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
    </>
  );
};

// Styles
const qtyBtn = {
  padding: '6px 12px',
  background: '#f8f8f8',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px'
};

const cartBtn = {
  flex: 1,
  backgroundColor: '#27ae60',
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
