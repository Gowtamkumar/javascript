import { MailOptions } from "@/models/users/dtos";
import nodemailer from "nodemailer";

export const sendEmail = async (mailOptions: MailOptions): Promise<void> => {
  try {
    const transporter = nodemailer.createTransport({
      // service: process.env.SERVICE, // Or set it to your email provider like 'gmail', 'outlook', etc.
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Re-throw the error to handle it elsewhere if necessary
  }
};
