const Cart = ({ cart }) => {
    return (
      <div className="container py-5">
        <h2>Carrito de Compras</h2>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong> - ${item.price} x {item.quantity}
                </div>
                <span>Total: ${item.totalPrice}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Cart;