import React, { useEffect, useState } from "react";
import "../../styles/Principal/Filtros.css";
function Formatos({ onfiltroFormato }) {
  const [formato, setFormato] = useState("Todos");

  const handleChange = (e) => {
      setFormato(e.target.value);
  };

  useEffect(() => {
      onfiltroFormato(formato);
  }, [formato]);

  return (
    <>
      <div className="Formatos__titulo">
        <p>Formato</p>
      </div>
      <div className="form-check">
        <input
            className="form-check-input"
            type="radio"
            name="formato"
            value="Todos"
            checked={formato === "Todos"}
            onChange={handleChange}
        />
        <label className="form-check-label">Todos</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="formato"
          value="fisico"
          checked={formato === "fisico"}
          onChange={handleChange}
        />
        <label className="form-check-label">Físico</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="formato"
          value="digital"
          checked={formato === "digital"}
          onChange={handleChange}
        />
        <label className="form-check-label">Digital</label>
      </div>
    </>
  );
}

export default Formatos;
