import React from 'react'
//custom imports 
import {FAQs} from '@constants'
import FaqItem from './faq/FaqItem';

const Faq = () => {

    return (
      <div className="container faq">
        <div className="faq-heading">Frequently Asked Questions</div>
        <div className="faq-section">
          {FAQs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    );
}

export default Faq