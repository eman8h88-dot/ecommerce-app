export const dynamic = "force-dynamic";
export const getCatogry = async () => {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories`,
      { cache: "no-store" }
    );

     if (!response.ok) throw new Error("API failed");

    const data = await response.json();

   
   return data;

  } catch (error) {
    console.log("🔥 ERROR:", error);

    return { data: [] }; 
  }


};