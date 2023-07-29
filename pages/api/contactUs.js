import { Contacts } from "@/models/contacts";
import { mongooseConnection } from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnection();

  if (method === "POST") {
    const { firstName, lastName, email, phone, message } = req.body;
    const contactsDoc = await Contacts.create({
      firstName,
      lastName,
      email,
      phone,
      message,
    });
    res.json(contactsDoc);
  }
}
