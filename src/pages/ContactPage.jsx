import React from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <ul className="breadcrumb">
            <li><Link to="/">Trang chủ</Link></li>
            <li><span className="separator">/</span></li>
            <li className="active">Liên hệ</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <h1 className="contact-page-title">Liên hệ</h1>
        
        <div className="contact-content-grid">
          {/* Left Column: Company Info */}
          <div className="contact-info-col">
            <div className="contact-info-content">
              <h2 className="company-name">THIẾT BỊ ĐIỆN MPE - THIẾT BỊ ĐIỆN PANASONIC - THIẾT BỊ ĐIỆN QM</h2>
              <div className="info-line">
                <strong>Mã số thuế:</strong> 0316591084 Do Sở Kế Hoạch và Đầu Tư TP.HCM cấp ngày 15/12/2010
              </div>
              <div className="info-line">
                <strong>Văn phòng:</strong> 652/29 Quốc lộ 13, P.Hiệp Bình Phước, Thành Phố Thủ Đức
              </div>
              <div className="info-line">
                <a href="http://thietbidienqm.com" target="_blank" rel="noopener noreferrer">http://thietbidienqm.com</a>
              </div>
              <div className="info-line">
                <strong>Hotline:</strong> 0833.939.368
              </div>
              <div className="info-line">
                <strong>Giờ Làm Việc:</strong> 8h-22h
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Họ tên" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Số điện thoại" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Địa chỉ" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group w-100">
                  <input type="text" className="form-control" placeholder="Chủ đề" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group w-100">
                  <textarea className="form-control" rows="5" placeholder="Nội dung"></textarea>
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn-submit">Gửi thông tin</button>
                <button type="reset" className="btn-reset">Nhập lại</button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="contact-map">
          {/* Using a generic map embed link as placeholder since specific API key/embed is unavailable */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.420663989139!2d106.71539491480133!3d10.855574792267675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752862c9c74ab3%3A0x6b30f242af03d360!2zNjUyLzI5IFF14buRYyBs4buZIDEzLCBIaeG7h3AgQsOsbmggUGjGsOG7m2MsIFRo4bunIMSQ4bupYywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
