import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error('Failed to fetch categories:', err));
  }, []);

  return (
    <div className="rts-caregory-area-one" style={{ backgroundColor: '#F3F4F6' }}>
      <div className="">
        <div className="row">
          <div className="col-lg-12" style={{ padding: '40px 20px' }}>
            <div className="category-area-main-wrapper-one">
              <div className="swiper swiper-initialized swiper-horizontal">
                <div className="swiper-wrapper" style={{ display: 'flex', overflowX: 'auto', overflowY: 'hidden', scrollbarWidth: 'none' }}>
                  {categories.map((cat, index) => (
                    <div
                      className="swiper-slide"
                      key={index}
                      style={{
                        width: '138.3px',
                        marginRight: '12px',
                        flexShrink: 0,
                      }}
                    >
                      <a className="single-category-one" href={cat.link || '#'}>
                        <img
                          alt={cat.name}
                          loading="lazy"
                          width="60"
                          height="60"
                          decoding="async"
                          style={{ color: 'transparent', objectFit: 'contain' }}
                          src={cat.image || 'https://via.placeholder.com/60'}
                        />
                        <p>{cat.name}</p>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
