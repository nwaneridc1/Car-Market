import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const RelatedProducts = ({brand,bodyType}) => {

    const {products} = useContext(ShopContext)
    const [related,setRelated] = useState([])

    useEffect(()=>{
        if (products.length > 0) {
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item)=>brand === item.brand)
            productsCopy = productsCopy.filter((item) => bodyType === item.bodyType)

           setRelated(productsCopy.slice(0,5));
            
        }
    },[products])

  return (
    <div className='my-24'>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl lg:text-center xl:text-center md:text-center font-bold text-gray-800 font-serif pb-5">
        Related Products
      </h1>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
            ))}
        </div>
    </div>
  )
}

export default RelatedProducts