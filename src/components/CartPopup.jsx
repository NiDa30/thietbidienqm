import { useNavigate } from "react-router-dom";
import {
  FaTimes,
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import "./CartPopup.css";

const CartPopup = ({
  isOpen,
  onClose,
  cartItems,
  updateQuantity,
  removeItem,
}) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

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

  const handleCheckoutClick = () => {
    onClose();
    navigate("/cart");
  };

  return (
    <div className="cart-popup-overlay" onClick={onClose}>
      <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <div className="cart-header-left">
            <FaShoppingCart className="header-icon" />
            <h2>GIỎ HÀNG CỦA BẠN ({cartItems.length} sản phẩm)</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart-state">
              <FaShoppingCart className="empty-icon" />
              <p>Giỏ hàng của bạn đang trống</p>
              <button className="btn-continue-shopping" onClick={onClose}>
                Tiếp tục mua sắm
              </button>
            </div>
          ) : (
            <>
              <table className="cart-table">
                <thead>
                  <tr>
                    <th className="col-image">Hình Ảnh</th>
                    <th className="col-name">Tên Sản Phẩm</th>
                    <th className="col-qty">Số Lượng</th>
                    <th className="col-total">Thành Tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="col-image">
                        <div className="cart-item-image-wrapper">
                          <img src={item.image} alt={item.name} />
                          <button
                            className="remove-item-btn"
                            onClick={() => removeItem(item.id)}
                            title="Xóa sản phẩm"
                          >
                            <FaTimes />
                          </button>
                        </div>
                      </td>
                      <td className="col-name">
                        <span className="cart-item-name">{item.name}</span>
                      </td>
                      <td className="col-qty">
                        <div className="qty-control">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.quantity <= 1}
                          >
                            <FaMinus />
                          </button>
                          <input type="text" value={item.quantity} readOnly />
                          <button onClick={() => updateQuantity(item.id, 1)}>
                            <FaPlus />
                          </button>
                        </div>
                      </td>
                      <td className="col-total">
                        <span className="cart-item-total">
                          {formatPrice(parsePrice(item.price) * item.quantity)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span>Tạm tính:</span>
              <span className="subtotal-amount">{formatPrice(total)}</span>
            </div>
            <div className="cart-actions">
              <button className="btn-continue" onClick={onClose}>
                <FaArrowLeft /> Tiếp tục mua hàng
              </button>
              <button className="btn-checkout" onClick={handleCheckoutClick}>
                Thanh toán <FaArrowRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPopup;
