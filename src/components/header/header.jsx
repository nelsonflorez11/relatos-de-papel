import "./header.css";
import { Link } from "react-router-dom";
import { getCartItems } from "../../data/cartItems";
import { useEffect, useState } from "react";

export default function Header() {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const updateCartCount = () => {
            const items = getCartItems();
            const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
            setCartCount(totalItems);
        };

        // Actualizar el contador inicialmente
        updateCartCount();

        // Actualizar el contador cada segundo para mantenerlo sincronizado
        const interval = setInterval(updateCartCount, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header>
            <div className="header__content">
                <div className="header__content--left">
                    <Link to="/" className="site-title">
                        <h1>Relatos de Papel</h1>
                    </Link>
                </div>
                <nav className="header__content--center">
                    <Link to="/tienda" className="nav-link">Inicio</Link>
                    <Link to="/sobre-nosotros" className="nav-link">Sobre Nosotros</Link>
                    <Link to="/contacto" className="nav-link">Contacto</Link>
                </nav>
                <div className="header__content--right">
                    <Link to="/carrito" className="btn btn-outline-primary position-relative">
                        🛒 Ver carrito
                        {cartCount > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}
