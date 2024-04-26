import nodemailer from "nodemailer";
import { Options } from "nodemailer/lib/mailer";

export const sendEmail = async (mailOptions: Options) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      // service: process.env.SERVICE,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    } as any);

    await transporter.sendMail(mailOptions);

    console.log("email sent sucessfully");
  } catch (error) {
    throw new Error("email not sent");
    // console.log(error, "email not sent");
  }
};
