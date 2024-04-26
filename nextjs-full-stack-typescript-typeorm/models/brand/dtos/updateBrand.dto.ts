import { BrandStatus } from "../enums/brand-status.enum";

export interface UpdateBrandDto {
  name: string;
  status: BrandStatus;
  userId: string;
}
