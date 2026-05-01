import React from 'react';
import { FaPhoneAlt, FaBell, FaArrowUp } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import './FloatingActionButtons.css';

const FloatingActionButtons = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Left side */}
      <div className="fab-left">
        <div className="fab-item notification-fab">
          <FaBell />
        </div>
      </div>

      {/* Right side */}
      <div className="fab-right">
        <div className="fab-item phone-fab">
          <FaPhoneAlt />
        </div>
        <div className="fab-item zalo-fab">
          <SiZalo />
        </div>
        <div className="fab-item scroll-top-fab" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      </div>
    </>
  );
};

export default FloatingActionButtons;
