



  export const  getAllproduct = async ()=>{
    let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`,{next:{revalidate:60}});


let {data} = await response.json()

 return data
}