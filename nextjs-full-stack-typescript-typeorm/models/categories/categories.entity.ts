import "reflect-metadata";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
  UpdateDateColumn,
} from "typeorm";
import { CategoryStatus } from "./enums/category-status.enum";

@Entity("categories")
@Tree("materialized-path")
export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  name!: string;

  @Column({ name: "url_slug" })
  urlSlug!: string;

  // @Column({ name: "parent_id", nullable: true })
  // parentId!: string;

  @Column({ name: "user_id", nullable: true })
  userId!: string;

  @Column({ nullable: true })
  image?: string;

  @Column({ nullable: true })
  level!: number;

  @Column({ nullable: true })
  description?: string;

  @Column({
    type: "enum",
    enum: CategoryStatus,
    default: CategoryStatus.Active,
  })
  status!: CategoryStatus;

  

  @TreeChildren()
  children!: CategoriesEntity[];

  @TreeParent({ onDelete: "CASCADE" })
  parent!: CategoriesEntity;

  @CreateDateColumn({ name: "created_at",type: "timestamp" })
  createdAt?: string;

  @UpdateDateColumn({ name: "updated_at",type: "timestamp" })
  updatedAt?: string;
}
