import { FaBeer, FaRegUser } from "react-icons/fa";
import { MenuProps } from "antd";
import { signOut } from "next-auth/react";
import Link from "next/link";

// key as like features

const navbarRoute = [
  {
    key: "dashboard",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: <Link href="/dashboard">Dashboard</Link>,
    route: "true",
  },
  {
    key: "customers",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: <Link href="/dashboard/customers">Customers</Link>,
    route: "true",
  },
  {
    key: "orders",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: <Link href="/dashboard/orders">Orders</Link>,
    route: "true",
  },
  {
    key: "kitchen_dashboard",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: <Link href="/dashboard/kitchen-dashboard">kitchen-dashboard</Link>,
    route: "true",
  },

  {
    key: "report",
    label: "Report",
    disabled: "true",
    route: "true",
  },
  {
    key: "3",
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    label: "nav 3",
    route: "true",
    children: [
      {
        key: "01",
        icon: <FaBeer className="h-5 w-5 text-blue-500" />,
        label: "nav 1",
        route: "true",
      },
      {
        key: "02",
        icon: <FaBeer className="h-5 w-5 text-blue-500" />,
        label: "nav 2",
        route: "true",
      },
      {
        key: "03",
        icon: <FaBeer className="h-5 w-5 text-blue-500" />,
        label: "nav 1",
        route: "true",
      },
      {
        key: "04",
        icon: <FaBeer className="h-5 w-5 text-blue-500" />,
        label: "nav 2",
        route: "true",
      },
    ],
  },
];

const profileRoute: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/dashboard/profile">Profile</Link>,
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
  },
  {
    key: "2",
    label: <Link href="/">Logout</Link>,
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    onClick: () => {
      // "use server";
      signOut();
    },
  },
];

const userProfileRoute: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/profile">Profile</Link>,
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
  },
  {
    key: "2",
    label: <Link href="/">Logout</Link>,
    icon: <FaBeer className="h-5 w-5 text-blue-500" />,
    onClick: () => {
      // "use server";
      signOut();
    },
  },
];

const webSiteNavbarItems: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <FaRegUser />,
  },
  {
    label: "About us",
    key: "about",
    icon: <FaRegUser />,
    // disabled: true,
  },
  {
    label: "Contract",
    key: "contact",
    icon: <FaRegUser />,
    // disabled: true,
  },

  {
    label: "Category",
    key: "category",
    icon: <FaRegUser />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
            icon: <FaRegUser />,
          },
          {
            label: "Option 2",
            key: "setting:2",
            icon: <FaRegUser />,
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: "alipay",
  },
];

export { navbarRoute, profileRoute, webSiteNavbarItems, userProfileRoute };
