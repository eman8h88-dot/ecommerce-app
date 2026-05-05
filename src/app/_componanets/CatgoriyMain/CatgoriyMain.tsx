import { categoryHom } from '@/types/Categorie.type';
import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
 
} from "@/components/ui/card"
import Image from 'next/image';


export default function CatgoriyMain({data} : {data:categoryHom}) {

console.log('category' ,data);

  return (




<>


<div className='flex flex-wrap mt-30'>

{data.map((category)=> <div className=' w-full sm:w-1/2 md:w-1/3  lg:w-1/4 xl:w-1/5'>

<div className="inner p-6">

    <Card>

  <CardContent>
    <div className='relative h-[200px]'>
        <Image src={category.image} alt={category.name} fill/>
    </div>
    <p>{category.name}</p>
 </CardContent>
</Card>
</div>

</div>)}

</div>










</>






  )
}
