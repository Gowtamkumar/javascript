"use client";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGlobal, setResponse } from "@/redux/features/global/globalSlice";
import { sendForgotPassword } from "@/lib/apis/sendForgotPassword";
import { useFormState } from "react-dom";
import Button from "@/components/dashboard/Button";
import { forgotPasswordValidationSchema } from "@/validation/user/forgotPasswordValidation";

export default function ForgotPassrod() {
  const global = useSelector(selectGlobal);
  const dispatch = useDispatch();

  const forgotPasswordAction = async (prevState: any, formData: FormData) => {
    const validatedFields = forgotPasswordValidationSchema.safeParse({
      email: formData.get("email"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.formErrors,
      };
    }
    const result = await sendForgotPassword(validatedFields.data);
    dispatch(setResponse(result));
    setTimeout(() => {
      dispatch(setResponse({}));
    }, 5000);
  };

  const [state, fromAction] = useFormState(forgotPasswordAction, null);

  return (
    <form action={fromAction}>
      <div className="flex min-h-full flex-col items-center justify-center px-6 py-12 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            width={300}
            height={300}
            className="mx-auto h-10 w-auto"
            src="/pos_software.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Change or reset your password?
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            {global.response.status ? <p> {global.response?.message}</p> : null}

            <Button before="Signing...." after="Signin" />

            {/* <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
            </button> */}
          </div>
        </div>
      </div>
    </form>
  );
}
