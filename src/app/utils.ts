import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function decodeAuthenticatedUserToken(): Promise<string | null> {
  const cookie= await cookies();

  const nextAuthToken = cookie.get("next-auth.session-token")?.value;

  if (!nextAuthToken) return null;

  const jwtRes = await decode({secret: process.env.NEXTAUTH_SECRET!,token: nextAuthToken,});

  console.log(jwtRes); 

  if (jwtRes) {
    return jwtRes.token as string; 
  }

  return null;
}