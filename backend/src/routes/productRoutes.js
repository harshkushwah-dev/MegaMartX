import express from 'express';
import multer from 'multer';
import Product from '../models/Product.js';

const router = express.Router();

// Multer Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

/**
 * POST /api/products/add
 * Add a new product
 */
router.post('/add', upload.single('image'), async (req, res) => {
  try {
    const {
      name, regularPrice, salePrice, size,
      stock, sku, category, tag, description
    } = req.body;
    const image = req.file?.filename;

    const product = new Product({
      name, regularPrice, salePrice, size,
      stock, sku, category, tag, description, image
    });

    await product.save();
    res.status(201).json({ success: true, message: 'Product added', product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * GET /api/products
 * Get all products
 */
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
