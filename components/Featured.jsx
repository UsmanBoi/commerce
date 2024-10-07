import { styles } from 'app/styles';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

export async function Featured() {
  const featuredProducts = await getCollectionProducts({ collection: 'hidden-featured-products' });
  if (!featuredProducts.length) return null;
  return (
    <div className="my-20 flex h-full w-full flex-col items-center gap-8">
      <h3 className={styles.SecHeading}>Featured Products</h3>
      <div className="flex h-full w-full flex-wrap items-center justify-center gap-4 px-4">
        {featuredProducts.map((product, i) => (
          <div className="flex h-80 w-80 flex-col items-center gap-2" key={`${product.handle}${i}`}>
            <Link href={`/product/${product.handle}`} prefetch={true}>
              <div className="relative h-40 w-40">
                <Image
                  src={product.featuredImage?.url}
                  fill
                  alt={product.title}
                  priority
                  className="object-fit object-cover"
                />
              </div>
            </Link>
            <h3 className="self-start">{product.title}</h3>
            <div className="self-start">{product.priceRange.maxVariantPrice.amount}</div>
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
