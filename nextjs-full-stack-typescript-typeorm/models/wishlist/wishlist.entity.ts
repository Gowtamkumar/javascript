import "reflect-metadata";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("wishlists")
export class WishListEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "product_id" })
  productId!: string;

  @Column({ name: "user_id" })
  userId!: string;

  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  createdAt!: string;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp" })
  updatedAt!: string;
}
