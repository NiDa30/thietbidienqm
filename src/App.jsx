import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActionButtons from "./components/FloatingActionButtons";
import CartPopup from "./components/CartPopup";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

// Import product images
import DenLedAmTranDownlight from "./assets/sp/SP_Đèn LED âm trần Downlight.jpg";
import DenLedAmTranChinhHuongDoi from "./assets/sp/SP_Đèn LED âm trần chỉnh hướng đôi.jpg";
import DenLedAmTranChinhHuong from "./assets/sp/SP_Đèn LED âm trần chỉnh hướng.jpg";
import DenLedTuyp from "./assets/sp/SP_Đèn Led Tuyp.jpg";
import DenLebBulb from "./assets/sp/SP_Đèn leb bulb.jpg";
import DenLedNhaXuongHighBay from "./assets/sp/SP_Đèn led nhà xưởng HighBay 100W.jpg";
import DenLedRayRot from "./assets/sp/SP_Đèn led ray rọi.jpg";
import DenChinhHuong from "./assets/sp/SP_đèn chỉnh hướng.jpg";

// Dummy data
const amTranProducts = [
  {
    id: "h1",
    image: DenLedAmTranDownlight,
    name: "Đèn LED âm trần Downlight...",
    price: "198.000đ",
  },
  {
    id: "h2",
    image: DenLedAmTranChinhHuongDoi,
    name: "Đèn LED âm trần chỉnh hướng đôi",
    price: "278.000đ",
  },
  {
    id: "h3",
    image: DenLedAmTranChinhHuong,
    name: "Đèn LED âm trần chỉnh hướng",
    price: "223.000đ",
  },
  {
    id: "h4",
    image: DenChinhHuong,
    name: "Đèn LED âm trần chỉnh hướ...",
    price: "215.000đ",
  },
  {
    id: "h5",
    image: DenLebBulb,
    name: "Âm trần siêu mỏng 9w - V...",
    price: "208.000đ",
  },
];

const opTranProducts = [
  {
    id: "h6",
    image: DenLedTuyp,
    name: "Led Ốp trần 24w vỏ đ...",
    price: "450.000đ",
  },
  {
    id: "h7",
    image: DenLedRayRot,
    name: "Đèn Led Ốp trần 12w vỏ đ...",
    price: "301.000đ",
  },
  {
    id: "h8",
    image: DenLedNhaXuongHighBay,
    name: "Đèn Led Ốp trần 24w vỏ tr...",
    price: "590.000đ",
  },
  {
    id: "h9",
    image: DenLebBulb,
    name: "Đèn Led Ốp trần 12w vỏ tr...",
    price: "281.000đ",
  },
  {
    id: "h10",
    image: DenLedAmTranDownlight,
    name: "Đèn Led Ốp trần 24w vỏ đ...",
    price: "585.000đ",
  },
];

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: "demo",
      image: DenLedAmTranDownlight,
      name: "LED PANEL DIMMABLE 6W SIZE NHỎ TRẮNG, VÀNG, TRUNG TÍNH",
      price: "195.400đ",
      quantity: 1,
    },
  ]);

  const handleBuyNow = (product) => {
    // Check if product already exists
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: product.quantity || 1 },
      ]);
    }
    setIsCartOpen(true);
  };

  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + change;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="app-container">
        <Header
          cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        />
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                amTranProducts={amTranProducts}
                opTranProducts={opTranProducts}
                onBuyNow={handleBuyNow}
              />
            }
          />
          <Route
            path="/products"
            element={<ProductPage onBuyNow={handleBuyNow} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetailPage onBuyNow={handleBuyNow} />}
          />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            }
          />
        </Routes>

        <Footer />
        <FloatingActionButtons />

        <CartPopup
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      </div>
    </Router>
  );
}

export default App;
