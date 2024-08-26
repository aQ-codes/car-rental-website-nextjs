"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// custom imports 
import Button from './Button';

const NewsLetter: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log('Name:', e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log('Email:', e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
    console.log('Phone Number:', e.target.value);
  };

  return (
    <section id="newsletter-section">
      <div className="main-container">
        {/* First Part */}
        <div className="part1">
          <h2>Subscribe here for exclusive offers and updates!</h2>
          <div className="sub-container">
            <div className="input-group">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <p>
              Don't miss out! Enter your email and your name, then hit subscribe
              to unlock a world of special offers and details.
            </p>
            <Button
              type='button'
              title='Subscribe'
              variant={['btn']}
            />
          </div>
        </div>

        {/* Second Part */}
        <div className="part2">
          <div className="container">
            <div className="app-image">
              <Image src="/assets/images/iphone.png" alt="Promotional Image" width={232} height={416} />
            </div>
            <div className="dwn-link dsktp">
              <p>Enter your number and receive a direct link to download the app</p>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <Button
              type='button'
              title='Get the Link'
              variant={['btn']}
               />
              <h3>Get in on</h3>
              <div className="button-group">
                <Link href="#">
                  <Image src="/assets/icons/social_media/apple_tp.svg" alt="App Store" width={120} height={40} />
                </Link>
                <Link href="#">
                  <Image src="/assets/icons/social_media/gp-tp.svg" alt="Google Play" width={120} height={40} />
                </Link>
              </div>
            </div>
            {/* mobile view  */}
            <div className="dwn-link mb">
              <h3>Get in on</h3>
              <div className="button-group">
                <Link href="#">
                  <Image src="/assets/icons/social_media/apple_tp.svg" alt="App Store" width={120} height={40} />
                </Link>
                <Link href="#">
                  <Image src="/assets/icons/social_media/gp-tp.svg" alt="Google Play" width={120} height={40} />
                </Link>
              </div>
              <p>Enter your number and receive a direct link to download the app</p>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <Button
              type='button'
              title='Get the Link'
              variant={['btn']}
               />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
