import "reflect-metadata";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { DiscountType } from "./enums/discount-type.enum";
import { DiscountStatus } from "./enums/discount-status.enum";

@Entity("discounts")
export class DiscountEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "coupon_code", unique: true })
  couponCode!: string;

  @Column({ type: "enum", enum: DiscountType })
  type!: DiscountType;

  @Column({ type: "numeric" })
  value?: number;

  @Column({ name: "start_date",type: "timestamp" })
  startDate!: string;

  @Column({ name: "expiry_date",type: "timestamp" })
  expiryDate!: string;

  @Column({ name: "end_date",type: "timestamp" })
  endDate!: string;

  @Column({ name: "min_order_amount", type: "numeric" })
  minOrderAmount!: number;

  @Column({ name: "min_user", nullable: true })
  minUser!: number;

  @Column({ name: "usage_count", nullable: true })
  usageCount!: number;

  @Column({ name: "is_single_use", type: "boolean", default: false })
  isSingleUse!: boolean;

  @Column({
    type: "enum",
    enum: DiscountStatus,
    default: DiscountStatus.Active,
  })
  status!: DiscountStatus;

  @Column({ name: "user_id"})
  userId?: string;

  @CreateDateColumn({ name: "created_at",type: "timestamp" })
  createdAt?: string;

  @UpdateDateColumn({ name: "updated_at",type: "timestamp" })
  updatedAt?: string;
}
