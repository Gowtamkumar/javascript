// "use server";
// import { forgotPasswordValidationSchema } from "@/models/users/validation/forgotPasswordValidation";
// import { sendForgotPassword } from "../apis/sendForgotPassword";

// export default async function forgotPasswordAction(formData: FormData) {
//   const validatedFields = forgotPasswordValidationSchema.safeParse({
//     email: formData.get("email"),
//   });
//   // Return early if the form data is invalid
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.formErrors,
//     };
//   }

//   const result = await sendForgotPassword(validatedFields.data)

//   // console.log("🚀 ~ result:", result);
//   return result
//   // Mutate data
// }
