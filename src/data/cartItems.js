let cartItems = [];

export const getCartItems = () => cartItems;

export const updateCartItems = (newItems) => {
  cartItems = [...newItems];
};

export const clearCart = () => {
  cartItems = [];
}; 