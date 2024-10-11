'use client';
import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product, ProductVariant } from 'lib/shopify/types';
import { useState } from 'react';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  // Initialize state to keep track of the selected variant
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants[4] || null
  );

  // Handle variant selection change
  const handleVariantChange = (variantId: string) => {
    const variant = product.variants.find((variant) => variant.id === variantId) || null;
    setSelectedVariant(variant);
  };

  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-4 text-5xl font-medium">{product.title}</h1>

        {/* Display the price of the selected variant */}
        {selectedVariant ? (
          <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
            <Price
              amount={selectedVariant.price.amount}
              currencyCode={selectedVariant.price.currencyCode}
            />
          </div>
        ) : (
          <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
            <Price
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            />
          </div>
        )}
      </div>

      {/* Variant Selector with change handler */}
      <VariantSelector
        options={product.options}
        variants={product.variants}
        onVariantChangeAction={handleVariantChange}
      />

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}

      <AddToCart product={product} selectedVariant={selectedVariant} />
    </>
  );
}
