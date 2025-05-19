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
  function handleFiltroPrecio(value) {
    setValorActual(value);
    onFiltroPrecio(value);
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
        onChange={(e) => handleFiltroPrecio(e.target.value)}
      />
      <div className="p-3 rangoPrecios__valores">
        <p>${valorMinimo}</p>
        <p>${valorMaximo}</p>
      </div>
    </div>
  );
}
export default RangoPrecios;
