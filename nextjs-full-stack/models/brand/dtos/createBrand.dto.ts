import { BrandStatus } from "../enums/brand-status.enum";

export interface CreateBrandDto {
  name: string;
  status: BrandStatus;
  userId: string;
}
