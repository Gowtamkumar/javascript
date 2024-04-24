import { getDBConnection } from "@/config/db/dbconnection";
import { DiscountEntity } from "@/models/discount/discount.entity";
import { UpdateDiscountDto } from "@/models/discount/dtos";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const discount = await connection.getRepository(DiscountEntity);
  const result = await discount.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "discount not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "get a discount successfull",
    data: result,
  });
}

export async function DELETE(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const discount = await connection.getRepository(DiscountEntity);

  const result = await discount.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "discount not found",
    });
  }

  await discount.delete({ id });

  return NextResponse.json({
    starus: 200,
    message: "Delete a single discount Successfull",
    data: result,
  });
}

export async function PATCH(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const data = await request.json();

  const discount = await connection.getRepository(DiscountEntity);

  const result = await discount.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "discount not found",
    });
  }

  const updateData = await discount.merge(result, data as UpdateDiscountDto);

  await discount.save(updateData);

  return NextResponse.json({
    starus: 200,
    message: "Update a single discount Successfull",
    data: updateData,
  });
}
