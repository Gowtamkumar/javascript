import { DiscountType } from "../enums";
import { DiscountStatus } from "../enums/discount-status.enum";

export interface UpdateDiscountDto {
  name: string;
  couponCode: string;
  type: DiscountType;
  value?: number;
  startDate: string;
  expiryDate: string;
  endDate: string;
  minOrderAmount: number;
  minUser: number;
  usageCount: number;
  isSingleUse: boolean;
  status: DiscountStatus;
  userId: string;
}
