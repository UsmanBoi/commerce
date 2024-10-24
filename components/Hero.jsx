'use client';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { styles } from '../app/styles';
import ShopNow from './ShopNow';

const heroData = [
  {
    image: '/Hero2.jpg',
    title: 'Build the home you want',
    subheading: 'Shop modern collections at the lowest price you can get'
  },
  {
    image: '/Hero4.jpg',
    title: 'Create your dream space',
    subheading: 'Explore unique designs and exclusive deals'
  },
  {
    image: '/Hero5.jpg',
    title: 'Affordable luxury living',
    subheading: 'Transform your home with high-end looks at low-end prices'
  }
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Track pause state
  const imageRefs = useRef([]);
  const heroHeadingRef = useRef(null);
  const heroSubHeadingRef = useRef(null);
  const buttonRef = useRef(null);
  const heroRef = useRef(null);
  const intervalRef = useRef(null);

  // Function to start the slideshow
  const startSlideShow = () => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
      }, 5000); // Change every 5 seconds
    }
  };

  // Function to stop the slideshow when out of view
  const stopSlideShow = () => {
    clearInterval(intervalRef.current);
  };

  // Toggle Pause/Play
  const togglePause = () => {
    if (isPaused) {
      setIsPaused(false);
      startSlideShow();
    } else {
      setIsPaused(true);
      stopSlideShow();
    }
  };

  // Observe if Hero section is in view to start/stop slideshow
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isPaused) {
          startSlideShow();
        } else {
          stopSlideShow();
        }
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [isPaused]);

  // GSAP Slide animations for images
  useEffect(() => {
    const prevIndex = (currentIndex === 0 ? heroData.length : currentIndex) - 1;
    const currentImage = imageRefs.current[currentIndex];
    const prevImage = imageRefs.current[prevIndex];

    // Ensure only the current and previous images are visible
    imageRefs.current.forEach((img, idx) => {
      if (idx !== currentIndex && idx !== prevIndex) {
        gsap.set(img, { x: '100%' });
      }
    });

    // Set the initial position of the new image (offscreen to the left)
    gsap.set(currentImage, { x: '-100%' });

    // Animate the current image into view from the left
    gsap.to(currentImage, {
      x: '0%',
      duration: 1,
      ease: 'power3.out'
    });

    // Animate the previous image out to the right
    gsap.to(prevImage, {
      x: '100%',
      duration: 1,
      ease: 'power3.in'
    });
  }, [currentIndex]);

  // GSAP Animations for heading, subheading, and button
  useEffect(() => {
    gsap.fromTo(
      heroHeadingRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    );
    gsap.fromTo(
      heroSubHeadingRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, delay: 0.1, ease: 'power3.out' }
    );
    gsap.fromTo(
      buttonRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
    );
  }, [currentIndex]);

  return (
    <div ref={heroRef} className="mb-4">
      <div className="relative h-[44rem] overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0">
          {heroData.map((data, index) => (
            <div
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className="absolute inset-0 transition-transform"
            >
              <Image
                src={data.image}
                alt="hero"
                fill
                priority
                className="z-0 object-cover object-center contrast-[0.8] grayscale-[0.2]"
              />
            </div>
          ))}
        </div>

        {/* Backdrop blur card for hero content */}
        <div
          className={`${styles.paddingX} absolute left-10 top-1/2 z-10 mr-4 flex h-auto w-fit max-w-[40rem] -translate-y-1/2 transform flex-col justify-center gap-4 rounded-lg bg-white/25 p-8 shadow-lg backdrop-blur-sm lg:left-16 lg:mr-0 lg:max-w-[50rem]`}
        >
          {/* Animated Hero Heading */}
          <h1 ref={heroHeadingRef} className={`${styles.HeroHeading} -ml-1`}>
            {heroData[currentIndex].title}
          </h1>

          {/* Animated Hero Subheading */}
          <p ref={heroSubHeadingRef} className={`${styles.HeroSubHeading}`}>
            {heroData[currentIndex].subheading}
          </p>

          {/* Button */}
          <div ref={buttonRef} className="w-fit">
            <ShopNow title="Shop Now" className="hover:text-white" link="/search" />
          </div>
        </div>

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Pause/Play Button */}
        <div className="absolute bottom-14 left-1/2 z-20 flex -translate-x-1/2 transform transition-all">
          <button
            onClick={togglePause}
            className={`rounded-full bg-white bg-opacity-80 py-1 text-black opacity-20 shadow-md transition-all hover:bg-opacity-100 hover:opacity-80 ${
              isPaused ? 'px-3' : 'rounded-sm px-2'
            }`}
          >
            {isPaused ? (
              // Simple triangle for Play
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 pl-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
            ) : (
              // Two bars for Pause
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            )}
          </button>
        </div>

        {/* Dots for navigation */}
        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 transform space-x-2 opacity-20 transition-all hover:opacity-80">
          {heroData.map((_, index) => (
            <div
              key={index}
              onClick={() => {
                stopSlideShow();
                setCurrentIndex(index);
                startSlideShow();
              }}
              className={`h-3 w-3 cursor-pointer rounded-full bg-white transition-opacity duration-300 ${
                currentIndex === index ? 'opacity-100' : 'opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
