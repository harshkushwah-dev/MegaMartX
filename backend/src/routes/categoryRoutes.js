// models/Category.js
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, default: '/' }
});

const Category = mongoose.model('Category', categorySchema);
export default Category;
