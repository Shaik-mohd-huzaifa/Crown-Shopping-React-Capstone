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

const reduceItemQuantity = (cartItems, productid) => {
  const existingProduct = cartItems.find((item) => item.id === productid);

  if (existingProduct.quantity === 1) {
    return cartItems.filter((item) => item.id !== productid);
  }

  return cartItems.map((item) =>
    item.id === productid ? { ...item, quantity: item.quantity - 1 } : item,
  );
};

const removeItem = (cartItems, itemToBeRemoved) => {
  return cartItems.filter((item) => item.id !== itemToBeRemoved.id);
};

export const ShoppingCartContext = createContext({
  isCartOpen: false,
  setCartState: () => {},
  cartItems: [],
  setCartItems: () => null,
  totalQuantity: 0,
  totalPrice: 0,
  setTotalPrice: () => {},
  reduceCartItem: () => {},
  removeItemfromCart: () => {},
  addCartItems: () => {},
});

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartState] = useState(false);
  const [totalQuantity, setTotalQuanity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const addCartItems = (producttoAdd) => {
    setCartItems(HandleCartItems(cartItems, producttoAdd));
  };

  const reduceCartItem = (productid) => {
    setCartItems(reduceItemQuantity(cartItems, productid));
  };

  const removeItemfromCart = (productToRemove) => {
    setCartItems(removeItem(cartItems, productToRemove));
  };

  useEffect(() => {
    const countQuantity = cartItems.reduce(
      (accumulator, currentElement) => accumulator + currentElement.quantity,
      0,
    );
    setTotalQuanity(countQuantity);
  }, [cartItems]);

  useEffect(() => {
    const totalprice = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0,
    );
    setTotalPrice(totalprice);
  }, [cartItems]);

  const value = {
    cartItems,
    addCartItems,
    isCartOpen,
    setCartState,
    totalQuantity,
    reduceCartItem,
    removeItemfromCart,
    totalPrice,
  };
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
