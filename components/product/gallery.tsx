'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { GridTileImage } from 'components/grid/tile';
import { useProduct, useUpdateURL } from 'components/product/product-context';
import Image from 'next/image';
import { useState } from 'react';

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const { state, updateImage } = useProduct();
  const updateURL = useUpdateURL();
  const imageIndex = state.image ? parseInt(state.image) : 0;

  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;

  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const buttonClassName =
    'h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-tertiary dark:hover:text-white flex items-center justify-center';

  // Handler for mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target as HTMLElement;

    const xPercent = (offsetX / offsetWidth) * 100;
    const yPercent = (offsetY / offsetHeight) * 100;

    setZoomPosition({ x: xPercent, y: yPercent });
  };

  return (
    <form>
      <div className="flex h-full w-full flex-col items-center gap-2">
        <div
          className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setIsZoomed(false)}
        >
          {images[imageIndex] && (
            <Image
              className={`h-full w-full object-contain transition-transform duration-300 hover:cursor-cell ${
                isZoomed ? 'scale-[2.5]' : 'scale-100'
              }`}
              style={{
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
              }}
              fill
              sizes="(min-width: 1224px) 200vw, 200vw"
              quality={isZoomed ? 100 : 75} // Increase quality when zoomed
              alt={images[imageIndex]?.altText as string}
              src={images[imageIndex]?.src as string}
              priority={true}
            />
          )}
        </div>
        {images.length > 1 ? (
          <div className="flex w-fit scale-[0.8] xl:scale-90">
            <div className="mx-auto flex h-11 items-center rounded-full border border-tertiary bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
              <button
                formAction={() => {
                  const newState = updateImage(previousImageIndex.toString());
                  updateURL(newState);
                }}
                aria-label="Previous product image"
                className={buttonClassName}
              >
                <ArrowLeftIcon className="h-5" />
              </button>
              <div className="mx-1 h-6 w-px bg-neutral-500"></div>
              <button
                formAction={() => {
                  const newState = updateImage(nextImageIndex.toString());
                  updateURL(newState);
                }}
                aria-label="Next product image"
                className={buttonClassName}
              >
                <ArrowRightIcon className="h-5" />
              </button>
            </div>
          </div>
        ) : null}

        {images.length > 1 ? (
          <ul className="my-4 flex items-center justify-center gap-4 overflow-auto py-1 lg:mb-0">
            {images.map((image, index) => {
              const isActive = index === imageIndex;

              return (
                <li key={image.src} className="h-20 w-20">
                  <button
                    formAction={() => {
                      const newState = updateImage(index.toString());
                      updateURL(newState);
                    }}
                    aria-label="Select product image"
                    className="h-full w-full"
                  >
                    <GridTileImage
                      alt={image.altText}
                      src={image.src}
                      width={80}
                      height={80}
                      active={isActive}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </form>
  );
}
