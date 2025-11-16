import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";
import Reviews from "./Reviews";
import { assets } from "../Assets/assets";

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut",
      },
    },
  };
};

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <div className="pt-14 pb-6 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 overflow-hidden">
        {/* ---------- SECTION 1 ---------- */}
        <motion.section
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="grid sm:gap-16 gap-5 items-center pb-5">
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="order-2 md:order-1"
            >
              <img
                src={assets.interior}
                alt="About Elion Cars"
                className="w-full h-full max-h-[500px] object-cover rounded-xl shadow-md"
              />
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.3)}
              className="order-1 md:order-2"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-serif mb-3">
                Empowering Tomorrow’s Drives
              </p>
              <p className="text-gray-600 font-bold text-xl font-ovo mb-3">
                - About Us
              </p>
              <p className="font-semibold text-gray-600 leading-relaxed mb-5">
                At Car-Marketplace, we’re redefining what it means to own and
                trade luxury cars. <br /> Driven by a passion for automobiles
                and a vision to make luxury more affordable, we connect clients
                directly to trusted importers and verified dealers, cutting off
                unnecessary markups and middlemen. <br /> We don’t just sell
                cars - we also buy. Whether you’re looking to upgrade, swap, or
                sell your current vehicle, we ensure a transparent, fast, and
                rewarding process from start to finish. <br />
                Our goal is simple: to bridge the gap between the end user and
                the dealership while promoting trust, integrity, and
                affordability. <br /> Luxury meets Affordability + Integrity
                guaranteed.
              </p>
              {/* Button */}
              <button
                onClick={openModal}
                className="flex font-serif gap-3 mt-6 py-3 px-6 bg-gradient-to-r from-indigo-500 to-teal-400 text-white text-xl font-semibold rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
              >
                Our Media Handles
                <img className="w-7" src={assets.whatsapp} alt="Social Icon" />
              </button>

              {/* Modal */}
              <AnimatePresence>
                {showModal && (
                  <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      initial={{ y: 60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 60, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white w-[90%] sm:w-[420px] p-6 rounded-xl shadow-2xl relative"
                    >
                      <h2 className="text-xl font-bold text-gray-800 mb-10 text-center font-serif">
                        Our Social Media Handles
                      </h2>

                      <div className="flex flex-col gap-3 text-center items-center">
                        <div className="flex gap-2 pb-3 bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-xl transition">
                          <div className="w-6 h-6">
                            <img
                              src={assets.facebook}
                              alt=""
                              className="w-full h-full"
                            />
                          </div>
                          <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 text-xl font-bold"
                          >
                            Facebook
                          </a>
                        </div>
                        <div className="flex gap-2 pb-3 bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-xl transition">
                          <div className="w-6 h-6">
                            <img
                              src={assets.whatsapp}
                              alt=""
                              className="w-full h-full"
                            />
                          </div>
                          <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-green-600 text-xl font-bold"
                          >
                            Whatsapp
                          </a>
                        </div>
                        <div className="grid grid-cols-2 pb-5 gap-5">
                          <div className="flex gap-2 bg-gray-200 p-3 rounded-lg shadow-md hover:shadow-xl transition">
                            <div className="w-8 h-8">
                              <img
                                src={assets.tiktok}
                                alt=""
                                className="w-full h-full"
                              />
                            </div>
                            <a
                              href="https://facebook.com"
                              target="_blank"
                              rel="noreferrer"
                              className="text-black-600 text-xl font-bold"
                            >
                              TikTok
                            </a>
                          </div>
                          <div className="flex gap-2 bg-gray-200 p-3 rounded-lg shadow-md hover:shadow-xl transition">
                            <div className="w-6 h-6">
                              <img
                                src={assets.instagram}
                                alt=""
                                className="w-full h-full"
                              />
                            </div>
                            <a
                              href="https://facebook.com"
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-600 text-xl font-bold"
                            >
                              Instagram
                            </a>
                          </div>
                        </div>
                      </div>

                      <div>
                        <button
                          onClick={closeModal}
                          style={{ justifyContent: "center" }}
                          className="absolute right-2 -top-1  mt-2 rounded-full p-2 bg-gray-200 items-center"
                        >
                         
                          <img
                            className="h-4 w-4"
                            src={assets.cross}
                            alt=""
                          />
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.section>

        {/* ---------- SECTION 2 ---------- */}
        <motion.section
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="grid gap-12 items-center py-10">
            <motion.div variants={fadeIn("right", 0.2)}>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-serif mb-3">
                Our Story
              </p>
              <p className="text-gray-600 font-bold text-xl font-ovo mb-3">
                - The Journey
              </p>
              <p className="font-semibold text-gray-600 leading-relaxed mb-10">
                Our story began with a simple passion - the love for cars and
                the dream to make them accessible and availabile to everyone.
                For years, we noticed how most dealers placed luxury cars far
                beyond reach. That gap inspired us to build something different.{" "}
                <br /> We started by connecting directly with verified importers
                offering top-quality vehicles at fair prices. From there, the
                vision grew - not just to sell, but to create a transparent
                space where anyone can buy or sell confidently having the
                oppurtunity to choose from a vast range of options. <br /> What
                began as a passion has evolved into a brand built on integrity,
                affordability, and transparency. <br />
                This is more than a dealership/market. It’s a movement to make
                the road open for everyone who dreams big and wishes to drive
                bold.
              </p>
            </motion.div>

            <motion.div variants={fadeIn("left", 0.3)}>
              <img
                src={assets.car_header}
                alt="Our Story"
                className="w-full h-full max-h-[400px] object-cover rounded-xl shadow-md"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* ---------- WHY CHOOSE US ---------- */}
        <motion.section
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="pb-10 pt-5"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center font-bold text-gray-800 font-serif pb-10">
            Why Choose Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20">
            {[
              {
                title: "Affordable Luxury",
                text: "We blend elegance with affordability. Every car undergoes premium checks — offering you luxury that doesn’t drain your wallet.",
              },
              {
                title: "Transparency & Trust",
                text: "Every listing is verified, every detail accurate, and every deal transparent — because trust drives us forward.",
              },
              {
                title: "Customer-Centered",
                text: "From the first click to the final handshake, our team ensures your journey is seamless. We care before, during, and after every sale.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.2 + index * 0.1)}
                className="border px-8 py-10 rounded-lg shadow-md bg-gray-50 hover:shadow-xl transition"
              >
                <b className="text-gray-800 text-lg font-serif">{item.title}</b>
                <p className="text-gray-600 mt-4 text-md font-serif">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ---------- WHAT WE OFFER ---------- */}
        <motion.section
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center font-bold text-gray-800 font-serif pb-10">
            What We Offer
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Verified Cars",
                text: "All cars listed on our platform pass strict verification and background checks for quality and authenticity.",
              },
              {
                title: "Dealer Connections",
                text: "We partner with top dealers, ensuring you get access to the best cars and deals — fast, reliable, and stress-free.",
              },
              {
                title: "After-Sales Support",
                text: "Need advice or assistance post-purchase? Our support team has your back — every step of the way.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.2 + index * 0.1)}
                className="border px-8 py-10 rounded-lg shadow-md bg-gray-50 hover:shadow-xl transition"
              >
                <b className="text-gray-800 text-lg font-serif">{item.title}</b>
                <p className="text-gray-600 text-md mt-4 font-serif">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mission & Vision */}
          <motion.section
            variants={fadeIn("up", 0.3)}
            className="py-16 text-center grid gap-12 md:grid-cols-2"
          >
            <div className="text-justify lg:text-center xl:text-center md:text-center border bg-gray-100 px-8 py-10 rounded-lg shadow-md hover:shadow-xl transition">
              <h2 className="text-3xl font-bold font-serif text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-lg font-semibold text-gray-700 leading-relaxed max-w-3xl mx-auto">
                To redefine luxury car ownership by making quality vehicles
                accessible, affordable, and trusted — without compromise.
              </p>
            </div>

            <div className="text-justify lg:text-center xl:text-center md:text-center border bg-gray-100 px-8 py-10 rounded-lg shadow-md hover:shadow-xl transition">
              <h2 className="text-3xl font-bold font-serif text-gray-800 mb-4">
                Our Vision
              </h2>
              <p className="text-lg font-semibold text-gray-700 leading-relaxed max-w-3xl mx-auto">
                To become the world’s most trusted car marketplace — connecting
                people to luxury, comfort, and confidence.
                <br />
                <span className="block mt-3 text-gray-500 italic">
                  “Affordable Luxury, Built on Trust.”
                </span>
              </p>
            </div>
          </motion.section>
        </motion.section>
      </div>

      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default About;
