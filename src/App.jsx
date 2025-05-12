// src/App.jsx
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Copyright from "./components/copyright/copyright.jsx";
import Principal from "./pages/Principal.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
            <Footer />
            <Copyright />
        </>
    );
}

export default App;
