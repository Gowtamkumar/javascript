import { getDBConnection } from "@/config/db/dbconnection";
import { BrandEntity } from "@/models/brand/brand.entity";
import { UpdateBrandDto } from "@/models/brand/dtos";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const createRepo = await connection.getRepository(BrandEntity);
  const result = await createRepo.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "Brand not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "get a Brand successfull",
    data: result,
  });
}

export async function DELETE(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const createRepo = await connection.getRepository(BrandEntity);

  const result = await createRepo.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "brand not found",
    });
  }

  await createRepo.delete({ id });

  return NextResponse.json({
    starus: 200,
    message: "Delete a brand Successfull",
    data: result,
  });
}

export async function PATCH(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const data = await request.json();

  const createRepo = await connection.getRepository(BrandEntity);

  const result = await createRepo.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "Brand not found",
    });
  }

  const updateData = await createRepo.merge(result, data as UpdateBrandDto);

  await createRepo.save(updateData);

  return NextResponse.json({
    starus: 200,
    message: "Update a Brand Successfull",
    data: updateData,
  });
}
