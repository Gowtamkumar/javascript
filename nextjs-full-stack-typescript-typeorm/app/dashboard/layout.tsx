/* eslint-disable @next/next/no-async-client-component */
"use client";
import { Layout, theme } from "antd";
import React, { Suspense } from "react";
import FooterOption from "@/components/dashboard/Footer";
import BreadCrumb from "@/components/dashboard/BreadCrumb";
import DashboardHeader from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Loading from "./loading";
const { Content } = Layout;

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const session: any = useSession();
  if (session.data.user.role !== "Admin") {
    redirect("/");
  }

  return (
    <Suspense fallback={<Loading />}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout>
          <DashboardHeader />
          <Content style={{ margin: "0 15px" }}>
            <BreadCrumb />
            <div
              style={{
                padding: 10,
                minHeight: "80vh",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </div>
          </Content>
          <FooterOption />
        </Layout>
      </Layout>
    </Suspense>
  );
}
