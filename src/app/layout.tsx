import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./_componanets/navbar/page";
import { Toaster } from "sonner";
import AuthProvider from "@/provider/auth-provider";
import CartContextProvider from "./_context/CartContext";
import getUserCart from "./(pages)/cart/cart";
import { Cartresponse } from "@/types/Cart.typs";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Social App",
  description: "Next.js Social App",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


const res = await getUserCart();


  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>


<CartContextProvider  res={res as Cartresponse}>

 <AuthProvider>
        
        <Navbar />
        {children}
         <Toaster
         
           toastOptions={{
    style: {
      background: 'green',
      color:'#fff'
    },
  }}

         />
        
         </AuthProvider>
</CartContextProvider>
       
      </body>
    </html>
  );
}