
import Credentials from 'next-auth/providers/credentials';
import { CredentialsProvider } from './../../node_modules/next-auth/src/providers/credentials';

import { jwtDecode } from "jwt-decode";
import { NextAuthOptions } from 'next-auth';

export const authOptions : NextAuthOptions = {


pages:{
signIn:'/login'
},

providers :[

Credentials({
 name: 'Credentials',
 credentials:{
    email:{},
     password:{},
 },
     async authorize(credentials) {
    
      const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      })
      const data = await res.json()

  console.log('loginresponse',data);

const decoded = jwtDecode(data.token);

console.log(decoded);


if(data.message=='success'){
    return{
id:decoded.id,
user:data.user,
token:data.token,
    }


}
else{
throw new Error(data.message ||'login failed' )
}



     }


})

],




callbacks :{
  async jwt({ token, user }) {

if (user) {
    token.user = user.user;
    token.token = user.token;
}

      return token
    },
     async session({ session , token }) {
if (token) {
    session.user = token.user;
    (session as any).token = token.token
}

      return session



    },


}






}