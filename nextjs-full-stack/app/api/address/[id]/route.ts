import { getDBConnection } from "@/config/db/dbconnection";
import { AddressEntity } from "@/models/address/address.entity";
import { UpdateAddressDto } from "@/models/address/dtos";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const address = await connection.getRepository(AddressEntity);
  const result = await address.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "Address not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "get a single Address successfull",
    data: result,
  });
}

export async function DELETE(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const address = await connection.getRepository(AddressEntity);

  const result = await address.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "address not found",
    });
  }

  await address.delete({ id });

  return NextResponse.json({
    starus: 200,
    message: "Delete a single product Successfull",
    data: result,
  });
}

export async function PATCH(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const data = await request.json();

  const address = await connection.getRepository(AddressEntity);

  const result = await address.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "address not found",
    });
  }

  const updateData = await address.merge(result, data as UpdateAddressDto);

  await address.save(updateData);

  return NextResponse.json({
    starus: 200,
    message: "Update a single address Successfull",
    data: updateData,
  });
}
