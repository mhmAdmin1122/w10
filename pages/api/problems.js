import { Problems } from "@/models/problems";
import { mongooseConnection } from "@/lib/mongoProblems";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnection();

  if (method === "POST") {
    const { problems } = req.body;
    const problemsDoc = await Problems.create({
        problems
    });
    res.json(problemsDoc);
  }
}