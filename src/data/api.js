const axios = require("axios");
const baseURL = "http://localhost:5000/";

export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}products`)
      .then((response) => {
        console.log(`getAllProducts ${response}`);
        resolve(response.data);
      })
      .catch((error) => reject(error));
  });
};

export const addProductAPI = (product) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}products`, product)
      .then((response) => {
        console.log(`addProduct ${response}`);
        resolve(response.data);
      })
      .catch((error) => reject(error));
  });
};

export const getProductDetails = (productID) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}products/${productID}`)
      .then((response) => {
        console.log(`getProductDetails ${response}`);
        resolve(response.data);
      })
      .catch((error) => reject(error));
  });
}
