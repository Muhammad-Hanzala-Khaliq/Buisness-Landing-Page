import { MongoClient } from "mongodb";

let client;
let clientPromise;

export function getClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn(
      "MONGODB_URI is not set. Database operations will fail. Set it in .env.local",
    );
    return null;
  }

  // Skip connection during static generation (build time)
  // This prevents timeouts and hanging builds on Vercel
  if (process.env.NODE_ENV === "production" && !process.env.VERCEL_ENV) {
    console.log("Skipping MongoDB connection during build process");
    return null;
  }

  if (!clientPromise) {
    // Set shorter timeouts for Vercel
    client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 10000, // 10 second timeout
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      retryWrites: true,
      w: "majority",
    });
    clientPromise = client.connect();
  }
  return clientPromise;
}

export async function getDb() {
  const c = await getClient();
  if (!c) return null;
  return c.db();
}

