import { useState, useEffect } from "react";

import "../../styles/Principal/ProductList.css";
import Paginacion from "./Paginacion";
import Product from "./Product";
function ListaLibros({ data }) {
  const [listLibros, setListLibros] = useState([]);
  const [listLibrosVisibles, setListLibrosVisibles] = useState([]);

  const [cantLibrosPorPagina, setCantLibrosPorPagina] = useState(0);

  useEffect(() => {
    setListLibros(data);
    setCantLibrosPorPagina(4);
    setListLibrosVisibles(data.slice(0, cantLibrosPorPagina));
  }, [data, cantLibrosPorPagina]);

  function ActualizarCantidadLibrosPorPagina(pageNumber) {
    let startIndex = (pageNumber - 1) * cantLibrosPorPagina;
    let endIndex = startIndex + cantLibrosPorPagina;
    setListLibrosVisibles(listLibros.slice(startIndex, endIndex));
  }
  return (
    <>
      {listLibrosVisibles.map((product) => (
          <Product libro={product} key={product.id} />
      ))}
      <Paginacion
        librosPorPagina={cantLibrosPorPagina}
        totalLibros={listLibros.length}
        paginate={ActualizarCantidadLibrosPorPagina}
      />
    </>
  );
}
export default ListaLibros;
