import { NextResponse } from "next/server";
import { getDBConnection } from "@/config/db/dbconnection";
import { discountValidationSchema } from "@/validation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOption";
import { DiscountEntity } from "@/models/discount/discount.entity";
import { CreateDiscountDto } from "@/models/discount/dtos";

export async function POST(request: Request) {
  const connection = await getDBConnection();

  const data = await request.json();

  const validation = discountValidationSchema.safeParse(data);

  if (!validation.success) {
    return NextResponse.json({
      status: 401,
      message: validation.error.formErrors,
    });
  }

  const discount = connection.getRepository(DiscountEntity);


  const newDiscount = discount.create(data as CreateDiscountDto);

  const save = await discount.save(newDiscount);

  return NextResponse.json({
    message: "Create new discount",
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
  const discount = await connection.getRepository(DiscountEntity);

  // discount authentication and role verification
  const session: any = await getServerSession(authOptions);
  // // Check if the discount is authenticated
  // if (!session) {
  //   return NextResponse.json({
  //     status: 401,
  //     message: "discount is not authenticated",
  //   });
  // }

  // Check if the discount has the 'admin' role
  // if (session.user.role !== "Admin") {
  //   return NextResponse.json({
  //     status: 403,
  //     message: "User is authenticated but does not have the right permissions",
  //   });
  // }

  const result = await discount.find();

  return NextResponse.json({
    status: 200,
    message: "Get all Discount",
    length: 100,
    data: result,
  });
}
