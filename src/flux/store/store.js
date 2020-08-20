import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
let _products = [];
class ProductStore extends EventEmitter {
  constructor() {
    super();
    this.dispatchToken = dispatcher.register(this.dispatcherCallback);
  }
  addChangeListener = (eventName, callback) => {
    this.on(eventName, callback);
  };

  removeChangeListener = (eventName, callback) => {
    this.removeListener(eventName, callback);
  };

  emitChange = (eventName) => {
    this.emit(eventName);
  };

  getProducts = () => {
    console.log(`products ${_products}`);
    return _products;
  };

  //   setProducts = (products) => {
  //     _products = products;
  //   };

  dispatcherCallback = (action) => {
    switch (action.actionTypes) {
      case actionTypes.SET_PRODUCTS:
        console.log(
          `dispatcherCallback action ${JSON.stringify(action.products)}`
        );
        // this.setProducts(action.products);
        _products = action.products;
        // this.emitChange(action.actionType);
        this.emit(action.actionType);
        break;
      default:
      case actionTypes.ADD_PRODUCT:
        const existingProdss = [..._products];
        existingProdss.push(action.product);
        _products = existingProdss;
        this.emit(actionTypes.SET_PRODUCTS);
    }
    return true;
  };
}

export default new ProductStore();
