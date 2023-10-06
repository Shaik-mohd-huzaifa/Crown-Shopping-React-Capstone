import { createContext, useEffect, useReducer, useState } from "react";


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

const ACTION_TYPE = {
  ADD_NEW_ITEMS: "ADD_ITEM_TO_CART",
  TOGGLE_CART: "TOGGLE_CART",
};

const INTITAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const CartItemsReducer = (state, action) => {
  const { type, payload } = action;
  console.log(type);
  switch (type) {
    case ACTION_TYPE.ADD_NEW_ITEMS:
      return { ...state, ...payload };
    case ACTION_TYPE.TOGGLE_CART:
      return { ...state, ...payload };
    default:
      console.log(`UnRecogonizable ${type}`);
      return state;
  }
};

export const ShoppingCartProvider = ({ children }) => {
  // const [cartItems, setCartItems] = useState([]);
  // const [isCartOpen, setCartState] = useState(false);
  // const [totalQuantity, setTotalQuanity] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [{ cartItems, totalQuantity, totalPrice, isCartOpen }, dispatch] =
    useReducer(CartItemsReducer, INTITAL_STATE);

  const HandleCartItem = (newCartItems) => {
    const totalQuantity = cartItems.reduce(
      (accumulator, currentElement) => accumulator + currentElement.quantity,
      0,
    );

    const totalprice = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0,
    );

    const payload = {
      cartItems: newCartItems,
      totalQuantity: totalQuantity,
      totalPrice: totalprice,
    };

    dispatch({ type: ACTION_TYPE.ADD_NEW_ITEMS, payload });
  };

  const toggleCart = () => {
    const payload = {
      isCartOpen: !isCartOpen,
    };
    dispatch({ type: ACTION_TYPE.TOGGLE_CART, payload });
  };

  const addCartItems = (producttoAdd) => {
    const newCartItems = HandleCartItems(cartItems, producttoAdd);
    HandleCartItem(newCartItems);
  };

  const reduceCartItem = (productid) => {
    const newCartItems = reduceItemQuantity(cartItems, productid);
    HandleCartItem(newCartItems);
  };

  const removeItemfromCart = (productToRemove) => {
    const newCartItems = removeItem(cartItems, productToRemove);
    HandleCartItem(newCartItems);
  };

  const value = {
    cartItems,
    addCartItems,
    isCartOpen,
    setCartState: () => {},
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
