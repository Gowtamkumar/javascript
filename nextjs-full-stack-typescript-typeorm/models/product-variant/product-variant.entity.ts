import "reflect-metadata";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("product_variants")
export class ProductVariantEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  price!: string;

  @Column({ name: "product_id", nullable: true })
  productId?: string;

  @Column({ nullable: true })
  size?: string;

  @Column({ nullable: true })
  color!: string;

  @Column({ name: "stock_qty" })
  stockQty?: number;
}
