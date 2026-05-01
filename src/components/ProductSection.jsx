import ProductCard from "./ProductCard";
import { FaAngleRight } from "react-icons/fa";
import { useScrollAnimationChildren } from "../hooks/useScrollAnimation";
import "./ProductSection.css";

const ProductSection = ({ title, subTitle, linkText, products, onBuyNow }) => {
  const gridRef = useScrollAnimationChildren({ threshold: 0.1 });

  return (
    <section className="product-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper">
            <h2 className="section-title">{title}</h2>
            <div className="section-title-arrow"></div>
          </div>
          <div className="section-header-right">
            {subTitle && <span className="section-subtitle">{subTitle}</span>}
            {linkText && (
              <a href="#" className="section-link">
                {linkText} <FaAngleRight />
              </a>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid" ref={gridRef}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              isNew={product.isNew}
              onBuyNow={() => onBuyNow(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
