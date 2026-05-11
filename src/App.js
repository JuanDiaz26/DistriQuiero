import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import SorteoSection from "./components/SorteoSection";
import SearchAndShowcase from "./components/SearchAndShowcase";
import ProductList from "./components/ProductList";
import ContentSections from "./components/ContentSections";
import BrandCarousel from "./components/BrandCarousel";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import WhatsAppButton from "./components/WhatsAppButton";
import { productsData } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <Header
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
      />
      <Hero />
      <SorteoSection />
      <Features />
      <SearchAndShowcase products={productsData} addToCart={addToCart} />
      <div id="productos">
        <ProductList products={productsData} addToCart={addToCart} />
      </div>
      <ContentSections />
      <BrandCarousel />
      <Footer />
      <Cart
        cart={cart}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
      <WhatsAppButton />
    </div>
  );
}

export default App;
