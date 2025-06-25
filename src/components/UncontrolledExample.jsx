import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0' }}>
      <Carousel fade interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://ekomart-nextjs.vercel.app/assets/images/banner/08.webp"
            alt="First slide"
            style={{ height: '450px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3 style={{ fontWeight: '600', fontSize:'20px', color:'#fff' }}>Get up to 30% off on your first $150 purchase</h3>
            <p style={{fontSize:'40px', color:'#fff' , fontWeight:'900'}} > Do not miss our amazing  <br /> grocery deals.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://ekomart-nextjs.vercel.app/assets/images/banner/01.webp"
            alt="Second slide"
            style={{ height: '450px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
          <h3 style={{ fontWeight: '600', fontSize:'20px', color:'#fff' }}>Get up to 30% off on your first $150 purchase</h3>
            <p style={{fontSize:'40px', color:'#fff' , fontWeight:'900'}} > Do not miss our amazing  <br /> grocery deals.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://ekomart-nextjs.vercel.app/assets/images/banner/01.webp"
            alt="Third slide"
            style={{ height: '450px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
           <h3 style={{ fontWeight: '600', fontSize:'20px', color:'#fff' }}>Get up to 30% off on your first $150 purchase</h3>
            <p style={{fontSize:'40px', color:'#fff' , fontWeight:'900'}} > Do not miss our amazing  <br /> grocery deals.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
