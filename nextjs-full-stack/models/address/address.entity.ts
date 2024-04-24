import "reflect-metadata";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
export class AddressEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "user_id" })
  userId!: string;

  @Column({ nullable: true })
  address_line_1!: string;

  @Column({ nullable: true })
  address_line_2!: string;

  @Column({ nullable: true })
  state?: string;

  @Column({ nullable: true })
  city?: string;

  @Column({ name: "country", nullable: true })
  country!: string;

  @Column({ name: "zip_code", nullable: true })
  zipCode?: string;

  @Column({ type: "boolean", default: true })
  status!: boolean;

  // @CreateDateColumn({ name: "created_at",type: "timestamp" })
  // createdAt?: string;

  // @UpdateDateColumn({ name: "updated_at",type: "timestamp" })
  // updatedAt?: string;
}
