import { Link } from "react-router-dom";

function ProductDetail(props) {
  return (
    <div className="col col-12 col-lg-4" key={props.libro.isbn}>
      <div className="card card__container shadow-sm">
        <div className="card-header">
          {/* Imagen del libro */}
          <img
            className="card-header-img card-img-top"
            src={props.libro.image} // Añadir la URL de la imagen aquí
          />
        </div>
        <div className="card-body card-body__libro d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title card-text__titulo">{props.libro.title}</h5>
          </div>
          <div>
            <p className="card-text card-text__autor">
              Autor: {props.libro.author}
            </p>
            <p className="card-text card-text__precio">$ {props.libro.price}</p>
          </div>
        </div>
        <div className="card-footer__libro mt-auto">
          <div className="row">
            <Link
              to={`/product/${props.libro.isbn}`}
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
