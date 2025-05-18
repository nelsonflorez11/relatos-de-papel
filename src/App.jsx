import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Copyright from "./components/copyright/copyright";
import Principal from "./pages/Principal";
import ProductDetail from "./components/ProductDetail";
import Landing from "./pages/landing";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import AboutUs from "./components/AboutUs.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  // Cargar carrito desde sessionStorage al inicio
  const [cart, setCart] = useState(() => {
    const savedCart = sessionStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardar en sessionStorage cada vez que el carrito cambie
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.price,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
          totalPrice: product.price,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: (item.quantity - 1) * item.price,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const hideHeaderOnRoutes = ["/"];
  const hideHeader = hideHeaderOnRoutes.includes(useLocation().pathname);

  return (
    <>
      {!hideHeader && (
        <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      )}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tienda" element={<Principal />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/carrito" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout setCart={setCart} />} />
      </Routes>
      <Footer />
      <Copyright />
    </>
  );
}

export default App;