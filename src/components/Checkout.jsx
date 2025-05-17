import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { getCartItems, clearCart } from '../data/cartItems';

const Checkout = ({ setCart }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  };

  const handlePayment = () => {
    alert('¡Gracias por tu compra! El total a pagar es: $' + calculateTotal().toFixed(2));
    clearCart();
    sessionStorage.removeItem('cart');
    setCart([]);
    navigate('/tienda');
  };

  const handleGoBack = () => {
    navigate('/carrito');
  };

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col">
          <button 
            className="btn btn-outline-primary"
            onClick={handleGoBack}
          >
            ← Volver
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Resumen de tu Compra</h3>
            </div>
            <div className="card-body">
              {cartItems.length === 0 ? (
                <p className="text-muted">No hay productos en el carrito.</p>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="card mb-3">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-md-8">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text">
                            <small className="text-muted">
                              Cantidad: {item.quantity} x ${item.price}
                            </small>
                          </p>
                        </div>
                        <div className="col-md-4 text-end">
                          <p className="mb-0">${item.totalPrice.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Detalles del Pago</h4>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Envío:</span>
                <span>Gratis</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>Total:</strong>
                <strong>${calculateTotal().toFixed(2)}</strong>
              </div>
              <button 
                className="btn btn-success w-100 mb-3" 
                onClick={handlePayment}
                disabled={cartItems.length === 0}
              >
                Confirmar y Pagar
              </button>
              <p className="text-muted small text-center">
                Al proceder con el pago, aceptas nuestros términos y condiciones
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 