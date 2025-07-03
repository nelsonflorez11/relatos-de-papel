import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false);

  const showMessage = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 4000);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8762/buscador-ms/books");
        const products = await response.json();

        const found = products.find(p => p.isbn === parseInt(id));
        setProduct(found);
      } catch (error) {
        console.error("Error al obtener libros:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <div className="container py-5">Producto no encontrado o cargando...</div>;
  }

  return (
    <div className="container py-5">
      {added && (
          <div className="alert alert-success text-center">
            ¡Producto añadido al carrito exitosamente!
          </div>
      )}
      <div className="row">
        <div className="col-md-4">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-8">
          <h2>{product.title}</h2>
          <p className="text-muted"><strong>{product.author}</strong></p>
          <p><strong>Precio:</strong> ${product.price}</p>
          <p><strong>Descripción:</strong> {product.description}</p>

          <div className="border rounded p-3 bg-light mt-4">
            <h5 className="mb-3">Ficha técnica del producto</h5>
            <ul className="list-unstyled">
              <li><strong>Formato:</strong> {product.formato}</li>
              <li><strong>Autor:</strong> {product.author}</li>
              <li><strong>Idioma:</strong> {product.idioma}</li>
              <li><strong>Editorial:</strong> {product.editorial}</li>
              <li><strong>Año de publicación:</strong> {product.publicacion}</li>
            </ul>
          </div>

          <div className="mt-4">
            <button className="btn btn-primary me-2" onClick={() => {
              addToCart(product);
              showMessage();
            }}>
              Agregar al carrito
            </button>
          </div>

          <Link to="/tienda" className="btn btn-link mt-4 d-block">← Volver a la tienda</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;