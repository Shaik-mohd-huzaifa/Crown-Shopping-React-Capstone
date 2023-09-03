import "./App.css";
import { Routes, Route } from "react-router";
import { CategoryContainer } from "./Routes/Categories-Menu/category-container";
import { Navbar } from "./Routes/Navigation/navbar.component";
import Signin from "./Routes/Authentication/authentication.component";
import Shop from "./Routes/Shop/shop.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<CategoryContainer />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Signin />} />
        </Route>
      </Routes>
      {/* <CategoryContainer /> */}
    </div>
  );
}

export default App;
