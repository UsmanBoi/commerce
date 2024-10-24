// 'use client';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import ShopNow from './ShopNow';

export async function BathtubSec() {
  const products = await getCollectionProducts({ collection: 'hidden-featured-bathtubs' });
  if (!products.length) return null;

  const featuredBathtubs = [...products];

  return (
    <div className="my-20 w-full">
      {/* Main container with 2 equal halves */}
      <div className="grid grid-cols-1 xl:min-h-[40rem] xl:grid-cols-2">
        {/* Left container - for the large image */}
        <div className="relative">
          {featuredBathtubs[0]?.featuredImage?.url && (
            <Image
              src={featuredBathtubs[0]?.featuredImage?.url || '/fallback-image.jpg'} // Provide a fallback image
              alt={featuredBathtubs[0]?.title || 'Featured Bathtub'} // Provide a fallback alt text
              fill
              sizes="(max-width: 768px) 160px, (max-width: 1024px) 320px, 640px"
              className="object-cover"
            />
          )}
        </div>

        {/* Right container - divided into top and bottom */}
        <div className="grid grid-rows-2">
          {/* Top section - Text and CTA */}
          <div className="flex flex-col justify-center bg-gray-100 px-8 py-4 text-center sm:p-8">
            <h3 className="text-3xl font-medium">Deep soaking bathtubs are always in style</h3>
            <p className="my-4 text-gray-700">
              Sleek, contemporary styling that goes well with classic and modern décor.
            </p>
            <ShopNow title="Shop Bathtubs" link={'/search/bathtubs'} className="" />
          </div>

          {/* Bottom section - two equal parts */}
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-0">
            {featuredBathtubs.slice(1, 3).map((product, i) => (
              <div className="relative" key={`${product.handle}${i}`}>
                <Link href={`/product/${product.handle}`} prefetch={true}>
                  <div className="relative h-44 w-full md:h-full">
                    <Image
                      src={product.featuredImage?.url}
                      fill
                      alt={product.title}
                      sizes="(max-width: 768px) 300px, (max-width: 1024px) 250px, 300px"
                      className="object-cover object-bottom xl:object-center"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BathtubSec;
