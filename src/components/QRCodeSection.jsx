import React from "react";
import { QrCode, Globe, MessageCircle } from "lucide-react";
import "./QRCodeSection.css";

/**
 * QRCodeSection
 *
 * Renders two QR codes:
 *   • Website QR – points to the current site (uses window.location.origin)
 *   • Zalo QR   – points to the Zalo official account (uses a fixed account ID)
 *
 * The component works both in development (http://localhost:5173) and
 * after deployment (https://your‑domain.com). Scanning the QR on a mobile
 * device on the same network will resolve the correct URL.
 */
const QRCodeSection = ({ url = window.location.origin, zaloNumber = "0833939368" }) => {
  // Build QR‑code URLs – they are fetched from a public QR‑server API.
  // Using encodeURIComponent ensures special characters are safe.
  const websiteQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    url
  )}`;
  const zaloQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    `https://zalo.me/${zaloNumber}`
  )}`;

  return (
    <div className="qr-contact-container">
      <h3 className="qr-section-title">KẾT NỐI NHANH QUA QR CODE</h3>
      <div className="qr-cards-wrapper">
        {/* ---------- Website QR ---------- */}
        <div className="qr-card">
          <div className="qr-card-header">
            <Globe size={16} />
            <span>WEBSITE</span>
          </div>
          <div className="qr-image-box">
            <img src={websiteQrUrl} alt="Website QR" />
          </div>
          <p>Quét để truy cập website</p>
        </div>

        {/* ---------- Zalo QR ---------- */}
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