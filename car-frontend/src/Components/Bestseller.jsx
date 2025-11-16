import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";

import { useEffect } from "react";
import ProductItem from "./ProductItem";

const Bestseller = () => {
  const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([])

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[products])

  return (
    <div className="text-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-justify lg:text-center xl:text-center md:text-center font-bold text-gray-800 font-serif pb-5">
        Our Best Sellers-
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
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Bestseller;
