export interface UpdaeProductVariantDto {
  name: string;
  productId: string;
  size?: string;
  color?: string;
  price: number;
  stockQty: number;
}
