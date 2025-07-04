import React, { useEffect, useState } from "react";
import "../../styles/Principal/RangoPrecios.css";

function RangoPrecios({ onFiltroPrecio, maxValueRange }) {
  const [valorMinimo, setValorMinimo] = useState(0);
  const [valorMaximo, setValorMaximo] = useState([]);
  const [valorActual, setValorActual] = useState(0);

  useEffect(() => {
    setValorMaximo(maxValueRange);
    setValorActual(maxValueRange);
  }, [maxValueRange]);

  function handleChange(value) {
    setValorActual(value);
  }

  function handleChangeEnd() {
    onFiltroPrecio(valorActual);
  }

  return (
    <div className="rangoPrecios">
      <div className="rangoPrecios__titulo">
        <p>Rango de precios ${valorActual}</p>
      </div>
      <input
        type="range"
        title={valorActual}
        min={valorMinimo}
        max={valorMaximo}
        value={valorActual}
        onChange={(e) => handleChange(e.target.value)}
        onMouseUp={handleChangeEnd}
        onTouchEnd={handleChangeEnd}
      />
      <div className="p-3 rangoPrecios__valores">
        <p>${valorMinimo}</p>
        <p>${valorActual}</p>
      </div>
    </div>
  );
}
export default RangoPrecios;
