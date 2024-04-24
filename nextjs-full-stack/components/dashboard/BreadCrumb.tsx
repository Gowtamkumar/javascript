import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHome } from "react-icons/fa";

export default function BreadCrumb() {
  const pathname = usePathname();

  const newResutl = pathname
    .split("/")
    .slice(1)
    .map((item) => ({ title: item }));
  return (
    <Breadcrumb
      style={{ margin: "5px 0" }}
      items={[{ title: <FaHome /> }, ...newResutl]}
    />
  );
}
