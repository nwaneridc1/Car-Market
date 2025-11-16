import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../Assets/assets";
import Footer from "./Footer";
import RelatedProducts from "./RelatedProducts";
import Newsletter from "./Newsletter";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, toggleFave, isFave } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  const handleBuy = (product) => {
    const phoneNumber = "2347040948945";

    const message = `
Hello, Good day. I'm interested in buying this Car:

*${product.name}* *${product.year} model*
 Price: ₦${product.price}

${product.image[0]} 

Is it still available?
`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <section>
      <div className="border-t-2 pt-16 pb-10  px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 transition-opacity ease-in duration-500 opacity-100">
        {/*------------------------------------------- product data------------------- --------------------------------*/}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* -------------------------------------product images -----------------------------------------------------*/}
          <div className="flex-1  cursor-pointer flex flex-col-reverse gap-3 sm:flex-row ">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:h-[80vh] justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className="w-[34%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                />
              ))}
            </div>
            <div className="w-full sm:w-[80%]">
              <img className="w-full h-auto" src={image} alt="" />
            </div>
          </div>
          {/*---------------------------------- product info ----------------------------------------------------------*/}
          <div className="flex-1  cursor-pointer">
            <h1 className="font-semibold text-3xl mt-2 font-serif">
              {productData.name}
            </h1>
            <div className="flex items-center gap-1  cursor-pointer mt-2">
              <img src={assets.star} alt="" className="w-5" />
              <img src={assets.star} alt="" className="w-5" />
              <img src={assets.star} alt="" className="w-5" />
              <img src={assets.star} alt="" className="w-5" />
              <img src={assets.white_star} alt="" className="w-5" />
              <p className="pl-2">({productData.rating})</p>
            </div>
            <p className="mt-5 text-3xl font-medium font-serif">
              {currency}
              {productData.price.toLocaleString()}
            </p>
            <p className="mt-5 text-gray-500 text-lg md:w-4/5 font-ovo">
              {productData.description}
            </p>

            <div className="mt-7">
              <div className="flex sm:grid-cols-2 lg:grid-cols-4 items-center gap-3 mt-3">
                <p className="text-md font-medium font-serif bg-gray-100 p-1  cursor-pointer">
                  Brand: <>{productData.brand}</>
                </p>
                <p className="text-md font-medium font-serif bg-gray-100 p-1  cursor-pointer">
                  Model: {productData.model}
                </p>
                <p className="text-md font-medium font-serif bg-gray-100 p-1  cursor-pointer">
                  Year: {productData.year}
                </p>
                <p className="text-md font-medium font-serif bg-gray-100 p-1  cursor-pointer">
                  Mileage: {productData.mileage}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <p className="text-md font-medium font-serif bg-gray-100 p-1  cursor-pointer">
                  Fuel Type: <>{productData.fuelType}</>
                </p>
                <p className="text-md font-medium font-serif bg-gray-100 p-1  cursor-pointer">
                  Transmission: {productData.transmission}
                </p>
                <p className="text-md font-medium font-serif bg-gray-100 p-1  cursor-pointer">
                  Engine: {productData.engine}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <p className="text-md font-medium font-serif bg-gray-100 p-1  cursor-pointer">
                  Drivetrain: {productData.drivetrain}
                </p>
                <p className="text-md font-medium font-serif bg-gray-100 p-1  cursor-pointer">
                  Body Type: <>{productData.bodyType}</>
                </p>
                <p className="text-md font-medium font-serif bg-gray-100 p-1  cursor-pointer">
                  Color: {productData.color}
                </p>
              </div>
              <div className="flex items-center gap-5 mt-6">
                <p className="text-md font-medium font-serif bg-green-300 p-1  cursor-pointer">
                  Status: {productData.availability}
                </p>
                <p className="text-md font-medium font-serif bg-gray-100 p-1  cursor-pointer">
                  Location: <>{productData.location}</>
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <button
                onClick={() => handleBuy(productData)}
                className="mt-6 py-3 px-6 bg-gradient-to-r from-indigo-500 to-teal-400 text-white text-xl font-semibold rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
              >
                Buy Now
              </button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleFave(productData._id)}
                className={`flex items-center gap-4 mt-6 py-3 px-6 bg-gradient-to-r from-indigo-500 to-teal-400 text-xl font-semibold rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 ${
                  isFave ? "text-red-500" : "text-gray-200"
                }`}
              >
                <p className="text-white">Favourite</p>
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: isFave ? 1.6 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {isFave(productData._id) ? (
                    <FaHeart size={15} />
                  ) : (
                    <FaRegHeart size={12} />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
        {/*------------------------------------------- description and review section -------------- */}
        <div className="mt-20 font-ovo">
          <div className="flex border-b text-lg">
            <b className="border-t- border-black px-5 py-3">Description</b>
            <p className="px-5 py-3 text-gray-500">
              Reviews {productData.rating}
            </p>
          </div>
          <div className="border px-6 py-6 text-gray-600 text-md font-sans leading-relaxed font-semibold">
            <p>
              Discover top-grade, quality cars at unbeatable prices. <br />{" "}
              Every car in our collection — from Suv's and Sedan's to Coupe's
              and Convertible's — are generally tested and guaranteed to deliver
              the best performance.
            </p>
            <p className="mt-3">
              Whether you're looking for Brand new, Foreign-used, or Local-used
              cars, we've got you covered. <br /> Enjoy fast and hassle free car
              purchasing, easy sales, and consultations. Save yourself the
              stress and let us handle your next car deal with quantumn ease.{" "}
              <br />
              Unplug Your Plug and Make Us Your New Car Plug!!
            </p>
          </div>
        </div>

        {/* ----------------------------Related Products ----------------------------- */}
        <RelatedProducts
          brand={productData.brand}
          bodyType={productData.bodyType}
        />
      </div>
      <Newsletter />
      <Footer />
    </section>
  ) : (
    <div className="opacity-0">item Unavailable</div>
  );
};

export default Product;
