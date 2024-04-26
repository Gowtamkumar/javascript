import { Schema, model } from "mongoose";

const bootcampModel = new Schema({
  name: String,
  website: String,
  address: String,
  location: String,
  slug: String,
  description: String,
});

export default model("bootcamps", bootcampModel);
