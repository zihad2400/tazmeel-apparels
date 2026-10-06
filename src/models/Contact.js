import mongoose from "mongoose";

const ReplySchema = new mongoose.Schema(
  { message: { type: String, required: true }, sentBy: { type: String, default: "admin" } },
  { timestamps: true }
);

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, trim: true },
    company: { type: String, trim: true },
    subject: { type: String, trim: true },
    message: { type: String, required: true },
    status: { type: String, enum: ["NEW", "READ", "REPLIED", "CLOSED"], default: "NEW" },
    replies: [ReplySchema],
  },
  { timestamps: true }
);

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
