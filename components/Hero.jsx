'use client';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { styles } from '../app/styles';
import ShopNow from './ShopNow';

export function Hero() {
  const heroHeadingRef = useRef(null);
  const heroSubHeadingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animation for heading, subheading, and button
    gsap.from(heroHeadingRef.current, {
      x: -100, // Slide from the left
      opacity: 0, // Start from invisible
      duration: 1.2, // Duration of the animation
      ease: 'power3.out' // Smooth easing effect
    });
    gsap.from(heroSubHeadingRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      delay: 0.1, // Start a bit after the heading
      ease: 'power3.out'
    });
    gsap.from(buttonRef.current, {
      y: 30,
      opacity: 0,
      delay: 0.1, // Start a bit after the heading
      duration: 0.8
    });
  }, []);

  return (
    <div className="mb-4">
      <div className="relative h-[44rem]">
        <div
          className={`${styles.paddingX} absolute z-10 flex h-full w-full flex-col justify-center gap-2 pl-8`}
        >
          <h1 ref={heroHeadingRef} className={`${styles.HeroHeading} -ml-1`}>
            Build the home you want
          </h1>
          <p ref={heroSubHeadingRef} className={`${styles.HeroSubHeading}`}>
            Shop modern collections at the lowest price you can get
          </p>
          <div ref={buttonRef} className="w-fit">
            <ShopNow title="Shop Now" />
          </div>
        </div>
        <Image
          src="/hero-min.jpg"
          alt="hero"
          fill
          priority
          className="z-0 object-cover contrast-[0.8] grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 blur-[2px]"></div>
      </div>
    </div>
  );
}
