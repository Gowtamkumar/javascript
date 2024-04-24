import { getDBConnection } from "@/config/db/dbconnection";
import { FileEntity } from "@/models/file/file.entity";
import { NextResponse } from "next/server";
import { UpdateFileDto } from "@/models/file/dtos/updateFile.dto";

export async function GET(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;
  const file = await connection.getRepository(FileEntity);
  const result = await file.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "file not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "get a single file",
    data: result,
  });
}

export async function DELETE(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const file = await connection.getRepository(FileEntity);

  const result = await file.delete({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "file not found",
    });
  }

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

  const file = await connection.getRepository(FileEntity);

  const result = await file.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "file not found",
    });
  }

  const updateData = await file.merge(result, data as UpdateFileDto);

  await file.save(updateData);

  return NextResponse.json({
    starus: 200,
    message: "Update a single file Successfull",
    data: updateData,
  });
}
