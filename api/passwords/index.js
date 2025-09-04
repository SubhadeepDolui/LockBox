import { connectToDB } from "../../lib/mongo.js";

export default async function handler(req, res) {
  const db = await connectToDB();
  const collection = db.collection("passwords");

  if (req.method === "GET") {
    const result = await collection.find({}).toArray();
    return res.status(200).json(result);
  }

  if (req.method === "POST") {
    const password = req.body;
    const result = await collection.insertOne(password);
    return res.status(201).json({ success: true, result });
  }

  if (req.method === "DELETE") {
    const password = req.body;
    const result = await collection.deleteOne(password);
    return res.status(200).json({ success: true, result });
  }

  res.setHeader("Allow", ["GET", "POST", "DELETE"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
