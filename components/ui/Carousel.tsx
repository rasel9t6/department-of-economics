'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '600px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={`/images/${image}`}
          alt={`Slide ${index + 1}`}
          style={{
            position: 'absolute',
            top: 0,
            left: `${(index - currentIndex) * 100}%`, // Translate images horizontally based on currentIndex
            width: '100%',
            height: '100%',
            filter: 'brightness(35%)',
            objectFit: 'cover',
          }}
          initial={{
            x: `${(index - currentIndex) * 100 + 100}%`,
            opacity: 0.5,
          }} // Initial position off-screen to the right
          animate={{ x: `${(index - currentIndex) * 100}%`, opacity: 1 }} // Animation to slide the image to the center
          exit={{ x: `${(index - currentIndex) * 100 - 100}%`, opacity: 0.5 }} // Animation to slide the image out to the left
          transition={{ duration: 1 }} // Animation duration
        />
      ))}
    </div>
  );
};

export default Carousel;
