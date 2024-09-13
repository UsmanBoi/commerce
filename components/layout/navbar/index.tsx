import CartModal from 'components/cart/modal';
import LogoSquare from 'components/logo-square';
import { getCollections, getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

async function CollectionList() {
  const collections = await getCollections();
  return <div></div>;
}

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <div className="sticky">
      <div
        style={{ wordSpacing: '6px' }}
        className="flex items-center justify-center bg-myGrey py-1 text-txtpri"
      >
        😍 Free Delivery on +$1000 order 😍
      </div>
      <nav className="relative flex items-center justify-between px-4 py-4 lg:px-6">
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex w-full items-center md:w-1/3">
            <Link href="/" prefetch={true} className="mr-2 flex w-full md:w-auto lg:mr-6">
              <LogoSquare />
              {/* <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
              </div> */}
            </Link>
            <div className="px-6">
              {menu.length ? (
                <ul className="hidden gap-8 px-12 text-sm lg:flex lg:items-center">
                  {menu.map((item: Menu) => (
                    <li key={item.title}>
                      <Link
                        href={item.path}
                        prefetch={true}
                        className="text-base font-medium text-[#495057] underline-offset-4 hover:text-black hover:underline dark:text-red-400 dark:hover:text-neutral-300"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>
          <div className="flex justify-end md:w-1/3">
            <CartModal />
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center gap-4">
        <Suspense fallback={null}>
          <CollectionList />
        </Suspense>
      </div>
    </div>
  );
}
