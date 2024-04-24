"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { selectGlobal, setResponse } from "@/redux/features/global/globalSlice";
import { resetPasswordValidationSchema } from "@/validation/user/resetPasswordValidation";
import { resetPassword } from "@/lib/apis/resetPassword";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import Button from "@/components/dashboard/Button";

export default function ResetPassrod() {
  const params = useParams();
  const global = useSelector(selectGlobal);
  const dispatch = useDispatch();
  const router = useRouter();

  const resetPasswordAction = async (prevState: any, formData: FormData) => {
    const validatedFields = resetPasswordValidationSchema.safeParse({
      password: formData.get("password"),
    });

    // Return early if the form data is invalid
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.formErrors,
      };
    }

    const result = await resetPassword(validatedFields.data, params.token);

    dispatch(setResponse(result));

    setTimeout(() => {
      dispatch(setResponse({}));
      if (result.status === 200) {
        router.push("/dashboard");
      }
    }, 5000);
  };

  const [state, fromAction] = useFormState(resetPasswordAction, null);

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
            reset your password?
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            {global.response.status ? <p> {global.response?.message}</p> : null}

            <div>
              <Button before="Submitting...." after="Submit" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
