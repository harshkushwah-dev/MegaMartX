// backend/src/models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  regularPrice: Number,
  salePrice: Number,
  size: String,
  stock: Number,
  sku: String,
  category: String,
  tag: String,
  description: String,
  image: String,
}, {
  timestamps: true
});

const Product = mongoose.model("Product", productSchema);
export default Product;
