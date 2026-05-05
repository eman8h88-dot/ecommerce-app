import { getCatogry } from '@/api/Category.api'
import React from 'react'
import SliderHom from '../SliderHom/SliderHom';

export default async function CategorySlider() {

  const res = await getCatogry();
  const data = res?.data || [];

  console.log(data);

  return (
    <>
      <SliderHom data={data} />
    </>
  )
}