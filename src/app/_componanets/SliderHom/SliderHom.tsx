'use client'


import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay } from 'swiper/modules';
import { categoryHom } from '@/types/Categorie.type';
import Image from 'next/image';










export default function SliderHom({data} :{data:categoryHom}) {
  return (
   <>
   
   
   
<div className='w-[80%] mx-auto my-8'>
<h1 className='my-4 text-3xl font-mone'> shop popluer categories</h1>
       <Swiper
      spaceBetween={0}
      slidesPerView={6}
      modules={[Autoplay]}
      autoplay={{delay:600}}
    
    >

{data.map((category)=> 
      <SwiperSlide>
        <div className='relative aspect-3/4'>

<Image fill className='w-full h-[250px] object-cover'src={category.image}   alt="" />

        </div>
      
      
      <h2 className='my-1 font-medium text-xl'>

{category.name}

      </h2>
      
      </SwiperSlide>)}




    </Swiper>


</div>

   </>
  )
}
