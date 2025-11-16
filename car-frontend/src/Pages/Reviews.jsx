import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { assets } from "../Assets/assets";

const testimonials = [
  {
    name: "Daniel Otis",
    role: "- First-time Car Buyer",
    star_rating: 4,
    testimony:
      "Buying my first car was stress-free thanks to this dealership. The team helped me find a reliable vehicle within my budget.",
  },
  {
    name: "Sophia Martins",
    role: "- Loyal Customer",
    star_rating: 5,
    testimony:
      "I’ve bought two cars here already. Their service is excellent, and the after-sales support keeps me coming back.",
  },
  {
    name: "Victor Igbokwe",
    role: "- Fleet Buyer",
    star_rating: 5,
    testimony:
      "I purchased multiple cars for my company, and the process was seamless. Competitive pricing and trustworthy staff.",
  },
  {
    name: "Sarah Ahmed",
    role: "- SUV Owner",
    star_rating: 4,
    testimony:
      "I needed a family SUV and got the perfect recommendation. The process was quick, transparent, and very professional.",
  },
  {
    name: "Leon David",
    role: "- Used Car Seller",
    star_rating: 5,
    testimony:
      "I sold my old vehicle here and upgraded to a new one the same week. The trade-in process was simple and fair.",
  },
  {
    name: "James Oluwatobi",
    role: "- Business Owner",
    star_rating: 4,
    testimony:
      "Their financing options helped me get a new delivery van. Everything was explained clearly with no hidden costs.",
  },
  {
    name: "Mrs. Ebuka",
    role: "- Luxury Car Buyer",
    star_rating: 5,
    testimony:
      "I’ve always dreamed of owning a luxury car, and this dealership made it happen. Exceptional cars and premium service!",
  },
  {
    name: "Adaeze Uwakwe",
    role: "- Car Enthusiast",
    star_rating: 4,
    testimony:
      "Great variety of vehicles, from economy to premium. I love browsing their collection, always something new to see.",
  },
  {
    name: "Elvis Chikwendu",
    role: "- Car Dealer Partner",
    star_rating: 5,
    testimony:
      "Working with this dealership boosted my own business. Their branding, showroom, and customer trust are top-notch.",
  },
];

const Reviews = () => {
  return (
    <div
      className="text-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20"
      id="reviews"
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-justify lg:text-center xl:text-center md:text-center font-bold text-gray-800 font-serif pb-5">
        Featured Testimonials
      </h1>
      <p className="text-gray-600 text-justify lg:text-center xl:text-center md:text-center max-w-2xl mx-auto mb-10 font-medium font-serif">
        See why drivers, families, and businesses trust us for their vehicles.
        <strong>
          — From first-time buyers to luxury collectors, we make every car
          experience smooth, reliable, and exciting.
        </strong>
      </p>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        modules={[Pagination, Autoplay]}
        className="max-w-6xl mx-auto "
      >
        {testimonials.map((item, index) => (
          <SwiperSlide
            key={index}
            className="bg-white rounded-xl shadow-lg p-5 md:p-12 lg:p-12 text-left hover:shadow-3xl transition-all duration-300 mb-16 hover:scale-105 hover:border-black border border-gray-300"
          >
            <p className="text-gray-700 italic mb-4 font-serif">
              "{item.testimony}"
            </p>

            <div style={{ display: "flex", marginBottom: "8px" }}>
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < (item.star_rating ?? 5)
                      ? assets.star
                      : assets.white_star
                  }
                  alt="star"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "4px",
                  }}
                />
              ))}
            </div>

            <h3 className="text-lg font-semibold font-serif text-gray-800">
              {item.name}
            </h3>
            <p className="text-sm font-sans text-gray-500">{item.role}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
