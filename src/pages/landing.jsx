import React from "react";
import { Link } from "react-router-dom";
import useRedirect from "../hooks/useRedirect.jsx";

function Landing() {

    useRedirect("/tienda", 5000);

    return (
        <div className="landing">
            <div className="container landing--link">
                <Link to={"/tienda"}>
                <h1>Bienvenidos a Relatos de Papel</h1>
                </Link>
            </div>
        </div>
    );
}

export default Landing;