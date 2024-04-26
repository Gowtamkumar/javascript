import { z } from "zod";

export const orderValidationSchema = z.object({
  orderDate: z.string({
    required_error: "order Date is required",
  }),

  isPaid: z.boolean(),
  isShipped: z.boolean(),
  orderTotalAmount: z.number({
    required_error: "order total Amount is Required",
  }),

  discountAmount: z.number().optional(),
  netAmount: z.number({
    required_error: "net Amount is Required",
  }),
  shipingAmount: z.number().optional(),
  tax: z.number().optional(),
  orderNote: z.string().optional(),
  phoneNo: z.string({
    required_error: "Phone no is Required",
  }),
  emailAddress: z.string().optional(),

  paymentStatus: z.enum(["Paid", "NotPaid", "PertialPaid"], {
    required_error: "Payment Status is required",
  }),

  paymentType: z.enum(["Oneline", "Offline"]).optional(),
  status: z.enum(["Processing", "Pending", "Completed", "Failed"]).optional(),
  orderItems: z.array(z.object({
    totalAmount: z.string({required_error: "total Amount is required"}),
    productId: z.string({required_error: "Product is required"}),
    qty: z.number({required_error: "qty is required"})
  }))
    .nonempty({ message: "can't be empty!" }),
});
