import mongoose from 'mongoose';

const { Schema } = mongoose;

const brandSchema = new Schema({
  name: { type: String, required: true },
  logo_url: { type: String, required: true },
});

export default mongoose.model('Brands', brandSchema);
