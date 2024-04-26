import { NextResponse } from "next/server";
import { getDBConnection } from "@/config/db/dbconnection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOption";
import { CreateCategoriesDto } from "@/models/categories/dtos";
import { CategoriesEntity } from "@/models/categories/categories.entity";
import { categoriesValidationSchema } from "@/validation/categories/categoriesValidation";

export async function POST(request: Request) {
  const connection = await getDBConnection();

  const data = await request.json();

  const validation = categoriesValidationSchema.safeParse(data);

  if (!validation.success) {
    return NextResponse.json({
      status: 401,
      message: validation.error.formErrors,
    });
  }

  const categories = connection.getRepository(CategoriesEntity);

  if (data.parentId) {
    const maxLevel = 3;

    const parent = await categories.findOne({
      where: { id: data.parentId },
      relations: { children: true },
    });

    if (parent.level >= maxLevel) {
      return NextResponse.json({
        status: 400,
        message: "No new child allowed for this Category",
      });
    }

    const newCreateCategory = {
      name: data.name,
      image: data.image,
      urlSlug: data.urlSlug,
      level: parent.level + 1,
      parent: parent,
    };

    const newCategories = categories.create(newCreateCategory);
    const save = await categories.save(newCategories);

    return NextResponse.json({
      message: "Create new categories",
      status: 200,
      data: save,
    });
  } else {
    const newCategories = categories.create(data as CreateCategoriesDto);
    const save = await categories.save(newCategories);
    return NextResponse.json({
      message: "Create new categories",
      status: 200,
      data: save,
    });
  }
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
  const categories = await connection.getTreeRepository(CategoriesEntity)

  // categories authentication and role verification
  const session: any = await getServerSession(authOptions)
  // // Check if the categories is authenticated
  // if (!session) {
  //   return NextResponse.json({
  //     status: 401,
  //     message: "categories is not authenticated",
  //   });
  // }

  // Check if the categories has the 'admin' role
  // if (session.user.role !== "Admin") {
  //   return NextResponse.json({
  //     status: 403,
  //     message: "User is authenticated but does not have the right permissions",
  //   });
  // }

  const result = await categories.findTrees();

  return NextResponse.json({
    status: 200,
    message: "Get all categories",
    length: 100,
    data: result,
  });
}
