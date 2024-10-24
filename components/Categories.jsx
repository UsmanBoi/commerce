import { styles } from 'app/styles';
import Image from 'next/image';
import Link from 'next/link';

// CategoryCard component: renders individual category card
const CategoryCard = ({ title, imgsrc, url }) => {
  return (
    <Link href={url}>
      <div className="group relative flex h-36 w-36 flex-col items-center justify-center rounded-xl transition-all duration-300 md:h-48 md:w-48 xl:h-60 xl:w-56">
        <div className="relative z-10 h-full w-full">
          {/* Use the Image component from Next.js for optimized images */}
          <Image
            src={imgsrc}
            alt={title}
            fill
            priority={false}
            className="rounded-md object-cover transition-all duration-200 group-hover:scale-90 group-hover:blur-[0.8px]"
            sizes="
              (max-width: 768px) 200px, 
              (max-width: 1024px) 250px, 
              300px
            "
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 blur-[2px] transition-all group-hover:bg-gray-50 group-hover:bg-opacity-5"></div>
        </div>
        <div className="absolute z-20 flex min-w-32 items-center justify-center p-2">
          {/* <div className="absolute h-full w-full translate-y-10 rounded-md bg-black bg-opacity-0 text-center transition-all duration-300 group-hover:translate-y-0 group-hover:bg-opacity-20" /> */}
          <span
            style={{ wordSpacing: '2px' }}
            className="z-20 text-center text-sm uppercase tracking-wider text-bgCola transition-all duration-300 group-hover:font-medium group-hover:tracking-tight group-hover:text-tertiary lg:text-base"
          >
            {title}
          </span>
        </div>
      </div>
    </Link>
  );
};

// CategoryCards component: renders multiple CategoryCard components
const CategoryCards = ({ categories }) => {
  return (
    <div className="my-10 flex flex-wrap items-center justify-center gap-8 md:px-4 2xl:px-12">
      {categories.map(({ title, imgsrc, url }) => (
        <CategoryCard key={title} title={title} imgsrc={imgsrc} url={url} />
      ))}
    </div>
  );
};

// Main component where CategoryCards is used
const CategoriesSec = () => {
  const categoriesData = [
    // { title: 'Single Sink Vanities', imgsrc: '/singlesink.jpg', url: '/search/' },
    // { title: 'Steam Shower', imgsrc: '/bathroom1.jpg', url: '/search/' },
    // { title: 'Suanas', imgsrc: '/faucetsink.jpg', url: '/search/' },
    // { title: 'Toilet', imgsrc: '/toilet.jpg', url: '/search/' }
    { title: 'Double Sink Vanities', imgsrc: '/doublesink.jpg', url: '/search/' },
    { title: 'Freestanding', imgsrc: '/ledmirror.jpg', url: '/search/' },
    { title: 'Floating Vanities', imgsrc: '/floating.jpg', url: '/search/' },
    { title: 'LED Mirror', imgsrc: '/freestanding.jpg', url: '/search/' },
    { title: 'Bathtubs', imgsrc: '/bathtub.jpg', url: '/search/bathtubs' },
    { title: 'Bathroom Faucets', imgsrc: '/faucet.jpg', url: '/search/faucets' },
    { title: 'LED Cabinets', imgsrc: '/ledcabinet.jpg', url: '/search/' },
    { title: 'Accessories', imgsrc: '/bathroom2.jpg', url: '/search/bathroom' }
  ];

  return (
    <div className="my-14 flex flex-col items-center">
      <h3
        style={{ wordSpacing: '2px' }}
        className={`${styles.SecHeading} py-4 text-center tracking-tighter`}
      >
        Browse through our categories
      </h3>
      <CategoryCards categories={categoriesData} />
    </div>
  );
};

export default CategoriesSec;
