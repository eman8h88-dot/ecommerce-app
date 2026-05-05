'use client'


import { Button } from '@/components/ui/button'
import React from 'react'
import { deleteElmentfromcart } from './cart.action'
import { toast } from 'sonner';
import { CartContexttype, Usecart } from '@/app/_context/CartContext';

export default function RemoveCart({id} :{id : string}) {

const {setNumberofcart} = (Usecart()  as CartContexttype)

 async function handelRemvecart(){
    const res = await deleteElmentfromcart(id);

    if (res === null) {
        toast.error('Error occurd while deleting this product' ,{position:'top-center'})



    }else{
setNumberofcart(res);
    toast.success('product deleting successfly' ,{position:'top-center'})
    }
}

  return (
     
    <Button onClick={handelRemvecart} className=' mt-4 mx-auto block' variant="destructive">
      Remove
    </Button>
  )
}
