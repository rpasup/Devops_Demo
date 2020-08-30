import React, { PureComponent } from "react";
import Product from "./product/product";
import "./styles.css";
import { Link } from "react-router-dom";
import ProductStore from "./../flux/store/store";
import actionTypes from "../flux/actions/actionTypes";

class Products extends PureComponent {
  // const [products, setProducts] = useState([]);

  state = {
    products: ProductStore.getProducts(),
  };

  componentDidMount() {
    ProductStore.addChangeListener(
      `${actionTypes.SET_PRODUCTS}`,
      this.refreshProducts
    );
  }

  refreshProducts = () => {
    const products = ProductStore.getProducts();
    console.log(`ProductStore.getProducts() ${products}`);
    this.setState({ products });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="products">
        <h1>Product List</h1>
        <table>
          <thead>
            <tr>
              <th>{"ID"}</th>
              <th>{"Product Name"}</th>
              <th>{"Quantity"}</th>
              <th>{"Price"}</th>
              <th>{"options"}</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((prod) => <Product key={prod.id} product={prod} />)}
          </tbody>
        </table>
        <Link className="links" to="/addNewProduct">
          Add Product
        </Link>
      </div>
    );
  }
}

export default Products;
