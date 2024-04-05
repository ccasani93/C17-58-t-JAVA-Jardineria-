import React from 'react'
import { Carousel } from '../Carousel/Carousel'
import { Products } from '../Products/Products'
import { HowBuy } from '../HowBuy/HowBuy'

export const HomePage = () => {
  return (
    <>
      <Carousel />
      <Products />
      <HowBuy />

    </>
  )
}
