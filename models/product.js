import { model, Schema, models } from "mongoose";

const productSchema = new Schema({
  productName: { type: String, required: true },
  productDescription: { type: String, required: true },
  productPrice: { type: Number, required: true },
  productCategory: { type: String, required: true },
  productImage: { type: String, required: true },
  productPicSlide1: { type: String, required: true },
  productPicSlide2: { type: String, required: true },
  productPicSlide3: { type: String, required: true },
  productPicSlide4: { type: String, required: true },
  productPicSlide5: { type: String, required: true },
  productBrand: { type: String, required: true },
  productColor: { type: String, required: true },
  productSize: { type: String, required: true },
  productCompatibleDevice: { type: String, required: false },
  productConectTech: { type: String, required: false },
  productDepartment: { type: String, required: false },
  productLanguage: { type: String, required: false },
  productMaterial: { type: String, required: false },
  productWeight: { type: String, required: false }
});

export const Product = models.Product || model("Product", productSchema);
