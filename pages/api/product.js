import { Product } from "@/models/product";
import { mongooseConnection } from "@/lib/mongoProduct";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnection();

  if (method === "POST") {
    const {
      productName,
      productDescription,
      productPrice,
      productCategory,
      productImage,
      productPicSlide1,
      productPicSlide2,
      productPicSlide3,
      productPicSlide4,
      productPicSlide5,
      productBrand,
      productColor,
      productSize,
      productCompatibleDevice,
      productConectTech,
      productDepartment,
      productLanguage,
      productMaterial,
      productWeight
    } = req.body;

    const productDoc = await Product.create({
      productName,
      productDescription,
      productPrice,
      productCategory,
      productImage,
      productPicSlide1,
      productPicSlide2,
      productPicSlide3,
      productPicSlide4,
      productPicSlide5,
      productBrand,
      productColor,
      productSize,
      productCompatibleDevice,
      productConectTech,
      productDepartment,
      productLanguage,
      productMaterial,
      productWeight
    });

    res.json(productDoc);
  }
}
