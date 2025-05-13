const Cart = ({ cart }) => {
    return (
      <div className="container py-5">
        <h2>Carrito de Compras</h2>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <ul className="list-group">
            {cart.map((item, i) => (
              <li key={i} className="list-group-item">
                <strong>{item.name}</strong> - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Cart;