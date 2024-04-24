import { CategoryStatus } from "../enums/category-status.enum";

export interface CreateCategoriesDto {
  name: string;
  urlSlug: string;
  level?: number;
  image?: string;
  parentId?: string;
  description?: string;
  status: CategoryStatus;
}
