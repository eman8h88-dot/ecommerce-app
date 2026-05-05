'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import React from 'react'
import { Autoplay } from 'swiper/modules';
import { Productdetailtype } from '@/types/Productdetail.type';
import Image from 'next/image';



export default function SwiperDetail({data} :{data:Productdetailtype}) {
    console.log(data);
  return (
   <>
       <Swiper 
      spaceBetween={50}
      slidesPerView={1}
      modules={[Autoplay]} 
      autoplay={{delay:600}}
     >


{data.images.map((myImge)=> <SwiperSlide>


<div className='relative aspect-4/5'>

  <Image fill src={myImge} alt="" />
</div>

</SwiperSlide>)}

     
    
    </Swiper>
  


   
   
   
   </>
  )
}
