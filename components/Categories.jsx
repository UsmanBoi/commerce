import { styles } from 'app/styles';
import Image from 'next/image';
import Link from 'next/link';

// CategoryCard component: renders individual category card
const CategoryCard = ({ title, imgsrc, url }) => {
  return (
    <Link href={url}>
      <div className="group relative flex h-48 w-48 flex-col items-center justify-center rounded-xl transition-all duration-300 hover:-translate-y-6 md:h-60 md:w-56 lg:h-72 lg:w-64">
        <div className="relative z-10 h-full w-full">
          {/* Use the Image component from Next.js for optimized images */}
          <Image
            src={imgsrc}
            alt={title}
            fill
            priority={false}
            className="rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 blur-[2px] transition-all group-hover:bg-blue-200 group-hover:bg-opacity-20"></div>
        </div>
        <div className="absolute z-20 flex min-w-32 items-center justify-center p-2">
          <div className="absolute h-full w-full translate-y-10 rounded-md bg-black bg-opacity-0 text-center transition-all duration-300 group-hover:translate-y-0 group-hover:bg-opacity-20" />
          <span
            style={{ wordSpacing: '4px' }}
            className="text-center uppercase text-bgCola transition-all duration-300 group-hover:text-lg group-hover:tracking-wide"
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
    <div className="my-10 flex flex-wrap items-center justify-center gap-10">
      {categories.map(({ title, imgsrc, url }) => (
        <CategoryCard key={title} title={title} imgsrc={imgsrc} url={url} />
      ))}
    </div>
  );
};

// Main component where CategoryCards is used
const CategoriesSec = () => {
  const categoriesData = [
    { title: 'Bathroom Faucets', imgsrc: '/faucet.jpg', url: '/search/faucets' },
    { title: 'Single Sink Vanities', imgsrc: '/singlesink.jpg', url: '/search/' },
    { title: 'Double Sink Vanities', imgsrc: '/doublesink.jpg', url: '/search/' },
    { title: 'Floating Vanities', imgsrc: '/floating.jpg', url: '/search/' },
    { title: 'Freestanding', imgsrc: '/freestanding.jpg', url: '/search/' },
    { title: 'Bathtubs', imgsrc: '/bathtub.jpg', url: '/search/bathtubs' },
    { title: 'Led Mirrors', imgsrc: '/ledmirror.jpg', url: '/search/' },
    { title: 'Led Machine Cabinets', imgsrc: '/ledcabinet.jpg', url: '/search/' },
    { title: 'Suanas', imgsrc: '/faucetsink.jpg', url: '/search/' },
    { title: 'Toilet', imgsrc: '/toilet.jpg', url: '/search/' },
    { title: 'Steam Shower', imgsrc: '/bathroom1.jpg', url: '/search/' },
    { title: 'Bathroom Accessories', imgsrc: '/bathroom2.jpg', url: '/search/bathroom' }
  ];

  return (
    <div className="my-16 flex flex-col items-center">
      <h3 className={`${styles.SecHeading} py-4 text-center`}>Browse through our categories</h3>
      <CategoryCards categories={categoriesData} />
    </div>
  );
};

export default CategoriesSec;
