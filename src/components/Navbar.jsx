import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

// Import categories
import { categories } from "../data/categories";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              TRANG CHỦ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              GIỚI THIỆU
            </Link>
          </li>
          <li
            className="nav-item dropdown-trigger"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link to="/products" className="nav-link">
              SẢN PHẨM <FaChevronDown className="dropdown-icon" />
            </Link>

            {/* Mega Menu based on Image 2 */}
            {isDropdownOpen && (
              <div className="mega-menu">
                <div className="mega-menu-inner">
                  <div className="mega-sidebar">
                    <ul>
                      {categories.level1.map((category) => (
                        <li key={category.id}>{category.name}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mega-content">
                    <div className="mega-column">
                      <h4>Đèn Led build TLC</h4>
                      <h4>Đèn led bulb Duhal</h4>
                      <h4>Đèn led bulb Mpe</h4>
                      <ul>
                        <li>Led Bulb LBD</li>
                        <li>Led Bulb LBD2</li>
                        <li>Led Bulb LB</li>
                        <li>Phụ Kiện Led Bulb</li>
                        <li>Led Bulb 7 Màu</li>
                      </ul>
                    </div>
                    <div className="mega-column">
                      <h4>Đèn led bulb Điện Quang</h4>
                      <h4>Đèn led bulb Anfaco</h4>
                      <h4>Đèn led bulb Panasonic</h4>
                    </div>
                    <div className="mega-column">
                      <h4>Đèn led bulb Hufa</h4>
                      <h4>Đèn led bulb Paragon</h4>
                    </div>
                    <div className="mega-column">
                      <h4>Đèn led bulb Rạng Đông</h4>
                      <h4>Đèn led bulb Philips</h4>
                    </div>
                    <div className="mega-column">
                      <h4>Đèn led bulb Kosoom</h4>
                      <h4>Đèn led bulb Kingled</h4>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">
              BLOG
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              LIÊN HỆ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
