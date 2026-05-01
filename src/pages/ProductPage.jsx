import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimationChildren } from "../hooks/useScrollAnimation";
import { FaThLarge, FaList, FaSortAmountDown, FaSearch } from "react-icons/fa";
import CategorySidebar from "../components/CategorySidebar";
import ProductCard from "../components/ProductCard";
import "./ProductPage.css";

// Import product images
import DenLedAmTranDownlight from "../assets/sp/SP_Đèn LED âm trần Downlight.jpg";
import DenLedAmTranChinhHuongDoi from "../assets/sp/SP_Đèn LED âm trần chỉnh hướng đôi.jpg";
import DenLedAmTranChinhHuong from "../assets/sp/SP_Đèn LED âm trần chỉnh hướng.jpg";
import DenLedTuyp from "../assets/sp/SP_Đèn Led Tuyp.jpg";
import DenLebBulb from "../assets/sp/SP_Đèn leb bulb.jpg";
import DenLedNhaXuongHighBay from "../assets/sp/SP_Đèn led nhà xưởng HighBay 100W.jpg";
import DenLedRayRot from "../assets/sp/SP_Đèn led ray rọi.jpg";
import DenChinhHuong from "../assets/sp/SP_đèn chỉnh hướng.jpg";

// Product data using actual images
const categoryProducts = [
  { id: "c1", image: DenLebBulb, name: "Bóng đèn LED BULB Rạng Đông", price: "151.900đ", isNew: true },
  { id: "c2", image: DenLedAmTranDownlight, name: "Bóng đèn LED BULB Philips", price: "89.100đ" },
  { id: "c3", image: DenLedAmTranChinhHuongDoi, name: "Bóng Led Bulb Rạng Đông 12W", price: "337.260đ" },
  { id: "c4", image: DenLedAmTranChinhHuong, name: "Bóng đèn LED Bulb Panasonic", price: "318.010đ" },
  { id: "c5", image: DenLedTuyp, name: "Bóng đèn LED BULB TLC", price: "120.000đ" },
  { id: "c6", image: DenLedNhaXuongHighBay, name: "Bóng đèn LED Rạng Đông 9W", price: "145.000đ" },
  { id: "c7", image: DenLedRayRot, name: "Bóng đèn LED BULB Kosoom", price: "95.000đ" },
  { id: "c8", image: DenChinhHuong, name: "Bóng đèn LED BULB Duhal", price: "110.000đ" },
  { id: "p1", image: DenLebBulb, name: "LED SLIM PANEL RP-6W", price: "80.300đ", oldPrice: "95.000đ" },
  { id: "p2", image: DenLedAmTranDownlight, name: "LED SLIM PANEL RP-9W", price: "97.000đ" },
  { id: "p3", image: DenLedAmTranChinhHuongDoi, name: "LED SLIM PANEL RP-12W", price: "119.550đ" },
  { id: "p4", image: DenLedAmTranChinhHuong, name: "LED SLIM PANEL RP-18W", price: "172.700đ" },
  { id: "p5", image: DenLedTuyp, name: "LED SLIM PANEL RP-24W", price: "247.150đ" },
  { id: "p6", image: DenLedNhaXuongHighBay, name: "ĐÈN LED MULTI PANEL 36W", price: "322.300đ" },
  { id: "p7", image: DenLedRayRot, name: "ĐÈN LED MULTI PANEL 48W", price: "213.150đ" },
  { id: "p8", image: DenChinhHuong, name: "ĐÈN LED MULTI PANEL 60W", price: "300.300đ" },
];

const ProductPage = ({ onBuyNow }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState("grid");
  
  const gridRef = useScrollAnimationChildren({ threshold: 0.05 });

  // Helper to parse price string to number
  const parsePrice = (priceStr) => {
    return parseInt(priceStr.replace(/\./g, "").replace("đ", ""));
  };

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...categoryProducts];

    // Search filter
    if (searchTerm) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sorting
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        break;
      case "price-desc":
        result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return result;
  }, [searchTerm, sortBy]);

  return (
    <div className="product-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <ul className="breadcrumb">
            <li><Link to="/">Trang chủ</Link></li>
            <li><span className="separator">/</span></li>
            <li><Link to="/products">Sản phẩm</Link></li>
            <li><span className="separator">/</span></li>
            <li className="active">Đèn LED BULB</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="container product-page-inner">
        <div className="product-page-sidebar">
          <CategorySidebar />
        </div>
        
        <div className="product-page-content">
          <div className="category-banner-simple">
            <h1 className="category-title">Bóng đèn LED BULB</h1>
            <p className="category-description">
              Khám phá bộ sưu tập bóng đèn LED Bulb chất lượng cao từ các thương hiệu hàng đầu: Rạng Đông, Philips, Panasonic... Tiết kiệm điện năng, tuổi thọ bền bỉ.
            </p>
          </div>

          {/* Product Toolbar */}
          <div className="product-toolbar">
            <div className="toolbar-left">
              <span className="product-count">
                Hiển thị <strong>{filteredProducts.length}</strong> sản phẩm
              </span>
            </div>
            
            <div className="toolbar-right">
              {/* Search within page */}
              <div className="toolbar-search">
                <FaSearch className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Tìm trong mục này..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Sort Dropdown */}
              <div className="toolbar-sort">
                <FaSortAmountDown className="sort-icon" />
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="default">Sắp xếp: Mặc định</option>
                  <option value="price-asc">Giá: Thấp đến Cao</option>
                  <option value="price-desc">Giá: Cao đến Thấp</option>
                  <option value="name-asc">Tên: A - Z</option>
                  <option value="name-desc">Tên: Z - A</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="toolbar-view-mode">
                <button 
                  className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                  onClick={() => setViewMode("grid")}
                  title="Dạng lưới"
                >
                  <FaThLarge />
                </button>
                <button 
                  className={`view-btn ${viewMode === "list" ? "active" : ""}`}
                  onClick={() => setViewMode("list")}
                  title="Dạng danh sách"
                >
                  <FaList />
                </button>
              </div>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className={`product-grid-${viewMode}`} ref={gridRef}>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
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
          ) : (
            <div className="no-products-found">
              <div className="no-products-content">
                <FaSearch size={40} color="#ccc" />
                <h3>Không tìm thấy sản phẩm nào</h3>
                <p>Vui lòng thử lại với từ khóa khác hoặc xóa bộ lọc.</p>
                <button className="reset-filter-btn" onClick={() => {setSearchTerm(""); setSortBy("default");}}>
                  Xóa tìm kiếm
                </button>
              </div>
            </div>
          )}

          {/* Pagination Placeholder */}
          {filteredProducts.length > 8 && (
            <div className="pagination-wrapper">
              <button className="load-more-btn">Xem thêm sản phẩm</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

