import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="container py-5">Producto no encontrado.</div>;
  }

  return (
    <div className="container py-5">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h4 className="text-primary">${product.price}</h4>

      {/* Botón para regresar */}
      <Link to="/" className="btn btn-secondary mt-4">
        ← Volver a la tienda
      </Link>
    </div>
  );
};

export default ProductDetail;