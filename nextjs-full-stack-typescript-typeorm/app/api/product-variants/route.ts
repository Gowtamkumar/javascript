import { NextResponse } from "next/server";
import { getDBConnection } from "@/config/db/dbconnection";
import { productVariantValidationSchema } from "@/validation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOption";
import { ProductVariantEntity } from "@/models/product-variant/product-variant.entity";
import { CareateProductVariantDto } from "@/models/product-variant/dtos";

export async function POST(request: Request) {
  const connection = await getDBConnection();

  const data = await request.json();

  const validation = productVariantValidationSchema.safeParse(data);

  if (!validation.success) {
    return NextResponse.json({
      status: 401,
      message: validation.error.formErrors,
    });
  }

  const productVariant = connection.getRepository(ProductVariantEntity);

  // const urlSlugChecking = await productVariant.findOne({
  //   where: { urlSlug: data.urlSlug },
  // });

  // if (urlSlugChecking) {
  //   return NextResponse.json({
  //     message: "UrlSlug already exists",
  //     status: 401,
  //   });
  // }

  const newProductV = productVariant.create(data as CareateProductVariantDto);

  const save = await productVariant.save(newProductV);

  return NextResponse.json({
    message: "Create new Product Variant",
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
  const product = await connection.getRepository(ProductVariantEntity);

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
    message: "Get all product Variant",
    length: 100,
    data: result,
  });
}
