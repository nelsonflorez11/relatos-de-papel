import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../data/products';

const ProductDetail = ({ addToCart }) => {
    const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find(p => p.id === parseInt(id));
    setProduct(found);
  }, [id]);

  if (!product) {
    return <div className="container py-5">Producto no encontrado o cargando...</div>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={product.Image}
            alt={product.name}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-8">
          <h2>{product.name}</h2>
          <p className="text-muted"><strong>{product.autor}</strong></p>
          <p><strong>Precio:</strong> ${product.price}</p>
          <p><strong>Descripción:</strong> {product.description}</p>

          <div className="border rounded p-3 bg-light mt-4">
            <h5 className="mb-3">Ficha técnica del producto</h5>
            <ul className="list-unstyled">
              <li><strong>Formato:</strong> {product.specs.formato}</li>
              <li><strong>Autor:</strong> {product.autor}</li>
              <li><strong>Idioma:</strong> {product.specs.idioma}</li>
              <li><strong>Editorial:</strong> {product.specs.editorial}</li>
              <li><strong>Año de publicación:</strong> {product.specs.publicacion}</li>
            </ul>
          </div>

          <div className="mt-4">
            <button className="btn btn-primary me-2" onClick={() => addToCart(product)}>
              Agregar al carrito
            </button>
            <button className="btn btn-primary">Comprar ahora</button>
          </div>

          <Link to="/tienda" className="btn btn-link mt-4 d-block">← Volver a la tienda</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;