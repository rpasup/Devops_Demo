import React, { PureComponent } from "react";
import { getProductDetails } from "../../data/api";
import { withRouter, Link } from "react-router-dom";
import "./styles.css";
import Button from 'react-bootstrap/Button';
class ProductDetails extends PureComponent {
  state = {
    product: {},
  };
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    getProductDetails(params.id)
      .then((response) => {
        console.log(`response ${JSON.stringify(response)}`);
        this.setState({ product: response });
      })
      .catch(() => {});
  }

  onBack = () => {
    this.props.history.push("/products");
  };

  render() {
    const { product } = this.state;
    return (
      <div className="detailsContainer">
        <p>Product ID: {product.id}</p>
        <p>Product Name: {product.productName}</p>
        <p>Product Quantity: {product.quantity}</p>
        <p>Product Price: {`Rs. ${product.price}`}</p>
        <Button variant="outline-warning">{' '}
          <Link onClick={this.onBack}>Go Back</Link>
        </Button>
      </div>
    );
  }
}

export default withRouter(ProductDetails);
