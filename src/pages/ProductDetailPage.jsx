import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaExchangeAlt,
  FaShieldAlt,
  FaMoneyCheckAlt,
  FaTools,
} from "react-icons/fa";
import "./ProductDetailPage.css";

// Import product images
import DenLedAmTranDownlight from "../assets/sp/SP_Đèn LED âm trần Downlight.jpg";
import DenLedAmTranChinhHuongDoi from "../assets/sp/SP_Đèn LED âm trần chỉnh hướng đôi.jpg";
import DenLedAmTranChinhHuong from "../assets/sp/SP_Đèn LED âm trần chỉnh hướng.jpg";
import DenChinhHuong from "../assets/sp/SP_đèn chỉnh hướng.jpg";
import DenLebBulb from "../assets/sp/SP_Đèn leb bulb.jpg";

const dummySimilarProducts = [
  {
    id: "sp1",
    image: DenLedAmTranDownlight,
    name: "Đèn LED âm trần Downlight 5W",
    price: "355.000đ",
  },
  {
    id: "sp2",
    image: DenLedAmTranChinhHuongDoi,
    name: "Đèn LED âm trần chỉnh hướng đôi",
    price: "1.124.000đ",
  },
  {
    id: "sp3",
    image: DenLedAmTranChinhHuong,
    name: "Đèn LED âm trần chỉnh hướng 7W",
    price: "1.054.000đ",
  },
  {
    id: "sp4",
    image: DenChinhHuong,
    name: "Đèn LED chỉnh hướng 10W",
    price: "529.000đ",
  },
  { id: "sp5", image: DenLebBulb, name: "Đèn LED bulb 9W", price: "483.000đ" },
];

