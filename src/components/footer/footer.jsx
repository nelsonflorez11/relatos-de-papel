import './footer.css'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 mb-3">
                        <h2>Relatos de Papel</h2>
                        <p>Tu librería online de confianza</p>
                    </div>
                    <div className="col-12 col-md-3 mb-3">
                        <h2>Enlaces</h2>
                        <p> Sobre Nosotros</p>
                        <p>Contacto</p>
                    </div>
                    <div className="col-12 col-md-3 mb-3">
                        <h2>Ayuda</h2>
                        <p>Envíos</p>
                        <p>Devoluciones</p>
                    </div>
                    <div className="col-12 col-md-3 mb-3">
                        <h2>Síguenos</h2>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-youtube"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
}
