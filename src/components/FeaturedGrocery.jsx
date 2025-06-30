import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import sampleProducts from '../data/sampleProducts';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const FeaturedGrocery = () => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist(); // ✅ Correctly inside the component

  const uniqueCategoryProducts = Object.values(
    sampleProducts.reduce((acc, product) => {
      if (!acc[product.category]) acc[product.category] = product;
      return acc;
    }, {})
  );

  const [quantities, setQuantities] = useState(
    sampleProducts.reduce((acc, product) => {
      acc[product._id] = 1;
      return acc;
    }, {})
  );

  const increment = id => {
    setQuantities(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decrement = id => {
    setQuantities(prev => ({ ...prev, [id]: Math.max(1, prev[id] - 1) }));
  };

  return (
    <div className="rts-grocery-feature-area rts-section-gapBottom" style={{ padding: '40px 20px' }}>
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #27ae60;
          background-color: white;
          border: 1px solid #ccc;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          top: 35%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          display:none;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background-color: #27ae60;
          color: white;
        }
        @media (max-width: 768px) {
          .featured-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .swiper-button-next, .swiper-button-prev {
            display: none;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="featured-header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <h1 style={{ fontSize: '24px' }}>Featured Grocery</h1>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
        >
          {uniqueCategoryProducts.map(product => (
            <SwiperSlide key={product._id}>
              <div className="product-card" style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '15px',
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                position: 'relative',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
                }}
              >
                {/* Discount Tag */}
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
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>

                {/* Info */}
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ fontSize: '16px', margin: '0 0 5px' }}>{product.name}</h4>
                  <span style={{ fontSize: '13px', color: '#555' }}>{product.size}</span>
                  <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontWeight: 'bold', color: '#27ae60', fontSize: '16px' }}>₹{product.salePrice}</span>
                    <span style={{ textDecoration: 'line-through', color: '#aaa', fontSize: '14px' }}>₹{product.regularPrice}</span>
                  </div>
                </div>

                {/* Quantity + Add to Cart */}
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
                      <input type="text" value={quantities[product._id]} readOnly style={{
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
                      onClick={() => addToCart(product, quantities[product._id])}
                      style={{
                        flex: 1,
                        backgroundColor: "#28a745",
                        color: "#fff",
                        border: "none",
                        padding: "10px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                      }}
                    >
                      <i className="fa fa-shopping-cart"></i> Add to Cart
                    </button>

                    {/* Wishlist Button */}
                    {/* <button
                      onClick={() =>
                        isInWishlist(product._id)
                          ? removeFromWishlist(product._id)
                          : addToWishlist(product)
                      }
                      style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '20px',
                        cursor: 'pointer',
                        color: isInWishlist(product._id) ? 'red' : '#aaa',
                      }}
                    >
                      {isInWishlist(product._id) ? '💖' : '🤍'}
                    </button> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedGrocery;
