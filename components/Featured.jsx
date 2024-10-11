// 'use client';
import { styles } from 'app/styles';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
// import { Product, ProductVariant } from 'lib/shopify/types';
// import { useState } from 'react';

export async function Featured() {
  const products = await getCollectionProducts({ collection: 'hidden-featured-products' });
  if (!products.length) return null;

  const featuredProducts = [...products];

  // const [selectedVariant, setSelectedVariant] =
  //   (useState < ProductVariant) | (null > (product.variants[0] || null));

  return (
    <div className="my-20 flex h-full w-full flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2 py-2">
        <h2 className={styles.SecHeading}>Featured Products</h2>
        <h3 className={styles.SecSubHeading}>Shop what Others love</h3>
      </div>
      <div className="flex h-full w-full flex-wrap items-center justify-center gap-4 px-4">
        {featuredProducts.map((product, i) => (
          <div className="flex h-full w-80 flex-col gap-2" key={`${product.handle}${i}`}>
            <Link href={`/product/${product.handle}`} prefetch={true}>
              <div className="relative h-80 w-80 p-2">
                <Image
                  src={product.featuredImage?.url}
                  fill
                  alt={product.title}
                  priority={false}
                  sizes="
                  (max-width: 768px) 160px, 
                  (max-width: 1024px) 160px, 
                  160px"
                  className="object-fit object-cover"
                />
              </div>
            </Link>
            <h3 className="">{product.title}</h3>
            <div className="truncate">{product.description}</div>
            {/* <AddToCart /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;

{
  /* <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              /> */
}
