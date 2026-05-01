import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { categories } from "../data/categories";
import { FaChevronRight, FaFilter } from "react-icons/fa";
import "./CategorySidebar.css";

const CategorySidebar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 });
  const sidebarRef = useScrollAnimation({ threshold: 0.1 });

  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange({ ...priceRange, [name]: parseInt(value) || 0 });
  };

  return (
    <div className="category-sidebar scroll-animate" ref={sidebarRef}>
      {/* Category List Section */}
      <div className="sidebar-section">
        <div className="sidebar-header">
          <h3 className="sidebar-title">Danh mục sản phẩm</h3>
        </div>

        <ul className="category-list">
          {categories.level1.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <li key={category.id} className="category-item">
                <div
                  className={`category-item-header ${isActive ? "active" : ""}`}
                  onClick={() => toggleCategory(category.id)}
                >
                  <span className="category-name">{category.name}</span>
                  <span className={`category-arrow ${isActive ? "rotate" : ""}`}>
                    <FaChevronRight />
                  </span>
                </div>

                {/* Subcategory - Simple "All" option */}
                {isActive && (
                  <ul className="subcategory-list">
                    <li className="subcategory-item">
                      <a href={`#${category.id}`} className="subcategory-link active">
                        Tất cả {category.name}
                      </a>
                    </li>
                    <li className="subcategory-item">
                      <a href={`#${category.id}-popular`} className="subcategory-link">
                        Sản phẩm nổi bật
                      </a>
                    </li>
                    <li className="subcategory-item">
                      <a href={`#${category.id}-new`} className="subcategory-link">
                        Hàng mới về
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Price Filter Section */}
      <div className="sidebar-section price-filter-section">
        <div className="sidebar-header">
          <h3 className="sidebar-title">
            <FaFilter style={{ marginRight: '10px', fontSize: '0.8em' }} />
            Khoảng giá
          </h3>
        </div>
        
        <div className="price-filter-content">
          <div className="price-inputs">
            <div className="price-input-group">
              <span>Từ</span>
              <input 
                type="number" 
                name="min" 
                value={priceRange.min} 
                onChange={handlePriceChange}
                placeholder="0"
              />
            </div>
            <div className="price-input-group">
              <span>Đến</span>
              <input 
                type="number" 
                name="max" 
                value={priceRange.max} 
                onChange={handlePriceChange}
                placeholder="1.000.000"
              />
            </div>
          </div>

          <div className="price-presets">
            <label className="preset-item">
              <input type="checkbox" />
              <span>Dưới 100.000đ</span>
            </label>
            <label className="preset-item">
              <input type="checkbox" />
              <span>100.000đ - 500.000đ</span>
            </label>
            <label className="preset-item">
              <input type="checkbox" />
              <span>500.000đ - 1.000.000đ</span>
            </label>
            <label className="preset-item">
              <input type="checkbox" />
              <span>Trên 1.000.000đ</span>
            </label>
          </div>

          <button className="filter-apply-btn">Áp dụng</button>
        </div>
      </div>

      {/* Featured Products Ad / Banner placeholder */}
      <div className="sidebar-banner">
        <div className="banner-content">
          <h4>Sản phẩm ưu đãi</h4>
          <p>Giảm đến 30% cho thiết bị Rạng Đông</p>
          <button className="banner-btn">Xem ngay</button>
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;

