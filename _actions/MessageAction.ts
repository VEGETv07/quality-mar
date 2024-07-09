"use server";

import MessageModel  from '../pages/models/MessageModel'; // Import your MessageModel

async function sendMessage(name: string,email:string, subject:string, message: string) {
    // Create a new message instance
    const msg = new MessageModel({
        name,
        email,
        subject,
        message,
        timestamp: new Date()
    });

    // Save the message to the database
    await msg.save();

}

// Export the function to make it available for use in other modules
export { sendMessage };