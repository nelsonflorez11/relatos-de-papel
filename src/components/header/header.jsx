import "./header.css";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to={"/"}><h1>Relatos de Papel</h1></Link>
            <nav className="navbar navbar-light bg-light px-3">
            <Link to="/tienda" className="navbar-brand">Tienda</Link>
            <Link to="/carrito" className="btn btn-outline-primary ms-auto">
                🛒 Ver carrito
            </Link>
    </nav>
        </header>
    );
}