import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor if fine pointer is detected (mouse / trackpad)
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsPointer(false);
      return;
    }
    setIsPointer(true);

    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive-hover')
      ) {
        setCursorVariant('hover');
      } else {
        setCursorVariant('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isPointer || !isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: 'rgba(0, 245, 255, 0.15)',
      borderColor: 'rgba(0, 245, 255, 0.6)',
    },
    hover: {
      x: mousePosition.x - 28,
      y: mousePosition.y - 28,
      scale: 1.5,
      backgroundColor: 'rgba(255, 0, 127, 0.2)',
      borderColor: 'rgba(255, 0, 127, 0.8)',
    },
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
      backgroundColor: '#00F5FF',
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1.5,
      backgroundColor: '#FF007F',
    },
  };

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-50 transition-colors duration-200"
        animate={cursorVariant}
        variants={variants}
        transition={{ type: 'spring', stiffness: 350, damping: 24, mass: 0.5 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-50"
        animate={cursorVariant}
        variants={dotVariants}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      />
    </>
  );
}
