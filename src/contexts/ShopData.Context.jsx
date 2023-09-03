import { createContext, useState } from "react";
import Shopdata from "../shop-data.json";

export const ShopdataContext = createContext({
  shopdata: [],
  setShopdata: () => null,
});

export const ShopDataProvider = ({ children }) => {
  const [shopdata, setShopdata] = useState(Shopdata);
  const value = { shopdata, setShopdata };
  return (
    <ShopdataContext.Provider value={value}>
      {children}
    </ShopdataContext.Provider>
  );
};
