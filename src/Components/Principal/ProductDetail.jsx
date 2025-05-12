import { Link } from "react-router-dom";
function ProductDetail(props) {
  return (
    <div className="col col-12 col-lg-4" key={props.libro.id}>
      <div className="card card-Container shadow-sm">
        <div className="card-header card-header-libro">
          <img className="card-header-img card-img-top" />
        </div>
        <div className="card-body card-body-libro d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title card-text__titulo">{props.libro.name}</h5>
          </div>
          <div>
            <p className="card-text card-text__autor">Autor: Desconocido</p>
            <p className="card-text card-text__precio">$ {props.libro.price}</p>
          </div>
        </div>
        <div className="card-footer-libro mt-auto">
          <div className="row">
            <Link
              to={`/product/${props.id}`}
              className="btn btn-outline-primary w-100 mt-2"
            >
              <div className="d-flex flex-row justify-content-center align-items-center">
                <span className="iconBook"></span>
                <div className="btn-text">Ver detalles</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
