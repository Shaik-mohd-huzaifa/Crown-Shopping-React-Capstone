import "./App.css";
import { Routes, Route } from "react-router";
import { CategoryContainer } from "./Components/Routes/Categories-Menu/category-container";
import { Navbar } from "./Components/Routes/Navbar/navbar.component";
import Signin from "./Components/Routes/Signin/signin.component";

const Shop = () => {
  return <h1>This is the Shop Page</h1>;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<CategoryContainer />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
      {/* <CategoryContainer /> */}
    </div>
  );
}

export default App;
