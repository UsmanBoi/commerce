// 'use client';
import { styles } from 'app/styles';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import ShopNow from './ShopNow';

export async function Featured() {
  const products = await getCollectionProducts({ collection: 'hidden-featured-products' });
  if (!products.length) return null;

  const featuredProducts = [...products];

  return (
    <div className="my-20 flex h-full w-full flex-col items-center gap-8 md:gap-12">
      <div className="flex flex-col items-center gap-2 lg:gap-4 lg:py-4">
        <h2 className={styles.SecHeading}>Featured Products</h2>
        <h3 className={styles.SecSubHeading}>Shop what Others love</h3>
      </div>
      <div className="grid w-full gap-2 px-4 sm:grid-cols-2 sm:gap-4 lg:gap-6 xl:grid-cols-3 xl:px-16 2xl:grid-cols-4 2xl:gap-8">
        {featuredProducts.map((product, i: number) => (
          <div
            className={`flex min-w-[300px] flex-col gap-2 rounded-lg border-2 border-gray-200 p-3 transition-all duration-300 hover:shadow-lg sm:h-full sm:min-w-[300px] sm:justify-self-auto sm:p-4 md:p-5 lg:scale-100 lg:p-6`}
            // ${i % 2 === 0 ? 'justify-self-start' : 'justify-self-end'}
            key={`${product.handle}${i}`}
          >
            <Link href={`/product/${product.handle}`} prefetch={true}>
              <div className="flex flex-col gap-2">
                <div className="relative mb-1 h-64 w-full sm:h-60 md:h-72 lg:h-80">
                  <Image
                    src={product.featuredImage?.url}
                    fill
                    alt={product.title}
                    priority={false}
                    sizes="
                      (max-width: 640px) 140px, 
                      (max-width: 768px) 180px, 
                      (max-width: 1024px) 220px, 
                      280px"
                    className="rounded-md object-cover"
                  />
                </div>
                <div>
                  <h3 className="truncate text-sm font-medium lg:text-lg lg:font-semibold">
                    {product.title}
                  </h3>
                  <p className="truncate text-xs text-gray-600 sm:text-sm 2xl:text-base">
                    {product.description}
                  </p>
                </div>
                <div className="flex w-fit items-center gap-2 rounded-sm bg-tertiary/90 p-1 text-xs font-medium text-white sm:text-sm lg:py-[1px]">
                  <span>{product.priceRange.minVariantPrice.currencyCode}</span>
                  <span>{product.priceRange.minVariantPrice.amount.replace('.0', '')}</span>
                </div>
              </div>
            </Link>
            <ShopNow
              title="Add to Cart"
              className="-ml-1 mt-2 w-full scale-95 bg-olive text-bgCola hover:text-tertiary xl:-ml-[6px] xl:scale-90"
              link={`/product/${product.handle}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
