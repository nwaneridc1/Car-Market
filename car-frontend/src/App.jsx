import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Background from './Background/Background';
import Hero from './Hero/Hero';
import Contact from './Pages/ContactUs';
import Collection from './Components/Collection';
import Searchbar from './Components/Searchbar';
import Product from './Components/Product';
import Login from './Pages/Login';
import About from './Pages/About';
import Favourites from './Pages/Favourites';
import { ToastContainer } from 'react-toastify';

const App = () => {
  let heroData = [
    { text1: "Discover", text2: "Your Dream Ride" },
    { text1: "Luxury Cars,", text2: "Premium Quality" },
    { text1: "Drive Beyond", text2: "Ordinary Limits" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 6000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div>
      <ToastContainer/>
      <div className='pb-16'>
        
        <Navbar/>
      </div>
      
      <div>
        <Searchbar/>
      </div>

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Background playStatus={playStatus} heroCount={heroCount} />
              <Hero
                setPlayStatus={setPlayStatus}
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
              />
            </>
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/favourites' element={<Favourites/>}/>
      </Routes>
    </div>
  );
};

export default App;
