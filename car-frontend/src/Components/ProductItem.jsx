import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductItem = ({ id, image, name, price, location }) => {
  const { currency, toggleFave, isFave } = useContext(ShopContext);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    toggleFave(id);
  };

  return (
    <Link
      className="cursor-pointer bg-gray-100 rounded-xl overflow-hidden"
      to={`/product/${id}`}
    >
      <div className="relative">
        <Swiper spaceBetween={10} slidesPerView={1} loop>
          {image.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={name}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={handleFavoriteClick}
          className={`absolute top-2 right-2 text-lg z-10 transition-all duration-300 ${
            isFave(id) ? "text-red-500 scale-110" : "text-gray-700"
          }`}
        >
          {isFave(id) ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>

      <div className="p-2">
        <p className="pt-3 pb-1 text-sm font-serif font-semibold text-gray-800">
          {name}
        </p>
        <div className="flex items-center justify-between font-ovo">
          <p className="text-sm font-medium text-gray-700">
            {currency}
            {price.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem