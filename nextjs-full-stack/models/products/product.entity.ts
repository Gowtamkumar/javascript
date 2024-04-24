import "reflect-metadata";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("products")
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  price!: string;

  @Column({ nullable: true })
  color?: string;

  @Column({ name: "url_slug", unique: true })
  urlSlug!: string;

  @Column({ name: "image_url" })
  imageUrl!: string;

  @Column({ name: "brand_id", nullable: true })
  brandId?: string;

  @Column({ name: "category_id", nullable: true })
  categoryId?: string;

  @Column({ name: "stock_qty" })
  stockQty?: number;

  @Column({ name: "user_id", nullable: true })
  userId?: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ type: "boolean", default: true })
  status!: boolean;

  @CreateDateColumn({ name: "created_at",type: "timestamp" })
  createdAt?: string;

  @UpdateDateColumn({ name: "updated_at",type: "timestamp" })
  updatedAt?: string;
}
