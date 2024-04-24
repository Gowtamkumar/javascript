import { matchPassword } from "@/middlewares/auth.middleware";
import { getDBConnection } from "@/config/db/dbconnection";
import { UsersEntity } from "@/models/users/user.entity";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const connection = await getDBConnection();
  const data = await request.json();

  const user = await connection.getRepository(UsersEntity);

  const oldUser = await user.findOne({
    where: { username: data.username },
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
      role: true,
      status: true,
      password: true,
    },
  });

  if (!oldUser) {
    return NextResponse.json({
      message: `username ${data.username} not found `,
      status: 404,
    });
  }

  const isMatch = await matchPassword(data.password, oldUser);

  if (!isMatch) {
    return NextResponse.json({
      message: "Authorization is not Valid!",
      status: 401,
    });
  }

  // const token = await getSignJwtToken(oldUser);
  //  const cookietoken = await sendCookiesResponse(token);

  return NextResponse.json({
    message: "Login successfully",
    status: 200,
    data: oldUser,
  });
}
