import { getDBConnection } from "@/config/db/dbconnection";
import { UpdateProductDto } from "@/models/products/dtos/updateProduct.dto";
import { ProductEntity } from "@/models/products/product.entity";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const product = await connection.getRepository(ProductEntity);
  const result = await product.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "product not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "get a single product successfull",
    data: result,
  });
}

export async function DELETE(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const product = await connection.getRepository(ProductEntity);

  const result = await product.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "product not found",
    });
  }

  await product.delete({ id });

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

  const product = await connection.getRepository(ProductEntity);

  const result = await product.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "Product not found",
    });
  }

  const updateData = await product.merge(result, data as UpdateProductDto);

  await product.save(updateData);

  return NextResponse.json({
    starus: 200,
    message: "Update a single product Successfull",
    data: updateData,
  });
}
