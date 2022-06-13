import { connect } from "mongoose";

async function connection() {
  const connectionString = process.env.MONGO_URI || "";

  try {
    connect(connectionString);

    console.info("Connected to MongoDB successfully.");
  } catch (error) {
    console.error("Could not connect to MongoDB.");
  }
}

export = connection;
