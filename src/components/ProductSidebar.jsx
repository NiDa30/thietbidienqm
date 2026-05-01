import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import '../pages/ProductPage.css';

const ProductSidebar = () => {
  return (
    <div className="product-sidebar">
      <div className="sidebar-header">
        <h3>DANH MỤC SẢN PHẨM</h3>
      </div>
      <div className="sidebar-content">
        <ul className="sidebar-nav">
          <li className="has-child active">
            <div className="nav-item-inner">
              <span>ĐÈN LED BULB</span>
              <FaChevronRight className="nav-icon" />
            </div>
            <ul className="sub-nav">
               <li><span>Đèn Led buld TLC</span></li>
               <li><span>Đèn led bulb Điện Quang</span></li>
               <li><span>Đèn led bulb Hufa</span></li>
               <li className="active"><span>Đèn led bulb Rạng Đông</span></li>
               <li><span>Đèn led bulb Kosoom</span></li>
               <li><span>Đèn led bulb Duhal</span></li>
               <li><span>Đèn led bulb Anfaco</span></li>
               <li><span>Đèn led bulb Paragon</span></li>
               <li><span>Đèn led bulb Philips</span></li>
               <li><span>Đèn led bulb Kingled</span></li>
               <li><span>Đèn led bulb Mpe</span></li>
            </ul>
          </li>
          <li className="has-child">
            <div className="nav-item-inner">
              <span>ĐÈN LED THANH RAY</span>
              <FaChevronRight className="nav-icon" />
            </div>
          </li>
          <li className="has-child">
             <div className="nav-item-inner">
              <span>ĐÈN ĐƯỜNG LED</span>
              <FaChevronRight className="nav-icon" />
            </div>
          </li>
          <li className="has-child">
             <div className="nav-item-inner">
              <span>ĐÈN CHỐNG CHÁY NỔ</span>
              <FaChevronRight className="nav-icon" />
            </div>
          </li>
          <li className="has-child">
             <div className="nav-item-inner">
              <span>ĐÈN LED PANEL</span>
              <FaChevronRight className="nav-icon" />
            </div>
          </li>
          <li className="has-child">
             <div className="nav-item-inner">
              <span>ĐÈN PHA LED</span>
              <FaChevronRight className="nav-icon" />
            </div>
          </li>
          <li className="has-child">
             <div className="nav-item-inner">
              <span>BỘ MÁNG ĐÈN LED</span>
              <FaChevronRight className="nav-icon" />
            </div>
          </li>
          <li className="has-child">
             <div className="nav-item-inner">
              <span>QUẠT</span>
              <FaChevronRight className="nav-icon" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductSidebar;
