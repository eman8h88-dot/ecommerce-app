 "use client" 

import React from 'react'
import imge1 from"../../../../public/imges/imges-2.jpg"
import imge2 from"../../../../public/imges/imges-3.jpg"
import imge3 from"../../../../public/imges/WhatsApp Image-1.jpg"
import imge4 from"../../../../public/imges/imges-4.jpg"
import imge5 from"../../../../public/imges/imges-5.jpg"


import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'

export default function Mainslider() {
  return (




   
<>

<div className='flex w-[80%] mx-auto my-6 mt-35'>
    <div className=' w-full lg:w-3/4'>







  <Swiper
      spaceBetween={0}
      slidesPerView={1}
    modules={[Autoplay ]}
    autoplay={{delay:6000}}

    >
      <SwiperSlide><Image src={imge3} alt=""  className='h-100 object-cover w-full'/></SwiperSlide>
       <SwiperSlide><Image src={imge4} alt=""  className='h-100 object-cover w-full'/></SwiperSlide>
        <SwiperSlide><Image src={imge5} alt=""  className='h-100 object-cover w-full'/></SwiperSlide>
    
      
    </Swiper>



    </div>
    <div className=' w-full lg:w-1/4'>
<Image src={imge2} alt="" className='h-50 object-cover'/>
<Image src={imge1} alt="" className='h-50 object-cover' />
    </div>
</div>




</>

  )
}