import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/redux/storeProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/authOption";
import AuthProvider from "../lib/SessionProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from "@/components/website/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <AntdRegistry>
          <AuthProvider session={session}>
            <StoreProvider>{children}</StoreProvider>
          </AuthProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
