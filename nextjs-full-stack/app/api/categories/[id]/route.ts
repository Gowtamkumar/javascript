import { getDBConnection } from "@/config/db/dbconnection";
import { CategoriesEntity } from "@/models/categories/categories.entity";
import { UpdateCategoriesDto } from "@/models/categories/dtos";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const categories = await connection.getRepository(CategoriesEntity);
  const result = await categories.findOne({
    where: { id },
    relations: { children: true },
  });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "categories not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "get a categories successfull",
    data: result,
  });
}

export async function DELETE(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const categories = await connection.getRepository(CategoriesEntity);

  const result = await categories.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "categories not found",
    });
  }

  await categories.delete({ id });

  return NextResponse.json({
    starus: 200,
    message: "Delete a categories Successfull",
    data: result,
  });
}

export async function PATCH(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const data = await request.json();

  const categories = await connection.getRepository(CategoriesEntity);

  const result = await categories.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "categories not found",
    });
  }

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

    const updateData = await categories.merge(result, newCreateCategory);
    const save = await categories.save(updateData);

    return NextResponse.json({
      message: "update new categories",
      status: 200,
      data: save,
    });
  } else {
    const newupdateData = await categories.merge(
      result,
      data as UpdateCategoriesDto
    );

    await categories.save(newupdateData);

    return NextResponse.json({
      starus: 200,
      message: "Update a categories Successfull",
      data: newupdateData,
    });
  }
}
