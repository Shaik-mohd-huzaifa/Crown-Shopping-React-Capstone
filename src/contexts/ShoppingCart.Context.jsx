import { createContext, useEffect, useState } from "react";

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
  totalQuantity: 0,
});

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartState] = useState(false);
  const [totalQuantity, setTotalQuanity] = useState(0);

  const addCartItems = (producttoAdd) => {
    setCartItems(HandleCartItems(cartItems, producttoAdd));
  };

  useEffect(() => {
    const countQuantity = cartItems.reduce(
      (accumulator, currentElement) => accumulator + currentElement.quantity,
      0,
    );
    setTotalQuanity(countQuantity);
  }, [cartItems]);

  const value = {
    cartItems,
    addCartItems,
    isCartOpen,
    setCartState,
    totalQuantity,
  };
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
