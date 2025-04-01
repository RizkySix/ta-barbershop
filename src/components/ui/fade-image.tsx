"use client"

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FadeInImageProps {
  src: string;
  alt: string;
  className: string
}

const FadeInImage: React.FC<FadeInImageProps> = ({ src, alt, className }) => {
  const [isInView, setIsInView] = useState(false);
  const [isLeft, setIsLeft] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById(alt) as any;
    const rect = element.getBoundingClientRect();
    const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
    setIsInView(inView);
    setIsLeft(rect.left >= 0); // Check if image is on the left side of the screen
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.img
      id={alt}
      src={src}
      alt={alt}
      className={className}
      initial={{ opacity: 0, x: isLeft ? '-100%' : '100%' }} // Initial position off-screen
      animate={{ opacity: isInView ? 1 : 0, x: 0 }} // Animate opacity and bring to center
      transition={{ duration: 0.5 }}
      
    />
  );
};

export default FadeInImage;
