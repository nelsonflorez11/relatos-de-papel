import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Copyright from "./components/copyright/copyright";
import Principal from "./pages/Principal";
import ProductDetail from "./components/ProductDetail";
import Landing from "./pages/landing";
import Cart from "./components/Cart"; // Asegúrate de tener este componente creado

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Carrito actualizado:", [...cart, product]);
  };

  const hideHeaderOnRoutes = ["/"];
  const hideHeader = hideHeaderOnRoutes.includes(useLocation().pathname);

  return (
    <>
      {!hideHeader && <Header cartCount={cart.length} />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tienda" element={<Principal />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/carrito" element={<Cart cart={cart} />} />
      </Routes>
      <Footer />
      <Copyright />
    </>
  );
}

export default App;