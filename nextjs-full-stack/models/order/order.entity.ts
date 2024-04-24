import "reflect-metadata";
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { OrderStatus } from "./enums/order-status.enum";
import { PaymentStatus, PaymentTypeStatus } from "./enums";
import { OrderItemEntity } from "../order-item/order-item.entity";

@Entity("orders")
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Generated("increment")
  @Column({ name: "tracking_no", unique: true })
  trackingNo!: number;

  @Column({ name: "order_date" })
  orderDate!: string;

  @Column({ name: "is_paid", type: "boolean" })
  isPaid!: boolean;

  @Column({ name: "is_shipped", type: "boolean" })
  isShipped!: boolean;

  @Column({ name: "order_total_amount", type: "numeric" })
  orderTotalAmount!: number;

  @Column({ name: "discount_amount", type: "numeric", nullable: true })
  discountAmount!: number;

  @Column({ name: "net_amount", type: "numeric" })
  netAmount!: number;

  @Column({ name: "shiping_amount", type: "numeric", nullable: true })
  shipingAmount?: number;

  @Column({ type: "numeric", nullable: true })
  tax!: number;

  @Column({ name: "order_note", nullable: true })
  orderNote!: string;

  @Column({ name: "phone_no" })
  phoneNo!: string;

  @Column({ name: "email_address", nullable: true })
  emailAddress!: string;

  @Column({ name: "shipping_address_id", nullable: true })
  shippingAddressId?: string;

  @Column({
    name: "payment_status",
    type: "enum",
    enum: PaymentStatus,
    default: PaymentStatus.Paid,
  })
  paymentStatus!: PaymentStatus;

  @Column({
    name: "payment_type",
    type: "enum",
    enum: PaymentTypeStatus,
    default: PaymentTypeStatus.Online,
  })
  paymentType!: PaymentTypeStatus;

  @Column({
    type: "enum",
    enum: OrderStatus,
    default: OrderStatus.Pending,
  })
  status!: OrderStatus;

  @Column({ name: "user_id", nullable: true })
  userId?: string;

  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  createdAt?: string;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp" })
  updatedAt?: string;

  // // // relations
  // @OneToMany(() => OrderItemEntity, (orderitem) => orderitem.order)
  // orderItems!: OrderItemEntity[];

  // @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.order)
  // orderItems?: OrderItemEntity[];
}
