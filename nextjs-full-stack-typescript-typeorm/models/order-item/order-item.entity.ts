import "reflect-metadata";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { OrderEntity } from "../order/order.entity";
import { ProductEntity } from "../products/product.entity";

@Entity("order_items")
export class OrderItemEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "order_id", nullable: true })
  orderId?: string;
  // @ManyToOne(() => OrderEntity)
  // @JoinColumn()
  // order!: OrderEntity;

  @Column({ name: "total_amount", type: "numeric" })
  totalAmount!: number;

  @Column()
  qty!: number;

  @Column({ name: "product_id" })
  productId!: string;
  // @ManyToOne(() => ProductEntity, (product) => product.orderItems)
  // product!: ProductEntity
}
