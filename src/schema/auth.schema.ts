import z from "zod";











 export const  Registerschema = z.object({
  name: z.string()
    .nonempty('name is required')
    .min(3, 'name must be at least 3 characters')
    .max(20, 'name must be at most 20 characters'),

  email: z.string()
    .nonempty('email is required')
    .email('invalid email'),

  password: z.string()
    .nonempty('password is required')
    .min(6, 'password must be at least 6 characters'),

  rePassword: z.string()
    .nonempty('confirm password is required'),

  phone: z.string()
    .nonempty('phone is required')
    .regex(/^01[0-2,5]{1}[0-9]{8}$/, 'invalid phone number'),

}).refine((object) => object.password === object.rePassword, {
  message: "passwords do not match",
  path: ["rePassword"],
})



 export type Registerschematype= z.infer<typeof Registerschema>



 // ////////////////////////////////////////////////////////////////////////////////////////////////////////////







 
 export const  Loginschema = z.object({
  
  email: z.string()
    .nonempty('email is required')
    .email('invalid email'),

  password: z.string()
    .nonempty('password is required')
    .min(6, 'password must be at least 6 characters'),

})



 export type Loginschematype= z.infer<typeof Loginschema>
