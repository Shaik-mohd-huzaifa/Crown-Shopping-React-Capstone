import { createContext, useEffect, useState } from "react";
import { getCategoriesAndData } from "../utils/Firebase/firebase.utils";

export const ShopdataContext = createContext({
  shopdata: [],
  setShopdata: () => null,
});

export const ShopDataProvider = ({ children }) => {
  const [shopdata, setShopdata] = useState([]);
  const value = { shopdata, setShopdata };

  useEffect(() => {
    const getCategoryDataMap = async () => {
      const data = await getCategoriesAndData("categories");
      setShopdata(data);
    };
    getCategoryDataMap();
  }, []);

  return (
    <ShopdataContext.Provider value={value}>
      {children}
    </ShopdataContext.Provider>
  );
};
