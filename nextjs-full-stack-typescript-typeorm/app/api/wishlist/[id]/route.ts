import { getDBConnection } from "@/config/db/dbconnection";
import { UpdateWishlistDto } from "@/models/wishlist/dtos";
import { WishListEntity } from "@/models/wishlist/wishlist.entity";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const wishlist = await connection.getRepository(WishListEntity);
  const result = await wishlist.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "wishlist not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "get a wishlist successfull",
    data: result,
  });
}

export async function DELETE(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const wishlist = await connection.getRepository(WishListEntity);

  const result = await wishlist.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "wishlist not found",
    });
  }

  await wishlist.delete({ id });

  return NextResponse.json({
    starus: 200,
    message: "Delete a wishlist Successfull",
    data: result,
  });
}

export async function PATCH(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const data = await request.json();

  const wishlist = await connection.getRepository(WishListEntity);

  const result = await wishlist.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "wishlist not found",
    });
  }

  const updateData = await wishlist.merge(result, data as UpdateWishlistDto);

  await wishlist.save(updateData);

  return NextResponse.json({
    starus: 200,
    message: "Update a discount Successfull",
    data: updateData,
  });
}
