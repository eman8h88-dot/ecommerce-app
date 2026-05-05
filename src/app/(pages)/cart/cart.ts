import { decodeAuthenticatedUserToken } from '@/app/utils';
import { Cartresponse } from '@/types/Cart.typs';

import React from 'react'

export default async function getUserCart() : Promise <Cartresponse |undefined >{

const userToken = await decodeAuthenticatedUserToken();
if (userToken) {

try {

      const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart` , {
        method:'Get',
        headers:{token:userToken},
      
      });

      const finalres = await res.json();

     // console.log('finalres to cart',finalres.data);


     return finalres.data;


    } 


      catch (error) {

      console.log('erorr',error);
      
      
    }

}else{


return undefined

}

   
}
