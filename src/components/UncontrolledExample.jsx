import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0' }}>
      <Carousel fade interval={3000}>
        {[1, 2, 3].map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 rounded carousel-image"
              src={
                index === 0
                  ? 'https://ekomart-nextjs.vercel.app/assets/images/banner/08.webp'
                  : 'https://ekomart-nextjs.vercel.app/assets/images/banner/01.webp'
              }
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption className="carousel-caption-custom">
              <h3 className="caption-subtitle">
                Get up to 30% off on your first $150 purchase
              </h3>
              <p className="caption-title">
                Do not miss our amazing <br /> grocery deals.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Responsive CSS */}
      <style>{`
        .carousel-image {
          width: 100%;
          height: 450px;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .carousel-image {
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .carousel-image {
            height: 200px;
          }
        }

        .carousel-caption-custom {
          bottom: 20px;
        }

        .caption-subtitle {
          font-weight: 600;
          font-size: 16px;
          color: #fff;
        }

        .caption-title {
          font-size: 24px;
          font-weight: 900;
          color: #fff;
        }

        @media (max-width: 768px) {
          .caption-title {
            font-size: 18px;
          }

          .caption-subtitle {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .caption-title {
            font-size: 16px;
          }

          .caption-subtitle {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}

export default UncontrolledExample;
