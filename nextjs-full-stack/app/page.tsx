import Banner from "@/components/website/Banner/Banner";
import CategoryCard from "@/components/website/Home/CategoryCard";
import WebFooter from "@/components/website/Footer";
import Header from "@/components/website/Header";
import ProductCard from "@/components/website/Home/ProductCard";
import Image from "next/image";
import React from "react";
import Category from "@/components/website/Home/Category";
import { GetProducts } from "@/lib/apis/product";
import { FaAmazonPay } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbTruckReturn } from "react-icons/tb";
import { GiDeliveryDrone } from "react-icons/gi";

export default async function Home() {
  const result = await GetProducts();

  return (
    <div className="container mx-auto">
      <Header />
      <Banner />

      <section className="mx-auto py-4">
        <div className="flex justify-center p-3 gap-2">
          <div className="border p-2 text-end">
            <FaAmazonPay size={40} color="red" />
            <p>Safe Payment </p>
          </div>
          <div className="border p-2 ">
            <CiDeliveryTruck size={40} color="red" />
            <p>Nationwide Delivery</p>
          </div>
          <div className="border p-2 text-center">
            <TbTruckReturn size={40} color="red" />
            <p>Free & Easy Return</p>
          </div>
          <div className="border p-2 text-center">
            <TbTruckReturn size={40} color="red" />
            <p> 100% Authentic Product</p>
          </div>
          <div className="border p-2 text-center">
            <GiDeliveryDrone size={40} color="red" />
            <p>Fast Delivery</p>
          </div>
        </div>
      </section>

      {/* all category show */}
      <Category />

      {/* Popular products */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Popular Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProductCard products={result} />
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProductCard products={result} />
        </div>
      </section>

      {/* Categories */}
      <CategoryCard />
      {/* Banners */}
      {/* <section className="mb-8">
        <Image
          width={0}
          height={0}
          src="/banner-1.jpg"
          blurDataURL="/banner-1.jpg"
          placeholder="blur"
          alt="Banner"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <Image
          width={0}
          height={0}
          src="/banner-1.jpg"
          blurDataURL="/banner-1.jpg"
          placeholder="blur"
          alt="Banner"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </section> */}
      <WebFooter />
    </div>
  );
}
