import { NextApiRequest, NextApiResponse } from "next";
import MessageModel from "@/pages/models/MessageModel";
import database from "@/pages/lib/database";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await database();

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { fname, lname, phone, adress, city, zip, email, subject, message } =
    req.body;

  if (
    !fname ||
    !lname ||
    !phone ||
    !adress ||
    !city ||
    !zip ||
    !email ||
    !subject ||
    !message
  ) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  try {
    const msg = new MessageModel({
      fname,
      lname,
      phone,
      adress,
      city,
      zip,
      email,
      subject,
      message,
      timestamp: new Date(),
    });

    await msg.save();
    console.log("Message saved:", fname, lname, phone, adress, city, zip, email, subject, message);
    res.status(200).json({ done: true });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
