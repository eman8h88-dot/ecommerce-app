
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'
import { AllProducttype } from '@/types/Allproduct.type'
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn"



export default function SingleCard({currentProduct} : {currentProduct:AllProducttype}){

  return (
   <>


<Link href={`/product/${currentProduct.id}`}>
<Card>
  
  <CardHeader>
  
    
      <div className="relative aspect-4/5">

  <Image fill src={currentProduct.imageCover} alt=''/> 

      </div>
     
       
  </CardHeader>
  <CardContent>
   <h3 className='text-green-400 font-medium'>{currentProduct.category.name}</h3>
   <h4 className='font-medium line-clamp-1'>{currentProduct.title}</h4>
  </CardContent>
  <CardFooter>
  <div className='flex justify-between w-full'>
    <div>
      <span>{currentProduct.price} EGP</span>

    </div>
    <div>
<span className='text-[#DAA520]'><i className="fa-solid fa-star"></i></span>
<span>{currentProduct.ratingsAverage}</span>
    </div>
  </div>
  </CardFooter>
  

  <div className='px-4'>


<AddToCartBtn   id={currentProduct.id}/>
   
 

  </div>
</Card>

</Link>

   </>
  )
}
