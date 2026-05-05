import { AllProducttype } from "./Allproduct.type";

export interface Cartresponse{
_id:string,
 cartOwner:string,
  totalCartPrice:string,
products: ItemType [],
}




export interface  ItemType {
 
count:number,
_id:string,
 price:number,
 product: AllProducttype,
}