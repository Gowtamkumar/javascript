import { NextRequest, NextResponse } from "next/server";
import { UsersEntity } from "@/models/users/user.entity";
import { getDBConnection } from "@/config/db/dbconnection";
import { v4 as uuidv4 } from "uuid";
import { forgotPasswordDto } from "@/models/users/dtos/forgot.dto";
import { sendEmail } from "@/common/sendMail";
import { MailOptions } from "@/models/users/dtos";

export async function POST(request: NextRequest) {
  const connection = await getDBConnection();
  const data = await request.json();
  const protocol = request.nextUrl.protocol;
  const host = request.nextUrl.host;

  const token = uuidv4();
  const user = connection.getRepository(UsersEntity);
  const finduser = await user.findOneBy({ email: data.email });

  if (!finduser) {
    return NextResponse.json({
      status: 201,
      message: `this Email:- ${data.email} does not exist`,
    });
  }

  // token expires after one hour
  const updatedata = {
    resetToken: token,
    resetTokenExpire: Date.now() + 3600000,
  } as forgotPasswordDto;

  const result = user.merge(finduser, updatedata);
  await user.save(result);

  const resetUrl = `${protocol}://${host}/reset-password/${token}`; // your reset password page

  let mailOptions = {
    to: finduser.email,
    from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`,
    subject: "Reset Password ",
    text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account. Please click on the following link, or paste it into your browser to complete the 
    process within one hour of receiving it: ${resetUrl}`,
  };

  await sendEmail(mailOptions as MailOptions);

  return NextResponse.json({
    message: `Please check your ${data.email} address`,
    status: 200,
  });
}
