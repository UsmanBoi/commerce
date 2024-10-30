'use client';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const ImageSlider = ({ leftImage, rightImage, className }) => {
  const sliderRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50); // Initial slider position at center

  const handleDrag = (e) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newSliderPosition = (offsetX / rect.width) * 100;

    if (newSliderPosition >= 0 && newSliderPosition <= 100) {
      setSliderPosition(newSliderPosition);
    }
  };

  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', handleDrag);
    });
  };

  return (
    <div
      ref={sliderRef}
      className="relative mx-auto my-8 hidden h-[500px] w-full max-w-5xl cursor-ew-resize overflow-hidden rounded-lg shadow-lg lg:block"
    >
      {/* Left Image */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-100 ease-linear"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image src={leftImage} alt="Left Image" layout="fill" objectFit="cover" quality={60} />
      </div>

      {/* Right Image */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-100 ease-linear"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        <Image src={rightImage} alt="Right Image" layout="fill" objectFit="cover" quality={60} />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute bottom-0 left-1/2 top-0 z-10 flex w-1 -translate-x-1/2 transform cursor-ew-resize items-center justify-center bg-gray-700"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
      >
        {/* Circular Button with Arrows */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md">
          <BsArrowLeft className="mr-1 text-gray-700" />
          <BsArrowRight className="ml-1 text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
