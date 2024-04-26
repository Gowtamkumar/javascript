import { Schema, Document, Model, model } from "mongoose";

// Define the interface for the Product document
interface Product extends Document {
  name: string;
  price: number;
  qty: number;
  category: string;
  slug: string;
  description: string;
  status: boolean;
}

// Define the schema for the Product document
const productSchema: Schema<Product> = new Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  price: Number,
  qty: Number,
  category: String,
  slug: String,
  description: String,
  status: {
    type: Boolean,
    default: true,
  },
});

// Define custom instance methods
productSchema.methods.findActive = function (this: Product) {
  return this.model("products").find({ status: true });
};

// Define custom static methods
productSchema.statics.findByName = function (this: Model<Product>) {
  return this.find({ name: /product/i });
};

// Define custom query helpers
// TODO
// productSchema.query.queryhelper = function (this: any, name: string) {
//   return this.find({ name: new RegExp(name, "i") });
// };

// Define and export the Product model
const ProductModel: Model<Product> = model<Product>("products", productSchema);
export default ProductModel;
