import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { updateCartItems } from '../data/cartItems';

const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();
  const totalGeneral = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  useEffect(() => {
    // Actualizar cartItems cada vez que el carrito cambie
    updateCartItems(cart);
  }, [cart]);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">🛒 Productos en tu carrito</h2>

      {cart.length === 0 ? (
        <p className="text-muted">Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="card mb-3 shadow-sm">
              <div className="card-body d-flex align-items-center">
                {/* Imagen */}
                {item.Image && (
                  <img
                    src={item.Image}
                    alt={item.name}
                    className="me-3 rounded"
                    style={{ width: '100px', height: 'auto' }}
                  />
                )}

                {/* Información del libro */}
                <div className="flex-grow-1">
                  <h3 className="card-title mb-2">{item.name}</h3>
                  <p className="mb-1"><strong>Precio unitario:</strong> ${item.price}</p>
                  <p className="mb-1"><strong>Cantidad:</strong> {item.quantity}</p>
                  <p className="mb-0"><strong>Total del producto:</strong> ${item.totalPrice}</p>
                </div>

                {/* Botón reducir cantidad */}
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  ✖
                </button>
              </div>
            </div>
          ))}

          <div className="text-end mt-4">
            <h4 className="fw-bold">🧾 Total general: ${totalGeneral}</h4>
          </div>

          <div className="text-center mt-4">
            <button 
              className="btn btn-primary btn-lg" 
              onClick={handleCheckout}
              disabled={cart.length === 0}
            >
              Proceder con el pago
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;