import "./copyright.css";

export default function Copyright() {
    return (
        <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Relatos de Papel. Todos los derechos reservados</p>
        </div>
    );
}