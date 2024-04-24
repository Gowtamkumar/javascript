import "reflect-metadata";
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { OrderEntity } from "../order/order.entity";

@Entity("order_items")
export class OrderItemEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "order_id" })
  orderId!: string;
  // @ManyToOne(() => OrderEntity)
  // @JoinColumn({ name: "order_id" })
  // order?: OrderEntity;

  @Column({ name: "total_amount", type: "numeric" })
  totalAmount!: number;

  @Column()
  qty!: number;

  @Column({ name: "product_id" })
  productId!: string;
}
