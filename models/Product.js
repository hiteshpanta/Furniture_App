import mongoose from "mongoose";

export const categories = ['chair', 'sofa', 'bed', 'table', 'handmade', 'other'];
export const types = ['craft','design','handmade','interior','wood','other'];

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  detail: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: categories,
    required: true
  },
  type: {
    type: String,
    enum: types,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  reviews: [
    {
      rating: {
        type: Number,
        required: true
      },
      comment: {
        type: String,
        required: true
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
    }
  ]
}, { timestamps: true });


const Product = mongoose.model('Product', productSchema);

export default Product;