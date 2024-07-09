import mongoose, { Schema, Document, Model } from "mongoose";

interface IMessage extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: Date;
}

const MessageSchema: Schema<IMessage> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const MessageModel: Model<IMessage> =
  mongoose.models.Message || mongoose.model<IMessage>("Message", MessageSchema);

export default MessageModel;
