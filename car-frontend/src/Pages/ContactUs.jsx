import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, PhoneCall, Facebook, Instagram } from "lucide-react";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";
import { useState } from "react";
import { assets } from "../Assets/assets";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
        }}
        className="min-h-screen bg-white text-gray-800 pt-5 pb-20"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
          className="text-justify lg:text-center xl:text-center md:text-center px-8 py-10"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-bold font-serif text-gray-800 mb-4"
          >
            Contact Us
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-lg font-semibold text-gray-700 leading-relaxed max-w-3xl mx-auto"
          >
            To redefine luxury car ownership by making quality vehicles
            accessible, affordable, and trusted — without compromise.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          {/* Contact Form */}
          <motion.form
            variants={fadeIn}
            className="bg-gray-100 p-4 rounded-2xl shadow-md space-y-5"
          >
            <div>
              <label className="block font-medium text-gray-800 text-lg font-serif mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-800 text-lg font-serif font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="example@email.com"
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-800 text-lg font-serif font-medium mb-1">
                Message
              </label>
              <textarea
                rows="5"
                required
                placeholder="Type your message..."
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full font-serif bg-gradient-to-r from-indigo-500 to-teal-400 text-white py-3 rounded-lg hover:bg-blue-800 transition text-xl font-semibold"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            variants={fadeIn}
            className="bg-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 rounded-2xl shadow-md space-y-6"
          >
            <div className="flex items-start gap-4">
              <MapPin className="text-black mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 text-lg font-serif">
                  Location
                </h4>
                <p className="text-gray-600 text-sm font-serif">
                  At your service
                </p>
              </div>
            </div>
            {/* <div className="flex items-start gap-4">
            <MapPin className="text-black mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Asaba Branch</h4>
              <p className="text-gray-600 text-sm">
              Shop A30, First Edition Plaza, 297 Nnebisi Road, Opposite Saint Patrick's College, Asaba
              </p>
            </div>
          </div> */}
            <div className="flex items-start gap-4">
              <PhoneCall className="text-black mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 text-lg font-serif">
                  Phone
                </h4>
                <p className="text-gray-600 text-sm font-serif">
                  +2349166418607
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-black mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 text-lg font-serif">
                  Email
                </h4>
                <p className="text-gray-600 text-sm font-serif">
                  elionphones@gmail.com
                </p>
              </div>
            </div>
            <button
              onClick={openModal}
              className="flex gap-3 mt-6 py-3 px-6 font-serif bg-gradient-to-r from-indigo-500 to-teal-400 text-white text-xl font-semibold rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              Connect With Us 
              <img className="w-7" src={assets.whatsapp} alt="Social Icon" />
            </button>

            {/* Social Links */}
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
                    <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center font-serif">
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
                        style={{justifyContent:'center'}}
                        className="flex gap-5 mt-6 w-full bg-gradient-to-r from-indigo-500 to-teal-400 text-white text-xl py-2 rounded-lg font-semibold hover:opacity-90 transition"
                      >
                        Close <img className="h-6 w-6 pt-2" src={assets.cross} alt="" />
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
      <Newsletter />
      <Footer />
    </div>
  );
}
