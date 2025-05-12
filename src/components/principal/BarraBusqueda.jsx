import "../../styles/Principal/BarraBusqueda.css";
function BarraBusqueda({ onFiltroTitulo }) {
  function handleFiltroTitulo(valorBusqueda) {
    onFiltroTitulo(valorBusqueda);
  }
  return (
    <>
      <div className="col-10">
        <input
          type="text"
          className="form-control"
          id="inputBusqueda"
          placeholder="Buscar libros por titulo"
          onChange={(e) => handleFiltroTitulo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleFiltroTitulo(e.target.value);
            }
          }}
        />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-primary">
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
