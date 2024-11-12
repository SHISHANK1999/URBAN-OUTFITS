import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';
const LatestCollection = () => {
    const {products} = useContext(ShopContext);
    const [latestProduct,setLatestProduct] = useState([]);

    useEffect(()=>{
       setLatestProduct(products.slice(0,10));
    },[])
  return (
    <div className='my-10 '>
        <div className='text-center py-8 text-3xl'>
           <Title text1={'LATEST'} text2={'COLLECTIONS'} />
           <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
           Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the.
           </p>
        </div>
       
       {/* Renering Products */}
       <div className='grid grid-cols-3 sm:grid-col-3 md:grid-col-4 lg:grid-col-5 gap-2 gap-y-2'>

        {
            latestProduct.map((item,index)=>(
                <ProductItem  key={index} id={item._id} image={item.image} name={item.name} price={item.price}/> 
            ))
        }
        </div>
    </div>
  )
}

export default LatestCollection