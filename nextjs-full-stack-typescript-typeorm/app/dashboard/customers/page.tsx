"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default function Customer() {
  const session = useSession();

  if (!session) {
    console.log("dafsdf");
    redirect("/login");
  }
  console.log("🚀 ~ customer session:", session);
  return <div>Customer</div>;
}
