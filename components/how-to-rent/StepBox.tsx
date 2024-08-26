import React from 'react';
import Image from 'next/image';

type StepBoxProps = {
  number: string;
  icon: string;
  paragraph: string;
};

const StepBox: React.FC<StepBoxProps> = ({ number, icon, paragraph }) => {
  return (
    <div className="box">
      <div className="numbered-box">{number}</div>
      <div className="content-box">
        <div className="icon">
          <Image src={icon} alt="" width={46} height={46} />
        </div>
        <div className="paragraph">
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default StepBox;
