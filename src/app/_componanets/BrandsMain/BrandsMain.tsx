import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';

export default function BrandsMain({data}) {

console.log(data ,'databrandsss');


  return (
    <>


<div className='flex flex-wrap mt-30'>
{data.map((brand)=> <div className='w-full sm:w-1/2 md:w-1/3  lg:w-1/5 xl:w-1/6'>

<div className="inner p-3">


    <Card className="border-0 shadow-none ring-0">

  <CardContent>
    
    <div className='relative'>
    <div className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm">
        <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 p-4 flex items-center justify-center">
<Image src={brand.image} alt={brand.name}  className=" object-contain scale-60 " fill/>
        </div>

        <h3 className="font-semibold text-gray-900 text-center text-sm mt-3">

    {brand.name}
</h3>
    </div>

    </div>





  </CardContent>
 
</Card>





</div>



</div>)}


</div>



    
    
    
    </>
  )
}
