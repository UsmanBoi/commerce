import clsx from 'clsx';
import Link from 'next/link';
import { styles } from '../app/styles';

const ShopNow = ({
  title,
  className,
  link
}: {
  title: string;
  className?: string;
  link: string | '';
}) => {
  return (
    <Link href={link}>
      <button
        className={clsx(
          `${styles.Button} mt-2 transition-all`,
          className // Optional extra classes
        )}
      >
        {title}
      </button>
    </Link>
  );
};

export default ShopNow;
