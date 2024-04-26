"use client";
import Button from "@/components/dashboard/Button";
import WebFooter from "@/components/website/Footer";
import Header from "@/components/website/Header";
import { register } from "@/lib/apis/register";
import { UserValidationSchema } from "@/validation";
import { selectGlobal, setResponse } from "@/redux/features/global/globalSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Register() {
  const router = useRouter();
  const global = useSelector(selectGlobal);
  const dispatch = useDispatch();

  const registerAction = async (prevState: any, formData: FormData) => {
    const validatedFields = UserValidationSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      username: formData.get("username"),
      password: formData.get("password"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.formErrors,
      };
    }

    const result = await register(validatedFields.data);

    dispatch(setResponse(result));

    setTimeout(() => {
      dispatch(setResponse({}));
      if (result?.status === 200) {
        router.push("/login");
      }
    }, 5000);
  };

  const [state, fromAction] = useFormState(registerAction, null);

  return (
    <>
      <Header />
      <form action={fromAction}>
        <div className="flex min-h-full flex-col items-center justify-center px-6 py-6 lg:px-8 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create your Account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-4">
              <div className="flex gap-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter name"
                      required
                      className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      required
                      className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter Username"
                    required
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    required
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    autoComplete="current-password"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="text-center">
                {global.response.status ? (
                  <p> {global.response?.message}</p>
                ) : null}
              </div>
              <Button before="Submitting...." after="Submit" />
            </div>
          </div>
        </div>
      </form>
      <WebFooter />
    </>
  );
}
