import clsx from 'clsx';
import Link from 'next/link';
import { styles } from '../app/styles';

const ShopNow = ({ title, className }: { title: string; className?: string }) => {
  return (
    <Link href="/search">
      <button
        className={clsx(
          `${styles.Button} mt-4 transition-all duration-200 hover:rounded-xl`,
          className // Optional extra classes
        )}
      >
        {title}
      </button>
    </Link>
  );
};

export default ShopNow;
