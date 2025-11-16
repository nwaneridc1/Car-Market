import React, { useContext } from "react";

const onSubmitHandler = (event) => {
  event.preventDefault();
};

const Newsletter = () => {
  return (
    <div className="bg-gray-100 py-10 text-center items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-justify lg:text-center xl:text-center md:text-center font-bold text-gray-800 font-serif pb-8">
        Subscribe To Our Newsletter
      </h1>
      <p className="font-semibold font-serif text-justify lg:text-center xl:text-center md:text-center text-md text-gray-600">
        Subscribe To Our News Letter For Important Email Updates!,{" "}
        <p>Amazing Discounts!, Tips! and Lots More!</p>
      </p>
      <div class="w-full max-w-md mx-auto">
        <form
          onSubmit={onSubmitHandler}
          class="flex items-center mt-10 border border-gray-300 rounded-full overflow-hidden shadow-xl"
        >
          <input
            type="email"
            placeholder="your email address here"
            class="flex-1 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gray-500 font-serif"
            required
          />
          <button
            type="submit"
            class=" bg-gradient-to-r from-indigo-500 to-teal-400 text-white px-4 py-3 font-serif font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
