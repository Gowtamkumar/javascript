import { getDBConnection } from "@/config/db/dbconnection";
import { hashedPassword, matchPassword } from "@/middlewares/auth.middleware";
import { UsersEntity } from "@/models/users/user.entity";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, context: any) {
  const { id } = context;

  const connection = await getDBConnection();
  const data = await request.json();
  const user = connection.getRepository(UsersEntity);

  const finduser = await user.findOne({
    where: { id },
  });

  if (!finduser) {
    return NextResponse.json({
      status: 201,
      message: "User not found",
    });
  }

  if (
    !data.newPassword ||
    !(await matchPassword(data.currentPassword, finduser))
  ) {
    return NextResponse.json({
      status: 201,
      message: "Password is not current",
    });
  }

  const newPassword = await hashedPassword(data.newPassword);

  const result = user.merge(finduser, {
    password: newPassword,
  });

  await user.save(result);

  return NextResponse.json({
    message: "Update password successfully",
    status: 200,
  });
}
