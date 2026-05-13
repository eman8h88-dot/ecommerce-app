
export const dynamic = "force-dynamic";

import BrandsMain from '@/app/_componanets/BrandsMain/BrandsMain';
import React from 'react'

export default async function getBrans() {
  try {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/brands",
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("API failed");
    }

    const result = await response.json();

    const data = result?.data || [];

    return <BrandsMain data={data} />;
  } catch (error) {
    console.log("🔥 ERROR:", error);

    return <p>Failed to load brands</p>;
  }
}
