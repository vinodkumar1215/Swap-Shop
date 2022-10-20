import "./App.css";
import React from "react";
import Products from "./components/Products";
import AddEdit from "./components/AddEdit";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      {/* <ProductList /> */}
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" exact element={<Signin />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/addproduct" exact element={<AddEdit />} />
          <Route path="/users" exact element={<Users />} />
          <Route path="/adduser" exact element={<AddUser />} />
          <Route path="/productlist" exact element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
