import Image from 'next/image'
import React from 'react'
// custom import 
import { POPULARCARS } from '@constants'
import CarCard from './popular-cars/CarCard'
import { features } from 'process'


const PopularCars = () => {
  return (
    <section className="popular-cars">
    <div className="heading">
      <h1>Most popular cars</h1>
    </div>
    <div className="cards-container">
      {POPULARCARS.map((car) => (
              <CarCard
              imageSrc={car.image.src}
              imageAlt={car.image.alt}
              title={car.title}
              description={car.description}
              people= {car.features[0]}
              transmission= {car.features[1]}
              doors= {car.features[2]}
              ac= {car.features[3]}
              price={car.price}
              link='#'
            />
            ))}
    </div>
    </section>
  )
}

export default PopularCars