import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
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
                    <Link to="/carrito" className="btn btn-outline-primary">
                        🛒 Ver carrito
                    </Link>
                </div>
            </div>
        </header>
    );
}
