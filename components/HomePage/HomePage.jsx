import React from 'react'
import { Carousel } from './Carousel/Carousel'
import { Products } from './Products/Products'
import { HowBuy } from './HowBuy/HowBuy'
import { Reviews } from './Reviews/Reviews'


export const HomePage = () => {
  return (
    <>
      <Carousel />
      <Products />
      <HowBuy />
      <Reviews/>
    </>
  )
}
