import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { motion } from "framer-motion";
import { assets } from "../Assets/assets";
import ProductItem from "./ProductItem";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [brand, setBrand] = useState([]);
  const [showBrand, setShowBrand] = useState(false);
  const [model, setModel] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [year, setYear] = useState([]);
  const [showYear, setShowYear] = useState(false);
  const [sortType, setSortType] = useState("relevant");

  // --- LOCATION STATES ---
  const [location, setLocation] = useState("");
  const [showLocation, setShowLocation] = useState(false);
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  // --- RESET ---
  const resetFilters = () => {
    setBrand([]);
    setModel([]);
    setYear([]);
    setLocation("");
    setSortType("relevant");
  };

  // --- HANDLERS ---
  const toggleBrand = (e) => {
    const value = e.target.value;
    setBrand((prev) =>
      prev.includes(value) ? prev.filter((b) => b !== value) : [...prev, value]
    );
  };

  const toggleModel = (e) => {
    const value = e.target.value;
    setModel((prev) =>
      prev.includes(value) ? prev.filter((m) => m !== value) : [...prev, value]
    );
  };

  const toggleYear = (e) => {
    const value = String(e.target.value);
    setYear((prev) =>
      prev.includes(value) ? prev.filter((y) => y !== value) : [...prev, value]
    );
  };

  // --- LOCATION HANDLERS ---
  const uniqueLocations = [...new Set(products.map((item) => item.location))];

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);

    if (value.trim() !== "") {
      const filtered = uniqueLocations.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase())
      );
      setLocationSuggestions(filtered);
      setShowLocation(true);
    } else {
      setLocationSuggestions([]);
      setShowLocation(false);
    }
  };

  const selectLocation = (loc) => {
    setLocation(loc);
    setShowLocation(false);
  };

  // --- APPLY FILTER ---
  const applyFilter = () => {
    let productsCopy = [...products];

    // Search (name)
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Location
    if (location.trim() !== "") {
      productsCopy = productsCopy.filter(
        (item) => item.location.toLowerCase() === location.toLowerCase()
      );
    }

    // Brand
    if (brand.length > 0) {
      productsCopy = productsCopy.filter((item) => brand.includes(item.brand));
    }

    // Model
    if (model.length > 0) {
      productsCopy = productsCopy.filter((item) => model.includes(item.model));
    }

    // Year
    if (year.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        year.includes(String(item.year))
      );
    }

    setFilterProducts(productsCopy);
  };

  // --- SORT ---
  const sortProduct = () => {
    let fpCopy = [...filterProducts];
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  // --- DYNAMIC OPTIONS ---
  const availableModels = products
    .filter((item) => brand.includes(item.brand))
    .map((item) => item.model);
  const uniqueModels = [...new Set(availableModels)];

  const availableYears = products
    .filter((item) => model.includes(item.model))
    .map((item) => item.year);
  const uniqueYears = [...new Set(availableYears)];

  // --- EFFECTS ---
  useEffect(() => {
    applyFilter();
  }, [brand, model, year, search, showSearch, products, location]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  useEffect(() => {
    setModel((prev) => prev.filter((m) => uniqueModels.includes(m)));
  }, [brand]);

  useEffect(() => {
    setYear((prev) => prev.filter((y) => uniqueYears.includes(y)));
  }, [model]);

  // --- RENDER ---
  return (
    <div>
      <motion.div
        className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-12 pb-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* FILTER PANEL */}
        <motion.div className="min-w-60" variants={itemVariants}>
          <div className="bg-gray-100 flex justify-between p-3 items-center gap-2">
            <div
              onClick={() => setShowFilter(!showFilter)}
              className="my-2 text-xl font-semibold flex items-center cursor-pointer gap-2"
            >
              FILTERS
              <img
                className={`h-3 sm:hidden transform duration-200 ${
                  showFilter ? "rotate-90" : ""
                }`}
                src={assets.dropdown_icon}
                alt="Dropdown icon"
              />
            </div>

            <div
              onClick={resetFilters}
              className="my-2 text-xl font-semibold flex items-center cursor-pointer gap-2 text-red-500 hover:text-red-800 transition"
            >
              RESET
              <img
                src={assets.cross_icon}
                className="h-3 sm:hidden"
                alt="Reset icon"
              />
            </div>
          </div>

          {/* LOCATION SEARCH */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="my-2 text-sm font-bold text-gray-700 flex items-center gap-2">
              LOCATION
            </p>
            <div className="relative pr-2">
              <input
                type="text"
                value={location}
                onChange={handleLocationChange}
                placeholder="Search location..."
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
              {showLocation && locationSuggestions.length > 0 && (
                <ul className="absolute z-10 bg-white border border-gray-200 rounded-md mt-1 w-full max-h-40 overflow-y-auto shadow-md">
                  {locationSuggestions.map((loc, index) => (
                    <li
                      key={index}
                      onClick={() => selectLocation(loc)}
                      className="px-3 py-2 text-sm text-gray-700 hover:bg-yellow-100 cursor-pointer"
                    >
                      {loc}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* BRANDS */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p
              onClick={() => setShowBrand(!showBrand)}
              className="my-2 text-sm font-bold text-gray-700 flex items-center cursor-pointer gap-2"
            >
              BRANDS
              <img
                className={`h-3 sm:hidden transform duration-200 ${
                  showBrand ? "rotate-90" : ""
                }`}
                src={assets.dropdown_icon}
                alt="Dropdown icon"
              />
            </p>
            <div
              className={`flex flex-col font-serif text-sm font-light text-gray-700 ${
                showBrand ? "" : "hidden"
              } sm:block`}
            >
              {[
                "Mercedes-Benz",
                "Toyota",
                "Honda",
                "BMW",
                "Lexus",
                "Hyundai",
              ].map((b, idx) => (
                <p key={idx} className="flex gap-2 pt-2">
                  <input
                    className="w-3"
                    type="checkbox"
                    value={b}
                    onChange={toggleBrand}
                  />
                  {b}
                </p>
              ))}
            </div>
          </div>

          {/* MODEL */}
          <div
            className={`border border-gray-300 pl-5 py-3 my-5 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p
              onClick={() => setShowModel(!showModel)}
              className="my-2 text-sm font-bold text-gray-700 flex items-center cursor-pointer gap-2"
            >
              MODEL
              <img
                className={`h-3 sm:hidden transform duration-200 ${
                  showModel ? "rotate-90" : ""
                }`}
                src={assets.dropdown_icon}
                alt="Dropdown icon"
              />
            </p>
            {brand.length === 0 ? (
              <p className="text-red-500 italic text-sm">
                Select a brand first
              </p>
            ) : (
              <div
                className={`flex flex-col font-serif text-sm font-light text-gray-700 ${
                  showModel ? "" : "hidden"
                } sm:block`}
              >
                {uniqueModels.map((m, index) => (
                  <p key={index} className="flex gap-2 pt-2">
                    <input
                      className="w-3"
                      type="checkbox"
                      value={m}
                      onChange={toggleModel}
                    />
                    {m}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* YEAR */}
          <div
            className={`border border-gray-300 pl-5 py-3 my-5 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p
              onClick={() => setShowYear(!showYear)}
              className="my-2 text-sm font-bold text-gray-700 flex items-center cursor-pointer gap-2"
            >
              YEAR
              <img
                className={`h-3 sm:hidden transform duration-200 ${
                  showYear ? "rotate-90" : ""
                }`}
                src={assets.dropdown_icon}
                alt="Dropdown icon"
              />
            </p>
            {model.length === 0 ? (
              <p className="text-red-500 italic text-sm">
                Select a model first
              </p>
            ) : (
              <div
                className={`flex flex-col font-serif text-sm font-light text-gray-700 ${
                  showYear ? "" : "hidden"
                } sm:block`}
              >
                {uniqueYears.map((y, index) => (
                  <p key={index} className="flex gap-2 pt-2">
                    <input
                      className="w-3"
                      type="checkbox"
                      value={y}
                      onChange={toggleYear}
                    />
                    {y}
                  </p>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* PRODUCT LISTING */}
        <motion.div className="flex-1" variants={itemVariants}>
          <div className="flex justify-between text-base sm:text-2xl mb-4 items-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl lg:text-center font-bold text-gray-800 font-serif">
              Collections
            </h1>
            <select
              className="border border-gray-300 text-sm px-3 py-1 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
              onChange={(e) => setSortType(e.target.value)}
              value={sortType}
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6"
            variants={containerVariants}
          >
            {filterProducts.length > 0 ? (
              filterProducts.map((item, index) => (
                <ProductItem
                  key={index}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-red-700 text-lg font-medium py-10 animation-spin">
                Products unavailable....
              </p>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Collection;
