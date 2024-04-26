import { NextResponse } from "next/server";
import { getDBConnection } from "@/config/db/dbconnection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOption";
import { addressValidationSchema } from "@/validation";
import { AddressEntity } from "@/models/address/address.entity";
import { CreateAddressDto } from "@/models/address/dtos";

export async function POST(request: Request) {
  const connection = await getDBConnection();

  const data = await request.json();

  const validation = addressValidationSchema.safeParse(data);

  if (!validation.success) {
    return NextResponse.json({
      status: 401,
      message: validation.error.formErrors,
    });
  }

  const address = connection.getRepository(AddressEntity);

  const newaddress = address.create(data as CreateAddressDto);

  const save = await address.save(newaddress);

  return NextResponse.json({
    message: "Create new Address",
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
  const address = await connection.getRepository(AddressEntity);

  // address authentication and role verification
  const session: any = await getServerSession(authOptions);
  // // Check if the address is authenticated
  // if (!session) {
  //   return NextResponse.json({
  //     status: 401,
  //     message: "address is not authenticated",
  //   });
  // }

  // Check if the address has the 'admin' role
  // if (session.user.role !== "Admin") {
  //   return NextResponse.json({
  //     status: 403,
  //     message: "User is authenticated but does not have the right permissions",
  //   });
  // }

  const result = await address.find();

  return NextResponse.json({
    status: 200,
    message: "Get all address",
    length: 100,
    data: result,
  });
}
