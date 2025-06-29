import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import sampleProducts from '../data/sampleProducts'; // Make sure it's a default export

export const ProductList = () => {
  // Get one unique product per category
  const uniqueCategoryProducts = Object.values(
    sampleProducts.reduce((acc, product) => {
      if (!acc[product.category]) acc[product.category] = product;
      return acc;
    }, {})
  );

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#f9f9f9' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
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

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          loop={true}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {uniqueCategoryProducts.map((product) => (
            <SwiperSlide key={product._id}>
              <div
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
