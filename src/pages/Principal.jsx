import { useEffect, useState } from "react";
import "../styles/Principal/Principal.css";
import BarraBusqueda from "../components/principal/BarraBusqueda";
import ListaLibros from "../components/principal/ProductList";
import RangoPrecios from "../components/principal/RangoPrecios";
import FormatosComponent from "../components/principal/Formatos";

const Principal = () => {
  const [listLibros, setListLibros] = useState([]);
  const [libroMaxPrice, setLibroMaxPrice] = useState(0);
  const [listLibrosFiltrados, setListLibrosFiltrados] = useState([]);

  // filtros a aplicar
  const [tituloFiltro, setTituloFiltro] = useState("");
  const [tipoFormatoFiltro, setTipoFormatoFiltro] = useState({});
  const [precioMaxFiltro, setPrecioMaxFiltro] = useState(libroMaxPrice);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8762/buscador-ms/books");
        const products = await response.json();

        setListLibros(products);

        // calcular el precio maximo de los libros para el rango de precios
        const valorMax = products.reduce((libroMayor, libroActual) => {
          return !libroMayor || libroActual.price > libroMayor.price
              ? libroActual
              : libroMayor;
        }, null)?.price;

        setPrecioMaxFiltro(valorMax || 0);
        setLibroMaxPrice(valorMax || 0);
        setListLibrosFiltrados(products);
      } catch (error) {
        console.error("Error al obtener libros:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setListLibrosFiltrados(filterBooks());
  }, [precioMaxFiltro, tituloFiltro, tipoFormatoFiltro]);

  const handleFiltroPrecio = (precio) => {
    setPrecioMaxFiltro(precio);
  };

  const handleFiltroTitulo = (title) => {
    setTituloFiltro(title);
  };
  const handleFiltroFormato = (formato) => {
    setTipoFormatoFiltro(formato);
  };

  const filterBooks = () => {
    return listLibros.filter((libro) => {
      if (precioMaxFiltro && libro.price > precioMaxFiltro) return false;
      if (
        tituloFiltro &&
        !libro.name.toLowerCase().includes(tituloFiltro.toLowerCase())
      )
        return false;
      if (
        Object.keys(tipoFormatoFiltro).length > 0 &&
        !tipoFormatoFiltro[libro.type]
      )
        return false;

      return true;
    });
  };

  return (
    <div className="container container__principal bg-light">
      <div className="row g-2 p-1 ">
        <div className="col col-md-2 col-lg-3  m-3 p-4 ">
          <p className="fw-bold fs-4">Filtros</p>
          <div className="principal__filtros">
            <div className="principal__filtros__rangoPrecio">
              <RangoPrecios
                onFiltroPrecio={handleFiltroPrecio}
                maxValueRange={libroMaxPrice}
              />
            </div>
            <div className="principal__filtros__formatos">
              <FormatosComponent onfiltroFormato={handleFiltroFormato} />
            </div>
          </div>
        </div>
        <div className="col col-md-8 col-lg-8  m-3 p-3 principal__biblioteca">
          <div className="row mt-3 mb-3">
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
