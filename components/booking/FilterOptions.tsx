"use client";

import React, { useState } from 'react'

import Dropdown from '@components/Dropdown';

type FilterOptionsProps = {
  variant?: string[];
  setOptionFromChild;
}

const FilterOptions = ({setOptionFromChild, variant = []} :FilterOptionsProps) => {

    const carTypes = [
      { value: 'Hatchback', label: 'Hatchback' },
      { value: 'Sedan', label: 'Sedan' },
      { value: 'SUV', label: 'SUV' },
      { value: 'MUV', label: 'MUV' },
      { value: 'Coupe', label: 'Coupe' },
      { value: 'Convertibles', label: 'Convertibles'},
      { value: 'Pickup Trucks', label: 'Pickup Trucks'},
      { value: 'Other', label: 'Other'}
    ];

    const [optionSelected, setOption ] = useState("option1");

    const handleSameAsPickupClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      setOption("option1");
      setOptionFromChild("option1")
    };

    const handleDifferentDropOffClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      setOption("option2");
      setOptionFromChild("option2")
    };

  return (
    <div className={`options ${variant.join(' ')}`}>
      <a href="#"  onClick={handleSameAsPickupClick} className= {optionSelected === "option1" ? "active" : ""}>
        Same as Pick-Up
      </a>
      <a href="#" onClick={handleDifferentDropOffClick} className= {optionSelected === "option2" ? "active" : ""}>
        Different Drop-Off
      </a>

      <Dropdown  
        options={carTypes} 
        icon2='/assets/icons/dropdown_white.svg'
        placeholder='Select vehicle type'
        variant={['btn transparent']}
      />
   </div>
  )
}

export default FilterOptions