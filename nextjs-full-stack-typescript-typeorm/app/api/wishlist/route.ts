import { NextResponse } from "next/server";
import { getDBConnection } from "@/config/db/dbconnection";
import { WishListhValidationSchema } from "@/validation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOption";
import { WishListEntity } from "@/models/wishlist/wishlist.entity";
import { CreateWishlistDto } from "@/models/wishlist/dtos";

export async function POST(request: Request) {
  const connection = await getDBConnection();

  const data = await request.json();

  const validation = WishListhValidationSchema.safeParse(data);

  if (!validation.success) {
    return NextResponse.json({
      status: 401,
      message: validation.error.formErrors,
    });
  }

  const wishlist = connection.getRepository(WishListEntity);

  const newwishlist = wishlist.create(data as CreateWishlistDto);

  const save = await wishlist.save(newwishlist);

  return NextResponse.json({
    message: "Create new wishlist",
    status: 200,
    data: save,
  });
}

/**
 * Get all users
 * api/users
 * @export
 * @param {Request} request
 * @return {*}
 */
export async function GET(request: Request): Promise<any> {
  const connection = await getDBConnection();
  const wishlist = await connection.getRepository(WishListEntity);

  // wishlist authentication and role verification
  const session: any = await getServerSession(authOptions);
  // // Check if the wishlist is authenticated
  // if (!session) {
  //   return NextResponse.json({
  //     status: 401,
  //     message: "wishlist is not authenticated",
  //   });
  // }

  // Check if the wishlist has the 'admin' role
  // if (session.user.role !== "Admin") {
  //   return NextResponse.json({
  //     status: 403,
  //     message: "User is authenticated but does not have the right permissions",
  //   });
  // }

  const result = await wishlist.find();

  return NextResponse.json({
    status: 200,
    message: "Get all wishlist",
    length: 100,
    data: result,
  });
}
