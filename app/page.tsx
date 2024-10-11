// import { Carousel } from 'components/carousel';
import { Carousel } from 'components/carousel';
import CategoriesSec from 'components/Categories';
import Featured from 'components/Featured';
import { ThreeItemGrid } from 'components/grid/three-items';
import { Hero } from 'components/Hero';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'Bath and Vanity luxury store',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoriesSec />
      <Featured />
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
