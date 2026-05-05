import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'



export async function proxy(request: NextRequest) {

const {pathname} = request.nextUrl

console.log(pathname);

const Authpsges = ['/login' , '/register'].includes(pathname)


const token = await getToken({req : request})

console.log(token);

if (token && Authpsges) {
    
  return NextResponse.redirect(new URL('/', request.url))

}


    if (!token && !Authpsges) {
          return NextResponse.redirect(new URL('/login', request.url))
        
    }



 
}
 
export const config = {
  matcher: ['/login' , '/register' ,'/' ,'/cart' ,'/product' ,'/brands' , '/catgories' ,'/washlist']
}
