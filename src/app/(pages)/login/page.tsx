'use client'


import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Loginschema, Loginschematype} from '@/schema/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Smile } from 'lucide-react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function Login() {

const router =useRouter()

const form = useForm({
  
resolver:zodResolver(Loginschema),

defaultValues:{
  email:'',
password:'',

}


})



async function  hundelLogin (data : Loginschematype){
  console.log(data);
/*const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin`,{
method:'POST',
body:JSON.stringify(data),
headers:{"content-type" : 'application/json'}
})
const finaldata = await response.json()
console.log(finaldata);
toast.success('Login successfully' , {position:'top-center'})
router.push('/')
}*/
const response = await signIn('credentials' ,{
  email:data.email,
   password:data.password,
   redirect:false
})

console.log(response);

if (response?.ok) {
  toast.success('Login successfully' , {position:'top-center'})
router.push('/')
}
else{
  toast.error(response?.error || 'user login fail')
}





}


  return (
    <>
    
    <main className='mt-30'>

<div className='max-w-lg  mx-auto my-5'>

<form  onSubmit={form.handleSubmit(hundelLogin)}>


<Card className='p-5'>
  <h2 className='text-xl  font-bold text-center '>
    <span className='text-green-600'>Fresh</span>Cart
Welcome Back! 

<span><Smile size={22} color='green'/></span>,

  </h2>


<h3 className='text-md  text-center '>
 Sign in to continue your fresh shopping experience
</h3>


<Controller
  name="email"
  control={form.control}
  render={({ field, fieldState}) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Email : </FieldLabel>
      <Input
      type='text'
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your Email"
        autoComplete="off"
      />
  
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

<Controller
  name="password"
  control={form.control}
  render={({ field, fieldState}) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Password : </FieldLabel>
      <Input
      type='Password'
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your Password"
        autoComplete="off"
      />
  
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>




<h3>New to FreshCart? <Link href={'/regeister'} className='font-semibold text-green-600'>Create an account</Link></h3>

<Button type='submit' className='bg-green-600 text-white cursor-pointer hover:bg-[#4a7d63]'>Signin</Button>

</Card>

</form>


</div>

    </main>
    
    
    </>
  )
}
