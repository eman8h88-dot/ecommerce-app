'use client'
import addProductToCart from '@/app/(pages)/cart/cart.action';
import { CartContexttype, Usecart } from '@/app/_context/CartContext';
import { Button } from '@/components/ui/button'

import React, { MouseEvent, useState } from 'react'
import { toast } from 'sonner'

interface Addtocartbtnprops{

  id:string


}




 



export default function AddToCartBtn({id} : Addtocartbtnprops) {


 const {setNumberofcart} = (Usecart() as CartContexttype)

 async function handleClick (e:MouseEvent){
 

e.preventDefault();
const NewItemscount = await addProductToCart(id);
console.log(NewItemscount)

if (NewItemscount != false) {
    toast.success('product Aded succsefoly' , {position:'top-center'})
setNumberofcart(NewItemscount)

}else{
   toast.error('Error happend while adding' , {position:'top-center'})
}






}


  return (
    <>
    
       <Button onClick={handleClick} className ="bg-black text-white px-4 w-full cursor-pointer my-2" variant="outline">
   
      
   Add to card
      
      </Button>
    
    </>
  )
}
