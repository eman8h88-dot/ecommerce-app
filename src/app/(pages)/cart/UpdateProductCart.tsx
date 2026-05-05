
    'use client'
    import { Button } from '@/components/ui/button'
import { Updateproductcount } from './cart.action'
import { toast } from 'sonner'

export default function UpdateProductCart({isIncurement = false , id ,newcount} : {isIncurement? : boolean , id :string , newcount:number}) {

 async function handelproductcount(){
   const numOfCartItems = await Updateproductcount(id , newcount)

if (numOfCartItems) {
    toast.success(`product count ${isIncurement ? 'Incurement' :'Decurement'} successfly` , {position:"top-center"})
    
}else{
    toast.error('error')
}
}

  return (
            <Button onClick={handelproductcount} disabled={newcount <= 0} variant="outline">{isIncurement ? '+' : '-'}</Button>
  )
}
