import Image from 'next/image';
import Link from 'next/link';
import { styles } from '../app/styles';

const Hero = () => {
  return (
    <div className="mb-4">
      <div className="relative h-[50rem]">
        <div
          className={`${styles.paddingX} absolute z-10 flex h-full w-full flex-col justify-center gap-3 pl-8 text-[#ffe2cf]`}
        >
          <h1 className={`${styles.HeroHeading} -ml-1`}>Build the home you want</h1>
          <p className={`${styles.HeroSubHeading}`}>
            Shop modern collections at the lowest price you can get
          </p>
          <Link href="/search">
            <button className={`${styles.Button} mt-4`}>Shop Now</button>
          </Link>
        </div>
        <Image
          src="/hero.jpg"
          alt="hero"
          fill
          className="z-0 object-cover contrast-[0.8] grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 blur-[2px]"></div>
      </div>
    </div>
  );
};

export default Hero;
