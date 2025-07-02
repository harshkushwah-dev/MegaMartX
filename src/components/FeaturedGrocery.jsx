import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import sampleProducts from '../data/sampleProducts';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const FeaturedGrocery = () => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantities, setQuantities] = useState({});

  const uniqueCategoryProducts = Object.values(
    sampleProducts.reduce((acc, product) => {
      if (!acc[product.category]) acc[product.category] = product;
      return acc;
    }, {})
  );

  const increment = id => setQuantities(prev => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  const decrement = id => setQuantities(prev => ({ ...prev, [id]: Math.max(1, (prev[id] || 1) - 1) }));

  return (
    <div style={{ padding: '40px 20px' }}>
      <style>{`

      .swiper-button-next, .swiper-button-prev {
  display: none;
}

        .swiper-button-next, .swiper-button-prev {
          color: #27ae60;
          background-color: white;
          border: 1px solid #ccc;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          top: 35%;
          display: none;
        }
        @media (min-width: 769px) {
          .swiper-button-next, .swiper-button-prev {
            display: block;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Featured Grocery</h1>

        <Swiper
  modules={[Autoplay]}
  spaceBetween={20}
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
              <div style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '15px',
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}>
                <div style={{ cursor: 'pointer' }} onClick={() => setSelectedProduct(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '180px', objectFit: 'contain', marginBottom: '15px' }}
                  />
                </div>
                <h4>{product.name}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                  <div>
                    <span style={{ color: '#27ae60', fontWeight: 'bold' }}>₹{product.salePrice}</span>
                    <span style={{ textDecoration: 'line-through', marginLeft: '8px', color: '#888' }}>₹{product.regularPrice}</span>
                  </div>
                  <button onClick={() => addToCart(product, 1)} style={{
                    padding: '6px 12px',
                    background: '#28a745',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0, left: 0,
              width: '100vw', height: '100vh',
              background: 'rgba(0, 0, 0, 0.6)',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              zIndex: 1000
            }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: '#fff',
                padding: '30px',
                borderRadius: '15px',
                width: '90%',
                maxWidth: '700px',
                boxShadow: '0 5px 25px rgba(0,0,0,0.35)',
                position: 'relative',
                fontFamily: 'sans-serif'
              }}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '15px',
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#555'
                }}
              >×</button>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  style={{ flex: '1 1 250px', maxWidth: '250px', height: '250px', objectFit: 'contain', borderRadius: '10px', background: '#f9f9f9' }}
                />
                <div style={{ flex: '2 1 300px' }}>
                  <h2 style={{ marginBottom: '10px', color: '#222' }}>{selectedProduct.name}</h2>
                  <p style={{ marginBottom: '8px' }}><strong>Size:</strong> {selectedProduct.size}</p>
                  <p style={{ marginBottom: '8px' }}><strong>Category:</strong> {selectedProduct.category}</p>
                  <p style={{ marginBottom: '8px' }}><strong>Tag:</strong> {selectedProduct.tag}</p>
                  <p style={{ marginBottom: '8px' }}><strong>SKU:</strong> {selectedProduct.sku}</p>
                  <p style={{ marginBottom: '12px', color: '#555' }}>{selectedProduct.description || 'No description available.'}</p>
                  <p style={{ fontSize: '20px', marginBottom: '10px' }}>
                    <strong style={{ color: '#27ae60' }}>₹{selectedProduct.salePrice}</strong>
                    <span style={{ textDecoration: 'line-through', marginLeft: '10px', color: '#aaa' }}>
                      ₹{selectedProduct.regularPrice}
                    </span>
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                    <button onClick={() => decrement(selectedProduct._id)} style={{
                      padding: '6px 10px', border: '1px solid #ccc', borderRadius: '5px', background: '#f1f1f1', cursor: 'pointer'
                    }}>−</button>
                    <span style={{ minWidth: '30px', textAlign: 'center' }}>{quantities[selectedProduct._id] || 1}</span>
                    <button onClick={() => increment(selectedProduct._id)} style={{
                      padding: '6px 10px', border: '1px solid #ccc', borderRadius: '5px', background: '#f1f1f1', cursor: 'pointer'
                    }}>+</button>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => addToCart(selectedProduct, quantities[selectedProduct._id] || 1)}
                      style={{
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        fontSize: '16px',
                        cursor: 'pointer'
                      }}
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() =>
                        isInWishlist(selectedProduct._id)
                          ? removeFromWishlist(selectedProduct._id)
                          : addToWishlist(selectedProduct)
                      }
                      style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '20px',
                        cursor: 'pointer',
                        color: isInWishlist(selectedProduct._id) ? 'red' : '#888'
                      }}
                    >
                      {isInWishlist(selectedProduct._id) ? '❤️' : '🤍'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeaturedGrocery;
