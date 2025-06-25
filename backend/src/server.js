// backend/src/server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js'; // ✅ Import your product routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // ✅ To serve product images

// API Routes
app.use('/api/products', productRoutes); // ✅ Add this line

// MongoDB Connection & Server Start
mongoose.connect('mongodb://localhost:27017/megamartx')
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(5000, () => console.log('🚀 Server running at http://localhost:5000'));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
