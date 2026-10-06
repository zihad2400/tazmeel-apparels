import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: "newsletters",
  }
);

// ⭐ Prevent model recompilation error
const Newsletter =
  mongoose.models.Newsletter ||
  mongoose.model("Newsletter", NewsletterSchema);

export default Newsletter;
