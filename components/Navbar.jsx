"use client";

import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { NAV_LINKS } from '@constants';
import { SOCIAL_ICONS } from '@constants';
import Button from './Button';

const Navbar = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className="main-container">

                {/* branding  */}
                <div className="branding">

                    {/* company logo  */}
                    <Link href="/" className="main-logo">
                        <Image
                            src="/assets/images/logo.svg"
                            alt="company_logo"
                            width={344}
                            height={48}
                        />
                    </Link>

                </div>
                {/* end of branding */}
                
                {/* icon for mobile menu toggle  */}
                <div id="mobile-menu-icon" onClick={() => setIsActive(true)} >
                    <Image src="/assets/icons/menu-icon.png" alt="menu icon" width={24} height={24} />
                </div>

                {/* social icons and navigation */}
                <div className={`social-nav ${isActive ? 'active' : ''}`}>

                    {/* Social link icons */}
                    <div className="social-icons">
                        {SOCIAL_ICONS.map((icon, index) => (
                            <Link href={icon.href} key={index}>
                            <Image src={icon.src} alt={icon.alt} width={24} height={24}/>
                            </Link>
                         ))}
                    </div>
                    {/* End of social icons */}

                    {/* Navigation menu */}
                    <nav>
                        <button id="close-btn" onClick={() => setIsActive(false)}>
                            <Image src="/assets/icons/Close_round_light.svg" alt="close button" width={20} height={14} />
                        </button>
                        <ul>
                            {NAV_LINKS.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                            <li>
                                <Link href="#">
                                    <Image src="/assets/icons/notification.png" alt="notification icon" width={24} height={24} />
                                </Link>
                            </li>
                            <li>
                                <Button
                                 type='button'
                                 title='Jhon Doe'
                                 icon='/assets/icons/j_letter.svg'
                                 variant={['btn', 'user-icon']}/>
                            </li> 
                        </ul>
                    </nav>
                    {/* End of navigation menu */}

                </div>
                {/* End of social-nav */}

            </div>

            {/* Marquee text */}
            <div className="marquee-container">
                <marquee behavior="scroll" direction="left" className="marquee">
                    Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand Sales Counters | All Rates inclusive of VAT. T&C’s apply | Follow us on Social Media for New Offers
                </marquee>
            </div>
            {/* End of marquee text */}

        </>
    )
}

export default Navbar