import React from 'react';
import './BrandSection.css';

const BrandSection = () => {
  const brands = [
    { name: 'Panasonic', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Panasonic_logo.svg' },
    { name: 'Rạng Đông', logo: 'https://rangdong.com.vn/images/logo.png' },
    { name: 'Philips', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Philips_logo_new.svg' },
    { name: 'MPE', logo: 'https://mpe.com.vn/images/logo.png' },
    { name: 'TLC Lighting', logo: 'https://tlclighting.com.vn/wp-content/uploads/2018/06/Logo-TLC-Lighting.png' },
    { name: 'Sino', logo: 'https://sino.com.vn/images/logo.png' }
  ];

  return (
    <section className="brand-section">
      <div className="container">
        <div className="brand-header">
          <h3 className="brand-title">Đối tác thương hiệu</h3>
        </div>
        <div className="brand-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-item">
              <img src={brand.logo} alt={brand.name} title={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
