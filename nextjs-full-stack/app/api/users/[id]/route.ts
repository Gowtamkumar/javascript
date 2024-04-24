import { getDBConnection } from "@/config/db/dbconnection";
import { UpdateUserDto } from "@/models/users/dtos";
import { UsersEntity } from "@/models/users/user.entity";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const user = await connection.getRepository(UsersEntity);
  const result = await user.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "user not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "get a single user successfull",
    data: result,
  });
}

export async function DELETE(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const user = await connection.getRepository(UsersEntity);

  const result = await user.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "user not found",
    });
  }

  await user.delete({ id });

  return NextResponse.json({
    starus: 200,
    message: "Delete a single user Successfull",
    data: result,
  });
}

export async function PATCH(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const data = await request.json();

  const user = await connection.getRepository(UsersEntity);

  const result = await user.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "User not found",
    });
  }

  const updateData = await user.merge(result, data as UpdateUserDto);

  await user.save(updateData);

  return NextResponse.json({
    starus: 200,
    message: "Update a single user Successfull",
    data: updateData,
  });
}
