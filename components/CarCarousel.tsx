import Image from 'next/image'
import React from 'react'

import { carousel_images } from '@constants'
import Carousel from './Carousel'


const CarCarousel = () => {
  return (
    <section className="carousel-section">
      <Carousel images={carousel_images}/>
    </section>
  )
}

export default CarCarousel
