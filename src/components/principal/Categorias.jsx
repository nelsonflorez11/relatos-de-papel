import React, { useEffect, useState } from "react";
import "../../styles/Principal/Filtros.css";

function Categorias({ onfiltroCategorias }) {
    const [categorias, setCategorias] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

    useEffect(() => {
      const fetchCategorias = async () => {
        try {
          const response = await fetch("http://50.18.42.172:8762/buscador-ms/books/categorias");
          const data = await response.json();
          setCategorias(data);
        } catch (error) {
          console.error("Error al obtener las categorías:", error);
        }
      };

        fetchCategorias();
    }, []);

    useEffect(() => {
        onfiltroCategorias(categoriaSeleccionada);
    }, [categoriaSeleccionada, onfiltroCategorias]);

    const handleChange = (e) => {
        setCategoriaSeleccionada(e.target.value);
    };

    return (
        <>
            <div className="Categorias__titulo">
                <p>Categoría</p>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="categoria"
                    value="Todas"
                    checked={categoriaSeleccionada === "Todas"}
                    onChange={handleChange}
                />
                <label className="form-check-label">Todas</label>
            </div>
            {categorias.map((cat) => (
                <div className="form-check" key={cat.nombre}>
                    <input
                        className="form-check-input"
                        type="radio"
                        name="categoria"
                        value={cat.nombre}
                        checked={categoriaSeleccionada === cat.nombre}
                        onChange={handleChange}
                    />
                    <label className="form-check-label">
                        {cat.nombre} ({cat.cantidad})
                    </label>
                </div>
            ))}
        </>
    );
}

export default Categorias;