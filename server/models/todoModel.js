import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Number,
    required: true,
  },
  decription: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Todo", TodoSchema);
