import { CartProvider } from 'components/cart/cart-context';
import Collection from 'components/layout/collectionMenu/collection';
import { Navbar } from 'components/layout/navbar';
import { GeistSans } from 'geist/font/sans';
import { getCart } from 'lib/shopify';
import { ensureStartsWith } from 'lib/utils';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import './globals.css';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cartId = cookies().get('cartId')?.value;
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart(cartId);

  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="text-charcoal bg-bgCola bg-opacity-80 selection:bg-red-50 selection:text-blue-400 dark:selection:bg-pink-500 dark:selection:text-white">
        <CartProvider cartPromise={cart}>
          <Navbar />
          <Collection />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
