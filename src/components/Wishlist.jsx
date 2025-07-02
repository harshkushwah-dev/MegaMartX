// src/components/Wishlist.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Wishlist = () => {
  // Fake wishlist data
  const [wishlistItems, setWishlistItems] = React.useState([
    {
      _id: '1',
      name: 'Fresh Organic Apples',
      price: 150,
      image: 'https://img.freepik.com/free-photo/red-apple-with-leaf-isolated-white_88281-10.jpg',
    },
    {
      _id: '2',
      name: 'Almond Nuts 500g',
      price: 299,
      image: 'https://img.freepik.com/free-photo/top-view-almond-nuts_23-2148582647.jpg',
    },
    {
      _id: '3',
      name: 'Natural Honey Jar',
      price: 349,
      image: 'https://img.freepik.com/free-photo/honey-jar-with-wooden-stick_144627-10740.jpg',
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item._id !== id));
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '60px auto',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#2c3e50',
  };

  const cardGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
  };

  const cardStyle = {
    background: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const contentStyle = {
    padding: '16px',
    flexGrow: 1,
  };

  const nameStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '8px',
  };

  const priceStyle = {
    fontSize: '16px',
    color: '#16a085',
    marginBottom: '12px',
  };

  const btnStyle = {
    background: '#e74c3c',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '0 0 12px 12px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  };

  const fadeCard = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.3 },
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>💖 Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ textAlign: 'center', fontSize: '18px', color: '#555' }}
        >
          Your wishlist is empty.
        </motion.p>
      ) : (
        <div style={cardGrid}>
          <AnimatePresence>
            {wishlistItems.map((item) => (
              <motion.div key={item._id} {...fadeCard} style={cardStyle}>
                <img src={item.image} alt={item.name} style={imageStyle} />
                <div style={contentStyle}>
                  <div style={nameStyle}>{item.name}</div>
                  <div style={priceStyle}>₹{item.price}</div>
                </div>
                <button
                  style={btnStyle}
                  onClick={() => removeFromWishlist(item._id)}
                  onMouseOver={(e) => (e.target.style.background = '#c0392b')}
                  onMouseOut={(e) => (e.target.style.background = '#e74c3c')}
                >
                  Remove
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
