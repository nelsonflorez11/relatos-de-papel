import React, { useEffect, useState } from "react";
import "../../styles/Principal/Filtros.css";

function Categorias({ onfiltroCategorias }) {
    const [categoria, setCategoria] = useState("Todas");

    const handleChange = (e) => {
        setCategoria(e.target.value);
    };

    useEffect(() => {
        onfiltroCategorias(categoria);
    }, [categoria]);

    return (
        <>
            <div className="Categorias__titulo">
                <p>Categoria</p>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="categoria"
                    value="Todas"
                    checked={categoria === "Todas"}
                    onChange={handleChange}
                />
                <label className="form-check-label">Todas</label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="categoria"
                    value="Novela"
                    checked={categoria === "Novela"}
                    onChange={handleChange}
                />
                <label className="form-check-label">Novela</label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="categoria"
                    value="Cuento"
                    checked={categoria === "Cuento"}
                    onChange={handleChange}
                />
                <label className="form-check-label">Cuento</label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="categoria"
                    value="Ensayo"
                    checked={categoria === "Ensayo"}
                    onChange={handleChange}
                />
                <label className="form-check-label">Ensayo</label>
            </div>
        </>
    );
}

export default Categorias;