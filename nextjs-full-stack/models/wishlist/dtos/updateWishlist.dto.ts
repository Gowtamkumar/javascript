import { DiscountType } from "../enums";
import { DiscountStatus } from "../enums/discount-status.enum";

export interface UpdateWishlistDto {
  productId: string;
  userId: string;
}
