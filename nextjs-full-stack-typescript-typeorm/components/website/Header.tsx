"use client";
import { Avatar, Badge, Dropdown, Input, Select } from "antd";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import Image from "next/image";
import { userProfileRoute } from "@/NavBarRoute";
import TopBar from "./TopBar";
import { selectCart } from "@/redux/features/cart/cartSlice";
import { useSelector } from "react-redux";

const Header: React.FC = () => {
  const session = useSession();
  const cart = useSelector(selectCart);

  const { Option } = Select;
  const { Search } = Input;

  const selectBefore = (
    <Select defaultValue="http://">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );

  return (
    <>
      {/* top bar */}
      <TopBar />
      <div className="flex items-center py-4 sticky">
        <div className="w-2/12 text-center">
          <Link href="/">
            <Image
              width={300}
              height={300}
              className="mx-auto h-10 w-auto"
              src="/pos_software.png"
              alt="Your Company"
            />
          </Link>
        </div>

        <div className="w-8/12">
          <Search
            addonBefore={selectBefore}
            width={100}
            size="middle"
            defaultValue="mysite"
          />
        </div>

        <div className="w-2/12 flex justify-between items-center">
          <div className="ml-3 flex ">
            <Link href="/checkout" className="mx-2">
              {/* <FaShoppingCart size={20}  title="dd" /> */}
              <Badge size="default" count={cart.carts.length}>
                {/* <Avatar shape="square" size="large" /> */}

                <FaShoppingCart size={20} title="dd" />
              </Badge>
            </Link>
          </div>
          <Link href="/wishlist" className="mx-2">
            <FcLike size={20} color="black" />
          </Link>

          {session.status === "authenticated" ? (
            <Dropdown
              menu={{ items: userProfileRoute as any }}
              placement="bottomLeft"
              trigger={["click"]}
            >
              <Avatar
                className="cursor-pointer h-10 w-10 rounded-full bg-slate-500"
                size={35}
                src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
              />
            </Dropdown>
          ) : (
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center justify-between">
                <FaRegUser />{" "}
                <Link className="mx-2" href="/login">
                  Login
                </Link>{" "}
                |{" "}
                <Link className="mx-2" href="/register">
                  Sign up
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
