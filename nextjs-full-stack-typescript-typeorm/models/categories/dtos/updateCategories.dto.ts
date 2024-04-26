import { CategoryStatus } from "../enums/category-status.enum";

export interface UpdateCategoriesDto {
  name: string;
  urlSlug: string;
  image?: string;
  parentId: string;
  description?: string;
  status: CategoryStatus;
}
