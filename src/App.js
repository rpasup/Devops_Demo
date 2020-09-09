import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About } from "./about/about";
import Products from "./products/products";
import { getAllProducts } from "./data/api";
import { setProducts } from "./flux/actions/productActions";
import { ProductForm } from "./products/AddNewProduct/ProductForm";
import ProductDetails from "./products/ProductDetails/ProductDetails";
import { Extrainfo } from "./extrainfo/extrainfo";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  getAllProducts()
    .then((response) => {
      setProducts(response);
    })
    .catch((error) => {
      setProducts([]);
    });
  return (
    <Router>
      <div>
        <nav fixed="top">
          <Link className="links" to="/about">
            About
          </Link>
          <Link className="links" to="/products">
            Products
          </Link>
          <Link className="links" to="/extrainfo">
            Additional_Info
          </Link>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/extrainfo">
            <Extrainfo />
          </Route>
          <Route path="/addNewProduct">
            <ProductForm />
          </Route>
          <Route path="/product/:id">
            <ProductDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
