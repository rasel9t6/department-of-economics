'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className='relative w-full h-[500px] xl:h-[700px] overflow-hidden flex justify-center items-center'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full  h-full transition-transform ${
            index === currentIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            filter: 'brightness(35%)',
          }}
        >
          <Image
            src={`/images/${image}`}
            alt={`Slide ${index + 1}`}
            fill
            className='object-cover'
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
