import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthUserStateChanged,
} from "./utils/Firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

import "./App.css";
import { Routes, Route, redirect } from "react-router";
import { CategoryContainer } from "./Routes/Categories-Menu/category-container";
import { Navbar } from "./Routes/Navigation/navbar.component";
import Signin from "./Routes/Authentication/authentication.component";
import Shop from "./Routes/Shop/shop.component";
import Checkout from "./Routes/Checkout/Checkout.component";
import { Error404 } from "./Components/404/404";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthUserStateChanged((user) => {
      try {
        if (user) {
          createUserDocumentFromAuth(user);
        }
      } catch (error) {
        dispatch(setCurrentUser({}));
        redirect("/404");
      }
      dispatch(setCurrentUser(user));
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
          <Route path="404" element={<Error404 />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;