import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductsItem from "./ProductsItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);
  
  if (!products || products.length === 0) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        The sun dipped below the horizon, casting a warm orange glow across the sky as a gentle breeze rustled through the trees. A quiet hum of crickets filled the air, blending with the distant laughter of children playing in the park. The world seemed to slow down, wrapped in the calm embrace of twilight. Somewhere, a lone streetlight flickered to life, casting long shadows on the pavement. It was a moment of transition—where day met night, where the noise of the world softened, and where possibilities lingered in the cool evening air.
        </p>
      </div>
      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        
        {latestProducts.map((item, index) => (
          <ProductsItem
            key={index}
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

export default LatestCollection;
