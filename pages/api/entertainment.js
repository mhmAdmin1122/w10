import { Entertainment } from "@/models/entertainment";
import { mongooseConnection } from "@/lib/mongoEnter";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnection();

  if(method === "GET"){
    res.json(await Entertainment.find().limit(6))
  }

  if (method === "POST") {
    const { title, description, pic, video } = req.body;
    const contactsDoc = await Entertainment.create({
      title,
      description,
      pic,
      video
    });
    res.json(contactsDoc);
  }
}
