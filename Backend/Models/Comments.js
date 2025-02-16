import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    author: { type: String, required: true },
    authorId: { type: String, required: true },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "Products",
      required: [true, "product id is required"],
    },
    replay: {
      type: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Comments",
        },
      ],
    },
  },
  { timestamps: true }
);

const Comments = mongoose.model("Comments", CommentSchema);
export default Comments;
