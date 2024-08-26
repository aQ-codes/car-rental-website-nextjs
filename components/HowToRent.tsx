import React from 'react'
// custom imports 
import { STEPS } from '@constants'
import StepBox from './how-to-rent/StepBox'

const HowToRent = () => {
  return (
    <section id="rent-container">
    <div className="wrapper">
      <div className="heading">
        <h1>Rent/Lease In Three Easy Steps</h1>
      </div>
      <div className="row">
        {STEPS.map((step, index) => (
          <StepBox
            key={index}
            number={step.number}
            icon={step.icon}
            paragraph={step.paragraph}
          />
        ))}
      </div>
    </div>
  </section>
  )
}

export default HowToRent