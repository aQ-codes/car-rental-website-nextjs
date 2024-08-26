"use client";

import Image from 'next/image';
import React, { useState } from 'react';

type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: Option[];
  value?: string;
  label?: string; 
  placeholder?: string;
  variant?: string[]; 
  icon1?:string;
  icon2?:string;
}

const Dropdown = ({ options, value, label, placeholder, variant ,icon1, icon2 }: DropdownProps) => {

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");


  return (
    <>
      <div className={`${variant.join(' ')}`} onClick={(e) => setIsActive(!isActive)}>
        <span>
          {icon1 && <Image src={icon1} alt={label} width={9} height={12}/>}
        </span>

        <div className = {`dropdown`}>
          <div className="dropdown-btn">{selected ? selected : placeholder}
          </div>
          {isActive && (
              <div className="dropdown-content">
              {options.map((option) => ( 
                <div className="dropdown-item" onClick={(e)=> {setSelected(option.value)
                    setIsActive(false)
                }}>
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                </div>
              ))}
          </div>
           )}
          
        </div>
        <span>
        {icon2 && <Image src={icon2} alt={label} width={9} height={12}/>}
       </span>
      </div>
      
    </>
  );
};

export default Dropdown;
