import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: String,
  image: String,
  link: String
});

export default mongoose.model('Category', categorySchema);
