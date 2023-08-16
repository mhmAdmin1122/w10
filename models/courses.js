import { model, Schema, models } from "mongoose";

const coursesSchema = new Schema({
  title: { type: String, required: true },
  aboutCard: { type: String, required: true },
  cardPic: { type: String, required: true },
  category: { type: String, required: true },
  mainTitlePost: { type: String, required: true },
  mainImageOfPost: { type: String, required: true },
  mainDescriptionPost: { type: String, required: true },
  subTitleFirst: { type: String, required: true },
  subTitleSecond: { type: String, required: true },
  subTitleThird: { type: String, required: true },
  subTitleFourth: { type: String, required: true },
  subTitleFifth: { type: String, required: true },
  subDescriptionFirst: { type: String, required: true },
  subDescriptionSecond: { type: String, required: true },
  subDescriptionThird: { type: String, required: true },
  subDescriptionFourth: { type: String, required: true },
  subDescriptionFifth: { type: String, required: true },
  docsPDF: { type: String, required: true },
  docsDOC: { type: String, required: true },
  docsRAR: { type: String, required: true },
});

export const Courses = models.Courses || model("Courses", coursesSchema);
