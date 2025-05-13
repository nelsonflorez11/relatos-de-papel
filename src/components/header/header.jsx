import "./header.css";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to={"/"}><h1>Relatos de Papel</h1></Link>
        </header>
    );
}