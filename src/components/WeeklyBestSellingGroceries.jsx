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
    <div className="rts-section-gap bg_light-1" style={{ padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <h1 className="title-left" style={{ fontSize: '24px' }}>Weekly Best Selling Groceries</h1>
          <ul className="nav nav-tabs best-selling-grocery" style={{ display: 'flex', gap: '10px', listStyle: 'none', padding: 0 }}>
            <li><button className="nav-link active">Frozen Foods</button></li>
            <li><button className="nav-link">Diet Foods</button></li>
            <li><button className="nav-link">Healthy Foods</button></li>
            <li><button className="nav-link">Vitamin Items</button></li>
          </ul>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {sampleProducts.map(product => (
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
              {/* Wishlist icon */}
              <div
                onClick={() => toggleWishlist(product._id)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  fontSize: '40px',
                  color: wishlist.includes(product._id) ? 'red' : '#ccc',
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
              >
                ♥
              </div>

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

              {/* Image */}
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
                  src={`${product.image}`}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Text */}
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontSize: '16px', margin: '0 0 5px' }}>{product.name}</h4>
                <span style={{ fontSize: '13px', color: '#555' }}>{product.size}</span>
                <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontWeight: 'bold', color: '#27ae60', fontSize: '16px' }}>₹{product.salePrice}</span>
                  <span style={{ textDecoration: 'line-through', color: '#aaa', fontSize: '14px' }}>₹{product.regularPrice}</span>
                </div>
              </div>

              {/* Controls */}
              <div style={{ marginTop: '20px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
                  flexWrap: 'wrap'
                }}>
                  {/* Quantity */}
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

                  {/* Cart Button */}
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

export default WeeklyBestSellingGroceries;
