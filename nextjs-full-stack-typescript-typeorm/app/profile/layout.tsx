"use client";

import WebFooter from "@/components/website/Footer";
import Header from "@/components/website/Header";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session: any = useSession();
  if (session.status === "unauthenticated") {
    redirect("/");
  }

  return (
    <div className="container mx-auto">
      <Header />
      {children}
      <WebFooter />
    </div>
  );
}
