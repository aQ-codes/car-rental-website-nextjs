import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type CarCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  people: string;
  transmission: string;
  doors: string;
  ac: string;
  price: string;
  link?: string;
};

const CarCard: React.FC<CarCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  people,
  transmission,
  doors,
  ac,
  price,
  link,
}) => {
  return (
    <div className="card">
      <Image className="c-img" src={imageSrc} alt={imageAlt} width={360} height={200} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
            <li>
              <Image src="/assets/icons/seats.svg" alt="Seats Icon" width={24} height={24} />
              <span>{people}</span>
            </li>
            <li>
              <Image src="/assets/icons/gear.svg" alt="Gear Icon" width={24} height={24} />
              <span>{transmission}</span>
            </li>
            <li>
              <Image src="/assets/icons/car_door.svg" alt="Car Door Icon" width={24} height={24} />
              <span>{doors}</span>
            </li>
            <li>
              <Image src="/assets/icons/ac.svg" alt="AC Icon" width={24} height={24} />
              <span>{ac}</span>
            </li>
        </ul>
        <div className="price">
          {price}
          <Link href={link} className="book-now btn">Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
