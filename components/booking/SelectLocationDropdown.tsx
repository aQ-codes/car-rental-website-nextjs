import Image from 'next/image'
import React from 'react'
import Dropdown from '@components/Dropdown';

type SelectLocationDropdownProps ={
  placeholder?:string
}

const SelectLocationDropdown = ({placeholder}: SelectLocationDropdownProps) => {

  // various available locations 
  const locations = [
    { value: 'Al Quoz', label: 'Al Quoz' },
    { value: 'Al Wasl', label: 'Al Wasl' },
    { value: 'Al Manara', label: 'Al Manara' },
    { value: 'Umm Ramool', label: 'Umm Ramool' },
    { value: 'Al Ain', label: 'Al Ain' },
    { value: 'Silicon Oasis', label: 'Silicon Oasis'},
    { value: 'Fujairah', label: 'Fujairah' }];

  return (
        <Dropdown  
          options={locations} 
          icon1='/assets/icons/location.svg'
          icon2='/assets/icons/invert-triangle.svg'
          placeholder={placeholder}
          variant={['btn dd']}
        />
  )
}

export default SelectLocationDropdown