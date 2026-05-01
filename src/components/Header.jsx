import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt, FaMapMarkerAlt, FaSearch, FaShoppingCart } from 'react-icons/fa';
import './Header.css';

const Header = ({ cartCount }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container flex-between top-bar-inner">
          <div className="top-bar-left">
            <a href="tel:0833939368" className="phone-badge bg-orange">
              <FaPhoneAlt /> KD .0833 939 368
            </a>
            <a href="tel:0833939368" className="phone-badge bg-orange">
              <FaPhoneAlt /> KT .0833 939 368
            </a>
          </div>
          <div className="top-bar-right">
            <span className="address">
              <FaMapMarkerAlt /> Văn phòng: 625/29 Quốc lộ 13, Phường Hiệp Bình Phước, Tp. Thủ Đức, HCM
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container flex-between main-header-inner">
          {/* Logo */}
          <div className="logo-container">
            <div className="logo-icon">
              <span className="logo-q">Q</span>
            </div>
            <div className="logo-text">
              <span className="text-dark">QM</span><span className="text-green">Lighting</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="search-container">
            <input type="text" placeholder="Tìm kiếm sản phẩm or mã sản phẩm" className="search-input" />
            <button className="search-btn">Tìm kiếm</button>
          </div>

          {/* Hotline & Cart */}
          <div className="header-actions">
            <div className="hotline-box">
              <div className="icon-circle">
                <FaPhoneAlt />
              </div>
              <div className="hotline-text">
                <span className="hotline-title">Hotline bán hàng</span>
                <span className="hotline-number">0833 939 368</span>
              </div>
            </div>
            <div className="cart-box" onClick={() => navigate('/cart')}>
              <div className="cart-icon-container">
                <FaShoppingCart className="cart-icon" />
                <span className="cart-badge">{cartCount || 0}</span>
              </div>
              <span className="cart-text">Giỏ hàng</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
