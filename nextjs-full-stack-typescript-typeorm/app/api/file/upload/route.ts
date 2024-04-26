import { NextRequest, NextResponse } from "next/server";
import { Upload } from "@/common/fileUpload";
import { getDBConnection } from "@/config/db/dbconnection";
import { FileEntity } from "@/models/file/file.entity";
import { CreateFileDto } from "@/models/file/dtos/createFile.dto";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const connection = await getDBConnection();
  const fileEntity = await connection.getRepository(FileEntity);

  // Get the file from the form data
  const getFile = formData.get("file");

  const file = getFile as File;

  const saveFile = await Upload(file);
  const createFile = fileEntity.create(saveFile as CreateFileDto);
  const results = await fileEntity.save(createFile);

  return NextResponse.json({
    message: "New file Create",
    status: 200,
    data: results,
  });
}

export async function GET(request: Request) {
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   return NextResponse.json({
  //     status: 201,
  //     message: "Authorized faild",
  //   });
  // }

  const connection = await getDBConnection();
  const user = await connection.getRepository(FileEntity);

  const result = await user.find();

  return NextResponse.json({
    status: 200,
    message: "Get a files",
    length: 100,
    data: result,
  });
}
