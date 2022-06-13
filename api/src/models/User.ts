import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = model("User", schema);

export { User };
