import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesBar from '../components/FeaturesBar';
import ProductSection from '../components/ProductSection';
import NewsAndVideoSection from '../components/NewsAndVideoSection';
import BrandSection from '../components/BrandSection';

const HomePage = ({ amTranProducts, opTranProducts, onBuyNow }) => {
  return (
    <>
      <HeroSection />
      <FeaturesBar />
      <main>
        <ProductSection 
          title="ĐÈN LED ÂM TRẦN" 
          subTitle="ĐÈN LED ÂM TRẦN ENA" 
          linkText="XEM TẤT CẢ" 
          products={amTranProducts} 
          onBuyNow={onBuyNow}
        />
        <ProductSection 
          title="ĐÈN LED ỐP TRẦN" 
          subTitle="ĐÈN LED ỐP TRẦN ENA" 
          linkText="XEM TẤT CẢ" 
          products={opTranProducts} 
          onBuyNow={onBuyNow}
        />
        <BrandSection />
        <NewsAndVideoSection />
      </main>
    </>
  );
};

export default HomePage;