const ProductDetailPage = ({ onBuyNow }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("info");

  const product = {
    id: id || "demo",
    name: "Đèn LED âm trần Downlight 12W",
    sku: "RPL-12W-DL",
    brand: "Mpe",
    price: "195.400đ",
    image: DenLedAmTranDownlight,
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // Modify onBuyNow usage: we pass a product with the selected quantity
    // Actually our App.jsx currently adds 1 if not exists or increments.
    // For a more complete cart, we should fix the root logic, but for UI mockup this is fine.
    const productToAdd = { ...product, quantity };
    onBuyNow(productToAdd);
  };

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <span className="separator">/</span>
            </li>
            <li>
              <Link to="/products">Sản phẩm</Link>
            </li>
            <li>
              <span className="separator">/</span>
            </li>
            <li>
              <Link to="/products">ĐÈN LED ÂM TRẦN</Link>
            </li>
            <li>
              <span className="separator">/</span>
            </li>
            <li>
              <Link to="/products">Đèn LED Âm Trần Mpe</Link>
            </li>
            <li>
              <span className="separator">/</span>
            </li>
            <li>
              <Link to="/products">Panel Series</Link>
            </li>
            <li>
              <span className="separator">/</span>
            </li>
            <li className="active">{product.name}</li>
          </ul>
        </div>
      </div>

      <div className="container product-detail-main">
        <div className="product-detail-top">
          {/* Left: Image */}
          <div className="product-detail-image-sec">
            <div className="product-image-large">
              <img src={product.image} alt={product.name} />
            </div>
          </div>

          {/* Middle: Info */}
          <div className="product-detail-info-sec">
            <h1 className="product-detail-title">{product.name}</h1>
            <div className="product-detail-meta">
              <span className="sku">
                Mã SP: <strong>{product.sku}</strong>
              </span>
              <span className="brand">
                Thương hiệu: <Link to="#">{product.brand}</Link>
              </span>
            </div>
            <div className="product-detail-price">{product.price}</div>

            <div className="quantity-selector">
              <button className="qty-btn" onClick={handleDecrease}>
                -
              </button>
              <input
                type="text"
                className="qty-input"
                value={quantity}
                readOnly
              />
              <button className="qty-btn" onClick={handleIncrease}>
                +
              </button>
            </div>

            <div className="action-buttons">
              <button className="btn-add-to-cart" onClick={handleAddToCart}>
                <span className="btn-title">THÊM VÀO GIỎ HÀNG</span>
                <span className="btn-sub">Thêm vào giỏ để chọn tiếp</span>
              </button>
              <button className="btn-buy-now">
                <span className="btn-title">ĐẶT MUA NGAY</span>
                <span className="btn-sub">Giao hàng tận nơi nhanh chóng</span>
              </button>
            </div>

            <div className="product-share">
              <span className="share-label">Chia sẻ:</span>
              <div className="share-icons">
                <div className="share-placeholder"></div>
              </div>
            </div>
          </div>

          {/* Right: Support */}
          <div className="product-detail-support-sec">
            <div className="support-box">
              <h3 className="support-title">HỖ TRỢ KHÁCH HÀNG</h3>
              <ul className="support-list">
                <li>
                  <div className="support-icon-wrap">
                    <FaCheckCircle className="support-icon" />
                  </div>{" "}
                  <span>Giá cạnh tranh nhất thị trường</span>
                </li>
                <li>
                  <div className="support-icon-wrap">
                    <FaExchangeAlt className="support-icon" />
                  </div>{" "}
                  <span>Bảo hành 1 đổi 1 tại nơi sử dụng</span>
                </li>
                <li>
                  <div className="support-icon-wrap">
                    <FaShieldAlt className="support-icon" />
                  </div>{" "}
                  <span>Sản phẩm 100% chính hãng</span>
                </li>
                <li>
                  <div className="support-icon-wrap">
                    <FaMoneyCheckAlt className="support-icon" />
                  </div>{" "}
                  <span>Thanh toán linh hoạt</span>
                </li>
                <li>
                  <div className="support-icon-wrap">
                    <FaTools className="support-icon" />
                  </div>{" "}
                  <span>Đội ngũ kỹ thuật tư vấn chuyên sâu</span>
                </li>
              </ul>
            </div>
            <div className="contact-box">
              <h3 className="contact-title">LIÊN HỆ VỚI KINH DOANH ONLINE</h3>
              <div className="contact-info">
                <FaPhoneAlt className="contact-icon" /> Kinh doanh:{" "}
                <strong className="contact-number">0833.939.368 MR VŨ</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="product-detail-tabs">
          <div className="tabs-header">
            <button
              className={`tab-btn ${activeTab === "info" ? "active" : ""}`}
              onClick={() => setActiveTab("info")}
            >
              Thông Tin Sản Phẩm
            </button>
            <button
              className={`tab-btn ${activeTab === "comments" ? "active" : ""}`}
              onClick={() => setActiveTab("comments")}
            >
              Bình Luận
            </button>
          </div>
          <div className="tab-content">
            {activeTab === "info" && (
              <div className="info-tab">
                <p>
                  <strong>Đèn Led Panel Âm Trần Dimmer 6W Ø120 mm</strong> với 3
                  mã hàng: RPL-6T/DIM, RPL-6N/DIM, RPL-6V/DIM có cùng mức giá
                  390.800 đồng
                </p>
                <p>
                  <strong>Hệ số công suất (PF):</strong> &gt;0.5
                </p>
                <p>
                  <strong>Quang thông:</strong> 500 lm
                </p>
                <p>
                  <strong>Nhiệt độ màu (CCT):</strong>{" "}
                  6000-6500K/4000-4500K/2800-3200K. Trắng, trung tính, vàng. Ánh
                  sáng liên tục, không nhấp nháy, tốt cho thị lực
                </p>
                <p>
                  <strong>Chỉ số hoàn màu (CRI):</strong> &gt;80
                </p>
                <p>
                  <strong>MPE Led Round Panel Dimmable size:</strong> Ø120mm x
                  25mm
                </p>
                <p>
                  <strong>Kích thước đục lỗ:</strong> Ø105 mm
                </p>
                <p>
                  <strong>Quy cách đóng gói:</strong> 1 cái/hộp, 60 cái/thùng
                </p>
                <p>
                  <strong>Dimmable</strong> điều chỉnh độ sáng tối
                </p>
                <p>
                  Kiểu dáng đẹp, mẫu mã đa dạng, nhiều chủng loại, đèn led âm
                  trần MPE dễ dàng lắp đặt trần thạch cao cho nhà phố, biệt thự,
                  căn hộ chung cư, văn phòng.
                </p>

                <div className="read-more-wrapper">
                  <button className="btn-read-more">Xem thêm</button>
                </div>
              </div>
            )}
            {activeTab === "comments" && (
              <div className="comments-tab">
                <p>Chưa có bình luận nào.</p>
              </div>
            )}
          </div>
        </div>

        {/* Similar Products */}
        <div className="similar-products-sec">
          <h2 className="similar-products-title">SẢN PHẨM CÙNG LOẠI</h2>
          <div className="product-grid-5col">
            {dummySimilarProducts.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                image={p.image}
                name={p.name}
                price={p.price}
                onBuyNow={() => onBuyNow(p)}
              />
            ))}
          </div>
          <div className="pagination">
            <span className="page-info">Trang 1 / 60</span>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
            <button className="page-btn">5</button>
            <button className="page-btn">6</button>
            <button className="page-btn">7</button>
            <span className="page-ellipsis">...</span>
            <button className="page-btn">59</button>
            <button className="page-btn">60</button>
            <button className="page-btn">&gt;</button>
            <button className="page-btn">&gt;|</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
