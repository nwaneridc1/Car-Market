import { createContext, useState } from "react";
import { products } from "../Assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "NGN";
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const [favItems, setFavItems] = useState({});

  // ✅ Add to Favourites
  const addToFave = (itemId) => {
    setFavItems((prev) => {
      const updated = { ...prev };
      updated[itemId] = true; // mark as favorite
      return updated;
    });
  };

  // ✅ Remove from Favourites
  const removeFromFave = (itemId) => {
    setFavItems((prev) => {
      const updated = { ...prev };
      delete updated[itemId];
      return updated;
    });
  };

  // ✅ Toggle (Add or Remove)
  const toggleFave = (itemId) => {
    setFavItems((prev) => {
      const updated = { ...prev };
      if (updated[itemId]) {
        delete updated[itemId];
      } else {
        updated[itemId] = true;
      }
      return updated;
    });
  };

  // ✅ Check if an item is already in favorites
  const isFave = (itemId) => !!favItems[itemId];

  const getFaveCount = () => {
    let totalCount = 0;

    for (const id in favItems) {
      if (favItems[id] > 0) {
        totalCount += 1;
      }
    }

    return totalCount;
  };

  // ✅ Provide values globally
  const value = {
    products,
    currency,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    backendUrl,
    setToken, setFavItems,
    token,
    navigate,
    favItems,
    addToFave,
    removeFromFave,
    toggleFave,
    isFave,
    getFaveCount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
