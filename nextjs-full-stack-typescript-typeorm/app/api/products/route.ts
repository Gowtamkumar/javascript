import { NextResponse } from "next/server";
import { getDBConnection } from "@/config/db/dbconnection";
import { productValidationSchema } from "@/validation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOption";
import { ProductEntity } from "@/models/products/product.entity";
import { CreateProductDto } from "@/models/products/dtos";

export async function POST(request: Request) {
  const connection = await getDBConnection();

  const data = await request.json();

  const validation = productValidationSchema.safeParse(data);

  if (!validation.success) {
    return NextResponse.json({
      status: 401,
      message: validation.error.formErrors,
    });
  }

  const product = connection.getRepository(ProductEntity);

  const urlSlugChecking = await product.findOne({
    where: { urlSlug: data.urlSlug },
  });

  if (urlSlugChecking) {
    return NextResponse.json({
      message: "UrlSlug already exists",
      status: 401,
    });
  }

  const newProduct = product.create(data as CreateProductDto);

  const save = await product.save(newProduct);

  return NextResponse.json({
    message: "Create new Product",
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
  const product = await connection.getRepository(ProductEntity);

  // product authentication and role verification
  const session: any = await getServerSession(authOptions);
  // // Check if the product is authenticated
  // if (!session) {
  //   return NextResponse.json({
  //     status: 401,
  //     message: "product is not authenticated",
  //   });
  // }

  // Check if the product has the 'admin' role
  // if (session.user.role !== "Admin") {
  //   return NextResponse.json({
  //     status: 403,
  //     message: "User is authenticated but does not have the right permissions",
  //   });
  // }

  const result = await product.find();

  return NextResponse.json({
    status: 200,
    message: "Get all products",
    length: 100,
    data: result,
  });
}
