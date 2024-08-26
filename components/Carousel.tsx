"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'


type CarouselProps = {
    images: { src: string; title: string }[];
    variant?: string;
    showIndicators?: boolean; 
  };
  
const Carousel = ({ images, variant ,showIndicators}: CarouselProps) => {

    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;
  
    useEffect(() => {
      timeOut =
        autoPlay &&
        // call the function inside after a certain amount of time 
        setTimeout(() => {
          slideRight();
        }, 2500);
    });
  
    const slideRight = () => {
      setCurrent(current === images.length - 1 ? 0 : current + 1);
    };
  
    const slideLeft = () => {
      setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    // console.log(current);


  return (
    <>
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel-container">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? 'carousel-card carousel-card-active'
                  : 'carousel-card'
              }
             >
              <Image
                className="card-image"
                src={image.src}
                alt={image.title}
                width={1312}
                height={405} 
              />
              <div className="card-overlay">
                <p>
                    Receive guaranteed{' '}
                    <a href="#" className="btn">
                        GIFT VOUCHER
                    </a>{' '}
                    <br /> on a monthly hire or lease
                </p>
               </div>
            </div>
          );
        })}
        <div className="carousel_pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? 'pagination_dot pagination_dot-active'
                    : 'pagination_dot'
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>

    </div>
    </>
  )
}

export default Carousel