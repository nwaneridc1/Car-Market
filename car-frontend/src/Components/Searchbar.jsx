import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../Assets/assets'
import { ShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom'


const Searchbar = () => {

    const {search, setSearch,showSearch,setShowSearch} = useContext(ShopContext)
    const [visible,setVisible] = useState(false)
    const location = useLocation()

    useEffect(()=>{
       if (location.pathname.includes('collection')) {
        setVisible(true)
       }
       else{
        setVisible(false)
       }
    },[location])

  return showSearch && visible ? (
    <div className='border- text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-3 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
      <input value={search} onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Enter Your Search Here.....'  className='flex-1 outline-none bg-inherit text-sm'/>
      {/* <img className='w-5' src={assets.search_icon}/> */}
      </div>
      <img className='inline w-4 cursor-pointer' onClick={()=>setShowSearch(false)} src={assets.cross_icon}/>
    </div>
  ) : null
}

export default Searchbar