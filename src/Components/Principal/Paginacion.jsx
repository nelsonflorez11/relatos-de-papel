import React from "react";
import { useEffect, useState } from "react";

const Paginacion = ({ librosPorPagina, totalLibros, paginate }) => {
  const [pageNumbers, setPageNumbers] = useState([]);
  const [pageNumberActual, setPageNumberActual] = useState(1);
  useEffect(() => {
    const numbers = [];
    for (let i = 1; i <= Math.ceil(totalLibros / librosPorPagina); i++) {
      numbers.push(i);
    }
    setPageNumbers(numbers);
  }, [totalLibros, librosPorPagina]);

  function handlePageChange(number, isNext) {
    if (isNext && number < pageNumbers.length) {
      setPageNumberActual(number + 1);
      console.log("next");
      paginate(number + 1);
    } else if (!isNext && number > 1) {
      console.log("next");
      setPageNumberActual(number - 1);
      paginate(number - 1);
    }
  }
  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item">
          <button
            id="prevPage"
            className="page-link"
            onClick={() => {
              handlePageChange(pageNumberActual, false);
            }}
          >
            Anterior
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => {
                setPageNumberActual(number);
                paginate(number);
              }}
              className="page-link"
            >
              {number}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            id="nextPage"
            className="page-link"
            onClick={() => handlePageChange(pageNumberActual, true)}
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Paginacion;
