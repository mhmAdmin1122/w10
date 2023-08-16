import { Certificate } from "@/models/certificate";
import { mongooseConnection } from "@/lib/mongoCertificate";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnection();

  if (method === "POST") {
    const { courseTitle, coursePrice, courseShortDesc, courseDesc, coursePic } =
      req.body;
    const contactsDoc = await Certificate.create({
      courseTitle,
      coursePrice,
      courseShortDesc,
      courseDesc,
      coursePic,
    });
    res.json(contactsDoc);
  }
}
