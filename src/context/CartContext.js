import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  //Funcion agregar productos
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  //funcion verificar si esta en el carrito
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  //Funcion remover producto
  const deleteItem = (id) => {
    const auxCart = cart.filter((prod) => prod.id !== id);
    setCart(auxCart);
  };

  //Funcion vaciar carrito
  const clearCart = () => setCart([]);

  const values = {
    cart,
    addToCart,
    isInCart,
    deleteItem,
    clearCart
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartProvider;
