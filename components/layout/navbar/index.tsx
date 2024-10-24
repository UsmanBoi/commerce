import CartModal from 'components/cart/modal';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import React, { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <div className="">
      <div
        style={{ wordSpacing: '6px' }}
        className="flex items-center justify-center bg-myGray py-1 text-txtpri"
      >
        😍 Free Delivery on <span className="px-2 text-gunMetal">+$250</span> order 😍
      </div>
      <nav className="flex items-center justify-between px-4 py-3 lg:px-6">
        <div className="block flex-none lg:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex w-full items-center md:w-1/3">
            <Link href="/" prefetch={true} className="mr-2 flex w-full md:w-auto lg:mr-6">
              {/* <LogoSquare /> */}
              <div className="hidden flex-none text-center text-xs font-medium uppercase leading-tight lg:block">
                {SITE_NAME?.toString()
                  .replaceAll(' ', '<br />')
                  .split('<br />')
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </div>
            </Link>
            <div className="px-6">
              {menu.length ? (
                <>
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
                </>
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
    </div>
  );
}
