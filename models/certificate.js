import { model, Schema, models } from "mongoose";

const certificateSchema = new Schema({
  courseTitle: { type: String, required: true },
  coursePrice: { type: Number, required: true },
  courseShortDesc: { type: String, required: true },
  courseDesc: { type: String, required: true },
  coursePic: { type: String, required: true },
});

export const Certificate =
  models.Certificate || model("Certificate", certificateSchema);
