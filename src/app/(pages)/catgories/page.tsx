
export const dynamic = "force-dynamic";

import { getCatogry } from '@/api/Category.api'
import CatgoriyMain from '@/app/_componanets/CatgoriyMain/CatgoriyMain';
import React from 'react'

export default async function Catgories() {

const {data} = await getCatogry()








  return (
    <>
    <CatgoriyMain  data={data}/>
    
    
    </>
  )
}
