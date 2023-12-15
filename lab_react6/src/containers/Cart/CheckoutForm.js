import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().matches(/^[A-Za-z]+$/, 'Only letters are allowed').required("First name is required"),
  lastName: Yup.string().matches(/^[A-Za-z]+$/, 'Only letters are allowed').required("Last name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string().matches(/^\d{10}$/, "Invalid phone number").required("Phone is required"),
  address: Yup.string().required("Address is required"),
});

const CheckoutForm = ({ onSubmit, onGoBack }) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ dirty, isValid, errors, touched }) => (
        <Form style={{ textAlign: "center", marginBottom: "40px", backgroundColor: "white", padding: "20px", borderRadius: "10px" }}>
          <h1 style={{ marginBottom: "20px", fontSize: "28px", fontWeight: "bold", marginTop: "60px" }}>Checkout</h1>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", marginBottom: "10px", justifyContent: "center" }}>
              <div style={{ marginRight: "20px", textAlign: "left" }}>
                <label htmlFor="firstName">First Name:</label>
                <Field type="text" id="firstName" name="firstName" style={{ borderRadius: "10px", padding: "8px", height: "30px" }} />
                <ErrorMessage name="firstName" component="div" className="error-message" />
              </div>
              <div style={{ textAlign: "left" }}>
                <label htmlFor="lastName">Last Name:</label>
                <Field type="text" id="lastName" name="lastName" style={{ borderRadius: "10px", padding: "8px", height: "30px" }} />
                <ErrorMessage name="lastName" component="div" className="error-message" />
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "10px", justifyContent: "center" }}>
              <div style={{ marginRight: "20px", textAlign: "left" }}>
                <label htmlFor="email">Email:</label>
                <Field type="email" id="email" name="email" style={{ borderRadius: "10px", padding: "8px", height: "30px" }} />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
              <div style={{ textAlign: "left" }}>
                <label htmlFor="phone">Phone:</label>
                <Field type="text" id="phone" name="phone" style={{ borderRadius: "10px", padding: "8px", height: "30px" }} />
                <ErrorMessage name="phone" component="div" className="error-message" />
              </div>
            </div>
            <div style={{ marginBottom: "10px", textAlign: "left" }}>
              <label htmlFor="address">Address:</label>
              <Field type="text" id="address" name="address" style={{ borderRadius: "10px", padding: "8px", height: "30px" }} />
              <ErrorMessage name="address" component="div" className="error-message" />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
            <button type="button" className="btn" style={{ backgroundColor: "white", borderColor: "black", color: "black" }} onClick={onGoBack}>
              Go Back
            </button>
            <button type="submit" className="btn" style={{ backgroundColor: "black", borderColor: "black", color: "white" }} disabled={!dirty || !isValid}>
              Continue
            </button>
          </div>
          <div style={{ marginTop: "40px" }}>
            <p>&copy; 2023 Your Company</p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;