"use client";
import Button from "@/components/dashboard/Button";
import WebFooter from "@/components/website/Footer";
import Header from "@/components/website/Header";
import { loginValidationSchema } from "@/validation/user/loginValidation";
import { selectGlobal, setResponse } from "@/redux/features/global/globalSlice";
import { getSession, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const global = useSelector(selectGlobal);
  const dispatch = useDispatch();
  const router = useRouter();
  const session = useSession();

  const loginAction = async (prevState: any, formData: FormData) => {
    const validatedFields = loginValidationSchema.safeParse({
      username: formData.get("username"),
      password: formData.get("password"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.formErrors,
      };
    }

    const result = await signIn("credentials", {
      ...validatedFields.data,
      redirect: false,
    });

    console.log("result", result);




    dispatch(setResponse(result));

    console.log("global",);


    const getSesson: any = await getSession();
    // console.log("🚀 ~ getSesson:", getSesson);

    if (getSesson?.user?.role === "Admin" && result?.status === 200) {
      router.push("/dashboard");
      return
    }

    if (getSesson?.user?.role === "User" && result?.status === 200) {
      router.push("/");
      return
    }

    setTimeout(() => {
      dispatch(setResponse({}));
    }, 5000)
  };

  const [state, fromAction] = useFormState(loginAction, null);

  if (session.status === "authenticated") {
    redirect("/");
  }

  return (
    <div className="container mx-auto">
      <Header />
      <form action={fromAction}>
        <div className="flex min-h-full flex-col items-center justify-center px-6 py-12 lg:px-8 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <Image
              width={300}
              height={300}
              className="mx-auto h-10 w-auto"
              src="/pos_software.png"
              alt="Your Company"
            /> */}
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Welcome to site! Please login.
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
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
                    placeholder="Enter username"
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
                  <div className="text-sm">
                    <Link
                      href="/forgot-password"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
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
                  <p className="text-red-600"> {global.response?.error}</p>
                ) : null}
              </div>
              <Button before="Signing...." after="Sign in" />
            </div>
          </div>
        </div>
      </form>
      <WebFooter />
    </div>
  );
}
