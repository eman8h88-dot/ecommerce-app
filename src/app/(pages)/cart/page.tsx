import React from "react";
import getUserCart from "./cart";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Cartresponse } from "@/types/Cart.typs";
import Image from "next/image";
import RemoveCart from "./RemoveCart";
import UpdateProductCart from "./UpdateProductCart";
import ClearCart from "./ClearCart";


export default async function Cart() {
  const usercart = await getUserCart();
  const { totalCartPrice, products } = usercart as Cartresponse;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-40">
 <div className="flex items-center justify-between mb-4">
  <h3 className="text-xl font-bold">
    Total Price: {totalCartPrice}
  </h3>

<ClearCart/>

</div>
      <div className="overflow-x-auto">
        <Table className="min-w-[700px]">
          <TableCaption>Your cart items</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Actions</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products?.map((item) => (
              <TableRow key={item.product._id}>
                {/* Image */}
                <TableCell>
                  <div className="relative w-[150px] h-[150px]">
                    <Image
                      src={item.product.imageCover}
                      alt={item.product.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </TableCell>

                {/* Title */}
                <TableCell className="font-medium max-w-[200px] truncate">{item.product.title}</TableCell>

                {/* Actions */}
                <TableCell>
                  <div className="flex flex-col gap-3 items-center">
                    <div className="flex gap-2 items-center">
              <UpdateProductCart id={item.product.id} newcount={item.count - 1}/>

                      <span className="font-bold text-xl">
                        {item.count}
                      </span>


              <UpdateProductCart isIncurement id={item.product.id} newcount={item.count + 1}/>



                    </div>

                    <RemoveCart id={item.product.id} />
                  </div>
                </TableCell>

                {/* Price */}
                <TableCell className="text-right">
                  {item.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right font-bold">
                {totalCartPrice}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}