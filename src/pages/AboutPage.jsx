import React from 'react';
import { FaCheckCircle, FaAward, FaUsers, FaLightbulb } from 'react-icons/fa';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="fade-in">Về Chúng Tôi</h1>
            <p className="fade-in-delayed">Kiến tạo không gian sống hiện đại với giải pháp chiếu sáng tối ưu</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="about-intro section-padding">
        <div className="container">
          <div className="about-row">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Office" className="rounded-shadow" />
            </div>
            <div className="about-text">
              <h2 className="section-title">Câu chuyện của QM Lighting</h2>
              <p>Được thành lập từ năm 2010, QM Lighting đã trải qua hơn 15 năm hình thành và phát triển, trở thành một trong những đơn vị hàng đầu trong lĩnh vực cung cấp thiết bị điện và giải pháp chiếu sáng tại Việt Nam.</p>
              <p>Chúng tôi tự hào là đối tác chiến lược của các thương hiệu danh tiếng như Panasonic, MPE, Rạng Đông, Philips... Với sứ mệnh mang đến sự tiện nghi và an toàn cho mọi gia đình Việt.</p>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Năm kinh nghiệm</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5000+</span>
                  <span className="stat-label">Khách hàng tin dùng</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Thương hiệu đối tác</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values section-padding bg-gray">
        <div className="container">
          <h2 className="section-title text-center">Giá Trị Cốt Lõi</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><FaAward /></div>
              <h3>Chất Lượng</h3>
              <p>Cam kết 100% sản phẩm chính hãng, được kiểm định nghiêm ngặt trước khi đến tay người dùng.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FaUsers /></div>
              <h3>Tận Tâm</h3>
              <p>Đội ngũ tư vấn chuyên nghiệp, hỗ trợ khách hàng 24/7 với tinh thần trách nhiệm cao nhất.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FaLightbulb /></div>
              <h3>Đổi Mới</h3>
              <p>Luôn cập nhật những xu hướng công nghệ chiếu sáng mới nhất, mang lại giải pháp tối ưu cho không gian.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FaCheckCircle /></div>
              <h3>Uy Tín</h3>
              <p>Xây dựng niềm tin vững chắc thông qua các chính sách bảo hành và hậu mãi minh bạch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="about-mission section-padding">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-item">
              <div className="mission-content">
                <h2>Tầm Nhìn</h2>
                <p>Trở thành đơn vị hàng đầu trong việc cung cấp các giải pháp thiết bị điện thông minh và bền vững, góp phần nâng cao chất lượng cuộc sống cho cộng đồng.</p>
              </div>
            </div>
            <div className="mission-item">
              <div className="mission-content">
                <h2>Sứ Mệnh</h2>
                <p>Mang đến những sản phẩm chất lượng cao, dịch vụ vượt trội và giải pháp sáng tạo, kiến tạo nên những không gian sống và làm việc an toàn, tiết kiệm năng lượng.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta section-padding bg-primary text-white text-center">
        <div className="container">
          <h2>Bạn đã sẵn sàng nâng cấp không gian của mình?</h2>
          <p>Liên hệ ngay với chúng tôi để nhận được sự tư vấn chuyên nghiệp nhất.</p>
          <a href="/contact" className="btn btn-gold">Liên hệ ngay</a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
