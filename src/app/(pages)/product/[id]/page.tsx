
import React from 'react'
import { Button } from "@/components/ui/button"
import SwiperDetail from '@/app/_componanets/SwiperDetail/SwiperDetail';
import { Productdetailtype } from '@/types/Productdetail.type';
import AddToCartBtn from '@/app/_componanets/AddToCartBtn/AddToCartBtn';









export default async function pagedetail({params}:{params:Productdetailtype}) {
let { id }= await params; 

console.log(id);


let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
let {data}= await response.json()



  return (
   

<>

<div className='md:flex items-center w-[80%] mx-auto mt-35'>

<div className=' w- full md:w-1/4 mx-6 '>

<div className="inner">






<SwiperDetail data={data}/>

</div>


</div>

<div className='w-full md:w-3/4  '>

   <h3 className='text-green-400 font-medium'>{data.category.name}</h3>
   <h4 className='font-medium line-clamp-1 my-4'>{data.title}</h4>

 <div className='flex justify-between w-full my-4'>
    <div>
      <span>{data.price} EGP</span>
    </div>
    <div>
<span className='text-[#DAA520]'><i className="fa-solid fa-star"></i></span>
<span>{data.ratingsAverage}</span>
    </div>
  </div>


<AddToCartBtn  id={data.id}/>

</div>

    


</div>



</>









  )
}
