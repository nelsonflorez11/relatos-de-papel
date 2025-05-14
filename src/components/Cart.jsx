//este componente se encarga de mostrar el carrito de compras
// y los productos que el usuario ha agregado al carrito
// y el total de la compra
//
// el componente recibe como prop el carrito de compras que viene del estado
// del componente App
// y lo muestra en una lista
// si el carrito está vacío, muestra un mensaje indicando que está vacío
// si el carrito tiene productos, muestra una lista con los productos
// y el total de la compra
const Cart = ({ cart, removeFromCart }) => {
  const totalGeneral = cart.reduce((acc, item) => acc + item.totalPrice, 0);

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
        </>
      )}
    </div>
  );
};

export default Cart;