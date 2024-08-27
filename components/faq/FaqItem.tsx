"use client"

import React, { useState } from 'react';
import Image from 'next/image';

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      {/* question section with plus and close buttons */}
      <div className="faq-question">
            <div>{question}</div>
            {/* display plus icon if isopen value is false  */}
            {!isOpen && <div className="faq-icon plus">
             <Image src="/assets/icons/plus.svg" alt="Expand" width={16} height={16} onClick={toggleOpen}/>
            </div>}
            {/* display close icon if isopen value is true  */}
            {isOpen && <div className="faq-icon close">
            <Image src="/assets/icons/close.svg" alt="Collapse" width={16} height={16} onClick={toggleOpen}/>
            </div>}
      </div>
      {/* answer */}
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};



export default FaqItem;
