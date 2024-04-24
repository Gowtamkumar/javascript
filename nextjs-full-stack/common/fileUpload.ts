import { existsSync } from "fs";
import { v4 as uuidv4 } from "uuid";
import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export const Upload = async (file: any) => {
  const FILE_SIZE = process.env.FILE_SIZE || 5;
  const fileSizeLimit = Number(FILE_SIZE) * 1024 * 1024;

  try {
    if (!file) {
      return new Error("File is not uploaded");
    }

    if (!["jpeg", "jpg", "png"].includes(file.type?.split("/")[1])) {
      // return new Error("File format is not supported");
      return NextResponse.json({ message: "errror", status: 401 });
    }

    if (file.size > +fileSizeLimit) {
      return new Error(`File size Exceeds the limit fo ${FILE_SIZE} mb`);
    }

    const filename = Date.now() + file.name.replaceAll(" ", "_");
    const destinationDirPath = path.join(process.cwd(), "public/upload");

    // Convert the file data to a Buffer
    const fileArrayBuffer = await file.arrayBuffer();

    // file create upload folder
    if (!existsSync(destinationDirPath)) {
      fs.mkdir(destinationDirPath, { recursive: true });
    }

    await fs.writeFile(
      path.join(destinationDirPath, filename),
      Buffer.from(fileArrayBuffer)
    );

    const returnFile = {
      filename,
      path: `upload/${filename}`,
      size: file.size,
      destination: "public/upload",
      mimetype: file.type,
      originalname: file.name,
    };

    return returnFile;
  } catch (error) {
    console.log("file upload ", error);
  }
};
