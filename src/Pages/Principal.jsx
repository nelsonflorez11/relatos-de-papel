import { useEffect, useState } from "react";
import "../styles/Principal/Principal.css";
import BarraBusqueda from "../components/Principal/BarraBusqueda";
import ListaLibros from "../components/Principal/ProductList";
import RangoPrecios from "../components/Principal/RangoPrecios";
import { products } from "../data/products";
import FormatosComponent from "../components/Principal/Formatos";
const Principal = () => {
  const [listLibros, setListLibros] = useState([]);
  const [libroMaxPrice, setLibroMaxPrice] = useState([]);
  const [listLibrosFiltrados, setListLibrosFiltrados] = useState([]);

  useEffect(() => {
    setListLibros(products);
    setListLibrosFiltrados(products);
    const valorMax = products.reduce((libroMayor, libroActual) => {
      if (!libroMayor || libroActual.price > libroMayor.price) {
        return libroActual;
      }
      return libroMayor;
    }, null)?.price;

    setLibroMaxPrice(valorMax);
  }, [products]);

  const handleFiltroPrecio = (precio) => {
    const librosFiltrados = listLibros.filter((libro) => {
      return parseFloat(libro.price) >= parseFloat(precio);
    });
    setListLibrosFiltrados(librosFiltrados);
  };
  const handleFiltroTitulo = (title) => {
    const librosFiltrados = listLibros.filter((libro) => {
      return libro.name
        .toString()
        .toLocaleLowerCase()
        .includes(title.toString().toLocaleLowerCase());
    });
    setListLibrosFiltrados(librosFiltrados);
  };
  return (
    <div className="container container--principal bg-light">
      <div className="row g-2 p-1">
        <div className="col col-md-2 col-lg-3  m-3 p-4 principal--filtros">
          <p>Filtros</p>
          <RangoPrecios
            onFiltroPrecio={handleFiltroPrecio}
            maxValueRange={libroMaxPrice}
          />
          <FormatosComponent />
        </div>
        <div className="col col-md-8 col-lg-8  m-3 p-3 principal--biblioteca">
          <div className="row m-3">
            <BarraBusqueda onFiltroTitulo={handleFiltroTitulo} />
          </div>
          <div className="row g-4">
            <ListaLibros data={listLibrosFiltrados} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
