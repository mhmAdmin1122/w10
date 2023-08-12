import { Tutorial } from "../../models/tutorial";
import { mongooseConnection } from "@/lib/mongoTutorial";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnection();

  if (method === "POST") {
    const { title, description, pic, video } = req.body;
    const tutDoc = await Tutorial.create({
      title,
      description,
      pic,
      video
    });
    res.json(tutDoc);
  }
}
