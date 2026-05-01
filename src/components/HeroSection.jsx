import { useState, useEffect } from "react";
import { FaChevronRight, FaArrowRight } from "react-icons/fa";
import "./HeroSection.css";

// Import product images for banners
import DenLedAmTranDownlight from "../assets/sp/SP_Đèn LED âm trần Downlight.jpg";
import DenLedAmTranChinhHuongDoi from "../assets/sp/SP_Đèn LED âm trần chỉnh hướng đôi.jpg";
import DenLedNhaXuongHighBay from "../assets/sp/SP_Đèn led nhà xưởng HighBay 100W.jpg";

// Import categories
import { categories } from "../data/categories";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    { 
      src: DenLedAmTranDownlight, 
      alt: "Đèn LED âm trần Downlight",
      title: "Giải Pháp Chiếu Sáng Thông Minh",
      subtitle: "Tiết kiệm 80% điện năng, tuổi thọ lên đến 50.000 giờ",
      btnText: "Khám phá ngay"
    },
    { 
      src: DenLedAmTranChinhHuongDoi, 
      alt: "Đèn LED âm trần chỉnh hướng đôi",
      title: "Công Nghệ LED Hiện Đại",
      subtitle: "Thiết kế tinh tế, ánh sáng trung thực, bảo vệ thị lực",
      btnText: "Xem bộ sưu tập"
    },
    { 
      src: DenLedNhaXuongHighBay, 
      alt: "Đèn led nhà xưởng HighBay",
      title: "Giải Pháp Cho Công Nghiệp",
      subtitle: "Độ bền vượt trội, hiệu suất chiếu sáng cực cao",
      btnText: "Liên hệ tư vấn"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
    );
  };

  return (
    <section className="hero-section">
      <div className="container hero-inner">
        {/* Sidebar */}
        <div className="hero-sidebar">
          <div className="sidebar-title-main">
            Danh Mục Sản Phẩm
          </div>
          <ul className="sidebar-menu">
            {categories.level1.slice(0, 10).map((category) => (
              <li key={category.id}>
                <a href={`/products`}>
                  <span className="cat-icon-placeholder"></span>
                  {category.name}
                </a>
                <FaChevronRight className="chevron" />
              </li>
            ))}
          </ul>
        </div>

        {/* Banners with Slider */}
        <div className="hero-banners">
          <div className="banner-main">
            <div className="banner-slider">
              <div
                className="banner-slides"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {bannerImages.map((banner, index) => (
                  <div key={index} className="banner-slide">
                    <div className="banner-image-container">
                      <img src={banner.src} alt={banner.alt} />
                    </div>
                    <div className={`banner-content ${index === currentSlide ? "active" : ""}`}>
                      <h4 className="banner-label">Xu hướng 2026</h4>
                      <h2 className="banner-title">{banner.title}</h2>
                      <p className="banner-desc">{banner.subtitle}</p>
                      <button className="banner-cta">
                        {banner.btnText} <FaArrowRight />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Controls */}
              <button className="slider-btn prev" onClick={prevSlide}>
                ‹
              </button>
              <button className="slider-btn next" onClick={nextSlide}>
                ›
              </button>

              {/* Dots Indicator */}
              <div className="slider-dots">
                {bannerImages.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentSlide ? "active" : ""}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="banner-side">
            <div className="banner-item-side">
              <div className="side-banner-content">
                <h3>Khuyến Mãi</h3>
                <p>Giảm 20% thiết bị điện Panasonic</p>
                <a href="/products">Xem ngay</a>
              </div>
              <img src={DenLedAmTranChinhHuongDoi} alt="Promo 1" />
            </div>
            <div className="banner-item-side">
              <div className="side-banner-content">
                <h3>Sản Phẩm Mới</h3>
                <p>Bộ sưu tập đèn trang trí cao cấp</p>
                <a href="/products">Khám phá</a>
              </div>
              <img src={DenLedNhaXuongHighBay} alt="Promo 2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

