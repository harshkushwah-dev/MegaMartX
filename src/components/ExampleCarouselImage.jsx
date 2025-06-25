import React from 'react';
import { Image } from 'react-bootstrap';

function ExampleCarouselImage({ text }) {
  return (
    <div style={{ width: '100%', height: '400px', backgroundColor: '#777', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h3 style={{ color: 'white' }}>{text}</h3>
    </div>
  );
}

export default ExampleCarouselImage;
