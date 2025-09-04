import { MongoClient } from "mongodb";

let cachedClient = null;
let cachedDb = null;

export async function connectToDB() {
  if (cachedDb) return cachedDb;

  const client = await new MongoClient(process.env.MONGODB_URI).connect();
  const db = client.db(process.env.DB_NAME);

  cachedClient = client;
  cachedDb = db;
  return db;
}
