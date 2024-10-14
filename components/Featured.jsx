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
    <div className="my-20 flex h-full w-full flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <h2 className={styles.SecHeading}>Featured Products</h2>
        <h3 className={styles.SecSubHeading}>Shop what Others love</h3>
      </div>
      <div className="flex h-full w-full flex-wrap items-center justify-center gap-8 px-4">
        {featuredProducts.map((product, i) => (
          <div
            className="my-2 flex h-full w-80 flex-col gap-2 rounded-md border-2 border-gray-400 border-opacity-20 px-4 py-3 transition-all duration-300 hover:-translate-y-4"
            key={`${product.handle}${i}`}
          >
            <Link href={`/product/${product.handle}`} prefetch={true}>
              <div className="relative h-80 w-full p-2">
                <Image
                  src={product.featuredImage?.url}
                  fill
                  alt={product.title}
                  priority={false}
                  sizes="
                  (max-width: 768px) 160px, 
                  (max-width: 1024px) 200px, 
                  160px"
                  className="object-fit rounded object-cover"
                />
              </div>
            </Link>
            <h3 className="truncate text-lg font-semibold">{product.title}</h3>
            <p className="min-h-10 truncate text-sm">{product.description}</p>
            <div className="flex w-fit gap-2 rounded-full bg-orange-100 p-2 text-sm font-medium">
              <span>{product.priceRange.minVariantPrice.currencyCode}</span>
              <span>{product.priceRange.minVariantPrice.amount.replace('.0', '')}</span>
            </div>

            <ShopNow
              title="Add to Cart"
              className="w-full bg-tertiary text-bgCola hover:scale-100 hover:text-tertiary"
              link={`/product/${product.handle}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
