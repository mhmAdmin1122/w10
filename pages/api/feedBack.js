import { Feed } from "@/models/feedBack";
import { mongooseConnection } from "../../lib/mongoFeed";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnection();

  if (method === "POST") {
    const { feedBack } = req.body;
    const feedDoc = await Feed.create({
        feedBack
    });
    res.json(feedDoc);
  }
}