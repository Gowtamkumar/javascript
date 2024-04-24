import { getDBConnection } from "@/config/db/dbconnection";
import { UpdaeProductVariantDto } from "@/models/product-variant/dtos";
import { ProductVariantEntity } from "@/models/product-variant/product-variant.entity";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const productv = await connection.getRepository(ProductVariantEntity);
  const result = await productv.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "product Variant not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "get product variant successfull",
    data: result,
  });
}

export async function DELETE(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const productV = await connection.getRepository(ProductVariantEntity);

  const result = await productV.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "product Variant not found",
    });
  }

  await productV.delete({ id });

  return NextResponse.json({
    starus: 200,
    message: "Delete product Variant Successfull",
    data: result,
  });
}

export async function PATCH(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const data = await request.json();

  const productv = await connection.getRepository(ProductVariantEntity);

  const result = await productv.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "Product not found",
    });
  }

  const updateData = await productv.merge(result, data as UpdaeProductVariantDto);

  await productv.save(updateData);

  return NextResponse.json({
    starus: 200,
    message: "Update product Variatn Successfull",
    data: updateData,
  });
}
