import Banner from "../components/home/Banner";

import React from "react";
import ProductCategory from "../components/home/ProductCategory";
import { useRouteLoaderData } from "react-router-dom"; //useRouteLoaderData là một hook từ react-router-dom,
// được sử dụng để truy cập dữ liệu được tải khi điều hướng đến route.
import ProductList from "../components/home/ProductList";
import Features from "../components/home/Features";
import Subscribe from "../components/home/Subscribe";

export default function Home() {
  const data = useRouteLoaderData("root");

  return (
    <div className="pb-3">
      <Banner />
      <ProductCategory />
      <ProductList products={data} />
      {/* truyền dữ liệu data của products chứa thông tin sản phẩm , để hiển thị sản phẩm thông qua props lấy đc  */}
      <Features />
      <Subscribe />
    </div>
  );
}
