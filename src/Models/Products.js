import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  image_url: { type: String },
  price: { type: Number },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brands' },
}, { timestamps: true });

export default mongoose.model('Products', productSchema);
