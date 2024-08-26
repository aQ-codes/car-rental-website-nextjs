import Image from 'next/image'
import React from 'react'

const PopularCars = () => {
  return (
    <section className="popular-cars">
    <div className="heading">
      <h1>Most popular cars</h1>
    </div>
    <div className="cards-container">
      <div className="card">
        <Image className="c-img" src="/assets/images/Mitsubishi_Eclipse.png" alt="Mitsubishi Eclipse" width={360} height={200} />
        <div className="card-content">
          <h2>Mitsubishi Eclipse</h2>
          <p>Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling.</p>
          <ul>
            <li>
              <Image src="/assets/icons/seats.svg" alt="Seats Icon" width={24} height={24} />
              <span>6 People</span>
            </li>
            <li>
              <Image src="/assets/icons/gear.svg" alt="Gear Icon" width={24} height={24} />
              <span>Automatic</span>
            </li>
            <li>
              <Image src="/assets/icons/car_door.svg" alt="Car Door Icon" width={24} height={24} />
              <span>5 Doors</span>
            </li>
            <li>
              <Image src="/assets/icons/ac.svg" alt="AC Icon" width={24} height={24} />
              <span>AC</span>
            </li>
          </ul>
          <div className="price">
            AED 2700/ Monthly
            <a href="#" className="book-now btn">Book Now</a>
          </div>
        </div>
      </div>
      <div className="card">
        <Image className="c-img" src="/assets/images/jac_j7.png" alt="Jac J7" width={300} height={200} />
        <div className="card-content">
          <h2>Jac J7</h2>
          <p>LS3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact & Whipping test.</p>
          <ul>
            <li>
              <Image src="/icons/seats.svg" alt="Seats Icon" width={24} height={24} />
              <span>6 People</span>
            </li>
            <li>
              <Image src="/icons/gear.svg" alt="Gear Icon" width={24} height={24} />
              <span>Automatic</span>
            </li>
            <li>
              <Image src="/icons/car_door.svg" alt="Car Door Icon" width={24} height={24} />
              <span>5 Doors</span>
            </li>
            <li>
              <Image src="/icons/ac.svg" alt="AC Icon" width={24} height={24} />
              <span>AC</span>
            </li>
          </ul>
          <div className="price">
            AED 2700/ Monthly
            <a href="#" className="book-now btn">Book Now</a>
          </div>
        </div>
      </div>
      <div className="card">
        <Image className="c-img" src="/assets/images/Mitsubishi_Eclipse.png" alt="Mitsubishi Eclipse" width={300} height={200} />
        <div className="card-content">
          <h2>Mitsubishi Eclipse</h2>
          <p>Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling.</p>
          <ul>
            <li>
              <Image src="/icons/seats.svg" alt="Seats Icon" width={24} height={24} />
              <span>6 People</span>
            </li>
            <li>
              <Image src="/icons/gear.svg" alt="Gear Icon" width={24} height={24} />
              <span>Automatic</span>
            </li>
            <li>
              <Image src="/icons/car_door.svg" alt="Car Door Icon" width={24} height={24} />
              <span>5 Doors</span>
            </li>
            <li>
              <Image src="/icons/ac.svg" alt="AC Icon" width={24} height={24} />
              <span>AC</span>
            </li>
          </ul>
          <div className="price">
            AED 2700/ Monthly
            <a href="#" className="book-now btn">Book Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PopularCars