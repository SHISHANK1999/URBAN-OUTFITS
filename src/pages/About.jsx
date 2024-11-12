import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {

  const [data,setData] = useState([])

  useEffect(()=>{
fetch('https://fakestoreapi.com/products').then((res)=>JSON.parse(res)).then((d)=>{


  
  setData(d)
  console.log(d)
}

)


  },[])


  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'ABOUT'} text2={' US'} />
      </div>
      
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.about_img}/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='text-gray-500'>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
          <p className='text-gray-500'>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <p className='font-semibold text-xl text-gray-600'>Our Mission</p>
          <p className='text-gray-500'>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>
        <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'WHY'} text2={' CHOOSE US'} />
      </div>

      <div class="flex flex-col md:flex-row text-sm mb-20">
        <div class="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p class=" text-gray-600">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div class="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p class=" text-gray-600">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
            </div>
            <div class="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Exceptional Customer Service:</b>
              <p class=" text-gray-600">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
      <NewsletterBox />
      {
        data.map((d,index)=>(
          
        <div key={index}>{d.title}</div>
         
        ))
      }

      </div>

   
  )
}

export default About