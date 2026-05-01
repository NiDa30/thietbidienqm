import React from 'react';
import { FaCreditCard, FaTruck, FaShieldAlt, FaComments } from 'react-icons/fa';
import './FeaturesBar.css';

const FeaturesBar = () => {
  return (
    <section className="features-section">
      <div className="container features-inner">
        <div className="feature-item">
          <FaCreditCard className="feature-icon" />
          <span className="feature-text">SẢN PHẨM CHÍNH HÃNG 100%</span>
        </div>
        <div className="feature-item">
          <FaTruck className="feature-icon" />
          <span className="feature-text">GIAO HÀNG MIỄN PHÍ</span>
        </div>
        <div className="feature-item">
          <FaShieldAlt className="feature-icon" />
          <span className="feature-text">BẢO HÀNH TẬN NHÀ</span>
        </div>
        <div className="feature-item">
          <FaComments className="feature-icon" />
          <span className="feature-text">HỖ TRỢ 24/7</span>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
