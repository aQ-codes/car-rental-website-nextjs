
import Image from 'next/image'
import React from 'react'
// custom imports
import SelectLocationDropdown from './SelectLocationDropdown'
import DateTimePicker from '@components/DateTimePicker';


type LocationTimeSearchProps ={
  option:'option1' | 'option2';
}

const LocationTimeSearch = ({option} : LocationTimeSearchProps) => {
  return (
    <div className="loc-time-search">
      
      <SelectLocationDropdown/>
      
      {/* show SelectLocationDropdown once again if option2 different droppoff is selected  */}
      {option==='option2' && <SelectLocationDropdown/>}

      <div className="btn datetime">
        <span>
          <Image src="/assets/icons/calender2.svg" alt="" width={10} height={10} />
        </span>
        <span><DateTimePicker placeholder='Pick-up Date & Time'/></span>
      </div>

      <div className="btn datetime">
        <span>
          <Image src="/assets/icons/calender2.svg" alt="" width={10} height={10} />
        </span>
        <span><DateTimePicker placeholder='Drop-off Date & Time'/></span>
      </div>

      <a href="#" className="btn search">
        <Image src="/assets/icons/search.svg" alt="Search" width={26} height={26} />
      </a>

      <div className="bar"></div>

      <a href="#" className="btn book">Quick Book</a>
    </div>
  )
  
}

export default LocationTimeSearch