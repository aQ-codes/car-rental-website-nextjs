import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
// custom import 
import { FOOTER } from '@constants'
import FooterLinks from './FooterLinks';

type FooterRowProps ={
    variant ?: 'mb' | '';
}

const FooterRow = ({variant} : FooterRowProps) => {
  return (
    <>
    {/* First Footer Row (Displayed when no variant or variant is empty) */}
    {!variant && (
                <div className="footer-row">
                    {/* First Part */}
                    <div className="footer-logo">
                        <Image src="/assets/images/logo_alhabdoor.png" alt="Logo" width={100} height={100} />
                        <p>Member of the Al Habtoor Group</p>
                    </div>

                    {/* Second Part */}
                    <div className="footer-links">
                        <div className="sec1">
                           <FooterLinks links={FOOTER[1].links}/>
                        </div>

                        <div className="sec2">
                            <ul>
                                <li><a href="#">Al Habtoor Companies</a></li>
                            </ul>
                            <FooterLinks links={FOOTER[2].alhabtoor}/>
                        </div>
                    </div>

                    {/* Third Part */}
                    <div className="footer-social">
                        <p>FOLLOW US ON</p>
                        <div className="social-icons">
                            {FOOTER[3].social_icons_white.map((icon, index) => (
                                <Link href={icon.url} key={index}>
                                    <Image src={icon.icon} alt={icon.alt} width={24} height={24} />
                                </Link>
                            ))}
                        </div>
                        <div className="additional-icons">
                            <a href="#"><Image src="/assets/images/sitelock.png" alt="Icon 1" width={24} height={24} /></a>
                            <a href="#"><Image src="/assets/images/secure.png" alt="Icon 2" width={24} height={24} /></a>
                        </div>
                    </div>
                </div>
            )}

    {/* Second Footer Row (Displayed only when variant is 'mb') */}
    {variant === 'mb' && (
                <div className={`footer-row ${variant}`}>
                    {/* First Part */}
                    <div className="footer-logo">
                        <Image className="mb" src="/assets/images/alhabtoor_black.png" alt="Logo" width={50} height={46} />
                        <p>Member of the Al Habtoor Group</p>
                    </div>

                    {/* Second Part */}
                    <div className="footer-links">
                        <div className="sec1">
                            <ul>
                                {FOOTER[1].links.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.url}>
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="sec2">
                            <ul>
                                <li><Link href="#">Al Habtoor Companies</Link></li>
                            </ul>
                            <ul>
                                {FOOTER[2].alhabtoor.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.url}>
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Third Part */}
                    <div className="footer-social">
                        <p>FOLLOW US ON</p>
                        <div className="social-icons">
                            {FOOTER[3].social_icons_white.map((icon, index) => (
                                <Link href={icon.url} key={index}>
                                    <Image src={icon.icon} alt={icon.alt} width={24} height={24} />
                                </Link>
                            ))}
                        </div>
                        <div className="additional-icons">
                            <Link href="#"><Image src="/assets/images/sitelock.png" alt="Icon 1" width={24} height={24} /></Link>
                            <Link href="#"><Image src="/assets/images/secure.png" alt="Icon 2" width={24} height={24} /></Link>
                        </div>
                    </div>
                </div>
            )}

    </>
  )
}

export default FooterRow