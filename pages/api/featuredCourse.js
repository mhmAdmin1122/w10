import { FeaturedCourse } from "@/models/featuredCourse";
import { mongooseConnection } from "@/lib/mongoFeturedCourse";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnection();

  if (method === "POST") {
    const { name, shortDesc, desc, category, pic } = req.body;
    const featuredDoc = await FeaturedCourse.create({
      name,
      shortDesc,
      desc,
      category,
      pic,
    });
    res.json(featuredDoc);
  }
}
