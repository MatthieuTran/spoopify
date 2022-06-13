import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const User = model("User", schema);

export { User };
