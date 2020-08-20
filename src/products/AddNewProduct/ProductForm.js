import React from "react";
import { Formik } from "formik";
import "./styles.css";
import { addProduct } from "../../flux/actions/productActions";
import { useHistory } from "react-router-dom";
import { addProductAPI} from "../../data/api";

export const ProductForm = (props) => {
  const history = useHistory();

  return (
    <div className="formContainer">
      <h2>Enter Product Details!!</h2>
      <Formik
        initialValues={{
          productName: "",
          productQuantity: "",
          productPrice: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.productName) {
            errors.productName = "Product name is required";
          }
          if (!values.productQuantity) {
            errors.productQuantity = "Product quantity is required";
          }
          if (!values.productPrice) {
            errors.productPrice = "Product price is required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const product = {
              productName: values.productName,
              quantity: values.productQuantity,
              price: values.productPrice,
            };
            addProductAPI(product)
              .then((response) => {
                addProduct(product);
                alert("Product added succesfully");
                history.push("/products");
              })
              .catch(() => {});
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,

          errors,

          touched,

          handleChange,

          handleBlur,

          handleSubmit,

          isSubmitting,

          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="productName"
              placeholder="Enter Product Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.productName}
            />
            <br />

            {errors.productName && touched.productName && (
              <span className="error">{errors.productName}</span>
            )}
            <br />

            <input
              type="text"
              name="productQuantity"
              placeholder="Enter Product Quantity"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.productQuantity}
            />
            <br />

            {errors.productQuantity && touched.productQuantity && (
              <span className="error">{errors.productQuantity}</span>
            )}
            <br />
            <input
              type="text"
              name="productPrice"
              placeholder="Enter Product Price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.productPrice}
            />
            <br />

            {errors.productPrice && touched.productPrice && (
              <span className="error">{errors.productPrice}</span>
            )}
            <br />
            <div className="buttonWrapper">
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
