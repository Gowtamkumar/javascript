import "reflect-metadata";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("files")
export class FileEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  fieldname?: string;

  @Column({ nullable: true })
  originalname!: string;

  @Column({ nullable: true })
  encoding?: string;

  @Column({ nullable: true })
  mimetype?: string;

  @Column({ nullable: true })
  destination?: string;

  @Column()
  filename!: string;

  @Column({ nullable: true })
  path?: string;

  @Column({ nullable: true })
  size!: number;
}
