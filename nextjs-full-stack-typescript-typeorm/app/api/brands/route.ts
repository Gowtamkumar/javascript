import { NextResponse } from "next/server";
import { getDBConnection } from "@/config/db/dbconnection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOption";
import { BrandEntity } from "@/models/brand/brand.entity";
import { CreateBrandDto } from "@/models/brand/dtos";
import { brandValidationSchema } from "@/validation";

export async function POST(request: Request) {
  const connection = await getDBConnection();

  const data = await request.json();

  const validation = brandValidationSchema.safeParse(data);

  if (!validation.success) {
    return NextResponse.json({
      status: 401,
      message: validation.error.formErrors,
    });
  }

  const createRepo = connection.getRepository(BrandEntity);

  const restult = createRepo.create(data as CreateBrandDto);

  const save = await createRepo.save(restult);

  return NextResponse.json({
    message: "Create new Brand",
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
  const createRepo = await connection.getRepository(BrandEntity);

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

  const result = await createRepo.find();

  return NextResponse.json({
    status: 200,
    message: "Get all Brand",
    length: 100,
    data: result,
  });
}
