import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaTrash,
  FaHome,
  FaCreditCard,
  FaStore,
  FaMoneyBillWave,
  FaShippingFast,
  FaCheck,
} from "react-icons/fa";
import "./CartPage.css";

const CartPage = ({ cartItems, updateQuantity, removeItem }) => {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  // Function to clean price string (e.g. "195.400đ" -> 195400)
  const parsePrice = (priceStr) => {
    return parseInt(priceStr.replace(/\D/g, ""), 10) || 0;
  };

  // Format number back to string (e.g. 195400 -> "195.400đ")
  const formatPrice = (num) => {
    return new Intl.NumberFormat("vi-VN").format(num) + "đ";
  };

  const total = cartItems.reduce(
    (acc, item) => acc + parsePrice(item.price) * item.quantity,
    0
  );

  return (
    <div className="cart-page-wrapper">
      {/* Breadcrumb */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link to="/">
                <FaHome /> Trang chủ
              </Link>
            </li>
            <li className="separator">/</li>
            <li className="active">Giỏ hàng</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="cart-page-container">
          {/* Left Column: Cart Items */}
          <div className="cart-items-section">
            <div className="section-header">
              <FaShoppingCart className="section-icon" />
              <h2 className="section-heading">GIỎ HÀNG CỦA BẠN</h2>
            </div>
            {cartItems.length === 0 ? (
              <div className="empty-cart-container">
                <FaShoppingCart className="empty-cart-icon" />
                <p>Giỏ hàng của bạn đang trống</p>
                <Link to="/products" className="btn-shop-now">
                  Mua sắm ngay
                </Link>
              </div>
            ) : (
              <>
                <div className="cart-table-wrapper">
                  <table className="cart-page-table">
                    <thead>
                      <tr>
                        <th className="col-img">Sản phẩm</th>
                        <th className="col-name">Tên sản phẩm</th>
                        <th className="col-qty">Số lượng</th>
                        <th className="col-price">Thành tiền</th>
                        <th className="col-actions">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id}>
                          <td className="col-img">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="cart-item-img"
                            />
                          </td>
                          <td className="col-name">
                            <strong>{item.name}</strong>
                          </td>
                          <td className="col-qty">
                            <div className="qty-selector">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                disabled={item.quantity <= 1}
                              >
                                <FaMinus />
                              </button>
                              <input
                                type="text"
                                value={item.quantity}
                                readOnly
                              />
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <FaPlus />
                              </button>
                            </div>
                          </td>
                          <td className="col-price text-green font-bold">
                            {formatPrice(
                              parsePrice(item.price) * item.quantity
                            )}
                          </td>
                          <td className="col-actions">
                            <button
                              className="btn-remove-item-new"
                              onClick={() => removeItem(item.id)}
                              title="Xóa sản phẩm"
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="cart-total-row">
                  <span className="total-label">Tổng tiền:</span>
                  <span className="total-amount">{formatPrice(total)}</span>
                </div>
              </>
            )}
          </div>

          {/* Right Column: Checkout Form */}
          <div className="cart-checkout-section">
            <div className="section-header">
              <FaCreditCard className="section-icon" />
              <h2 className="section-heading">HÌNH THỨC THANH TOÁN</h2>
            </div>
            <div className="payment-methods">
              <label
                className={`payment-option ${
                  paymentMethod === "bank" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                />
                <span className="radio-custom"></span>
                <FaCreditCard className="payment-icon" />
                <span>Thanh toán chuyển khoản</span>
              </label>
              <label
                className={`payment-option ${
                  paymentMethod === "store" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="store"
                  checked={paymentMethod === "store"}
                  onChange={() => setPaymentMethod("store")}
                />
                <span className="radio-custom"></span>
                <FaStore className="payment-icon" />
                <span>Thanh toán tại cửa hàng</span>
              </label>
              <label
                className={`payment-option ${
                  paymentMethod === "cod" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <span className="radio-custom"></span>
                <FaMoneyBillWave className="payment-icon" />
                <span>Thanh toán khi nhận hàng (COD)</span>
              </label>
            </div>

            <div className="section-header mt-30">
              <FaShippingFast className="section-icon" />
              <h2 className="section-heading">THÔNG TIN GIAO HÀNG</h2>
            </div>
            <form
              className="checkout-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-row-2">
                <input
                  type="text"
                  className="checkout-input"
                  placeholder="Họ tên"
                  required
                />
                <input
                  type="tel"
                  className="checkout-input"
                  placeholder="Số điện thoại"
                  required
                />
              </div>
              <div className="form-row-1">
                <input
                  type="email"
                  className="checkout-input"
                  placeholder="Email"
                />
              </div>
              <div className="form-row-3">
                <select className="checkout-select" required>
                  <option value="">Tỉnh/thành phố</option>
                  <option value="sg">Hồ Chí Minh</option>
                  <option value="hn">Hà Nội</option>
                </select>
                <select className="checkout-select" required>
                  <option value="">Quận/huyện</option>
                  <option value="1">Quận 1</option>
                  <option value="td">Thủ Đức</option>
                </select>
                <select className="checkout-select" required>
                  <option value="">Phường/xã</option>
                  <option value="hbp">Hiệp Bình Phước</option>
                  <option value="bng">Bến Nghé</option>
                </select>
              </div>
              <div className="form-row-1">
                <input
                  type="text"
                  className="checkout-input"
                  placeholder="Địa chỉ"
                  required
                />
              </div>
              <div className="form-row-1">
                <textarea
                  className="checkout-textarea"
                  rows="4"
                  placeholder="Yêu cầu khác (không bắt buộc)"
                ></textarea>
              </div>
              <button type="submit" className="btn-full-checkout">
                <FaCheck /> ĐẶT HÀNG NGAY
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
