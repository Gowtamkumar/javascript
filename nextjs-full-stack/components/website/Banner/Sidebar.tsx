"use client";
import React, { useState } from "react";
import { Menu, MenuProps } from "antd";
import { webSiteNavbarItems } from "@/NavBarRoute";

export default function Sidebar() {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    // console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div className="border rounded">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="vertical"
        items={webSiteNavbarItems}
      />
    </div>

  );
}
