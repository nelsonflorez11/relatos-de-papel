import React, { useEffect, useState } from "react";
import "../../styles/Principal/BarraBusqueda.css";

function BarraBusqueda({ onFiltroBusqueda }) {
  const [filtro, setFiltro] = useState("titulo");
  const [valorBusqueda, setValorBusqueda] = useState("");

  function handleFiltroChange(e) {
    setFiltro(e.target.value);
  }

  function handleInputChange(e) {
    setValorBusqueda(e.target.value);
  }

  function enviarBusqueda() {
    onFiltroBusqueda(filtro, valorBusqueda);
  }

  return (
    <>
      <div className="col-3">
        <select
          className="form-select"
          value={filtro}
          onChange={handleFiltroChange}>
          <option value="titulo">Por Título</option>
          <option value="author">Por Autor</option>
          <option value="description">Por Descripción</option>
        </select>
      </div>
      <div className="col-7">
        <input
          type="text"
          className="form-control"
          id="inputBusqueda"
          placeholder="Buscar libros"
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
                enviarBusqueda(e.target.value);
            }
          }}
        />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-primary" onClick={enviarBusqueda}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <span className="iconSearch"></span>
            <div className="button-text">Buscar</div>
          </div>
        </button>
      </div>
    </>
  );
}

export default BarraBusqueda;
