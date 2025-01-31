import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductsItem from "./ProductsItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setBestSeller(bestProducts.slice(0, 5));
  }, [products]);

  return (
    <div className="my=10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        Jersey sellers offer a wide range of sports apparel that caters to fans and athletes alike. Whether you're looking for a team jersey to show your support or a personalized one to represent your name or favorite number, jersey sellers provide numerous options. These jerseys are available in various styles, sizes, and materials, ensuring comfort and durability while keeping you stylish. Many sellers also offer custom designs, allowing customers to add unique touches such as player names, numbers, and even team logos. Online jersey stores have made it even easier for fans to purchase their favorite team’s gear, with the added convenience of home delivery and secure payment options. Whether you're a fan of soccer, basketball, football, or hockey, jersey sellers cater to a variety of sports, offering high-quality merchandise to elevate the fan experience.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item) => (
          <ProductsItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
