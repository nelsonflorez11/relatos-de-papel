import "./App.css";
import {Routes, Route, useLocation} from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Copyright from "./components/copyright/copyright";
import Principal from "./pages/Principal";
import ProductDetail from "./components/ProductDetail";
import Landing from "./pages/landing";

function App() {

    const hideHeaderOnRoutes = ["/"];
    const hideHeader = hideHeaderOnRoutes.includes(useLocation().pathname);

    return (
        <>
            {!hideHeader && <Header />}
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/tienda" element={<Principal />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
            <Footer />
            <Copyright />
        </>
    );
}

export default App;
