import "./App.css";
import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthUserStateChanged,
} from "../utils/Firebase/firebase.utils";
import { Routes, Route } from "react-router";
import { CategoryContainer } from "./Routes/Categories-Menu/category-container";
import { Navbar } from "./Routes/Navigation/navbar.component";
import Signin from "./Routes/Authentication/authentication.component";
import Shop from "./Routes/Shop/shop.component";
import Checkout from "./Routes/Checkout/Checkout.component";

function App() {
  useEffect(() => {
    const unsubscribe = onAuthUserStateChanged((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<CategoryContainer />} />
          <Route path="shop/*" element={<Shop />}></Route>
          <Route path="auth" element={<Signin />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
