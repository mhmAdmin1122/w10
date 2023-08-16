import { Courses } from "@/models/courses";
import { mongooseConnection } from "@/lib/mongoCourses";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnection();

  if (method === "POST") {
    const {
      title,
      aboutCard,
      cardPic,
      category,
      mainTitlePost,
      mainImageOfPost,
      mainDescriptionPost,
      subTitleFirst,
      subTitleSecond,
      subTitleThird,
      subTitleFourth,
      subTitleFifth,
      subDescriptionFirst,
      subDescriptionSecond,
      subDescriptionThird,
      subDescriptionFourth,
      subDescriptionFifth,
      docsPDF,
      docsDOC,
      docsRAR
    } = req.body;
    const coursesDoc = await Courses.create({
      title,
      aboutCard,
      cardPic,
      category,
      mainTitlePost,
      mainImageOfPost,
      mainDescriptionPost,
      subTitleFirst,
      subTitleSecond,
      subTitleThird,
      subTitleFourth,
      subTitleFifth,
      subDescriptionFirst,
      subDescriptionSecond,
      subDescriptionThird,
      subDescriptionFourth,
      subDescriptionFifth,
      docsPDF,
      docsDOC,
      docsRAR
    });
    res.json(coursesDoc);
  }
}
