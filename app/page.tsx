import Booking from '@components/Booking';
import CarCarousel from '@components/CarCarousel';
import Faq from '@components/Faq';
import HowToRent from '@components/HowToRent';
import Locations from '@components/Locations';
import NewsLetter from '@components/NewsLetter';
import PopularCars from '@components/PopularCars';
import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <Booking/>
      <CarCarousel/>
      <PopularCars/>
      <NewsLetter/>
      <HowToRent/>
      <Locations/>
      <Faq/>
    </div>
  );
}

export default Home;
