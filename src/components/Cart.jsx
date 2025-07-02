// src/components/Cart.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const [cartItems, setCartItems] = React.useState([
    {
      _id: '1',
      name: 'Fresh Organic Apples',
      price: 150,
      quantity: 2,
      image: 'https://img.freepik.com/free-photo/red-apple-with-leaf-isolated-white_88281-10.jpg',
    },
    {
      _id: '2',
      name: 'Almond Nuts 500g',
      price: 299,
      quantity: 1,
      image: 'https://img.freepik.com/free-photo/top-view-almond-nuts_23-2148582647.jpg',
    },
  ]);

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const containerStyle = {
    maxWidth: '1000px',
    margin: '40px auto',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '25px',
    textAlign: 'center',
    color: '#2c3e50',
  };

  const cardGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
  };

  const cardStyle = {
    background: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };

  const imageStyle = {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
  };

  const contentStyle = {
    padding: '10px',
    flexGrow: 1,
  };

  const nameStyle = {
    fontSize: '14px',
    fontWeight: '600',
    color: '#2d3436',
    marginBottom: '6px',
  };

  const detailStyle = {
    fontSize: '13px',
    color: '#555',
    marginBottom: '4px',
  };

  const priceStyle = {
    fontWeight: '600',
    color: '#27ae60',
  };

  const btnStyle = {
    background: '#e74c3c',
    color: '#fff',
    padding: '8px',
    border: 'none',
    borderRadius: '0 0 8px 8px',
    cursor: 'pointer',
    fontSize: '13px',
    transition: 'all 0.3s ease',
  };

  const checkoutBoxStyle = {
    marginTop: '30px',
    textAlign: 'center',
  };

  const totalTextStyle = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '10px',
  };

  const checkoutBtnStyle = {
    background: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '14px',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const fadeCard = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.25 },
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ textAlign: 'center', fontSize: '16px', color: '#777' }}
        >
          Your cart is empty.
        </motion.p>
      ) : (
        <>
          <div style={cardGrid}>
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div key={item._id} {...fadeCard} style={cardStyle}>
                  <img src={item.image} alt={item.name} style={imageStyle} />
                  <div style={contentStyle}>
                    <div style={nameStyle}>{item.name}</div>
                    <div style={detailStyle}>Qty: {item.quantity}</div>
                    <div style={detailStyle}>
                      Price: <span style={priceStyle}>₹{item.price}</span>
                    </div>
                    <div style={detailStyle}>
                      Total: <span style={priceStyle}>₹{item.price * item.quantity}</span>
                    </div>
                  </div>
                  <button
                    style={btnStyle}
                    onClick={() => removeFromCart(item._id)}
                    onMouseOver={(e) => (e.target.style.background = '#c0392b')}
                    onMouseOut={(e) => (e.target.style.background = '#e74c3c')}
                  >
                    Remove
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Checkout Section */}
          <div style={checkoutBoxStyle}>
            <div style={totalTextStyle}>Total: ₹{getTotal()}</div>
            <button
              style={checkoutBtnStyle}
              onMouseOver={(e) => (e.target.style.background = '#28a745')}
              onMouseOut={(e) => (e.target.style.background = '#28a745')}
              onClick={() => alert('Proceeding to Checkout...')}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
