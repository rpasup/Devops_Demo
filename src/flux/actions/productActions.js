import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function getProducts() {
  dispatcher.dispatch({
    actionTypes: actionTypes.GET_PRODUCTS,
    products: [],
  });
}

export function setProducts(products) {
  console.log(`setProducts ${products}`);
  dispatcher.dispatch({
    actionTypes: actionTypes.SET_PRODUCTS,
    products,
  });
}

export function addProduct(product) {
    console.log(`addProduct ${product}`);
    dispatcher.dispatch({
      actionTypes: actionTypes.ADD_PRODUCT,
      product,
    });
  }
