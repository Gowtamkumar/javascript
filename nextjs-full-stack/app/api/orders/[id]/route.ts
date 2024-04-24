import { getDBConnection } from "@/config/db/dbconnection";
import { UpdateOrderDto } from "@/models/order/dtos";
import { OrderEntity } from "@/models/order/order.entity";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const createRepo = await connection.getRepository(OrderEntity);
  const result = await createRepo.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "order not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "get a order successfull",
    data: result,
  });
}

export async function DELETE(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const createRepo = await connection.getRepository(OrderEntity);

  const result = await createRepo.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "order not found",
    });
  }

  await createRepo.delete({ id });

  return NextResponse.json({
    starus: 200,
    message: "Delete a order Successfull",
    data: result,
  });
}

export async function PATCH(request: Request, context: any) {
  const connection = await getDBConnection();
  const {
    params: { id },
  } = context;

  const data = await request.json();

  const createRepo = await connection.getRepository(OrderEntity);

  const result = await createRepo.findOneBy({ id });

  if (!result) {
    return NextResponse.json({
      status: 400,
      message: "Order not found",
    });
  }

  const updateData = await createRepo.merge(result, data as UpdateOrderDto);

  await createRepo.save(updateData);

  return NextResponse.json({
    starus: 200,
    message: "Update a Order Successfull",
    data: updateData,
  });
}
