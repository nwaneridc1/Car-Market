import React, { useContext, useState } from "react";
import "./Hero.css";
import { assets } from "../Assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "../Components/Footer";
import Reviews from "../Pages/Reviews";
import Faq from "../Pages/Faqs";
import HotDeals from "../Components/HotDeals";
import Bestseller from "../Components/Bestseller";
import OurPolicy from "../Components/OurPolicy";
import Newsletter from "../Components/Newsletter";
import { ShopContext } from "../context/ShopContext";

const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const {navigate} = useContext(ShopContext)

  const carBrands = [
    "toyota.com",
    "volkswagen.com",
    "mercedes-benz.com",
    "bmw.com",
    "audi.com",
    "honda.com",
    "ford.com",
    "chevrolet.com",
    "hyundai.com",
    "kia.com",
    "nissan-global.com",
    "tesla.com",
    "ferrari.com",
    "lamborghini.com",
    "porsche.com",
    "rolls-roycemotorcars.com",
    "bugatti.com",
    "bentleymotors.com",
    "maserati.com",
    "astonmartin.com",
    "jaguar.com",
    "landrover.com",
    "volvocars.com",
    "peugeot.com",
    "renault.com",
    "fiat.com",
    "citroen.com",
    "suzuki.com",
    "mazda.com",
    "tata-motors.com",
    "byd.com",
    "geely.com",
    "cheryinternational.com",
  ];

  const visibleCarBrands =
    showAll || window.innerWidth >= 768 ? carBrands : carBrands.slice(0, 5);

  return (
    <div>
      {/* -----------------------------------------------------first section------------------------------------- */}
      <section className="pt-20 md:px-10 lg:px-16 xl:px-20  px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div
          className="text-white font-serif space-y-3"
          style={{ textShadow: "10px 10px 15px rgb(0, 0, 0)" }}
        >
          <p className="text-[45px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] 2xl:text-[99px] leading-snug sm:leading-tight md:leading-[90px] lg:leading-[100px] xl:leading-[110px]">
            {heroData.text1}
          </p>
          <p className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] 2xl:text-[90px] leading-snug sm:leading-tight md:leading-[80px] lg:leading-[90px] xl:leading-[100px]">
            {heroData.text2}
          </p>
        </div>

        <div  onClick={()=> navigate('/collection')} className=" w-fit px-2 py-2 pl-[30px] rounded-full flex items-center mt-[70px] gap-[50px] cursor-pointer flex bg-white/50 hover:animate-shake">
          <p className="font-semibold font-ovo text-lg text-gray-700">
            Discover Your Dream Ride..
          </p>
          <img
            src={assets.arrow_icon}
            alt=""
            className="w-10 h-10 rounded-full bg-gray-300 p-2"
          />
        </div>
        <div className="pt-[100px] flex justify-between">
          <ul className="flex gap-3 pt-5">
            <li
              onClick={() => setHeroCount(0)}
              className={`w-3 h-3 rounded-full shadow-[0_2px_35px_white] cursor-pointer ${
                heroCount === 0 ? "bg-black" : "bg-gray-400"
              }`}
            ></li>
            <li
              onClick={() => setHeroCount(1)}
              className={`w-3 h-3 rounded-full shadow-[0_2px_35px_white] cursor-pointer ${
                heroCount === 1 ? "bg-black" : "bg-gray-400"
              }`}
            ></li>
            <li
              onClick={() => setHeroCount(2)}
              className={`w-3 h-3 rounded-full shadow-[0_2px_35px_white] cursor-pointer ${
                heroCount === 2 ? "bg-black" : "bg-gray-400"
              }`}
            ></li>
          </ul>

          <div className="flex gap-[10px] items-center">
            <div className="rounded-full bg-gray-300 p-2">
              <img
                onClick={() => setPlayStatus(!playStatus)}
                src={playStatus ? assets.pause : assets.play}
                alt=""
                className="w-5 h-5"
              />
            </div>
            <p className="font-serif font-semibold text-md text-white">
              click me!
            </p>
          </div>
        </div>
      </section>
      {/* ----------------------------------------Next Section -------------------------------------------------? */}
      <div className="pt-20 mb-10 text-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
         <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-justify lg:text-center xl:text-center md:text-center font-bold text-gray-800 font-serif pb-10">
            Our Trusted Car Brands
          </h1>
        <div className="relative absolute bottom-5 left-1/2 -translate-x-1/2 py-1 px- flex flex-col gap-2">
          <p className="text-gray-600 text-justify lg:text-center xl:text-center md:text-center max-w-2xl mx-auto mb-5 font-medium font-serif">
            At <strong>CarsbyDC</strong>, we partner with some of the world’s
            most trusted automobile brands to bring you quality, reliability,
            and performance. From luxury rides to family-friendly vehicles{" "}
            {isExpanded && (
              <span>
                and durable everyday cars, our wide range ensures that you’ll
                find the perfect match for your lifestyle. We work closely with
                leading manufacturers to guarantee authenticity, transparency,
                and long-lasting value. When you choose us, you’re not just
                buying a car—you’re joining a community that values trust,
                comfort, and excellence on every drive.
              </span>
            )}
          </p>
          <div className="absolute right-0 -top-1 mb-0">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-fit px-5 py-2 text-white font-bold font-serif rounded-full flex items-center cursor-pointer hover:animate-shake"
            >
              {/* <span>{isExpanded ? "Read Less ..." : "Read More ..."}</span> */}
              <img
                src={isExpanded ? assets.cross : assets.menu}
                className="w-10 h-10 rounded-full bg-white/50 p-2"
                alt="arrow icon"
              />
            </button>
          </div>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="max-w-6xl mx-auto"
        >
          {(showAll ? carBrands : carBrands.slice(0, 10)).map(
            (domain, index) => (
              <SwiperSlide
                key={index}
                className="h-24 flex items-center justify-center"
              >
                <div className="bg-white/50 rounded-3xl p-6 w-full h-full flex items-center justify-center border hover:border-black">
                  <img
                    src={`https://logo.clearbit.com/${domain}`}
                    alt={domain}
                    className="h-full rounded-2xl object-contain shadow-xl"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
         </div>
      </div>
      {/* -------------------------------------------------------Next Section----------------------------------------- */}
      <section className="pt-16 pb-10  px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <HotDeals />
      </section>
      {/* -------------------------------------------------------Next Section----------------------------------------- */}
      <section className="pt-16 pb-10  px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <Bestseller />
      </section>
      {/* -------------------------------------------------------Next Section----------------------------------------- */}
      <section className="pt-5 pb-7">
        <OurPolicy />
      </section>
      {/* -------------------------------------------------Next Section----------------------------- */}
      <section className="pt-5 Pb-10  px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <Reviews />
      </section>
      {/* ------------------------------------------------------------Next Section-------------------------------- */}
      <section className="pt-5 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <Faq />
      </section>
      {/* --------------------------------------------------------Next Section------------------------------- */}
      <section className="pt-5">
        <Newsletter />
      </section>
      {/* -----------------------------------------------------Footer Section-----------------------------------? */}
      <section className="pt-10">
        <Footer />
      </section>
    </div>
  );
};

export default Hero;
