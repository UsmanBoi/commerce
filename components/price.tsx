import clsx from 'clsx';

const Price = ({
  amount,
  className,
  currencyCode = 'usd',
  currencyCodeClassName
}: {
  amount: string;
  className?: string;
  currencyCode?: string | '';
  currencyCodeClassName?: string;
} & React.ComponentProps<'p'>) => (
  <p suppressHydrationWarning={true} className={className}>
    {`${new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(parseFloat(amount))}`}
    <span className={clsx('inline', currencyCodeClassName)}></span>
    {/* <span className={clsx('ml-2 inline', currencyCodeClassName)}>{`${currencyCode}`}</span> */}
  </p>
);

export default Price;
