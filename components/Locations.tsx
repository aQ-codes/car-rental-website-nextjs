import Image from 'next/image'
import React from 'react'
// custom imports 
import {LOCATIONS} from '@constants'

const Locations = () => {
  return (
    <section id="location-section">
    <div className="container">
      <div className="header">Locations</div>
      <ul className="locations-list">
        {LOCATIONS.map((location, index) => (
          <React.Fragment key={index}>
            <li className="location-item">
              <span className="icon">
                <Image src={location.icon} alt={location.place} width={24} height={24} />
              </span>
              <span className="place">{location.place}</span>
            </li>
            {index < LOCATIONS.length - 1 && <li className="bar"></li>}
          </React.Fragment>
        ))}
      </ul>
    </div>
  </section>
  )
}

export default Locations