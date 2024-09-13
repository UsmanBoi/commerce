import { styles } from 'app/styles';

const Brands = () => {
  return (
    <div className="my-10 h-96 w-full bg-white py-10">
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 style={{ wordSpacing: '4px' }} className={`${styles.SecHeading} `}>
          Brands Selection Variety
        </h2>
        <p className={`${styles.SecSubHeading}`}>
          Buy from the top reliable brands that curate to your needs
        </p>
      </div>
    </div>
  );
};

export default Brands;
