import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const HotDeals = () => {
  const { products } = useContext(ShopContext);
  const [hotDeals, setHotDeals] = useState([]);

  useEffect(() => {
    setHotDeals(products.slice(0, 10));
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-justify lg:text-center xl:text-center md:text-center font-bold text-gray-800 font-serif pb-5">
        Hot Deals For Today!
      </h1>
      <p className="text-gray-600 text-justify lg:text-center xl:text-center md:text-center max-w-2xl mx-auto mb-10 font-medium font-serif">
        See why drivers, families, and businesses trust us for their vehicles.
        <strong>
          — From first-time buyers to luxury collectors, we make every car
          experience smooth, reliable, and exciting.
        </strong>
      </p>

      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {hotDeals.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
};

export default HotDeals;
