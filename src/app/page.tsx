import Image from "next/image";
import Mainslider from "./_componanets/Mainslider/Mainslider";
import CategorySlider from "./_componanets/CategorySlider/CategorySlider";
import Product from "./(pages)/product/page";

export default function Home() {
  return (
   <>
   
   
   <Mainslider/>

<CategorySlider/>

<Product/>

   </>
  );
}
