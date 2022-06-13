import { model, Schema } from "mongoose";

const schema = new Schema({
  name: "string",
  created: { type: Date, default: Date.now },
});

const User = model("User", schema);

export { User };
