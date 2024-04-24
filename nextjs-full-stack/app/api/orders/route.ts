import { NextResponse } from "next/server";
import { getDBConnection } from "@/config/db/dbconnection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOption";
import { orderValidationSchema } from "@/validation";
import { CreateOrderDto } from "@/models/order/dtos";
import { OrderEntity } from "@/models/order/order.entity";
import { OrderItemEntity } from "@/models/order-item/order-item.entity";
import { CreateOrderItemDto } from "@/models/order-item/dtos";

/**
 * create order
 * api/order
 * @export
 * @param {Request} request
 * @return {*}
 */
export async function POST(request: Request) {
  const connection = await getDBConnection();

  const data = await request.json();

  const validation = orderValidationSchema.safeParse(data);

  if (!validation.success) {
    return NextResponse.json({
      status: 401,
      message: validation.error.formErrors,
    });
  }

  // if (!validation.data.orderItems) {
  //   return NextResponse.json({
  //     status: 401,
  //     message: "order items is required",
  //   });
  // }

  const createRepo = connection.getRepository(OrderEntity);
  const restult = createRepo.create(data as CreateOrderDto);
  const save = await createRepo.save(restult);

  // insert order items data
  if (validation.data.orderItems && save.id) {
    const repoOrderitems = connection.getRepository(OrderItemEntity);
    const newOrderItems = validation.data.orderItems.map((item) => {
      return repoOrderitems.create({
        totalAmount: +item.totalAmount,
        productId: item.productId,
        qty: item.qty,
        orderId: save.id,
      } as CreateOrderItemDto);
    });
    await repoOrderitems.save(newOrderItems);
  }

  return NextResponse.json({
    message: "Create new Order",
    status: 200,
    data: save,
  });
}

/**
 * Get all order
 * api/order
 * @export
 * @param {Request} request
 * @return {*}
 */
export async function GET(request: Request): Promise<any> {
  const connection = await getDBConnection();
  const createRepo = await connection.getRepository(OrderEntity);

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
    message: "Get all Order",
    length: 100,
    data: result,
  });
}
