// pages/api/signup.js
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { email, username, password, confirmPassword, acceptTerms } = req.body;

  // Check if terms are accepted
  if (!acceptTerms) {
    return res
      .status(400)
      .json({ error: "Please accept the terms and conditions." });
  }

  // Perform MongoDB operations here
  const uri = "";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("your-database-name");
    const collection = database.collection("your-collection-name");

    // Perform your MongoDB insert operation
    await collection.insertOne({ email, username, password });

    // Respond with success
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("MongoDB error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
}
