import Image from 'next/image'
import React from 'react'

const Call24X7 = () => {
  return (
    <>
    <div className="side-button-container">
      <button className="side-button btn">
        <Image src="assets/icons/phone.svg" alt="Icon 1" width={24} height={24} />
      </button>
      <button className="side-button btn">
        <Image src="assets/icons/247.svg" alt="Icon 2" width={24} height={24} />
      </button>
    </div>
    </>
    
  )
}

export default Call24X7