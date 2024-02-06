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
      <motion.img
        key={currentIndex}
        src={`/images/${images[currentIndex]}`}
        alt={`Slide ${currentIndex + 1}`}
        style={{
          width: '100%',
          height: 'auto',
          filter: 'brightness(35%)',
          objectFit: 'cover',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default Carousel;
