import { createContext, useState } from "react";

const HandleCartItems = (cartItems, producttoAdd) => {
  const ExistingProduct = cartItems.find((item) => item.id === producttoAdd.id);

  if (ExistingProduct) {
    return cartItems.map((item) =>
      item.id === producttoAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    );
  }
  return [...cartItems, { ...producttoAdd, quantity: 1 }];
};

export const ShoppingCartContext = createContext({
  isCartOpen: false,
  setCartState: () => {},
  cartItems: [],
  setCartItems: () => null,
});

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartState] = useState(false);

  const addCartItems = (producttoAdd) => {
    setCartItems(HandleCartItems(cartItems, producttoAdd));
  };

  const value = { cartItems, addCartItems, isCartOpen, setCartState };
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
