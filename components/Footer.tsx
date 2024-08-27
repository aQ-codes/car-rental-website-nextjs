import React from 'react'
import Image from 'next/image'
// custom imports 
import FooterRow from './footer/FooterRow'

const Footer = () => {
  return (
    <>
    {/* row containing main content */}
     <FooterRow/>
     <FooterRow
     variant={'mb'}
     /> 
    {/* Footer Bottom */}
    <div className="footer-bottom">
      <p>© 2018 Diamondlease LLC - All Rights Reserved.</p>
    </div>
    </>
  )
}

export default Footer

