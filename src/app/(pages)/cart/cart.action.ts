'use server'

import { decodeAuthenticatedUserToken } from '@/app/utils';
import { Award } from 'lucide-react';
import { revalidatePath } from 'next/cache';
import { json } from 'stream/consumers';

export default async function addProductToCart(id :string) {


const userToken = await decodeAuthenticatedUserToken()

if (userToken) {
  
try {

      const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart` , {

        method:'POST',
        headers:{token:userToken   , "Content-Type":"application/json"},
        body:JSON.stringify({productId :id})
      });


   const finalres = await res.json();


if (res.ok) {
    
 console.log(finalres ,'finalres to cart');

return finalres.numOfCartItems

}else{
return false;
}

      
  } 


      catch (error) {

      console.log('erorr',error);
      
      
    }

}
else{
  return new Error('Session ended please login agin')
}
}



 export  async function deleteElmentfromcart(productId  : string ){


  
   const token = await decodeAuthenticatedUserToken();
   if (token) {
      try {


        const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}` ,{
          method : 'delete',
          headers:{token}



        })

        if (res.ok) {
          const finalres = await res.json();
          console.log('finalres',finalres);
          revalidatePath('/cart')
          return finalres.numOfCartItems;
          
        }else{
          return null;
        }

    
  } catch (error) {
    console.log('error' ,error);
    
  }
   }else{
    return new Error('session endedd')
   }

 }






  export  async function Updateproductcount(productId  : string, newcount:number ){


  
   const token = await decodeAuthenticatedUserToken();
   if (token) {
      try {


        const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}` ,{
          method : 'PUT',
          headers:{token    , 'Content-Type':'application/json'},
          body:JSON.stringify({count: newcount})



        })

        if (res.ok) {
          const finalres = await res.json();
          console.log('finalres',finalres);
          revalidatePath('/cart')
          return finalres.numOfCartItems;
          
        }else{
          return null;
        }

    
  } catch (error) {
    console.log('error' ,error);
    
  }
   }else{
    return new Error('session endedd')
   }

 }




 

 









export async function ClearAllElmentfromcart() {
  const token = await decodeAuthenticatedUserToken();

  if (!token) {
    throw new Error("session ended");
  }

  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
      method: "DELETE",
      headers: { token },
    });

    if (!res.ok) {
      return null;
    }

    const finalres = await res.json();
    console.log("SERVER RESPONSE:", finalres);

    revalidatePath("/cart");

    return finalres; 

  } catch (error) {
    console.log("error", error);
    return null;
  }
}