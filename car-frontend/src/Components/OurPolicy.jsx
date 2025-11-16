import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../Assets/assets';


const policyVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const OurPolicy = () => {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="font-serif max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-10 text-center text-sm sm:text-base text-gray-700">
        {/* Card 1 */}
        <motion.div
          className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          variants={policyVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={assets.exchange_icon} className="w-14 mx-auto mb-4" alt="Easy Exchange" />
          <p className="text-gray-800 text-lg font-serif">Easy Exchange Policy</p>
          <p className="text-gray-600 text-md mt-4 font-serif">We offer a hassle-free exchange policy for your convenience.</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          variants={policyVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={assets.quality_icon} className="w-14 mx-auto mb-4" alt="7 Days Return" />
          <p className="text-gray-800 text-lg font-serif">7 Days Return Policy</p>
          <p className="text-gray-600 text-md mt-4 font-serif">Shop with confidence — we accept returns within 7 days.</p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          variants={policyVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img src={assets.support_img} className="w-14 mx-auto mb-4" alt="Customer Service" />
          <p className="text-gray-800 text-lg font-serif">Best Customer Service</p>
          <p className="text-gray-600 text-md mt-4 font-serif">We offer online & in-store support to assist you anytime.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurPolicy;
