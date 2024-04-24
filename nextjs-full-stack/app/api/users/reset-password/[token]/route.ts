import { NextRequest, NextResponse } from "next/server";
import { UsersEntity } from "@/models/users/user.entity";
import { getDBConnection } from "@/config/db/dbconnection";
import { hashedPassword } from "@/middlewares/auth.middleware";

export async function PATCH(request: NextRequest, context: any) {
  const { token } = context;

  const connection = await getDBConnection();
  const data = await request.json();
  const newPassword = await hashedPassword(data.password);
  const user = connection.getRepository(UsersEntity);

  const finduser = await user.findOneBy({
    resetToken: token,
    // resetTokenExpire: Date.now(),
  });

  if (!finduser) {
    return NextResponse.json({
      status: 201,
      message: "Invalid or expired reset token",
    });
  }

  // // token expires after one hour
  const result = user.merge(finduser, {
    password: newPassword,
    resetToken: null,
    resetTokenExpire: null,
  } as any);
  await user.save(result);

  return NextResponse.json({
    message: "Reset password successfully",
    status: 200,
  });
}
