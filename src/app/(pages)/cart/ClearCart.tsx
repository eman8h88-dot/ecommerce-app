'use client'

import React from 'react'
import { ClearAllElmentfromcart } from './cart.action'
import { CartContexttype, Usecart } from '@/app/_context/CartContext'

export default function ClearCart() {
const {setNumberofcart} = (Usecart()  as CartContexttype)

 async function Clearourcart(){
   const res = await ClearAllElmentfromcart()
   console.log('clee',res);
   setNumberofcart(res.numOfCartItems)

}



  return (
   <button onClick={Clearourcart} className="px-4 py-2 border border-red-500 text-red-500 rounded bg-transparent cursor-pointer hover:bg-red-50 transition">
  Clear All
</button>
  )
}
