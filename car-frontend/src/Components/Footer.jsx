import React from "react";
import { assets } from "../Assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pb-5 pt-20">
      {/* Top Section */}
      <div className="flex flex-col sm:grid grid-cols-[1.5fr_1fr_1fr] gap-20">
        
        {/* Logo + About */}
        <div>
          <div className="flex w-[45%]">
            <img
              className="rounded-lg"style={{objectFit:"contain"}}
              src={assets.footer}
              alt="Car Brand 1"
            />
          </div>
          <p className="w-full text-white font-serif font-medium mt-2">
           Luxury Meets Affordability Here!!
          </p>
        </div>

        <div className="flex flex-col justify-center font-serif">
          <p className="text-3xl font-medium mb-5 text-gray-800 hover:text-black font-serif">Company</p>
          <ul className="flex flex-col gap-1 text-white">
            <li>
              <a href='#' className="flex gap-2 mb-2 font-medium hover:text-gray-400">
                Home 
              </a>
            </li>
            <li>
              <Link to={"/"} className="flex gap-2 mb-2 font-medium hover:text-gray-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to={"/"} className="flex gap-2 mb-2 font-medium hover:text-gray-400">
                Our Services
              </Link>
            </li>
            <li>
              <Link to={"/"} className="flex gap-2 mb-2 font-medium hover:text-gray-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to={"/"} className="flex gap-2 mb-2 font-medium hover:text-gray-400">
                Our Socials
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="flex flex-col justify-center font-serif">
          <p className="text-3xl font-medium mb-5 text-gray-800 hover:text-black font-serif">Customer Support</p>
          <ul className="flex flex-col gap-1 text-white">
            <li>
              <Link to={"/"} className="flex gap-2 mb-2 font-medium hover:text-gray-400">
                Account
              </Link>
            </li>
            <li>
              <a href='#faq' className="flex gap-2 mb-2 font-medium hover:text-gray-400">
                Frequently Asked Questions
              </a>
            </li>
            <li>
              <a href='#reviews' className="flex gap-2 mb-2 font-medium hover:text-gray-400">
                Reviews
              </a>
            </li>
            <li>
              <Link to={"/"} className="flex gap-2 mb-2 font-medium hover:text-gray-400">
                Contacts
              </Link>
            </li>
             <li>
              <Link to={"/"} className="flex gap-2 mb-2 font-medium hover:text-gray-400">
                Did You know?
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="my-5">
        <hr className="border-gray-400" />
      </div>

      {/* Bottom text */}
      <p className='text-center font-semibold font-serif text-gray-800 hover:text-black'>
        © {new Date().getFullYear()} Proskolo Auto's. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
