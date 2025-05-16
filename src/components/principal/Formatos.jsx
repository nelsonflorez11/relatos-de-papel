import React, { useEffect, useState } from "react";
import "../../styles/Principal/Formatos.css";
function Formatos({ onfiltroFormato }) {
  const [formato, setFormato] = useState({
    fisico: true,
    digital: true,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormato((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
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
          type="checkbox"
          name="fisico"
          checked={formato.fisico}
          onChange={handleChange}
        />
        <label className="form-check-label">Físico</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="digital"
          checked={formato.digital}
          onChange={handleChange}
        />
        <label className="form-check-label">Digital</label>
      </div>
    </>
  );
}

export default Formatos;
