import CollectionMenu from 'components/layout/collectionMenu/collection-menu';
import { getMenu } from 'lib/shopify';
import { Suspense } from 'react';

export default async function Collection() {
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('collection-menu');

  return (
    <nav className="">
      <div className="flex w-full flex-col items-start gap-6 border-y border-neutral-200 px-6 py-4">
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <CollectionMenu menu={menu} />
        </Suspense>
      </div>
    </nav>
  );
}
