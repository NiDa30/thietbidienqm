import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./Footer.css";

// Import brand logos
import ThuongHieuAsia from "../assets/brand/ThuongHieu_Asia lighting.png";
import ThuongHieuKingled from "../assets/brand/ThuongHieu_Kingled.jpg";
import ThuongHieuPanasonic from "../assets/brand/ThuongHieu_Panasonic.jpg";
import ThuongHieuPhilips from "../assets/brand/ThuongHieu_Philips.webp";
import ThuongHieuRangDong from "../assets/brand/ThuongHieu_Rạng đông.jpg";

// Import categories with brands
import { categories } from "../data/categories";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Brands Carousel Area */}
      <div className="footer-brands">
        <div className="container brands-inner">
          <div className="brands-title-wrapper">
            <h2 className="brands-title">THƯƠNG HIỆU</h2>
          </div>
          <div className="brands-carousel">
            <button className="carousel-btn prev-btn">
              <FaChevronLeft />
            </button>
            <div className="brands-track">
              {/* Brand logos - display all brands from data */}
              {categories.brands.slice(0, 5).map((brand, index) => {
                const brandImages = [
                  ThuongHieuPanasonic,
                  ThuongHieuPhilips,
                  ThuongHieuRangDong,
                  ThuongHieuKingled,
                  ThuongHieuAsia,
                ];
                return (
                  <div className="brand-item" key={brand.id}>
                    <img
                      src={brandImages[index] || ThuongHieuPanasonic}
                      alt={brand.name}
                      title={brand.name}
                    />
                  </div>
                );
              })}
            </div>
            <button className="carousel-btn next-btn">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-row top-row">
            <div className="footer-col col-info">
              <h3>
                THIẾT BỊ ĐIỆN MPE - THIẾT BỊ ĐIỆN PANASONIC - THIẾT BỊ ĐIỆN QM
              </h3>
              <p>
                Mã số thuế : 0316591084 Do Sở Kế Hoạch và Đầu Tư TP.HCM cấp ngày
                15/12/2010
              </p>
              <p>
                Văn phòng: 652/29 Quốc lộ 13, P.Hiệp Bình Phước, Thành Phố Thủ
                Đức
              </p>
              <p>http://thietbidienqm.com</p>
              <p>Hotline: 0833.939.368</p>
              <p>Giờ Làm Việc: 8h-22h</p>
            </div>

            <div className="footer-col col-policy">
              <h3>CHÍNH SÁCH CHUNG</h3>
              <div className="bct-logo">
                <a href="http://online.gov.vn/Home/WebDetails/81216" target="_blank" rel="noreferrer">
                  <img
                    src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=9f7a9a6b-c74b-4a5d-b0f3-8f6b4e6d4e2d"
                    alt="DMCA.com Protection Status"
                  />
                </a>
              </div>
            </div>

            <div className="footer-col col-category">
              <h3>DANH MỤC</h3>
              <ul>
                {categories.level1.slice(0, 5).map((category) => (
                  <li key={category.id}>
                    <a href={`#${category.id}`}>{category.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-row bottom-row">
            <div className="footer-col col-social">
              <h3>KẾT NỐI</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <FaYoutube />
                </a>
                <a href="#" className="social-icon">
                  <FaTwitter />
                </a>
                <a href="#" className="social-icon">
                  <FaInstagram />
                </a>
                <a href="#" className="social-icon">
                  <FaFacebook />
                </a>
              </div>
            </div>

            <div className="footer-col col-fanpage">
              <h3>FANPAGE</h3>
              <a href="#" className="fanpage-link">
                Facebook
              </a>
            </div>

            <div className="footer-col col-map">
              <h3>BẢN ĐỒ</h3>
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.513511854449!2d106.70724831525624!3d10.84439199227546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175289f66666667%3A0x6666666666666667!2zNjUyLzI5IFF14buRYyBs4buZIDEzLCBIaeG7h3AgQsOsbmggUGjGsOG7m2MsIFRo4bunIMSQ4bupYywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s" 
                  width="100%" 
                  height="150" 
                  style={{ border: 0, borderRadius: "8px" }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <p>Copyright 2020</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
