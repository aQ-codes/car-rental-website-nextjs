import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
    <div className="footer-row">
        {/* First Part */}
        <div className="footer-logo">
          <Image src="/assets/images/logo_alhabdoor.png" alt="Logo" width={100} height={100} />
          <p>Member of the Al Habtoor Group</p>
        </div>

        {/* Second Part */}
        <div className="footer-links">
          <div className="sec1">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Offers</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Service Request</a></li>
            </ul>
          </div>
          <div className="sec2">
            <ul>
              <li><a href="#">Al Habtoor Companies</a></li>
            </ul>
            <ul>
              <li><a href="#">Hospitality</a></li>
              <li><a href="#">Real Estate</a></li>
              <li><a href="#">Education</a></li>
              <li><a href="#">Publishing</a></li>
              <li><a href="#">Automotive</a></li>
              <li><a href="#">Vehicle Leasing</a></li>
            </ul>
          </div>
        </div>

        {/* Third Part */}
        <div className="footer-social">
          <p>FOLLOW US ON</p>
          <div className="social-icons">
            <a href="#"><Image src="/assets/icons/social_media/fb_white.svg" alt="Facebook" width={24} height={24} /></a>
            <a href="#"><Image src="/assets/icons/social_media/x_white.svg" alt="x" width={24} height={24} /></a>
            <a href="#"><Image src="/icons/social_media/insta_white.svg" alt="Instagram" width={24} height={24} /></a>
            <a href="#"><Image src="/assets/icons/social_media/lnkin_white.svg" alt="LinkedIn" width={24} height={24} /></a>
            <a href="#"><Image src="/assets/icons/social_media/yt_white.svg" alt="YouTube" width={24} height={24} /></a>
          </div>
          <div className="additional-icons">
            <a href="#"><Image src="/assets/images/sitelock.png" alt="Icon 1" width={24} height={24} /></a>
            <a href="#"><Image src="/assets/images/secure.png" alt="Icon 2" width={24} height={24} /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2018 Diamondlease LLC - All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer

