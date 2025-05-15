import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 mb-3">
                        <Link to={"/"}><h2>Relatos de Papel</h2></Link>
                        <p>Tu librería online de confianza</p>
                    </div>
                    <div className="col-12 col-md-3 mb-3">
                        <h2>Enlaces</h2>
                        <Link to={"/sobre-nosotros"}><p> Sobre Nosotros</p></Link>
                        <Link to={"/contacto"}><p>Contacto</p></Link>
                    </div>
                    <div className="col-12 col-md-3 mb-3">
                        <h2>Ayuda</h2>
                        <Link to={"#"}><p>Envíos</p></Link>
                        <Link to={"#"}><p>Devoluciones</p></Link>
                    </div>
                    <div className="col-12 col-md-3 mb-3">
                        <h2>Síguenos</h2>
                        <Link to={"#"}><i className="bi bi-facebook"></i></Link>
                        <Link to={"#"}><i className="bi bi-instagram"></i></Link>
                        <Link to={"#"}><i className="bi bi-youtube"></i></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
