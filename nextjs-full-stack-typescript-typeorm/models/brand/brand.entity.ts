import "reflect-metadata";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { BrandStatus } from "./enums/brand-status.enum";

@Entity("brands")
export class BrandEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @Column({
    type: "enum",
    enum: BrandStatus,
    default: BrandStatus.Active,
  })
  status!: BrandStatus;

  @Column({ name: "user_id", nullable: true })
  userId?: string;

  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  createdAt?: string;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp" })
  updatedAt?: string;
}
