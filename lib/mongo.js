import { MongoClient } from "mongodb";

let client;
let clientPromise;

export function getClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn("MONGODB_URI is not set. Database operations will fail.");
    return null;
  }
  if (!clientPromise) {
    client = new MongoClient(uri);
    clientPromise = client.connect();
  }
  return clientPromise;
}

export async function getDb() {
  const c = await getClient();
  if (!c) return null;
  return c.db();
}
