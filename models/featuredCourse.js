import { model, Schema, models } from "mongoose";

const featuredDocSchema = new Schema({
  name: { type: String, required: true },
  shortDesc: { type: String, required: true },
  desc: { type: String, required: true },
  category: { type: String, required: true },
  pic: { type: String, required: true },
});

export const FeaturedCourse =
  models.FeaturedCourse || model("FeaturedCourse", featuredDocSchema);
