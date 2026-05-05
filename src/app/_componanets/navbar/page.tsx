"use client";
import { CartContexttype, Usecart } from '@/app/_context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import  Link  from 'next/link'
import { usePathname } from 'next/navigation'


export default function Navbar() {

let path =usePathname()

console.log(path);



const {data : session ,status} = useSession()


console.log(session ,status);


const {Numberofcart} = (Usecart() as CartContexttype)



function handllogout (){

signOut ({callbackUrl:'/login'})

}


  return (
   <>
   
<div className="bg-gray-200 fixed top-0 right-0 z-10 w-full">
 <nav className=' p-5 flex justify-between items-center w-[90%] mx-auto'>

<div className='lg:flex gap-1'>
<span className='text-3xl text-green-500'><i className="fa-solid fa-cart-shopping"></i></span>
<h3 className='text-3xl font-semibold'>FreshCart</h3>
</div>

<ul className='lg:flex gap-3 font-semibold text-xl items-center my-4 lg:my-0'>
<li className='my-5'>
    <Link className={path==="/" ? "active" : ""} href={'/'}>Hom</Link>
</li>
<li className='my-5'>
    <Link className={path==="/product" ? "active" : ""} href={'/product'}>Product</Link>
</li>
<li className='my-5'>
    <Link className={path==="/catgories" ? "active" : ""} href={'/catgories'}>catgories</Link>
</li>
<li className='my-5'>
    <Link className={path==="/brands" ? "active" : ""} href={'/brands'}>Brands</Link>
</li>


</ul>
<ul className='lg:flex gap-2 text-xl items-center font-semibold'>
    {session && <p>{`Welcom to ${session?.user?.name}`}</p>}

    {session ? <>
    <Link href={'/cart'}  className='relative'>
<span className='text-2xl'><ShoppingCart/></span>
{session && !!Numberofcart && <span className="bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full absolute -top-2 -right-2">
 {Numberofcart}
</span>}
    </Link>
      
      <button className='cursor-pointer bg-red-200 p-3 rounded-2xl' onClick={()=> handllogout()}>logout</button>
    </> : <>
       <li className='my-5'>
    <Link href={'login'}>login</Link>
    </li>
    <li>
    <Link href={'regeister'}>regeister</Link>
</li>
    </>}
  
  
 


</ul>



   </nav>
</div>



  
   
   
   </>
  )
}
