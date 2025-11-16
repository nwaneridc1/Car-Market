import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { FaHeart } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../Assets/assets";

const Favourites = () => {
  const { favItems, products, toggleFave, currency } = useContext(ShopContext);

  // Get all favourite products
  const faveProducts = products.filter((p) => favItems[p._id]);

  return (
    <div>
      <div className="pt-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">

        {faveProducts.length === 0 ? (
          <div className="text-center h-screen">
            <p className="text-gray-600 text-lg mb-4 font-serif">
              ❤️ You haven’t added any favourites yet.
            </p>
            <Link
              to="/collection"
              className="text-blue-600 hover:underline font-medium font-serif"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {faveProducts.map((product, index) => (
                <div
                  key={index}
                  className="py-2 border-t border-b text-gray-700 flex items-center justify-between gap-5"
                >
                  <div className="flex items-center gap-6">
                    <img
                      src={product.image?.[0]}
                      alt={product.name}
                      className="w-16 sm:w-20 rounded-md"
                    />
                    <div>
                      <p className="text-sm sm:text-lg font-bold font-serif">
                        {product.name}
                      </p>
                      <p className="text-sm sm:text-lg  font-serif">
                        {product.year} Model
                      </p>
                      <p className="text-gray-600 mt-1 font-ovo">
                        {currency}
                        {product.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFave(product._id)}
                    className="items-center hover:text-red-600 flex gap-3 mt-6 py-3 px-6 bg-gradient-to-r from-indigo-500 to-teal-400 text-white text-xl font-semibold rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
                  >
                    <img src={assets.cross_icon} alt="" />
                    <span className="hidden sm:block">Remove</span>
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Favourites;
