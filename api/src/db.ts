import { connect } from "mongoose";

async function connection() {
  let mongo_uri;

  if (process.env.NODE_ENV == "development") {
    mongo_uri = process.env.MONGO_TEST_URI;
  } else {
    mongo_uri = process.env.MONGO_URI;
  }

  const connectionString = mongo_uri || "";

  try {
    connect(connectionString);

    console.info("Connected to MongoDB successfully.");
  } catch (error) {
    console.error("Could not connect to MongoDB.");
  }
}

export = connection;
