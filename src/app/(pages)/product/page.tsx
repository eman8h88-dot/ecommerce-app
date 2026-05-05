
import React from 'react'



import { getAllproduct } from '@/api/AllProduct.api'
import SingleCard from '@/app/_componanets/SingleCard/SingleCard'
import { AllProducttype } from '@/types/Allproduct.type'

export default async function Product() {
let data  = await getAllproduct()

  return (

<>
<div className='flex flex-wrap w-[90%] mx-auto my-6 mt-30'>
{data.map((currentProduct : AllProducttype)=>

   <div  className=' w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
<div className="inner p-3">

<SingleCard   currentProduct={currentProduct}/>





</div>


</div>
)}

</div>



</>



  )
}
