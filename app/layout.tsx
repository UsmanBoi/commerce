import { CartProvider } from 'components/cart/cart-context';
import Collection from 'components/layout/collectionMenu/collection';
import { Navbar } from 'components/layout/navbar';
import ScrollToTopButton from 'components/ScrollToTopButton';
import { getCart } from 'lib/shopify';
import { ensureStartsWith } from 'lib/utils';
import { Josefin_Sans, Montserrat } from 'next/font/google';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import './globals.css';

const josefinSansFont = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-josefinsans' // Custom variable for the font
});

const montserratFont = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat' // Custom variable for the font
});

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
  const cart = getCart(cartId);

  return (
    <html lang="en" className={`${josefinSansFont.variable} ${montserratFont.variable}`}>
      <body className="bg-[##F1F7ED]/95 text-txtpri selection:bg-red-50 selection:text-black dark:selection:bg-pink-500 dark:selection:text-white">
        <CartProvider cartPromise={cart}>
          <div
            style={{ wordSpacing: '6px' }}
            className="flex items-center justify-center bg-gunMetal-300/90 py-1 text-txtsec"
          >
            Free Delivery on +$250 order
          </div>
          {/* Sticky Navbar on all devices */}
          <Navbar />

          {/* Sticky Collection on large devices */}
          <div className="sticky top-[56px] z-20 hidden bg-white lg:block">
            <Collection />
          </div>

          <main>{children}</main>
        </CartProvider>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
