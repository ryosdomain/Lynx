import React from "react";
import ProductCard from "../components/ProductCard";
import CategoryNavForShop from "../components/CategoryNavForShop";
const ProductsHome = () => {
  return (
    <div className="bg-[#F7F2E8]">
      <div className="container m-auto py-20">
        <div className=''>
             <h2 className="text-orange-500 font-bold uppercase tracking-[5px]">SUITS · SHIRTS · OUTERWEAR</h2>
            <h1 className="text-black text-7xl font-black uppercase ">
           STYLE THAT EARNS ATTENTION.
          </h1>
        </div>
        <div>
          <div>
            <CategoryNavForShop />
          </div>
          <div className="grid grid-cols-4 py-7 gap-5">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductsHome;
