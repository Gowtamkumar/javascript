import { NextResponse } from "next/server";
import { UsersEntity } from "@/models/users/user.entity";
import { getDBConnection } from "@/config/db/dbconnection";
import { hashedPassword } from "@/middlewares/auth.middleware";
import { UserValidationSchema } from "@/validation";
import { CreateUserDto } from "@/models/users/dtos";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOption";

export async function POST(request: Request) {
  const connection = await getDBConnection();

  const data = await request.json();

  const validation = UserValidationSchema.safeParse(data);

  if (!validation.success) {
    return NextResponse.json({
      status: 401,
      message: validation.error.formErrors,
    });
  }

  const user = connection.getRepository(UsersEntity);

  const userChecking = await user.findOne({
    where: { username: data.username },
  });

  if (userChecking) {
    return NextResponse.json({
      message: "Username already exists",
      status: 401,
    });
  }

  const emailChecking = await user.findOne({
    where: { email: data.email },
  });

  if (emailChecking) {
    return NextResponse.json({
      message: "email already exists",
      status: 401,
    });
  }

  const newUser = user.create({
    ...data,
    password: await hashedPassword(data.password),
  } as CreateUserDto);

  await user.save(newUser);

  return NextResponse.json({
    message: "Create new User",
    status: 200,
    data: data,
  });
}

/**
 * Get all users
 * api/users
 * @export
 * @param {Request} request
 * @return {*}
 */
export async function GET(request: Request): Promise<any> {
  const connection = await getDBConnection();
  const user = await connection.getRepository(UsersEntity);

  // User authentication and role verification
  const session: any = await getServerSession(authOptions);
  // Check if the user is authenticated
  if (!session) {
    return NextResponse.json({
      status: 401,
      message: "User is not authenticated",
    });
  }

  // Check if the user has the 'admin' role
  if (session.user.role !== "Admin") {
    return NextResponse.json({
      status: 403,
      message: "User is authenticated but does not have the right permissions",
    });
  }

  const result = await user.find({
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
      role: true,
      status: true,
    },
  });

  return NextResponse.json({
    status: 200,
    message: "Get all users",
    length: 100,
    data: result,
  });
}
