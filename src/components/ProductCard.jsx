import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./ProductCard.css";

const ProductCard = ({ id, image, name, price, oldPrice, isNew, onBuyNow }) => {
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleDetailsClick = () => {
    if (id) {
      navigate(`/product/${id}`);
    }
  };

  const toggleWishlist = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <motion.div 
      className="product-card"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="product-image-wrapper">
        <img
          src={image}
          alt={name}
          className="product-image"
          onClick={handleDetailsClick}
          style={{ cursor: "pointer" }}
        />
        {isNew && <span className="product-badge">MỚI</span>}
        
        <button 
          className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
          onClick={toggleWishlist}
          title={isWishlisted ? "Xóa khỏi yêu thích" : "Thêm vào yêu thích"}
        >
          {isWishlisted ? <FaHeart /> : <FaRegHeart />}
        </button>

        <div className="product-overlay">
          <button
            className="overlay-btn btn-buy"
            onClick={() => onBuyNow && onBuyNow({ id, image, name, price })}
          >
            Mua ngay
          </button>
          <button
            className="overlay-btn btn-details"
            onClick={handleDetailsClick}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
      <div
        className="product-info"
        onClick={handleDetailsClick}
        style={{ cursor: "pointer" }}
      >
        <h3 className="product-name" title={name}>
          {name}
        </h3>
        <div className="product-price-wrapper">
          <span className="product-price">{price}</span>
          {oldPrice && <span className="product-old-price">{oldPrice}</span>}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;