'use client'


import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Registerschema, Registerschematype } from '@/schema/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Smile } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
export default function Regeister() {

const router =useRouter()

const form = useForm({
  
resolver:zodResolver(Registerschema),

defaultValues:{
  name:'',
  email:'',
password:'',
rePassword:'',
phone:'',
}


})



 async function  hundelRegister (data:Registerschematype){
  console.log(data);
  



const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`,{

method:'POST',
body:JSON.stringify(data),
headers:{'content-type' : 'application/json'}
})


const finaldata = await response.json()

console.log(finaldata);



toast.success('Register successfully' , {position:'top-center'})

router.push('/login')





}


  return (
    <>
    
    <main className='mt-30'>

<div className='max-w-lg  mx-auto my-5'>

<form  onSubmit={form.handleSubmit(hundelRegister)}>


<Card className='p-5'>
  <h2 className='text-lg  font-meduim text-center '>
    Welcome to FreshCart <span><Smile size={22} color='green'/></span>, Sinup here:
  </h2>



<Controller
  name="name"
  control={form.control}
  render={({ field, fieldState}) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Naem : </FieldLabel>
      <Input
      type='text'
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your Name"
        autoComplete="off"
      />
  
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

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


<Controller
  name="rePassword"
  control={form.control}
  render={({ field, fieldState}) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>rePassword : </FieldLabel>
      <Input
      type='Password'
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your rePassword"
        autoComplete="off"
      />
  
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>



<Controller
  name="phone"
  control={form.control}
  render={({ field, fieldState}) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Phone : </FieldLabel>
      <Input
      type='tel'
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your Phone"
        autoComplete="off"
      />
  
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>


<h3>Aready have an account ? <Link href={'/login'} className='font-semibold text-green-600'>Sign in</Link></h3>

<Button type='submit' className='bg-green-600 text-white cursor-pointer hover:bg-[#4a7d63]'>Signup</Button>

</Card>

</form>


</div>

    </main>
    
    
    </>
  )
}
