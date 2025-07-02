import React, { useState } from 'react';
import { motion } from 'framer-motion';

const steps = ['Order Placed', 'Shipped', 'Out for Delivery', 'Delivered'];

const TrackOrder = () => {
  const [trackingId, setTrackingId] = useState('');
  const [statusIndex, setStatusIndex] = useState(2); // simulate order status

  const handleTrack = () => {
    if (!trackingId.trim()) {
      alert('Please enter a valid Tracking ID');
      return;
    }
    alert(`Tracking ID: ${trackingId}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        padding: '60px 20px',
        background: 'linear-gradient(to right, #f1fdf4, #fefefe)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: '550px',
          width: '100%',
          backgroundColor: '#fff',
          padding: '40px 30px',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
        }}
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: '28px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '10px',
            color: '#28a745',
          }}
        >
          Track Your Order
        </motion.h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
          Enter your tracking ID to get the latest update
        </p>

        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          placeholder="e.g. #ORD123456"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          style={{
            width: '100%',
            padding: '14px',
            fontSize: '15px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            marginBottom: '20px',
            outline: 'none',
          }}
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleTrack}
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '15px',
            cursor: 'pointer',
          }}
        >
          Track Order
        </motion.button>

        <div style={{ marginTop: '40px' }}>
          <h4 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Order Status</h4>
          <div style={{ position: 'relative', padding: '10px 0' }}>
            <div
              style={{
                height: '4px',
                background: '#ddd',
                width: '100%',
                position: 'absolute',
                top: '24px',
                zIndex: 1,
              }}
            />
            <div
              style={{
                height: '4px',
                background: '#28a745',
                width: `${(statusIndex / (steps.length - 1)) * 100}%`,
                position: 'absolute',
                top: '24px',
                zIndex: 2,
                transition: 'width 0.5s ease',
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', zIndex: 3, position: 'relative' }}>
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  style={{ textAlign: 'center', flex: 1 }}
                >
                  <div
                    style={{
                      height: '18px',
                      width: '18px',
                      borderRadius: '50%',
                      backgroundColor: i <= statusIndex ? '#28a745' : '#ccc',
                      margin: '0 auto 8px',
                      border: i <= statusIndex ? '3px solid #dff5e3' : '3px solid #eee',
                      transition: 'background-color 0.3s ease',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '13px',
                      color: i <= statusIndex ? '#28a745' : '#999',
                      fontWeight: i <= statusIndex ? '600' : 'normal',
                    }}
                  >
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TrackOrder;
