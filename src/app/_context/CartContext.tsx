'use client'

import { Cartresponse } from "@/types/Cart.typs";
import { createContext,ReactNode, useContext, useState } from "react";



export interface CartContexttype{
    Numberofcart :number
      setNumberofcart: React.Dispatch<React.SetStateAction<number>>;
}


 export const CartContext = createContext({});


 export default function CartContextProvider({children ,res} : {children:ReactNode ,res :Cartresponse}){

    
const [Numberofcart, setNumberofcart] = useState(()=>{
 
    return res ===  undefined ? 0 : res.products.length

})



return(

<CartContext.Provider  value={{Numberofcart , setNumberofcart}}>

{children}

</CartContext.Provider>


)






 }



 export function Usecart () {

    const res = useContext(CartContext);

    if(!res){
return new Error('cannout use cart context outsaid its context')
    }

    return res;


 }