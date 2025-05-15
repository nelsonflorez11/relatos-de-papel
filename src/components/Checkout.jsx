import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { cartItems as initialCartItems } from '../data/cartItems';

const Checkout = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handlePayment = () => {
    alert('¡Gracias por tu compra! El total a pagar es: $' + calculateTotal().toFixed(2));
  };

  const handleGoBack = () => {
    alert('Volviendo a la página anterior...');
    // Aquí iría la lógica de navegación
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
              {cartItems.map(item => (
                <div key={item.id} className="card mb-3">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">
                          <small className="text-muted">Autor: {item.author}</small><br />
                          Tipo: {item.type === 'físico' ? '📚 Físico' : '📱 Digital'}
                        </p>
                      </div>
                      <div className="col-md-2">
                        <div className="input-group">
                          <button 
                            className="btn btn-outline-secondary" 
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <input 
                            type="text" 
                            className="form-control text-center" 
                            value={item.quantity} 
                            readOnly 
                          />
                          <button 
                            className="btn btn-outline-secondary" 
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-0">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <div className="col-md-2">
                        <button 
                          className="btn btn-danger" 
                          onClick={() => removeItem(item.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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