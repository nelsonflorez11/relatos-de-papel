import { useEffect, useState } from "react";
import "../styles/Principal/Principal.css";
import BarraBusqueda from "../components/principal/BarraBusqueda";
import ListaLibros from "../components/principal/ProductList";
import RangoPrecios from "../components/principal/RangoPrecios";
import FormatosComponent from "../components/principal/Formatos";
import CategoriasComponent from "../components/principal/Categorias";

const Principal = () => {
  const [listLibros, setListLibros] = useState([]);
  const [libroMaxPrice, setLibroMaxPrice] = useState(0);
  const [listLibrosFiltrados, setListLibrosFiltrados] = useState([]);

  // filtros a aplicar
  const [busquedaFiltro, setBusquedaFiltro] = useState({ tipo: "titulo", valor: "" });
  const [tipoFormatoFiltro, setTipoFormatoFiltro] = useState({});
  const [tipoCategoriasFiltro, setTipoCategoriasFiltro] = useState({});
  const [precioMaxFiltro, setPrecioMaxFiltro] = useState(libroMaxPrice);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8762/buscador-ms/books");
        const productsResponse = await response.json();
        const products = productsResponse.books;

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
    const fetchFiltrados = async () => {
      try {
        const params = new URLSearchParams();
        if (busquedaFiltro.valor) params.append(busquedaFiltro.tipo, busquedaFiltro.valor);
        /*if (precioMaxFiltro) params.append("maxPrice", precioMaxFiltro);*/

        if (tipoFormatoFiltro && tipoFormatoFiltro !== 'Todos') params.append("formato", tipoFormatoFiltro);
        if (tipoCategoriasFiltro && tipoCategoriasFiltro !== 'Todas') params.append("categoria", tipoCategoriasFiltro);

        const url = `http://localhost:8762/buscador-ms/books?${params.toString()}`;

        console.log(url);

        const response = await fetch(url);
        const result = await response.json();
        setListLibrosFiltrados(result.books);
      } catch (error) {
        console.error("Error al filtrar libros:", error);
      }
    };

    fetchFiltrados();
  }, [busquedaFiltro, tipoFormatoFiltro, precioMaxFiltro, tipoCategoriasFiltro]);

  const handleFiltroPrecio = (precio) => {
    setPrecioMaxFiltro(precio);
  };

  const handleFiltroBusqueda = (tipo, valor) => {
    setBusquedaFiltro({ tipo, valor });
  };

  const handleFiltroFormato = (formato) => {
    setTipoFormatoFiltro(formato);
  };

  const handleFiltroCategorias = (categorias) => {
    setTipoCategoriasFiltro(categorias);
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
            <div className="principal__filtros__categorias">
              <CategoriasComponent onfiltroCategorias={handleFiltroCategorias} />
            </div>
          </div>
        </div>
        <div className="col col-md-8 col-lg-8  m-3 p-3 principal__biblioteca">
          <div className="row mt-3 mb-3">
            <BarraBusqueda onFiltroBusqueda={handleFiltroBusqueda} />
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
