"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
// custom components 
import LocationTimeSearch from './booking/LocationTimeSearch'
import Call24X7 from './booking/Call24x7'
import FilterOptions from './booking/FilterOptions';
import Button from './Button';

const Booking = () => {  

  // store the value of callback function from child component FilterOptions
  const [optionSelected, setOption ] = useState("option1");

  const setOptionFromChild= (data: string) => {
    setOption(data);
  };

  return (
    <>

    <section className="booking-section">
       <div className="booking-container">
            
            {/* according to the selected options below the LocationTimeSearch components changes  */}
            <FilterOptions setOptionFromChild = {setOptionFromChild}/>

            <LocationTimeSearch option={optionSelected as 'option1' | 'option2'}/>

            {/* download our app from playstore or apple store */}
            <div className="dwnld-app">
              <p> Download our App <br /> for easy accessibility anytime, anywhere!
              </p>
              <div className="store-btns">
                  <a href="#" className="btn">
                    <Image
                      src="/assets/icons/social_media/dwnld_appstore.svg"
                      alt="Download on the App Store"
                      width={120}
                      height={40}
                    />
                  </a>
                  <a href="#" className="btn">
                    <Image
                      src="/assets/icons/social_media/dwnld_googleplay.svg"
                      alt="Get it on Google Play"
                      width={120}
                      height={40}
                    />
                  </a>
              </div>
            </div>
            {/* end of download app  */}

            <Call24X7/>

       </div>
      {/* end of booking container  */}
    </section>

    <div className="bk-mobile">
      <div className="bk-btns">
        <Button
          type='button'
          title='Book a car'
          variant={['btn', 'car']}
          />
        <Button
          type='button'
          title='Quick Book'
          variant={['btn', 'qb']}
          />
      </div>

      <FilterOptions 
          setOptionFromChild = {setOptionFromChild}
          variant={['mb']}
      />
      <LocationTimeSearch option={optionSelected as 'option1' | 'option2'}
      />

    </div>
</>

  )
}

export default Booking