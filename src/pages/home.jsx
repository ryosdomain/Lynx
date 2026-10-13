import React from "react";
import Hero from "../sections/Hero";
import Categories from "../sections/categories";
import ProductsHome from "../sections/ProductsHome";
const home = () => {
  return (
    <div className="">
      <Hero />
      <Categories></Categories>
      <ProductsHome />
    </div>
  );
};

export default home;
