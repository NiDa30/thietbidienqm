import React from 'react';
import { QrCode, Globe, MessageCircle } from 'lucide-react';
import './QRCodeSection.css';

const QRCodeSection = ({ url, zaloNumber = "0833939368" }) => {
  const webQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(url || window.location.origin)}`;
  const zaloQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://zalo.me/' + zaloNumber)}`;

  return (
    <div className="qr-contact-container">
      <h3 className="qr-section-title">KẾT NỐI NHANH QUA QR CODE</h3>
      <div className="qr-cards-wrapper">
        <div className="qr-card">
          <div className="qr-card-header">
            <Globe size={16} />
            <span>WEBSITE</span>
          </div>
          <div className="qr-image-box">
            <img src={webQrUrl} alt="Website QR" />
          </div>
          <p>Quét để truy cập web</p>
        </div>

        <div className="qr-card zalo">
          <div className="qr-card-header">
            <MessageCircle size={16} />
            <span>ZALO OA</span>
          </div>
          <div className="qr-image-box">
            <img src={zaloQrUrl} alt="Zalo QR" />
          </div>
          <p>Quét để chat Zalo</p>
        </div>
      </div>
    </div>
  );
};

export default QRCodeSection;